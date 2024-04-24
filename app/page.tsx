'use client';
import React, { useState, useEffect, useRef } from 'react';
import '@/app/styles/global.css';
import Page from '@/app/components/Page';
import { Hero } from '@/app/components/Hero';
import About from '@/app/about/page';
import Contact from './contact/page';
import Skills from './skills/Skills';
import CTA from './components/CTA';
import Ufo from './components/UFO';
import Projects from '@/app/projects/projects';

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        title: 'Oak Arboleda - Senior Software Developer',
        desc: 'YO!',
      }}
    >
      <section className="">
        <Hero />
      </section>
      <section className="py-[80px]">
        <Skills />
      </section>

      <section className="featured-properties py-[80px] lg:py-[100px]">
        <About />
      </section>
      <section className="pb-4">
        <Projects />
      </section>
      <section className="py-[120px]">
        <CTA />
      </section>
      <section className="relative w-full lg:py-20">
        <Contact />
      </section>
      <section className="relative w-full lg:py-10">
        <Ufo />
      </section>
    </Page>
  );
}
