import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { PointLightProps } from '@react-three/fiber';
interface ModelProps {
  // Add any props here
}

export const Model: React.FC<ModelProps> = (props) => {
  const group = useRef<any>();
  const { nodes, materials, animations } = useGLTF('/Space.gltf');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Earth" rotation={[-Math.PI, 0.854, -Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            name="Icosphere"
            geometry={nodes.Icosphere.geometry}
            material={materials.Water}
          />
          <mesh
            castShadow
            receiveShadow
            name="Icosphere_1"
            geometry={nodes.Icosphere_1.geometry}
            material={materials.Earth}
          />
          <mesh
            castShadow
            receiveShadow
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
        <group name="Sun" rotation={[-0.104, 0.127, -0.582]}>
          <mesh geometry={nodes.Sun.geometry} material={materials.Sun} />
        </group>
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
};

useGLTF.preload('/Space.glb');
