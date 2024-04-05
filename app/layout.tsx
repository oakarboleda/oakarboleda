'use client';
import React, { useRef, useEffect } from 'react';
import PrelineScript from './ui/PrelineScript';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef(null);
  return (
    <html lang="en">
      <body>
        <div ref={containerRef}>{children}</div>
      </body>
      <PrelineScript />
    </html>
  );
}
