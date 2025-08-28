import { StyleSheet } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { runOnUI } from 'react-native-reanimated';
import { enableGPUForWorklets, useSharedContext } from 'react-native-webgpu-worklets';
import { Canvas, useCanvasEffect } from 'react-native-wgpu';

declare global {
  var paintAt: (x: number, y: number) => void;
}

export default function PaintExample() {

  const sharedContext = useSharedContext<{
    lastPos: { x: number; y: number } | null;
  }>({
    lastPos: null
  });

  const ref = useCanvasEffect(async () => {

    enableGPUForWorklets();

    const brushSize = 10;
    const canvasWidth = 402;
    const canvasHeight = 773;

    const adapter = await navigator.gpu.requestAdapter();
    const device = await adapter!.requestDevice();
    const context = ref.current!.getContext("webgpu")!;

    const canvas = context.canvas as any;
    // canvas.width = canvas.clientWidth * PixelRatio.get();
    // canvas.height = canvas.clientHeight * PixelRatio.get();

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const format = navigator.gpu.getPreferredCanvasFormat();
    context.configure({
        device,
        format,
        alphaMode: 'premultiplied'
    });

    const canvasTexture = device.createTexture({
        size: [canvasWidth, canvasHeight, 1],
        format: 'rgba8unorm',
        usage: GPUTextureUsage.TEXTURE_BINDING |
              GPUTextureUsage.COPY_DST |
              GPUTextureUsage.RENDER_ATTACHMENT |
              GPUTextureUsage.STORAGE_BINDING
    });

    const sampler = device.createSampler({
        magFilter: 'nearest',
        minFilter: 'nearest'
    });

    const vertexShaderCode = `
        @vertex
        fn main(@builtin(vertex_index) vertexIndex : u32)
            -> @builtin(position) vec4<f32> {
            var pos = array<vec2<f32>, 6>(
                vec2<f32>(-1.0, -1.0),
                vec2<f32>(1.0, -1.0),
                vec2<f32>(-1.0, 1.0),
                vec2<f32>(-1.0, 1.0),
                vec2<f32>(1.0, -1.0),
                vec2<f32>(1.0, 1.0)
            );
            return vec4<f32>(pos[vertexIndex], 0.0, 1.0);
        }
    `;

    const fragmentShaderCode = `
        @group(0) @binding(0) var mySampler: sampler;
        @group(0) @binding(1) var myTexture: texture_2d<f32>;

        @fragment
        fn main(@builtin(position) pos: vec4<f32>) -> @location(0) vec4<f32> {
            let uv = pos.xy / vec2<f32>(${canvasWidth}.0, ${canvasHeight}.0);
            return textureSample(myTexture, mySampler, uv);
        }
    `;

    const renderPipeline = device.createRenderPipeline({
        layout: "auto",
        vertex: {
            module: device.createShaderModule({ code: vertexShaderCode }),
            entryPoint: "main"
        },
        fragment: {
            module: device.createShaderModule({ code: fragmentShaderCode }),
            entryPoint: "main",
            targets: [{ format }]
        },
        primitive: {
            topology: 'triangle-list'
        }
    });

    const renderBindGroup = device.createBindGroup({
        layout: renderPipeline.getBindGroupLayout(0),
        entries: [
            { binding: 0, resource: sampler },
            { binding: 1, resource: canvasTexture.createView() }
        ]
    });

    runOnUI(() => {
      const computeShaderCode = `
          @group(0) @binding(0) var canvasTex : texture_storage_2d<rgba8unorm, write>;
          @group(0) @binding(1) var<uniform> brushPos : vec2<f32>;
          @group(0) @binding(2) var<uniform> brushSize : f32;

          @compute @workgroup_size(8, 8)
          fn main(@builtin(global_invocation_id) global_id: vec3<u32>) {
              let x = global_id.x;
              let y = global_id.y;

              let center = vec2<i32>(i32(brushPos.x), i32(brushPos.y));
              let halfSize = i32(brushSize / 2.0);

              if (i32(x) >= center.x - halfSize && i32(x) <= center.x + halfSize &&
                  i32(y) >= center.y - halfSize && i32(y) <= center.y + halfSize) {

                  textureStore(canvasTex, vec2<i32>(i32(x), i32(y)),
                      vec4<f32>(f32(center.x)/400, f32(center.y)/700, f32(center.y)/700, 1.0)); // Red brush
              }
          }
      `;

      const computePipeline = device.createComputePipeline({
          layout: "auto",
          compute: {
              module: device.createShaderModule({ code: computeShaderCode }),
              entryPoint: "main"
          }
      });

      const brushPosBuffer = device.createBuffer({
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
      });

      const brushSizeBuffer = device.createBuffer({
          size: 4,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
      });

      const computeBindGroup = device.createBindGroup({
          layout: computePipeline.getBindGroupLayout(0),
          entries: [
              { binding: 0, resource: canvasTexture.createView({ dimension: '2d' }) },
              { binding: 1, resource: { buffer: brushPosBuffer } },
              { binding: 2, resource: { buffer: brushSizeBuffer } }
          ]
      });

      // Fill canvas initially with white
      const blankPixels = new Uint8Array(canvasWidth * canvasHeight * 4).fill(255);
      device.queue.writeTexture(
          { texture: canvasTexture },
          blankPixels,
          { bytesPerRow: canvasWidth * 4 },
          [canvasWidth, canvasHeight]
      );

      sharedContext.value.lastPos = null;
      function paintAt(x: number, y: number) {
        const lastPos = sharedContext.value.lastPos;

        const rect = {left: 0, top: 0, width: canvasWidth, height: canvasHeight};
        const tx = (x - rect.left) / rect.width * canvasWidth;
        const ty = (y - rect.top) / rect.height * canvasHeight;
    
        if (tx < 0 || ty < 0 || tx >= canvasWidth || ty >= canvasHeight) return;
    
        if (lastPos) {
            const dx = tx - lastPos.x;
            const dy = ty - lastPos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const steps = distance;
    
            for (let i = 0; i <= steps; i++) {
                const px = lastPos.x + (dx * i) / steps;
                const py = lastPos.y + (dy * i) / steps;
    
                device.queue.writeBuffer(brushPosBuffer, 0, new Float32Array([px, py]));
                device.queue.writeBuffer(brushSizeBuffer, 0, new Float32Array([brushSize]));
    
                const commandEncoder = device.createCommandEncoder();
                const pass = commandEncoder.beginComputePass();
                pass.setPipeline(computePipeline);
                pass.setBindGroup(0, computeBindGroup);
                pass.dispatchWorkgroups(
                  Math.ceil(canvasWidth / 8),
                  Math.ceil(canvasHeight / 8)
                );
                pass.end();
                device.queue.submit([commandEncoder.finish()]);
            }
        }
        sharedContext.value.lastPos = { x: tx, y: ty };
      }
      globalThis.paintAt = paintAt;
    
      function frame() {
        const commandEncoder = device.createCommandEncoder();
        const textureView = context.getCurrentTexture().createView();
        const renderPass = commandEncoder.beginRenderPass({
            colorAttachments: [{
                view: textureView,
                clearValue: { r: 1, g: 1, b: 1, a: 1 },
                loadOp: 'clear',
                storeOp: 'store'
            }]
        });

        renderPass.setPipeline(renderPipeline);
        renderPass.setBindGroup(0, renderBindGroup);
        renderPass.draw(6, 1, 0, 0);
        renderPass.end();

        device.queue.submit([commandEncoder.finish()]);
        context.present();
        requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);

    })();

  });

  const panGesture = Gesture.Pan()
      .onUpdate((e) => {
        globalThis.paintAt(e.x, e.y);
        // runOnJS(functionWrapper)(e.x, e.y);
      })
      .onEnd((_e) => {
        // runOnJS(resetFunctionWrapper)();
        sharedContext.value.lastPos = null;
      });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={panGesture}>
        <Canvas ref={ref} style={{ flex: 1, backgroundColor: 'blue' }} />
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
