import { runOnUI } from "react-native-reanimated";
import { runOnBackground } from "./Runtime";

declare global {
  var navigator: NavigatorGPU;
}

declare global {
  var lastFrame: number;
  var isRequestAnimationFrameMocks: boolean;
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

  function init() {
    'worklet';
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

    if (!globalThis.requestAnimationFrame) {
      globalThis.isRequestAnimationFrameMocks = true;
    }
    globalThis.lastFrame = Date.now();
    globalThis.requestAnimationFrame = 
      globalThis.requestAnimationFrame 
      ? globalThis.requestAnimationFrame 
      : (callback: (time: number) => void): number => {
        globalThis.requestAnimationFrame = (_: any) => { return 0; };
        while (true) {
          if (globalThis.lastFrame + 16 < Date.now()) {
            continue;
          }
          globalThis.lastFrame = Date.now();
          callback(globalThis.lastFrame); 
        }
      };

    globalThis.setImmediate = globalThis.requestAnimationFrame as any;
    globalThis.__UIModules = {};
    
  };

  runOnUI(init)();
  runOnBackground(init)();
}
