'use client';

import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { r3f } from '@/helpers/global';
import * as THREE from 'three';

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      {/* @ts-ignore */}
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
}
