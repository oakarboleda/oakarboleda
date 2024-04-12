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
    <group {...rest}>
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials['Material.001']}
        position={[-2.51, 1.866, -5.529]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[0.041, 0.135, 0.257]}
      />
      {/* Continue mapping meshes and groups here */}
    </group>
  );
}

useGLTF.preload('/medieval+study+room.glb');
export default Model;
