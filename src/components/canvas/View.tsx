'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/Three'

export const Common = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    {/* @ts-ignore */}
    <PerspectiveCamera makeDefault={true} fov={40} near={0.1} far={150} position={[19, 12, 55]} />
  </Suspense>
)
//@ts-ignore
const View = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls autoRotate={true} autoRotateSpeed={-0.02} screenSpacePanning={false} minDistance={33} maxDistance={100} maxPolarAngle={Math.PI / 2.18} minAzimuthAngle={-Math.PI / 20} maxAzimuthAngle={Math.PI / 2.2} />}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }