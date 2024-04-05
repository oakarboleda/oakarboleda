'use client';
import React, { useRef, useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef(null);
  return (
    <div className="w-screen">
      <div className="Layout text-light container mx-auto h-full w-screen antialiased md:px-4">
        {children}
      </div>
    </div>
  );
}
