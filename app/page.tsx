'use client';
import React from 'react';
import '@/app/styles/custom.scss';
import Page from '@/app/components/Page';
import { Hero } from '@/app/components/Hero/Hero';
import Feature from '@/app/tabs/page';
import Contact from './contact/page';
import CTA from './components/CTA';
import Projects from '@/app/portfolio/projects';
import About from '@/app/about/page';

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        title: 'Oak Arboleda - Senior Software Developer',
        desc: 'YO!',
      }}
    >
      <div className="sky">
        <div className="stars"></div>
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="shooting-stars"></div>
        <section className="bg relative pb-[125px] pt-[140px]">
          <Hero />
        </section>
        <section
          className="about-section aos-init aos-animate bg-slate-900 py-[100px] pb-[120px]"
          data-aos="zoom-out"
          data-aos-delay="300"
        >
          <About />
        </section>
        <section className="feature-section py-[80px] lg:py-[100px]">
          <Feature />
        </section>
        <section className="portfolio-section py-[120px]">
          <Projects />
        </section>
        <section className="bg-transparent py-[120px]">
          <CTA />
        </section>
        {/*<section className="bg-slate-200 py-[120px]">*/}
        {/*  <Blog />*/}
        {/*</section>*/}
        <section className="relative w-full bg-woodsmoke-200 lg:py-20">
          <Contact />
        </section>
      </div>
    </Page>
  );
}
