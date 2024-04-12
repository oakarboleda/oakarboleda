"use client";
import { useRef } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/ui/global.css';
import StarsCanvas from "@/app/ui/Scene";
import Footer from "@/app/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef(null);
  return (
    <html lang="en">
    <body>
      <StarsCanvas />
      {/* Navbar */}
      {children}
      <Footer />
    </body>
  </html>
  );
}
