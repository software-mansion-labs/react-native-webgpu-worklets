# react-native-webgpu-worklets

WebGPU Worklets allow you to run [react-native-wgpu](https://github.com/wcandillon/react-native-webgpu), [Three.js](https://threejs.org/), [wgpu-matrix](https://wgpu-matrix.org/), and [TypeGPU](https://docs.swmansion.com/TypeGPU/) libraries on [Reanimated Worklets](https://docs.swmansion.com/react-native-reanimated/) on the UI Thread. With that integration, you can run smooth 3D animations backed by WebGPU using the Reanimated API and enjoy seamless integration with the [Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/).

## Installation

```sh
yarn add react-native-webgpu-worklets
```

Add peer dependencies

```sh
yarn add react-native-reanimated react-native-wgpu three typegpu wgpu-matrix
```

## Usage

```js
import { 
  enableGPUForWorklets, 
  requireUI,
} from 'react-native-webgpu-worklets';
import { runOnUI } from 'react-native-reanimated';

// ...

enableGPUForWorklets(); // <- initialize GPU on UI Thread

runOnUI(() => {
  const THREE = requireUI('threejs'); // <- import library on UI

  const scene = new THREE.Scene();
})();
```

## Example

<details>
<summary>3d Cube</summary>

```ts
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

```

</details>


https://github.com/user-attachments/assets/3f949aaf-36c0-4874-820b-cf53216591f4


## Overview

### `enableGPUForWorklets(config?: ModulesConfig)`

You need to call it on the JS thread to initialize GPU access on the UI thread and create instances of the libraries you want to use on the UI.

`ModulesConfig` allows you to enable or disable library instances on the UI. By default, all libraries are available, but for performance reasons, you may want to disable some libraries.

```ts
type ModulesConfig = {
  threeJSCore: boolean,
  threeJSTSL: boolean,
  threeJSAddonsMath: boolean,
  threeJSAddonsUtils: boolean,
  typeGPU: boolean,
  wgpuMatrix: boolean,
}
```

### `requireUI(moduleName: string): <ModuleType>`

Use this function to load your library in a worklet.

Example:
```js
runOnUI(() => {
  const THREE = requireUI('threejs');
})();
```

Possible imports include:
- `threejs`
- `threejs/tsl`
- `threejs/addson/math`
- `threejs/addson/utils`
- `wgpu-matrix`
- `typegpu`
- `typegpu/data`
- `typegpu/std`

### `runOnBackground(job: () => {})`

Spawn a new thread with its own JavaScript runtime and schedule a job on it. This job doesn't block your JS or UI thread. You can render on a WebGPU canvas from the background thread.

Example:
```js
runOnBackground(() => {
  'worklet'
  const THREE = requireUI('threejs');
})();
```

### `makeWebGPURenderer(context: GPUCanvasContext, device: GPUDevice)`

Allows you to create a renderer that you can use across the UI thread.

### `useSharedContext<T>(initialValue: T): T`

Allows you to create a container to share data between multiple worklets. For example, you can create a renderer in one worklet and then use it in a worklet invoked by `useFrameCallback`.

Example:
```ts
type SharedContext = {
  renderer?: WebGPURenderer,
};

const sharedContext = useSharedContext<SharedContext>({renderer: null});
runOnUI(async () => {
  const THREE = requireUI('threejs');
  // ...
  const renderer = makeWebGPURenderer(context, device);

  sharedContext.value = { renderer };
})();

useFrameCallback(() => {
  const { renderer } = sharedContext.value as SharedContext;
  renderer.render();
});
```

## License

`react-native-webgpu-worklets` library is licensed under [The MIT License](LICENSE).

This library contains transformed code from the following libraries:

- [Three.js](https://github.com/mrdoob/three.js/) - [website](https://threejs.org/), [license](https://github.com/mrdoob/three.js/blob/dev/LICENSE)
- [TypeGPU](https://github.com/software-mansion/TypeGPU) - [website](https://docs.swmansion.com/TypeGPU/), [license](https://github.com/software-mansion/TypeGPU/blob/main/LICENSE.md)
- [wgpu-matrix](https://github.com/greggman/wgpu-matrix) - [website](https://wgpu-matrix.org/), [license](https://github.com/greggman/wgpu-matrix/blob/main/LICENSE.md)

I'm not the author of these libraries. You should use them according to their licenses.

## Credits

[![swm](https://logo.swmansion.com/logo?color=white&variant=desktop&width=150&tag=react-native-reanimated-github 'Software Mansion')](https://swmansion.com)

`react-native-webgpu-worklets` is created by Software Mansion

Since 2012 [Software Mansion](https://swmansion.com) is a software agency with experience in building web and mobile apps. We are Core React Native Contributors and experts in dealing with all kinds of React Native issues. We can help you build your next dream product – [Hire us](https://swmansion.com/contact/projects?utm_source=reanimated&utm_medium=readme).

## Community Discord

[Join the Software Mansion Community Discord](https://discord.swmansion.com) to chat about Reanimated or other Software Mansion libraries.