'use client';

import * as THREE from 'three';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei';
import { useRouter } from 'next/navigation';
import { Mesh } from 'three';

import OakRoom from './Room';

export const About = ({ route = '/', ...props }) => {
  const router = useRouter();
  const [hovered, hover] = useState(false);
  useCursor(hovered);

  return (
    <>
      <mesh
        {...props}
        onClick={() => router.push(route)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        rotation-z={[Math.PI / 2]}
        rotation-x={[Math.PI / 2]}
      >
        <coneGeometry args={[1.5, 7, 4, 4]} />
        <MeshDistortMaterial
          roughness={0.5}
          color={hovered ? 'hotpink' : '#1fb2f5'}
        />
      </mesh>
    </>
  );
};

export const PortfoBack = ({ route = '/', ...props }) => {
  const router = useRouter();
  const [hovered, hover] = useState(false);
  useCursor(hovered);

  return (
    <>
      <mesh
        {...props}
        onClick={() => router.push(route)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        rotation-z={[Math.PI / 2]}
        rotation-x={[Math.PI / 2]}
      >
        <coneGeometry args={[1, 2, 4, 2]} />
        <MeshDistortMaterial
          roughness={0.5}
          color={hovered ? 'hotpink' : '#1fb2f5'}
        />
      </mesh>
    </>
  );
};

export const Base3D = ({ route = '/about', ...props }) => {
  const meshRef = useRef<Mesh>(null!);

  const router = useRouter();

  const [hovered, hover] = useState(false);
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        50,
      ),
    [],
  );
  useEffect(() => {
    console.log(Boolean(meshRef.current));
  }, []);

  useCursor(hovered);

  return (
    <group {...props}>
      {/* @ts-ignore */}
      {/* <Line worldUnits points={points} color='#1c12f5' lineWidth={0.95} rotation={[0, 0, 1]} /> */}
      <mesh
        ref={meshRef}
        position={[-5.122, 1.53, -4.701]}
        onClick={() => router.push(route)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <boxGeometry args={[0.01, 0.356, 0.17, 1, 1, 1]} />
        <meshBasicMaterial
          wireframe={false}
          color={hovered ? 'hotpink' : '#1fb2f5'}
        />
      </mesh>
      <OakRoom />
    </group>
  );
};

export const Portfo = ({ route = '/portfolio', ...props }) => {
  const meshRef = useRef<Mesh>(null!);

  const router = useRouter();
  const [hovered, hover] = useState(false);

  useCursor(hovered);

  return (
    <group {...props}>
      <mesh
        ref={meshRef}
        position={[-2.672, 1.665, -5.534]}
        onClick={() => router.push(route)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <boxGeometry args={[0.166, 0.35, 0.01, 1, 1, 1]} />
        <meshBasicMaterial
          wireframe={false}
          color={hovered ? 'hotpink' : '#1fb2f5'}
        />
      </mesh>
    </group>
  );
};
