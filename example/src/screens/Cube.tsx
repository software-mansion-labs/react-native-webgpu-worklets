import { enableGPUForWorklets, requireUI, makeWebGPURenderer, runOnBackground } from 'react-native-webgpu-worklets';

import { Canvas, useCanvasEffect } from "react-native-wgpu";

export default function CubeExample() {

  const ref = useCanvasEffect(async () => {
    enableGPUForWorklets(); 
    const context = ref.current!.getContext("webgpu")!;
    const adapter = await navigator.gpu.requestAdapter();
    const device = await adapter?.requestDevice();
    
    runOnBackground(async () => {
      'worklet';
      const THREE = requireUI('threejs');
      
      const { width, height } = context.canvas as unknown as { width: number, height: number };
      
      const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
      camera.position.z = 1;
      
      const scene = new THREE.Scene();
      const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      const material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
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

  return (
    <Canvas ref={ref} style={{ flex: 1 }} />
  );
}
