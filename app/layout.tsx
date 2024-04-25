'use client';
import { useEffect, useRef } from 'react';
import type { Metadata } from 'next';
import '@/app/styles/custom.scss';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef(null);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en">
      <body
        data-aos-easing="ease"
        data-aos-duration="600"
        data-aos-deplay="100"
      >
        {children}
      </body>
    </html>
  );
}
