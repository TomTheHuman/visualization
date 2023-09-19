import React, { Suspense, useEffect, useRef } from 'react';

// External Imports
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

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

function SkyBox(): React.ReactElement {
  const texture = useLoader(THREE.TextureLoader, '/skybox.jpg');

  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[5000, 24, 24]} />
      <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
    </mesh>
  )
}

export default function SunPointing(): React.ReactElement {
  return (
    <Suspense fallback={null}>
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        camera={{ fov: 50, near: 1, far: 10000 }}
      >
        {/* eslint-disable-next-line react/no-unknown-property */}
        <directionalLight
          position={[1000, 0, 2000]}
          color={"0x404040"}
          intensity={3}
        />
        <SkyBox />
        <Sphere />
        <OrbitControls />
      </Canvas>
    </Suspense>
  );
}
