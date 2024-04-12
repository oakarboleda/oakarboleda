import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GroupProps, MeshProps } from 'react-three-fiber';

import * as THREE from 'three';

interface ModelProps extends GroupProps {
  nodes: {
    [key: string]: {
      geometry: THREE.BufferGeometry;
      material: THREE.Material;
    };
  };
  materials: {
    [key: string]: THREE.Material;
  };
}
function Model(props: ModelProps) {
  const { nodes, materials, ...rest } = useGLTF(
    '/medieval+study+room.glb',
  ) as unknown as ModelProps;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials['Material.001']}
        position={[-2.51, 1.866, -5.529]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[0.041, 0.135, 0.257]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials['Material.006']}
        position={[-5.174, 1.341, -3.405]}
        rotation={[0, Math.PI / 2, 0]}
        scale={-0.011}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.004']}
        position={[-5.203, 0.939, -3.401]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.018}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={materials['Material.002']}
        position={[-5.203, 0.939, -3.401]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.018}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials['Material.006']}
        position={[-3.149, 1.411, -5.5]}
        scale={-0.011}
      />
      <mesh
        geometry={nodes.Cylinder003.geometry}
        material={materials['Material.004']}
        position={[-3.153, 1.01, -5.529]}
        scale={0.018}
      />
      <mesh
        geometry={nodes.Cylinder005.geometry}
        material={materials['Material.002']}
        position={[-3.153, 1.01, -5.529]}
        scale={0.018}
      />
      <mesh
        geometry={nodes.chair.geometry}
        material={materials['Material.003']}
        position={[-3.644, -0.277, -4.121]}
        rotation={[0, 1.049, -0.019]}
        scale={[0.902, 1, 0.893]}
      />
      <mesh
        geometry={nodes.Plane006.geometry}
        material={materials['Material.003']}
        position={[-3.691, -0.179, -4.037]}
        rotation={[0, -0.048, 0]}
      />
      <mesh
        geometry={nodes.Plane007.geometry}
        material={materials['Material.027']}
        position={[-3.221, 0.292, -4.916]}
        scale={0.233}
      />
      <group position={[-4.505, 0.231, -3.476]} rotation={[-0.01, 0, 0]}>
        <mesh
          geometry={nodes.Cube005_1.geometry}
          material={materials['Material.002']}
        />
        <mesh
          geometry={nodes.Cube005_2.geometry}
          material={materials['Material.009']}
        />
        <mesh
          geometry={nodes.Cube005_3.geometry}
          material={materials['Material.007']}
        />
      </group>
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials['Material.011']}
        position={[-3.691, 0, -4.013]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials['Material.012']}
        position={[-3.691, 0, -4.013]}
      />
      <mesh
        geometry={nodes.Plane008.geometry}
        material={materials['Material.013']}
        position={[-5.331, 2.134, -3.949]}
        scale={[0.12, 0.511, 0.413]}
      />
      <mesh
        geometry={nodes.feather.geometry}
        material={materials['Material.015']}
        position={[-3.719, 0.348, -4.92]}
        scale={0.883}
      />
      <mesh
        geometry={nodes.Cylinder006.geometry}
        material={materials['Material.014']}
        position={[-3.707, 0.383, -4.926]}
        scale={[0.849, 0.741, 0.741]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials['Material.002']}
        position={[-5.199, 1.102, -3.399]}
        scale={[0.015, 0.02, 0.043]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials['Material.002']}
        position={[-3.15, 1.102, -5.521]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.015, 0.02, 0.043]}
      />
      <mesh
        geometry={nodes.Plane013.geometry}
        material={nodes.Plane013.material}
        position={[-2.8, -0.39, -2.934]}
        scale={7.454}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials['Material.008']}
        position={[-4.505, 0.189, -3.476]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials['Material.003']}
        position={[-3.783, -0.244, -2.808]}
        scale={[1.418, 0.101, 0.241]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials['Material.003']}
        position={[-3.783, -0.244, -3.308]}
        scale={[1.418, 0.101, 0.241]}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials['Material.003']}
        position={[-3.783, -0.244, -3.829]}
        scale={[1.418, 0.101, 0.241]}
      />
      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials['Material.003']}
        position={[-3.783, -0.244, -4.353]}
        scale={[1.418, 0.101, 0.241]}
      />
      <mesh
        geometry={nodes.Plane004.geometry}
        material={materials['Material.003']}
        position={[-3.783, -0.244, -4.877]}
        scale={[1.418, 0.101, 0.241]}
      />
      <mesh
        geometry={nodes.Plane005.geometry}
        material={materials['Material.003']}
        position={[-3.783, -0.244, -5.4]}
        scale={[1.418, 0.101, 0.241]}
      />
      <mesh
        geometry={nodes.Plane009.geometry}
        material={materials['Material.005']}
        position={[-4.85, 0.128, -4.982]}
      />
      <mesh
        geometry={nodes.Plane010.geometry}
        material={materials['Material.008']}
        position={[-4.85, 0.128, -4.982]}
      />
      <group position={[-4.85, 0.007, -4.451]} scale={0.754}>
        <mesh
          geometry={nodes.Plane012.geometry}
          material={materials['Material.005']}
        />
        <mesh
          geometry={nodes.Plane012_1.geometry}
          material={materials['Material.008']}
        />
      </group>
      <mesh
        geometry={nodes['pngfindcom-medieval-banner-png-1287972'].geometry}
        material={materials['Material.027']}
        position={[-2.672, 1.665, -5.534]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.47, 1, 1]}
      />
      <group position={[-5.122, 1.53, -4.701]} rotation={[0, 1.553, 0]}>
        <mesh
          geometry={nodes.book012.geometry}
          material={materials['Material.018']}
        />
        <mesh
          geometry={nodes.book012_1.geometry}
          material={materials['Material.027']}
        />
        <mesh
          geometry={nodes.book012_2.geometry}
          material={materials['Material.026']}
        />
        <mesh
          geometry={nodes.book012_3.geometry}
          material={materials['Material.017']}
        />
        <mesh
          geometry={nodes.book012_4.geometry}
          material={materials['Material.019']}
        />
        <mesh
          geometry={nodes.book012_5.geometry}
          material={materials['Material.020']}
        />
        <mesh
          geometry={nodes.book012_6.geometry}
          material={materials['Material.021']}
        />
        <mesh
          geometry={nodes.book012_7.geometry}
          material={materials['Material.022']}
        />
        <mesh
          geometry={nodes.book012_8.geometry}
          material={materials['Material.023']}
        />
        <mesh
          geometry={nodes.book012_9.geometry}
          material={materials['Material.024']}
        />
        <mesh
          geometry={nodes.book012_10.geometry}
          material={materials['Material.025']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/medieval+study+room.glb');
export default Model;
