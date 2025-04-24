# react-native-webgpu-worklets

WebGPU Worklets allow you to run [react-native-wgpu](https://github.com/wcandillon/react-native-webgpu), [Three.js](https://threejs.org/), [wgpu-matrix](https://wgpu-matrix.org/), and [TypeGPU](https://docs.swmansion.com/TypeGPU/) libraries on [Reanimated Worklets](https://docs.swmansion.com/react-native-reanimated/) on the UI Thread. Thanks to this, you can run smooth 3D animations backed by WebGPU using the Reanimated API and enjoy seamless integration with the [Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/).

## Installation

```sh
yarn add react-native-webgpu-worklets react-native-reanimated react-native-wgpu three typegpu wgpu-matrix
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

MIT

This library contains transformed code from the following libraries:

- [Three.js](https://github.com/mrdoob/three.js/) - [website](https://threejs.org/), [license](https://github.com/mrdoob/three.js/blob/dev/LICENSE)
- [TypeGPU](https://github.com/software-mansion/TypeGPU) - [website](https://docs.swmansion.com/TypeGPU/), [license](https://github.com/software-mansion/TypeGPU/blob/main/LICENSE.md)
- [wgpu-matrix](https://github.com/greggman/wgpu-matrix) - [website](https://wgpu-matrix.org/), [license](https://github.com/greggman/wgpu-matrix/blob/main/LICENSE.md)

I'm not the author of these libraries. You should use them according to their licenses.

## `react-native-webgpu-worklets` is created by Software Mansion

Since 2012 [Software Mansion](https://swmansion.com) is a software agency with experience in building web and mobile apps. We are Core React Native Contributors and experts in dealing with all kinds of React Native issues. We can help you build your next dream product – [Hire us](https://swmansion.com/contact/projects?utm_source=reanimated&utm_medium=readme).