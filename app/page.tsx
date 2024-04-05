'use client';
import React, { useState, useEffect, useRef } from 'react';
import NavBar from '@/app/ui/NavBar';
import Footer from '@/app/ui/Footer';
import { Hero } from '@/app/ui/Hero';
import About from '@/app/ui/About';
import { Info } from '@/app/ui/Info';
import Contact from '@/app/ui/Contact';
import Projects from '@/app/ui/Projects';
import Section from '@/app/Section';

export default function Page() {
  return (
    <main id="content">
      <div className="overflow-hidden">
        <NavBar />
        <section>
          <Hero />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Info />
        </section>
        <section>
          <Contact />
        </section>
        <Footer />
      </div>
    </main>
  );
}
