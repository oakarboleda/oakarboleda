'use client';
import React, { useState, useEffect, useRef } from 'react';
import '@/app/ui/global.css';
import Page from '@/app/components/Page';
import { Hero } from '@/app/ui/Hero';
import Portfolio from './ui/portfolio';
import About from './ui/About';
import Contact from './ui/Contact';
import Skills from './ui/Skills';
import CTA from './ui/CTA';

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
      className="via-11% bg-gradient-to-b from-black from-15% via-blue to-purple"
    >
      <section className="relative flex h-screen flex-col items-center justify-center">
        <div className="hero-docker absolute left-0 top-0 h-full w-full overflow-hidden">
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
      <section className="relative  flex items-center justify-center py-5 pb-20">
        <CTA />
      </section>
    </Page>
  );
}
