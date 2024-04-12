'use client'

import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'

import OakRoom from './Room'


export const About = ({ route = '/', ...props }) => {
    const router = useRouter()
    const [hovered, hover] = useState(false)
    useCursor(hovered)
  
    return (<>
      {/* <mesh {...props} onClick={() => router.push(route)} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}
        rotation-z={[Math.PI / 2]} rotation-x={[Math.PI / 2]}
      >
        <coneGeometry args={[1.5, 7, 4, 4]} /><MeshDistortMaterial roughness={0.5} color={hovered ? 'hotpink' : '#1fb2f5'} />
      </mesh> */}
    </>
    )
  }
  
  export const PortfoBack = ({ route = '/', ...props }) => {
    const router = useRouter()
    const [hovered, hover] = useState(false)
    useCursor(hovered)
  
    return (<>
      {/* <mesh {...props} onClick={() => router.push(route)} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}
        rotation-z={[Math.PI / 2]} rotation-x={[Math.PI / 2]}>
        <coneGeometry args={[1, 2, 4, 2]} /><MeshDistortMaterial roughness={0.5} color={hovered ? 'hotpink' : '#1fb2f5'} />
      </mesh> */}
    </>
    )
  }
  
  export const Base3D = ({ route = '/about', ...props }) => {
    const mesh = useRef(null)
    const router = useRouter()
  
    const [hovered, hover] = useState(false)
    // const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(50), [])
  
    useCursor(hovered)
  
    return (
      <group ref={mesh} {...props} >
        {/* @ts-ignore */}
        {/* <Line worldUnits points={points} color='#1c12f5' lineWidth={0.95} rotation={[0, 0, 1]} /> */}
        <mesh position={[-1.9515, - 0.507, 1.2955]} onClick={() => router.push(route)} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
          <boxGeometry args={[0.01, 0.356, 0.170, 1, 1, 1]} />
          <meshBasicMaterial wireframe={false} color={hovered ? 'hotpink' : '#1fb2f5'} />
        </mesh>
        <OakRoom />
      </group>
    )
  }
  
  export const Portfo = ({ route = '/portfolio', ...props }) => {
    const mesh = useRef(null)
    const router = useRouter()
    const [hovered, hover] = useState(false)
  
    useCursor(hovered)
  
    return (
      <group ref={mesh} {...props} >
        <mesh position={[1.777, 0.48, -1.616]} onClick={() => router.push(route)} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
          <boxGeometry args={[0.166, 0.35, 0.01, 1, 1, 1]} />
          <meshBasicMaterial wireframe={false} color={hovered ? 'hotpink' : '#1fb2f5'} />
        </mesh>
      </group>
    )
  }

