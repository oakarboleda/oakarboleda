/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 /home/arboleda/Code/oakarboleda/public/ASTRO.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ASTRO.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Torus.geometry} material={materials['Material.001']} position={[0.044, 2.169, -0.065]} scale={0.312} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.001']} position={[0.076, 1.66, 0.601]} rotation={[-0.194, 0, 0]} scale={[0.224, 0.338, 0.113]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.001']} position={[-0.459, 2.753, -0.182]} rotation={[Math.PI, 0, 1.567]} scale={[-0.084, -0.045, -0.084]} />
      <mesh geometry={nodes.Helmet.geometry} material={materials.suit} position={[0.044, 2.654, -0.124]} scale={0.719} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.002']} position={[0.044, 2.654, -0.054]} scale={[0.816, 0.816, 0.627]} />
      <mesh geometry={nodes.Plane.geometry} material={materials.suit} position={[0, 0.237, 1.224]} scale={4.923} />
      <mesh geometry={nodes.BézierCurve.geometry} material={materials['Material.001']} position={[-1.747, 1.467, -0.568]} />
      <mesh geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} position={[0.056, 0.317, -0.144]} scale={[0.155, 0.691, 0.206]} />
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[0.05, 1.448, -0.059]} scale={[0.604, 0.714, 0.674]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.001']} position={[0.017, 1.749, -0.615]} scale={[0.241, 0.151, 0.039]} />
      <mesh geometry={nodes.Cylinder001.geometry} material={nodes.Cylinder001.material} position={[-0.114, 1.768, -0.656]} rotation={[-1.617, 0, -Math.PI]} scale={[0.037, 0.007, 0.037]} />
      <mesh geometry={nodes.Cylinder002.geometry} material={nodes.Cylinder002.material} position={[0.134, 1.768, -0.656]} rotation={[-1.617, 0, -Math.PI]} scale={[0.037, 0.007, 0.037]} />
      <mesh geometry={nodes.Cube004.geometry} material={nodes.Cube004.material} position={[-0.733, 1.673, -0.137]} rotation={[0, 0, -0.942]} scale={[0.162, 0.47, 0.229]} />
      <mesh geometry={nodes.Cube005.geometry} material={nodes.Cube005.material} position={[0.916, 2.063, 0.026]} rotation={[-1.035, -0.425, 1.559]} scale={[0.162, 0.47, 0.229]} />
      <mesh geometry={nodes.Rocket.geometry} material={materials['Material.006']} position={[4.114, 4.403, 0]} scale={0.758} />
    </group>
  )
}

useGLTF.preload('/ASTRO.glb')