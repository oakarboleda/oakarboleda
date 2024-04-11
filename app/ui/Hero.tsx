import * as THREE from 'three';
import React, { useState, useEffect } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './BlenderFile';

export function Hero() {
  return (
    <Canvas camera={{ fov: 64, position: [-2, 2, 0] }}>
      <ambientLight intensity={5} />
      <OrbitControls enableZoom={true} />
      <Model />
    </Canvas>
  );
}
