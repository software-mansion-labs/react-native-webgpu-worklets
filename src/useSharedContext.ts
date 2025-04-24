import { makeMutable } from 'react-native-reanimated';

export function useSharedContext<T>(initialValue: T): { value: T } {
  return makeMutable<T>(initialValue);
}