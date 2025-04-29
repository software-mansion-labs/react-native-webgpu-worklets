import { StyleSheet, View, PixelRatio } from "react-native";
import { runOnUI } from "react-native-reanimated";
import { runOnBackground } from "react-native-webgpu-worklets";
import { Canvas, useCanvasEffect } from "react-native-wgpu";

export const triangleVertWGSL = `@vertex
fn main(
  @builtin(vertex_index) VertexIndex : u32
) -> @builtin(position) vec4f {
  var pos = array<vec2f, 3>(
    vec2(0.0, 0.5),
    vec2(-0.5, -0.5),
    vec2(0.5, -0.5)
  );

  return vec4f(pos[VertexIndex], 0.0, 1.0);
}`;

export const redFragWGSL = `@fragment
fn main() -> @location(0) vec4f {
  return vec4(0.0, 1.0, 0.0, 1.0);
}`;

export default function TriangleExample() {
  const ref = useCanvasEffect(async () => {
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
      throw new Error("No adapter");
    }
    const device = await adapter.requestDevice();
    const presentationFormat = navigator.gpu.getPreferredCanvasFormat();

    const context = ref.current!.getContext("webgpu")!;
    const canvas = context.canvas as any;
    canvas.width = canvas.clientWidth * PixelRatio.get();
    canvas.height = canvas.clientHeight * PixelRatio.get();

    function drawTriangle() {
      'worklet';
      if (!context) {
        throw new Error("No context");
      }
  
      context.configure({
        device,
        format: presentationFormat,
        alphaMode: "premultiplied",
      });
  
      const pipeline = device.createRenderPipeline({
        layout: "auto",
        vertex: {
          module: device.createShaderModule({
            code: triangleVertWGSL,
          }),
          entryPoint: "main",
        },
        fragment: {
          module: device.createShaderModule({
            code: redFragWGSL,
          }),
          entryPoint: "main",
          targets: [
            {
              format: presentationFormat,
            },
          ],
        },
        primitive: {
          topology: "triangle-list",
        },
      });
  
      const commandEncoder = device.createCommandEncoder();
  
      const textureView = context.getCurrentTexture().createView();
  
      const renderPassDescriptor: GPURenderPassDescriptor = {
        colorAttachments: [
          {
            view: textureView,
            clearValue: [0, 0, 0, 0],
            loadOp: "clear",
            storeOp: "store",
          },
        ],
      };
  
      const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
      passEncoder.setPipeline(pipeline);
      passEncoder.draw(3);
      passEncoder.end();
  
      device.queue.submit([commandEncoder.finish()]);
  
      context.present();
    }

    runOnBackground(drawTriangle)();
  });

  return (
    <View style={style.container}>
      <View style={{ flex: 1, backgroundColor: "#3498db" }} />
      <Canvas ref={ref} style={StyleSheet.absoluteFill} transparent />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
