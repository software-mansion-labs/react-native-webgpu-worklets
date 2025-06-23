import {
  Object3D,
  PerspectiveCamera,
  Scene,
  MeshBasicMaterial,
  Color,
  InstancedMesh,
  DynamicDrawUsage,
  BufferGeometryLoader,
} from 'three';
import { Canvas, useCanvasEffect } from 'react-native-wgpu';
import { StyleSheet } from 'react-native';
import { time, oscSine, mix, range, normalWorld } from 'three/tsl';
import { makeWebGPURenderer, enableGPUForWorklets } from './src/';
import { runOnUI } from 'react-native-worklets';
import { geometryJson } from './src/geometryJson';

export default function App() {
  const ref = useCanvasEffect(async () => {
    enableGPUForWorklets();
    const context = ref.current!.getContext('webgpu')!;
    const adapter = await navigator.gpu.requestAdapter();
    const device = await adapter?.requestDevice();

    runOnUI(async () => {
      'worklet';
      globalThis.self = globalThis;
      const { width, height } = context.canvas as any;

      const amount = 16;
      const count = Math.pow(amount, 3);
      const dummy = new Object3D();

      const camera = new PerspectiveCamera(60, width / height, 0.1, 100);
      camera.position.set(amount * 0.9, amount * 0.9, amount * 0.9);
      camera.lookAt(0, 0, 0);

      const scene = new Scene();

      const material = new MeshBasicMaterial();

      const randomColors = range(new Color(0x000000), new Color(0xffffff));

      material.colorNode = mix(
        normalWorld,
        randomColors,
        oscSine(time.mul(0.1))
      );

      const geometry = new BufferGeometryLoader().parse(geometryJson);

      geometry.computeVertexNormals();
      geometry.scale(0.5, 0.5, 0.5);

      const mesh = new InstancedMesh(geometry, material, count);
      mesh.instanceMatrix.setUsage(DynamicDrawUsage);

      scene.add(mesh);
      const renderer = makeWebGPURenderer(context, device);
      await renderer.init();

      renderer.setAnimationLoop(animate);

      function animate() {
        render();
        context.present();
      }

      function render() {
        if (mesh) {
          const t = Date.now() * 0.001;

          mesh.rotation.x = Math.sin(t / 4);
          mesh.rotation.y = Math.sin(t / 2);

          let i = 0;
          const offset = (amount - 1) / 2;

          for (let x = 0; x < amount; x++) {
            for (let y = 0; y < amount; y++) {
              for (let z = 0; z < amount; z++) {
                dummy.position.set(offset - x, offset - y, offset - z);
                dummy.rotation.y =
                  Math.sin(x / 4 + t) +
                  Math.sin(y / 4 + t) +
                  Math.sin(z / 4 + t);
                dummy.rotation.z = dummy.rotation.y * 2;

                dummy.updateMatrix();
                mesh.setMatrixAt(i++, dummy.matrix);
              }
            }
          }
        }

        renderer.render(scene, camera);
      }
      animate();
    })();
  });

  return <Canvas ref={ref} style={styles.canvas} />;
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
  },
});
