import React, { Suspense, useEffect, useRef } from 'react';

// External Imports
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Internal Imports

function Sphere(): React.ReactElement {
  const sphereGeom = new THREE.SphereGeometry(50, 100, 50);
  const innerGeom = new THREE.SphereGeometry(49, 100, 50);
  const ref = useRef<THREE.Points>(null);

  return (
    // eslint-disable-next-line react/no-unknown-property
    <points ref={ref} geometry={sphereGeom}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <pointsMaterial
        color="#b8fdff"
        size={1}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
      <mesh geometry={innerGeom}>
        <meshBasicMaterial
          color="#b8fdff"
          transparent={true}
          opacity={0.25}
        />
      </mesh>
    </points>
  );
}

function SkyBox(): React.ReactElement {
  const texture = useLoader(THREE.TextureLoader, '/skybox_high.jpg');
  texture.colorSpace = THREE.SRGBColorSpace;

  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[5000, 24, 24]} />
      <meshBasicMaterial
        attach="material"
        map={texture}
        side={THREE.BackSide}

      />
    </mesh>
  )
}

export default function SunPointing(): React.ReactElement {
  return (
    <Suspense fallback={null}>
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 150], fov: 50, near: 1, far: 10000 }}
      >
        {/* eslint-disable-next-line react/no-unknown-property */}
        <directionalLight
          position={[1000, 0, 2000]}
          color={"0x404040"}
          intensity={3}
        />
        <SkyBox />
        <Sphere />
        <OrbitControls
          enableRotate
          enablePan={false}
          enableZoom={false}
        />
      </Canvas>
    </Suspense>
  );
}
