'use client';
import React from 'react';
import '@/app/styles/custom.scss';
import Page from '@/app/components/Page';
import { Hero } from '@/app/components/Hero/Hero';
import About from '@/app/about/page';
import Contact from './contact/page';
import CTA from './components/CTA';
import Projects from '@/app/projects/projects';
import Blog from './blog/page';

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        title: 'Oak Arboleda - Senior Software Developer',
        desc: 'YO!',
      }}
    >
      <section className="bg">
        <Hero />
      </section>
      {/*<section className="bg-transparent py-[120px]">*/}
      {/*  <Services />*/}
      {/*</section>*/}
      <section className="bg-transparent py-[80px] lg:py-[100px]">
        <About />
      </section>
      <section className="bg-transparent pb-4">
        <Projects />
      </section>
      <section className="bg-transparent py-[120px]">
        <CTA />
      </section>
      <section className="bg-slate-200 py-[120px]">
        <Blog />
      </section>
      <section className="relative w-full bg-transparent lg:py-20">
        <Contact />
      </section>
    </Page>
  );
}
