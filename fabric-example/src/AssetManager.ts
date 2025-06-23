/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three';
import { useEffect, useState } from 'react';

export const useGeometry = (uri: string) => {
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);
  useEffect(() => {
    const loader = new THREE.BufferGeometryLoader();
    loader.load(uri, function (geo) {
      setGeometry(geo);
      console.log('Geometry loaded from', uri);
    });
  }, [uri]);
  return geometry;
};
