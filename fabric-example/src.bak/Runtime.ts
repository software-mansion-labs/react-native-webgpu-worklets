import { createWorkletRuntime, runOnRuntime } from 'react-native-worklets';

export const BackgroundRuntime = createWorkletRuntime('background');

export function runOnBackground(
  callback: (...args: any[]) => void
): (...args: any[]) => void {
  'worklet';
  return runOnRuntime(BackgroundRuntime, callback);
}
