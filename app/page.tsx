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

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        title: 'Oak Arboleda - Web Developer',
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
      className="via-11% bg-gradient-to-b from-black from-15% via-blue to-purple"
    >
      <section className="relative flex h-screen flex-col items-center justify-center">
        <div className="hero-docker absolute left-0 top-0 h-auto w-full overflow-hidden">
          <Hero />
        </div>
      </section>

      <section className="relative flex items-center  justify-center py-5 pb-10">
        <Portfolio />
      </section>
      <section className="relative flex items-center justify-center  py-5 pb-12">
        <Skills />
      </section>
      <section className="relative flex items-center justify-center py-5 pb-12">
        <About />
      </section>
      <section className="relative flex items-center justify-center py-5 pb-10">
        <CTA />
      </section>
      <section className="py-35 relative z-50 flex items-center justify-center pb-10">
        <Ufo />
      </section>
      <section className="relative w-full">
        <Contact />
      </section>
    </Page>
  );
}
