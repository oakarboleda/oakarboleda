'use client';
import React, { useRef, useEffect } from 'react';
import Navbar from './ui/NavBar';
import Footer from './ui/Footer';
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from 'react-locomotive-scroll';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const containerRef = useRef(null);
  const { scroll } = useLocomotiveScroll();
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      containerRef={containerRef}
      onLocationChange={() =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      } // If you want to reset the scroll position to 0 for example
      onUpdate={() => console.log('Updated, but not on location change!')}
    >
      <div data-scroll-container className="w-screen" ref={containerRef}>
        <div className="Layout text-light container mx-auto h-full w-screen antialiased md:px-4">
          {children}
        </div>
      </div>
    </LocomotiveScrollProvider>
  );
}
