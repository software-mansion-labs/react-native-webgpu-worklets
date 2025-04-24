import { initGPU } from "./GPULoader";
import { initThreeJS } from "./ThreeJSLoader";

import * as ThreeJS from "three";
import { initTypeGPU } from "./TypeGPULoader";

import * as TypeGPU from 'typegpu';
import * as TypeGPUData from 'typegpu/data';
import * as TypeGPUStd from 'typegpu/std';

import * as WGPUMatrix from 'wgpu-matrix';
import { initWGPUMartix } from "./WGPUMatrixLoader";

type Module<T> = 
  T extends 'threejs' ? typeof ThreeJS
  : T extends 'wgpu-matrix' ? typeof WGPUMatrix
  : T extends 'typegpu' ? typeof TypeGPU
  : T extends 'typegpu/data' ? typeof TypeGPUData 
  : T extends 'typegpu/std' ? typeof TypeGPUStd
  : never;

export function requireUI<T extends 'threejs' | 'wgpu-matrix' | 'typegpu' | 'typegpu/data' | 'typegpu/std'>(moduleName: T): Module<T> {
  'worklet';
  if (!_WORKLET) {
    throw new Error("requireUI can only be called from a worklet");
  }
  const castedGlobal = globalThis as unknown as {
    __UIModules: {
      threeJS: typeof ThreeJS,
      wgpuMatrix: typeof WGPUMatrix,
      typegpu: {
        core: typeof TypeGPU,
        data: typeof TypeGPUData,
        std: typeof TypeGPUStd
      }
    }
  };
  const UIModules = castedGlobal.__UIModules;
  if (!UIModules) {
    throw new Error("UIModules are not prepared. Please call enableGPUForWorklets() first.");
  }

  if (moduleName === 'threejs' && !UIModules.threeJS) {
    throw new Error("Module `threeJS` is not initialized. Please call initThreeJSForWorklets() first.");
  }
  if (moduleName === 'wgpu-matrix' && !UIModules.wgpuMatrix) {
    throw new Error("Module `wgpuMatrix` is not initialized. Please call initWGPUMartixForWorklets() first.");
  }
  if (moduleName.startsWith('typegpu') && !UIModules.typegpu) {
    throw new Error("Module `typegpu` is not initialized. Please call initTypeGPUForWorklets() first.");
  }

  switch (moduleName) {
    case 'threejs':
      return UIModules.threeJS as Module<T>;
    case 'wgpu-matrix':
      return UIModules.wgpuMatrix as Module<T>;
    case 'typegpu':
      return UIModules.typegpu.core as Module<T>;
    case 'typegpu/data':
      return UIModules.typegpu.data as Module<T>;
    case 'typegpu/std':
      return UIModules.typegpu.std as Module<T>;
    default:
      throw new Error(`Module ${moduleName} is not supported.`);
  }
}

export function enableGPUForWorklets(
  config: { 
    webGPU: boolean,
    threeJS: boolean,
    typeGPU: boolean,
    wgpuMatrix: boolean,
  } = { 
    webGPU: true,
    threeJS: true,
    typeGPU: true,
    wgpuMatrix: true,
  }
) {
  initGPU();
  if (config.threeJS) {
    initThreeJS();
  }
  if (config.typeGPU) {
    initTypeGPU();
  }
  if (config.wgpuMatrix) {
    initWGPUMartix();
  }
}

export { makeWebGPURenderer } from "./makeWebGPURenderer";
export { useSharedContext } from "./useSharedContext";
