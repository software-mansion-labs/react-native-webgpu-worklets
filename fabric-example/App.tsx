import { enableGPUForWorklets, makeWebGPURenderer } from './src';
import { Canvas, useCanvasEffect } from 'react-native-wgpu';
import { runOnUI } from 'react-native-worklets';
import {
  BoxGeometry,
  Mesh,
  MeshNormalMaterial,
  PerspectiveCamera,
  Scene,
} from 'three';

export default function CubeExample() {
  const ref = useCanvasEffect(async () => {
    enableGPUForWorklets();
    const context = ref.current!.getContext('webgpu')!;
    const adapter = await navigator.gpu.requestAdapter();
    const device = await adapter?.requestDevice();

    runOnUI(async () => {
      'worklet';
      globalThis.self = globalThis;
      const { width, height } = context.canvas as any;

      const camera = new PerspectiveCamera(70, width / height, 0.01, 10);

      camera.position.z = 1;

      const scene = new Scene();
      const geometry = new BoxGeometry(0.2, 0.2, 0.2);
      const material = new MeshNormalMaterial();
      const mesh = new Mesh(geometry, material);
      scene.add(mesh);
      const renderer = makeWebGPURenderer(context, device);
      await renderer.init();

      renderer.render(scene, camera);
      context.present();

      function animate() {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        mesh.rotation.z += 0.01;
        renderer.render(scene, camera);
        context.present();
        requestAnimationFrame(animate);
      }
      animate();
    })();
  });

  return <Canvas ref={ref} style={{ flex: 1 }} />;
}
