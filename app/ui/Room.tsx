import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useGLTF, Clone, MeshDistortMaterial } from '@react-three/drei'
import { useLoader  } from '@react-three/fiber'


export function Room({ ...props }) {
    const group = useRef()
    return <primitive object={gltf.scene} />
}
