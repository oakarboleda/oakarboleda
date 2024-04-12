'use client'

import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'


const Base3D = dynamic(() => import('@/components/canvas/Sections').then((mod) => mod.Base3D), { ssr: false })
const Portfo = dynamic(() => import('@/components/canvas/Sections').then((mod) => mod.Portfo), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-screen w-screen flex-col items-center justify-center' >
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-15' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path className='opacity-75' fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
      <h1 className='my-4 text-5xl uppercase  '>Loading...</h1>
    </div >
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
       {/* @ts-ignore */}
       <View orbit className='fixed h-screen w-screen'>
       <Suspense fallback={null}>
         <Common color={''} />
         <Base3D route='/about' scale={10.7} position={[0, 0, 0]} />
         <Portfo route='/portfolio' scale={10.7} position={[0, 0, 0]} />
       </Suspense>
     </View>
      <div className='w-screen h-screen items-start justify-left p-12 text-left home'>
   
    </div>
</>
  );
}

