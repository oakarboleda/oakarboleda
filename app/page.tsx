'use client';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';
import Loader from './ui/Loader';
import './ui/global.css'
import {Scene} from "@/app/ui/Scene";
import {Header} from "@/app/ui/Header";
import NavBar from "@/app/ui/NavBar";
import Footer from "@/app/ui/Footer";


export default function Page() {
  const [Loading, setLoading] = useState(false);
  const variants = {
    hidden: { opacity: 0 },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        ease: 'easeInOut',
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
      x: 0,
      y: -100,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const itemLeft = {
    hidden: { opacity: 0, x: '-100%' },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        ease: 'easeInOut',
        duration: 2,
      },
    },
    exit: { opacity: 0, x: '-100%' },
  };
  const itemRight = {
    hidden: { opacity: 0, x: '100%' },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        ease: 'easeInOut',
        duration: 2,
      },
    },
    exit: { opacity: 0, x: '100%' },
  };
  const itemBottom = {
    hidden: { opacity: 0, y: 200, x: '-50%' },
    enter: {
      opacity: 1,
      x: '-50%',
      y: 0,
      transition: {
        staggerChildren: 0.5,
        ease: 'easeInOut',
        duration: 2,
      },
    },
    exit: { opacity: 0, y: 200, x: '-50%' },
  };
  const controls = useAnimation();
  useEffect(() => {
    if (!Loading) {
      controls.start('enter');
    } else {
      controls.start('hidden');
    }
  }, [Loading, controls]);
  return (
      <>
      <NavBar />
      {/*<AnimatePresence initial={false}>*/}
      {/*  {Loading ? <Loader/> : null}*/}
      {/*</AnimatePresence>*/}

      <motion.div
          initial="hidden"
          animate={controls}
          exit="exit"
          className="w-full"
      >
        {/* landing hero */}
        <section
            data-scroll-section
            className="flex h-screen items-center justify-center"
        >
        <Header />
        </section>
        <section data-scroll-section className="flex h-screen items-center justify-center">
          <motion.div
              className="flex h-full items-center justify-center"
          >
            <h1 className="text-6xl font-bold">About Me</h1>
          </motion.div>
        </section>

      </motion.div>
        <Footer />
</>

)
  ;
}
