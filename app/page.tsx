'use client';
import React, { useState, useEffect, useRef } from 'react';
import './ui/global.css';
import NavBar from '@/app/ui/NavBar';
import Footer from '@/app/ui/Footer';
import {Hero} from "@/app/ui/Hero";
import About from "@/app/ui/About";


function Projects() {
    return null;
}


function Contact() {
    return null;
}

export default function Page() {
  return (
    <>
      <NavBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      <Footer />
    </>
  );
}
