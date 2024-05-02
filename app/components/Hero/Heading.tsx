import { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { Text, Mask, useMask } from '@react-three/drei';

export const Heading = ({ ...props }) => (
  <group {...props}>
    <Mask id={1}>
      <text />
      <planeGeometry args={[10, 1.55]} />
    </Mask>
  </group>
);

function text({ ...props }) {
  return (
    <group>
      <Text fontSize={2} font="Inter-Regular.woff">
        <meshBasicMaterial />
      </Text>
    </group>
  );
}
