import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Stats, OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
import { useRef } from 'react';

function Lights() {
  const ambientRef = useRef<THREE.AmbientLight>(null);
  const directionalRef = useRef<THREE.DirectionalLight>(null);
  const pointRef = useRef<THREE.PointLight>(null);
  const spotRef = useRef<THREE.SpotLight>(null);
  const hemisphereRef = useRef<THREE.HemisphereLight>(null);

  useControls('Hemisphere Light', {
    visible: {
      value: false,
      onChange: (v) => {
        if (hemisphereRef.current) {
          hemisphereRef.current.visible = v;
        }
      },
    },
    skyColor: {
      value: 'white',
      onChange: (v) => {
        if (hemisphereRef.current) {
          hemisphereRef.current.color = new THREE.Color(v);
        }
      },
    },
    groundColor: {
      value: 'white',
      onChange: (v) => {
        if (hemisphereRef.current) {
          hemisphereRef.current.groundColor = new THREE.Color(v);
        }
      },
    },
    position: {
      value: { x: 0, y: 10, z: 0 },
      onChange: (v) => {
        if (hemisphereRef.current) {
          hemisphereRef.current.position.copy(v);
        }
      },
    },
  });

  // Repeat the same logic for other lights
  useControls('Ambient Light', {
    visible: {
      value: false,
      onChange: (v) => {
        if (ambientRef.current) {
          ambientRef.current.visible = v;
        }
      },
    },
    color: {
      value: 'white',
      onChange: (v) => {
        if (ambientRef.current) {
          ambientRef.current.color = new THREE.Color(v);
        }
      },
    },
  });

  useControls('Directional Light', {
    visible: {
      value: false,
      onChange: (v) => {
        if (directionalRef.current) {
          directionalRef.current.visible = v;
        }
      },
    },
    color: {
      value: 'white',
      onChange: (v) => {
        if (directionalRef.current) {
          directionalRef.current.color = new THREE.Color(v);
        }
      },
    },
    position: {
      value: { x: 0, y: 10, z: 0 },
      onChange: (v) => {
        if (directionalRef.current) {
          directionalRef.current.position.copy(v);
        }
      },
    },
  });

  useControls('Point Light', {
    visible: {
      value: false,
      onChange: (v) => {
        if (pointRef.current) {
          pointRef.current.visible = v;
        }
      },
    },
    color: {
      value: 'white',
      onChange: (v) => {
        if (pointRef.current) {
          pointRef.current.color = new THREE.Color(v);
        }
      },
    },
    position: {
      value: { x: 0, y: 10, z: 0 },
      onChange: (v) => {
        if (pointRef.current) {
          pointRef.current.position.copy(v);
        }
      },
    },
  });

  useControls('Spot Light', {
    visible: {
      value: false,
      onChange: (v) => {
        if (spotRef.current) {
          spotRef.current.visible = v;
        }
      },
    },
    color: {
      value: 'white',
      onChange: (v) => {
        if (spotRef.current) {
          spotRef.current.color = new THREE.Color(v);
        }
      },
    },
    position: {
      value: { x: 0, y: 10, z: 0 },
      onChange: (v) => {
        if (spotRef.current) {
          spotRef.current.position.copy(v);
        }
      },
    },
  });

  return (
    <>
      <ambientLight ref={ambientRef} />
      <directionalLight ref={directionalRef} />
      <pointLight ref={pointRef} />
      <spotLight ref={spotRef} />
      <hemisphereLight ref={hemisphereRef} />
    </>
  );
}

export default Lights;
