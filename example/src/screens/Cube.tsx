import { enableGPUForWorklets, requireUI, makeWebGPURenderer, useSharedContext } from 'react-native-webgpu-worklets';
import { runOnUI, useFrameCallback, useSharedValue } from 'react-native-reanimated';

import { Canvas, type RNCanvasContext, useCanvasEffect } from "react-native-wgpu";
import { PerspectiveCamera, Scene, Mesh } from 'three';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import type { WebGPURenderer } from 'three/webgpu';


type SharedContext = {
  context: RNCanvasContext,
  camera: PerspectiveCamera,
  scene: Scene,
  mesh: Mesh,
  renderer: WebGPURenderer,
};

export default function CubeExample() {
  const sharedContext = useSharedContext<SharedContext | {}>({});

  const ref = useCanvasEffect(async () => {
    enableGPUForWorklets(); 
    const context = ref.current!.getContext("webgpu")!;
    const adapter = await navigator.gpu.requestAdapter();
    const device = await adapter?.requestDevice();
    
    runOnUI(async () => {
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

      sharedContext.value = { context, camera, scene, mesh, renderer };
    })();
  });

  const isGestureActive = useSharedValue(false);

  useFrameCallback(() => {
    if (isGestureActive.value) {
      return;
    }
    const { context, camera, scene, mesh, renderer } = sharedContext.value as SharedContext;
    if (!renderer || !renderer._initialized) {
      return;
    }
    
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;

    renderer.render(scene, camera);
    context.present();
  });

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      isGestureActive.value = true;
      const { context, camera, scene, mesh, renderer } = sharedContext.value as SharedContext;
      mesh.rotation.x += e.translationY * 0.001;
      mesh.rotation.y += e.translationX * 0.001;

      renderer.render(scene, camera);
      context.present();
    })
    .onEnd((_e) => {
      isGestureActive.value = false;
    });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={panGesture}>
        <Canvas ref={ref} style={{ flex: 1 }} />
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
