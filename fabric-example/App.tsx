import { Canvas, useCanvasEffect } from 'react-native-wgpu';
import { StyleSheet } from 'react-native';
import { enableGPUForWorklets, makeWebGPURenderer, requireUI } from './src/';
import { runOnUI } from 'react-native-worklets';
import { geometryJson } from './src/geometryJson';

export default function App() {
  const ref = useCanvasEffect(async () => {
    enableGPUForWorklets();
    const context = ref.current!.getContext('webgpu')!;
    const adapter = await navigator.gpu.requestAdapter();
    const device = await adapter?.requestDevice();

    runOnUI(async () => {
      'worklet';
      const THREE = requireUI('threejs');
      const THREETSL = requireUI('threejs/tsl');
      const { width, height } = context.canvas as any;

      const amount = 16;
      const count = Math.pow(amount, 3);
      const dummy = new THREE.Object3D();

      const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
      camera.position.set(amount * 0.9, amount * 0.9, amount * 0.9);
      camera.lookAt(0, 0, 0);

      const scene = new THREE.Scene();

      const material = new THREE.MeshBasicMaterial();

      const randomColors = THREETSL.range(
        new THREE.Color(0x000000),
        new THREE.Color(0xffffff)
      );

      material.colorNode = THREETSL.mix(
        THREETSL.normalWorld,
        randomColors,
        THREETSL.oscSine(THREETSL.time.mul(0.1))
      );

      const geometry = new THREE.BufferGeometryLoader().parse(geometryJson);

      geometry.computeVertexNormals();
      geometry.scale(0.5, 0.5, 0.5);

      const mesh = new THREE.InstancedMesh(geometry, material, count);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

      scene.add(mesh);
      const renderer = makeWebGPURenderer(context, device);
      await renderer.init();

      renderer.setAnimationLoop(animate);

      function animate() {
        render();
        context.present();
      }

      function render() {
        if (mesh) {
          const t = Date.now() * 0.001;

          mesh.rotation.x = Math.sin(t / 4);
          mesh.rotation.y = Math.sin(t / 2);

          let i = 0;
          const offset = (amount - 1) / 2;

          for (let x = 0; x < amount; x++) {
            for (let y = 0; y < amount; y++) {
              for (let z = 0; z < amount; z++) {
                dummy.position.set(offset - x, offset - y, offset - z);
                dummy.rotation.y =
                  Math.sin(x / 4 + t) +
                  Math.sin(y / 4 + t) +
                  Math.sin(z / 4 + t);
                dummy.rotation.z = dummy.rotation.y * 2;

                dummy.updateMatrix();
                mesh.setMatrixAt(i++, dummy.matrix);
              }
            }
          }
        }

        renderer.render(scene, camera);
        // requestAnimationFrame(animate);
      }
      // animate();
    })();
  });

  return <Canvas ref={ref} style={styles.canvas} />;
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
  },
});
