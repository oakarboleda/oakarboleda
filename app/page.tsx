'use client';
import React, { useState, useEffect, useRef } from 'react';
import '@/app/ui/global.css';
import NavBar from '@/app/ui/NavBar';
import Footer from '@/app/ui/Footer';
import {Hero} from "@/app/ui/Hero";
import About from "@/app/ui/About";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <NavBar />
        <Hero />
      </div>
    </main>
  );
}