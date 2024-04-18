'use client';
import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Loader,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  useAnimations,
  Stars,
} from '@react-three/drei';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';

export function Hero() {
  return (
    <div className="bg absolute min-h-full min-w-full object-cover">
      <h1>
        <span style={{ fontSize: '0.4em' }}>Welcome</span>
        <br />
        <span>Let us Explore together</span>
      </h1>
      <Canvas linear shadows>
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 15]}
          fov={295}
        ></PerspectiveCamera>
        <Suspense fallback={null}>
          <Stars
            radius={100} // Radius of the inner sphere (default=100)
            depth={50} // Depth of area where stars should fit (default=50)
            count={7000} // Amount of stars (default=5000)
            factor={6} // Size factor (default=4)
            saturation={0} // Saturation 0-1 (default=0)
            fade // Faded dots (default=false)
          />
          <Model />
        </Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/Space.glb');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Earth" rotation={[-Math.PI, 0.854, -Math.PI]}>
          <mesh
            name="Icosphere"
            geometry={nodes.Icosphere.geometry}
            material={materials.Water}
          />
          <mesh
            name="Icosphere_1"
            geometry={nodes.Icosphere_1.geometry}
            material={materials.Earth}
          />
          <mesh
            name="Moon"
            geometry={nodes.Moon.geometry}
            material={materials.Moon}
            position={[16.025, -0.006, 0.031]}
            rotation={[0, -1.497, 0]}
          />
        </group>
        <group name="Venus" rotation={[-Math.PI, 0.411, -Math.PI]}>
          <mesh
            name="Icosphere004"
            geometry={nodes.Icosphere004.geometry}
            material={materials.Venus}
          />
          <mesh
            name="Icosphere004_1"
            geometry={nodes.Icosphere004_1.geometry}
            material={materials.VenusHighlights}
          />
        </group>
        <group name="Mars" rotation={[0, 0.924, 0]}>
          <mesh
            name="Icosphere002"
            geometry={nodes.Icosphere002.geometry}
            material={materials.Mars}
          />
          <mesh
            name="Icosphere002_1"
            geometry={nodes.Icosphere002_1.geometry}
            material={materials.MarsHighlights}
          />
          <mesh
            name="Icosphere002_2"
            geometry={nodes.Icosphere002_2.geometry}
            material={materials.MarsExtraHighlights}
          />
        </group>
        <group name="Mercury" rotation={[0, -0.763, 0]}>
          <mesh
            name="Icosphere005"
            geometry={nodes.Icosphere005.geometry}
            material={materials.Mercury}
          />
          <mesh
            name="Icosphere005_1"
            geometry={nodes.Icosphere005_1.geometry}
            material={materials.MercuryHighlights}
          />
        </group>
        <group name="Jupiter" rotation={[0, -0.886, 0]}>
          <mesh
            name="Icosphere006"
            geometry={nodes.Icosphere006.geometry}
            material={materials.Jupiter}
          />
          <mesh
            name="Icosphere006_1"
            geometry={nodes.Icosphere006_1.geometry}
            material={materials.JupiterHighlights}
          />
        </group>
        <group name="uranus" rotation={[0, 0.268, 0]}>
          <mesh
            name="Icosphere009"
            geometry={nodes.Icosphere009.geometry}
            material={materials.Uranus}
          />
          <mesh
            name="Icosphere009_1"
            geometry={nodes.Icosphere009_1.geometry}
            material={materials.UranusHighlights}
          />
          <mesh
            name="Icosphere009_2"
            geometry={nodes.Icosphere009_2.geometry}
            material={materials.UranusExtraHighlights}
          />
        </group>
        <group name="Neptune" rotation={[0, 0.14, 0]}>
          <mesh
            name="Icosphere010"
            geometry={nodes.Icosphere010.geometry}
            material={materials.Neptune}
          />
          <mesh
            name="Icosphere010_1"
            geometry={nodes.Icosphere010_1.geometry}
            material={materials.NeptuneHighlights}
          />
          <mesh
            name="Icosphere010_2"
            geometry={nodes.Icosphere010_2.geometry}
            material={materials.NetuneExtraHighlights}
          />
        </group>
        <mesh
          name="Sun"
          geometry={nodes.Sun.geometry}
          material={materials.Sun}
          rotation={[-0.104, 0.127, -0.582]}
        />
        <group name="Saturn" rotation={[Math.PI, -1.308, Math.PI]}>
          <mesh
            name="Icosphere007"
            geometry={nodes.Icosphere007.geometry}
            material={materials.Saturn}
          />
          <mesh
            name="Icosphere007_1"
            geometry={nodes.Icosphere007_1.geometry}
            material={materials.SaturnHighlights}
          />
          <group
            name="SaturnsRings"
            position={[33.313, 0.429, 0.001]}
            rotation={[0.101, -0.008, -1.097]}
          >
            <mesh
              name="Circle"
              geometry={nodes.Circle.geometry}
              material={materials.SaturnRings}
            />
            <mesh
              name="Circle_1"
              geometry={nodes.Circle_1.geometry}
              material={materials.ExtraSaturnRings}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
