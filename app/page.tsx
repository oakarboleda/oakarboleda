'use client';
import React, { useRef } from 'react';
import '@/app/styles/custom.scss';
import Page from '@/app/components/Page';
import { Hero } from '@/app/components/Hero/Hero';
import Feature from '@/app/tabs/page';
import Contact from './contact/page';
import CTA from './components/CTA';
import Projects from '@/app/portfolio/projects';
import About from '@/app/about/page';
import Ufo from '@/app/components/UFO';

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
          id="about"
          className="aos-init aos-animate py-[55px]"
          data-aos="zoom-out"
          data-aos-delay="300"
        >
          <About />
        </section>
        <section className="feature-section py-[80px]" id="feature">
          <Feature />
        </section>
        <section id="portfolio" className="py-[80px]">
          <Projects />
        </section>
        <section id="cta" className="bg-transparent py-[80px]">
          <CTA />
        </section>

        <section id="contact" className="relative w-full">
          <Contact />
        </section>
      </div>
    </Page>
  );
}
