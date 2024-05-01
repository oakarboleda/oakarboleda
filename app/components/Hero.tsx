'use client';
import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { Model } from '@/app/components/Model';
import Lights from '@/app/components/Lights';

const Particle = () => {
  const ref = useRef({} as Group);

  useFrame((_, delta) => {
    ref.current.rotation.y -= -0.0003;
  });

  return (
    <group ref={ref}>
      <Stars radius={700} depth={50} count={3000} factor={10} />
    </group>
  );
};

export function Hero() {
  return (
    <>
      {/* Here we will put a cool terminal component*/}
      <Canvas dpr={[1.5, 2]} linear shadows>
        <PerspectiveCamera
          makeDefault
          position={[0, 10, 16]}
          fov={95}
        ></PerspectiveCamera>

        <Lights />
        <Suspense fallback={null}>
          <Model />
          <Particle />
        </Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.1}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <div className="bg" />
      <div className="layer" />
    </>
  );
}
