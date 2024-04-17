'use client';
import { useRef } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef(null);
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
