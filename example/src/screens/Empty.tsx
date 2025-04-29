import { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { makeMutable, runOnRuntime, runOnUI } from 'react-native-reanimated';
import { runOnBackground, enableGPUForWorklets } from 'react-native-webgpu-worklets';

export default function EmptyExample() {

  const sharedRequestAnimationFrame = makeMutable<any>(null);

  useEffect(() => {
    enableGPUForWorklets();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Button
        title="Click me"
        onPress={() => {
          console.log('Button clicked!');

          // runOnUI(() => {
          //   sharedRequestAnimationFrame.value = (arg: any) => globalThis.requestAnimationFrame(arg);
          // })();

          // runOnBackground(() => {
          //   'worklet';
          //   console.log('Running on background runtime!');
          //   // console.log(globalThis.navigator.gpu)
          //   // console.log('test', sharedRequestAnimationFrame.value);
          //   globalThis.requestAnimationFrame((arg: any) => {
          //     console.log('Request Animation Frame:', arg);
          //   });
          // })();

          runOnBackground(() => {
            'worklet';
            let myPromise = new Promise((resolve, reject) => {
              // setTimeout(() => {
              //   let success = true;
            
              //   if (success) {
                requestAnimationFrame(() => {
                  resolve("Promise resolved successfully!");
                });
                // } else {
                  // reject("Promise was rejected!");
                // }
              // }, 1000);
            });
            
            myPromise
              .then((message) => {
                console.log(message);
              })
              .catch((error) => {
                console.error(error);
              })
              .finally(() => {
                console.log("Promise is settled (resolved or rejected)");
              });
          })();

        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
