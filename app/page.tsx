'use client';
import React, { useState, useEffect, useRef } from 'react';
import '@/app/styles/global.css';
import Page from '@/app/components/Page';
import { Hero } from '@/app/components/Hero';
import Portfolio from '@/app/projects/portfolio';
import About from '@/app/about/page';
import Contact from './contact/page';
import Skills from './skills/Skills';
import CTA from './components/CTA';
import Ufo from './components/UFO';

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        title: 'Oak Arboleda - Senior Software Developer',
        desc: 'YO!',
      }}
    >
      <section className="py-[120px]">{/*<Hero />*/}</section>
      <section className="bg-secondary py-[120px]">
        <Portfolio />
      </section>
      <section className="featured-properties py-[80px] lg:py-[100px]">
        <About />
      </section>
      <section className="bg-white pb-[120px]">
        <CTA />
      </section>
      <section className="relative w-full bg-baltic-sea-200 lg:py-20">
        <Contact />
      </section>
      <section className="relative z-50 flex items-center justify-center lg:py-20">
        <Ufo />
      </section>
    </Page>
  );
}
