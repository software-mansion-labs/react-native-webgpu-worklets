import { runOnUI } from "react-native-reanimated";

declare global {
  var __UIModules: any;
  var navigator: NavigatorGPU;
}

export function initGPU() {
  const { gpu } = globalThis.navigator;
  const { 
    RNWebGPU,
    GPUBufferUsage,
    GPUColorWrite,
    GPUMapMode,
    GPUShaderStage,
    GPUTextureUsage,
  } = globalThis as typeof globalThis & { RNWebGPU: any };

  runOnUI(() => {
    if (!globalThis.navigator) {
      globalThis.navigator = { gpu } as typeof navigator;
    } else if (!globalThis.navigator.gpu) {
      globalThis.navigator = { ...globalThis.navigator, gpu };
    }
    (globalThis as any).RNWebGPU = RNWebGPU;
    globalThis.GPUBufferUsage = GPUBufferUsage;
    globalThis.GPUColorWrite = GPUColorWrite;
    globalThis.GPUMapMode = GPUMapMode;
    globalThis.GPUShaderStage = GPUShaderStage;
    globalThis.GPUTextureUsage = GPUTextureUsage;
    globalThis.setImmediate = requestAnimationFrame as any;
    globalThis.__UIModules = {};
  })();
}
