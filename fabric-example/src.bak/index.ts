import { initGPU } from './GPULoader';

export function enableGPUForWorklets() {
  initGPU();
}

export { makeWebGPURenderer } from './makeWebGPURenderer';
export { useSharedContext } from './useSharedContext';
export { runOnBackground } from './Runtime';
