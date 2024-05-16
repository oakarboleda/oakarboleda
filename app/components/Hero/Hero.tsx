'use client';
import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Group } from 'three';
import {
  Center,
  OrbitControls,
  PerspectiveCamera,
  Stars,
  Text3D,
} from '@react-three/drei';
import { Model } from '@/app/components/Hero/Model';
import Lights from '@/app/components/Hero/Lights';

interface props {
  children: React.ReactNode;
}

const Particle = () => {
  const ref = useRef({} as Group);

  useFrame((_, delta) => {
    ref.current.rotation.y -= +0.0003;
  });

  return (
    <group ref={ref}>
      <Stars radius={500} depth={50} count={3000} factor={10} />
    </group>
  );
};

export function Hero() {
  const canvasRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.style.width = `${window.innerWidth}px`;
        canvasRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    window.addEventListener('resize', handleResize);

    // Call the function initially to set the size
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Here we will put a cool terminal component*/}

      <Canvas
        className="bg"
        dpr={[1.5, 2]}
        linear
        style={{ width: '100%', height: '100%' }}
      >
        <Text3D
          position={[-66, 55, -50]}
          bevelSegments={2} // Adjust the z value here
          size={15}
          rotation={[0, Math.PI / 8, 0]} // Adjust these values to get the desired rotation
          lineHeight={1}
          font={'/RedFive_Regular.json'}
        >
          {' '}
          <meshNormalMaterial />
          {`Oak\nArboleda`}
        </Text3D>
        <PerspectiveCamera
          makeDefault
          position={[0, 10, 16]}
          fov={95}
        ></PerspectiveCamera>
        <Text3D
          position={[-66, -30, -50]}
          bevelSegments={2}
          bevelThickness={10} // Adjust the z value here
          size={15}
          rotation={[0, Math.PI / 8, 0]} // Adjust these values to get the desired rotation
          lineHeight={1}
          font={'/RedFive_Regular.json'}
        >
          {' '}
          <meshNormalMaterial />
          {`Software Engineer`}
        </Text3D>
        <Lights />
        <Suspense fallback={null}>
          <ambientLight intensity={0.09} />
          <group position={[0, -1, -2]}>
            <Center top rotation={[0, -Math.PI / 1.5, 0]} position={[0, 0, 3]}>
              <Model scale={0.8} />
            </Center>
            <Particle />
          </group>
        </Suspense>
        <OrbitControls
          autoRotateSpeed={0.1}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <div className="bg" />
      <div className="layer" />
    </>
  );
}
