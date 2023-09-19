import React, { Suspense, useEffect, useRef } from 'react';

// External Imports
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

// Internal Imports

function Sphere(): React.ReactElement {
  const sphereGeom = new THREE.SphereGeometry(1, 128, 128);
  const ref = useRef<THREE.Mesh>(null);

  return (
    // eslint-disable-next-line react/no-unknown-property
    <mesh ref={ref} geometry={sphereGeom}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

export default function SunPointing(): React.ReactElement {
  return (
    <Suspense fallback={null}>
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 10], fov: 20, near: 0.01, far: 95,
        }}
      >
        {/* eslint-disable-next-line react/no-unknown-property */}
        <directionalLight
          color="white"
        // eslint-disable-next-line react/no-unknown-property
          intensity={1.5}
        // eslint-disable-next-line react/no-unknown-property
          position={[5, 6, 10]}
        />
        <ambientLight
        // eslint-disable-next-line react/no-unknown-property
          intensity={0.4}
        />
        <Sphere />
      </Canvas>
    </Suspense>
  );
}
