'use client';
import React, { useState, useEffect, useRef } from 'react';
import '@/app/styles/global.css';
import Page from '@/app/components/Page';
import { Hero } from '@/app/ui/Hero';
import Portfolio from './ui/portfolio';
import About from './ui/About';
import Contact from './ui/Contact';
import Skills from './ui/Skills';
import CTA from './ui/CTA';
import Ufo from './ui/UFO';
import NavBar from './components/global/NavBar';
import MobileNavbar from './components/global/MobileNavbar';

export default function Home() {
  return (
    <Page
      className="via-purple-950 to-purple-900 bg-gradient-to-br from-slate-900 from-20% from-35% text-slate-50"
      currentPage="Home"
      meta={{
        title: 'Oak Arboleda - Senior Software Developer',
        desc: 'YO!',
      }}
    >
      <section className="relative flex h-screen items-center justify-center">
        <Hero />
      </section>
      <section className="relative flex items-center justify-center lg:py-20">
        <Portfolio />
      </section>
      <section className="relative flex items-center justify-center  lg:py-20">
        <Skills />
      </section>
      <section className="relative flex items-center justify-center lg:py-20">
        <About />
      </section>
      <section className="relative flex items-center justify-center lg:py-20">
        <CTA />
      </section>
      <section className="bg-baltic-sea-200 relative w-full lg:py-20">
        <Contact />
      </section>
      <section className="relative z-50 flex items-center justify-center lg:py-20">
        <Ufo />
      </section>
    </Page>
  );
}
