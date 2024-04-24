'use client';
import { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three';
import {
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  useAnimations,
  Stars,
} from '@react-three/drei';
import { audiowide, oranienbaum } from './fonts';

const Particle = () => {
  const ref = useRef({} as Group);

  useFrame((_, delta) => {
    ref.current.rotation.y += -0.001;
    ref.current.rotation.x += 0.001;
  });

  return (
    <group ref={ref}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={6}
        saturation={9}
        speed={1}
      />
    </group>
  );
};

export function Hero() {
  return (
    <div>
      <h1 className={`${audiowide.className}`}>
        <span style={{ fontSize: '0.4em' }}>Welcome</span>
        <br />
        <span>Let us Explore together</span>
      </h1>
      <Canvas>
        <directionalLight position={[0, 0, 10]} color="white" />
        <ambientLight intensity={0.1} />
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 30]}
          fov={295}
        ></PerspectiveCamera>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          autoRotateSpeed={1}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <div className="layer" />
    </div>
  );
}

function Model({ ...props }) {
  const ref = useRef(null);

  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/Space.glb');
  const { actions } = useAnimations(animations, group);

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Earth" rotation={[-Math.PI, 0.854, -Math.PI]}>
          <mesh
            ref={ref}
            name="Icosphere"
            geometry={(nodes.Icosphere as any).geometry}
            material={materials.Water}
          />
          <mesh
            ref={ref}
            name="Icosphere_1"
            geometry={(nodes.Icosphere_1 as any).geometry}
            material={materials.Earth}
          />
          <mesh
            name="Moon"
            ref={ref}
            geometry={(nodes.Moon as any).geometry}
            material={materials.Moon}
            position={[16.025, -0.006, 0.031]}
            rotation={[0, -1.497, 0]}
          />
        </group>
        <group name="Venus" rotation={[-Math.PI, 0.411, -Math.PI]}>
          <mesh
            ref={ref}
            name="Icosphere004"
            geometry={(nodes.Icosphere004 as any).geometry}
            material={materials.Venus}
          />
          <mesh
            ref={ref}
            name="Icosphere004_1"
            geometry={(nodes.Icosphere004_1 as any).geometry}
            material={materials.VenusHighlights}
          />
        </group>
        <group name="Mars" rotation={[0, 0.924, 0]}>
          <mesh
            ref={ref}
            name="Icosphere002"
            geometry={(nodes.Icosphere002 as any).geometry}
            material={materials.Mars}
          />
          <mesh
            ref={ref}
            name="Icosphere002_1"
            geometry={(nodes.Icosphere002_1 as any).geometry}
            material={materials.MarsHighlights}
          />
          <mesh
            ref={ref}
            name="Icosphere002_2"
            geometry={(nodes.Icosphere002_2 as any).geometry}
            material={materials.MarsExtraHighlights}
          />
        </group>
        <group name="Mercury" rotation={[0, -0.763, 0]}>
          <mesh
            ref={ref}
            name="Icosphere005"
            geometry={(nodes.Icosphere005 as any).geometry}
            material={materials.Mercury}
          />
          <mesh
            ref={ref}
            name="Icosphere005_1"
            geometry={(nodes.Icosphere005_1 as any).geometry}
            material={materials.MercuryHighlights}
          />
        </group>
        <group name="Jupiter" rotation={[0, -0.886, 0]}>
          <mesh
            ref={ref}
            name="Icosphere006"
            geometry={(nodes.Icosphere006 as any).geometry}
            material={materials.Jupiter}
          />
          <mesh
            ref={ref}
            name="Icosphere006_1"
            geometry={(nodes.Icosphere006_1 as any).geometry}
            material={materials.JupiterHighlights}
          />
        </group>
        <group name="uranus" rotation={[0, 0.268, 0]}>
          <mesh
            ref={ref}
            name="Icosphere009"
            geometry={(nodes.Icosphere009 as any).geometry}
            material={materials.Uranus}
          />
          <mesh
            ref={ref}
            name="Icosphere009_1"
            geometry={(nodes.Icosphere009_1 as any).geometry}
            material={materials.UranusHighlights}
          />
          <mesh
            ref={ref}
            name="Icosphere009_2"
            geometry={(nodes.Icosphere009_2 as any).geometry}
            material={materials.UranusExtraHighlights}
          />
        </group>
        <group name="Neptune" rotation={[0, 0.14, 0]}>
          <mesh
            ref={ref}
            name="Icosphere010"
            geometry={(nodes.Icosphere010 as any).geometry}
            material={materials.Neptune}
          />
          <mesh
            ref={ref}
            name="Icosphere010_1"
            geometry={(nodes.Icosphere010_1 as any).geometry}
            material={materials.NeptuneHighlights}
          />
          <mesh
            ref={ref}
            name="Icosphere010_2"
            geometry={(nodes.Icosphere010_2 as any).geometry}
            material={materials.NetuneExtraHighlights}
          />
        </group>
        <mesh
          ref={ref}
          name="Sun"
          geometry={(nodes.Sun as any).geometry}
          material={materials.Sun}
          rotation={[-0.104, 0.127, -0.582]}
        />
        <group name="Saturn" rotation={[Math.PI, -1.308, Math.PI]}>
          <mesh
            ref={ref}
            name="Icosphere007"
            geometry={(nodes.Icosphere007 as any).geometry}
            material={materials.Saturn}
          />
          <mesh
            ref={ref}
            name="Icosphere007_1"
            geometry={(nodes.Icosphere007_1 as any).geometry}
            material={materials.SaturnHighlights}
          />
          <group
            name="SaturnsRings"
            position={[33.313, 0.429, 0.001]}
            rotation={[0.101, -0.008, -1.097]}
          >
            <mesh
              ref={ref}
              name="Circle"
              geometry={(nodes.Circle as any).geometry}
              material={materials.SaturnRings}
            />
            <mesh
              ref={ref}
              name="Circle_1"
              geometry={(nodes.Circle_1 as any).geometry}
              material={materials.ExtraSaturnRings}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
