import { Canvas } from '@react-three/fiber';
import { OrbitControls, Bounds, BakeShadows } from '@react-three/drei';
import Model from './Room';

function Hero() {
  return (
    <>
      <Canvas
        id="hero-canvas"
        orthographic
        shadows
        dpr={[1, 2]}
        camera={{ position: [10, 10, 10], zoom: 10 }}
      >
        <Bounds fit clip observe margin={1}>
          <Model scale={0.1} nodes={{}} materials={{}} />
        </Bounds>

        <OrbitControls
          makeDefault
          minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
          enableZoom={true}
          enablePan={true}
          zoomSpeed={0.3}
        />
      </Canvas>
    </>
  );
}
export default Hero;
