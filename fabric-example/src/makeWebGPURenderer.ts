// @ts-nocheck

import { WebGPURenderer } from 'three/webgpu';

export function makeWebGPURenderer(
  context: GPUCanvasContext,
  device?: GPUDevice,
  { antialias = true }: { antialias?: boolean } = {}
): WebGPURenderer {
  'worklet';
  class ReactNativeCanvas {
    constructor(canvas: any) {
      this.canvas = canvas;
    }
    get width() {
      return this.canvas.width;
    }
    set width(width: number) {
      this.canvas.width = width;
    }
    get height() {
      return this.canvas.height;
    }
    set height(height: number) {
      this.canvas.height = height;
    }
    get clientWidth() {
      return this.canvas.width;
    }
    set clientWidth(width: number) {
      this.canvas.width = width;
    }
    get clientHeight() {
      return this.canvas.height;
    }
    set clientHeight(height: number) {
      this.canvas.height = height;
    }
    addEventListener(_type: any, _listener: any) {}
    removeEventListener(_type: any, _listener: any) {}
    dispatchEvent(_event: any) {}
    setPointerCapture() {}
    releasePointerCapture() {}
  }

  return new WebGPURenderer({
    antialias,
    canvas: new ReactNativeCanvas(context.canvas),
    context,
    device,
  });
}
