import { initGPU } from "./GPULoader";

import { initThreeJSCore } from "./ThreeJSCoreLoader";
import * as ThreeJSCore from "three";

import { initThreeJSTSL } from "./ThreeJSTSLLoader";
import * as ThreeJSTSL from "three/tsl";

import { initThreeJSAddonsMath, type ThreeJSAddonsMath } from "./ThreeJSAddons/MathLoader";
import { initThreeJSAddonsUtils, type ThreeJSAddonsUtils} from "./ThreeJSAddons/UtilsLoader";

import { initTypeGPU } from "./TypeGPULoader";
import * as TypeGPU from 'typegpu';
import * as TypeGPUData from 'typegpu/data';
import * as TypeGPUStd from 'typegpu/std';

import * as WGPUMatrix from 'wgpu-matrix';
import { initWGPUMartix } from "./WGPUMatrixLoader";

declare global {
  var __UIModules: {
    threeJSCore?: typeof ThreeJSCore,
    threeJSTSL?: typeof ThreeJSTSL,
    threeJSAddons?: { 
      math?: ThreeJSAddonsMath,
      utils?: ThreeJSAddonsUtils,
    },
    wgpuMatrix?: typeof WGPUMatrix,
    typegpu?: {
      core: typeof TypeGPU,
      data: typeof TypeGPUData,
      std: typeof TypeGPUStd
    }
  };
}

type Module<T> = 
  T extends 'threejs' ? typeof ThreeJSCore
  : T extends 'threejs/tsl' ? typeof ThreeJSTSL
  : T extends 'threejs/addons/math' ? ThreeJSAddonsMath
  : T extends 'threejs/addons/utils' ? ThreeJSAddonsUtils
  : T extends 'threejs' ? typeof ThreeJSCore
  : T extends 'wgpu-matrix' ? typeof WGPUMatrix
  : T extends 'typegpu' ? typeof TypeGPU
  : T extends 'typegpu/data' ? typeof TypeGPUData 
  : T extends 'typegpu/std' ? typeof TypeGPUStd
  : never;

export function requireUI<
  T extends 
    'threejs'
    | 'threejs/tsl'
    | 'threejs/addons/math'
    | 'threejs/addons/utils'
    | 'wgpu-matrix'
    | 'typegpu'
    | 'typegpu/data'
    | 'typegpu/std'
>(moduleName: T): Module<T> {
  'worklet';
  if (!_WORKLET) {
    throw new Error("requireUI can only be called from a worklet");
  }

  const UIModules = globalThis.__UIModules;
  if (!UIModules) {
    throw new Error("UIModules are not prepared. Please call enableGPUForWorklets() first.");
  }

  if (moduleName === 'threejs' && !UIModules.threeJSCore) {
    throw new Error("Module `threeJS` is not initialized. Please call enableGPUForWorklets({ threeJSCore: true }) first.");
  }
  if (moduleName === 'threejs/tsl' && !UIModules.threeJSTSL) {
    throw new Error("Module `threeJSTSL` is not initialized. Please call enableGPUForWorklets({ threeJSTSL: true }) first.");
  }
  if (moduleName === 'threejs/addons/math' && !UIModules.threeJSAddons?.math) {
    throw new Error("Module `threeJSAddons` is not initialized. Please call enableGPUForWorklets({ threeJSAddonsMath: true }) first.");
  }
  if (moduleName === 'threejs/addons/utils' && !UIModules.threeJSAddons?.utils) {
    throw new Error("Module `threeJSAddons` is not initialized. Please call enableGPUForWorklets({ threeJSAddonsUtils: true }) first.");
  }
  if (moduleName === 'wgpu-matrix' && !UIModules.wgpuMatrix) {
    throw new Error("Module `wgpuMatrix` is not initialized. Please call enableGPUForWorklets({ typeGPU: true }) first.");
  }
  if (moduleName.startsWith('typegpu') && !UIModules.typegpu) {
    throw new Error("Module `typegpu` is not initialized. Please call enableGPUForWorklets({ wgpuMatrix: true }) first.");
  }

  switch (moduleName) {
    case 'threejs':
      return UIModules.threeJSCore as Module<T>;
    case 'threejs/tsl':
      return UIModules.threeJSTSL as Module<T>;
    case 'threejs/addons/math':
      return UIModules.threeJSAddons?.math as Module<T>;
    case 'threejs/addons/utils':
      return UIModules.threeJSAddons?.utils as Module<T>;
    case 'wgpu-matrix':
      return UIModules.wgpuMatrix as Module<T>;
    case 'typegpu':
      return UIModules.typegpu?.core as Module<T>;
    case 'typegpu/data':
      return UIModules.typegpu?.data as Module<T>;
    case 'typegpu/std':
      return UIModules.typegpu?.std as Module<T>;
    default:
      throw new Error(`Module ${moduleName} is not supported.`);
  }
}

export function enableGPUForWorklets(
  config: {
    threeJSCore: boolean,
    threeJSTSL: boolean,
    threeJSAddonsMath: boolean,
    threeJSAddonsUtils: boolean,
    typeGPU: boolean,
    wgpuMatrix: boolean,
  } = {
    threeJSCore: true,
    threeJSTSL: true,
    threeJSAddonsMath: true,
    threeJSAddonsUtils: true,
    typeGPU: true,
    wgpuMatrix: true,
  }
) {
  initGPU();
  if (config.threeJSCore) {
    initThreeJSCore();
  }
  if (config.threeJSTSL) {
    initThreeJSTSL();
  }
  if (config.threeJSAddonsMath) {
    initThreeJSAddonsMath();
  }
  if (config.threeJSAddonsUtils) {
    initThreeJSAddonsUtils();
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
