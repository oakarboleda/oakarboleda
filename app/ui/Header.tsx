import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Loader from './Loader';

export function Header() {
  const [Loading, setLoading] = useState(true);
  const controls = useAnimation();
  const itemLeft = {
      hidden: { opacity: 0, x: "-100%" },
      enter: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
              staggerChildren: 0.5,
              ease: "easeInOut",
              duration: 2
          }
      },
      exit: { opacity: 0, x: "-100%" }
  };

  return (
    <>
      <AnimatePresence initial={false}>
        {Loading ? <Loader /> : null}
      </AnimatePresence>
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
          <div className="bg-dark text-light relative grid h-screen w-full grid-cols-6 antialiased lg:grid-cols-8 lg:gap-6">
            <motion.div
                variants={itemLeft}
              className="hero_text leading z-10 col-span-full flex h-full flex-col items-center justify-center space-y-4 text-center md:text-left lg:col-start-2 lg:col-end-6 lg:h-screen lg:grid-cols-8"
            >
                <h1 className="text-4xl font-bold">Welcome to</h1>
                <h2 className="text-6xl font-bold">My Portfolio</h2>
                <p className="text-2xl">
                    This is a simple portfolio website built with Next.js and
                    TailwindCSS.
                </p>
                <button className="btn">Get Started</button>
            </motion.div>
          </div>
        </section>
          <section data-scroll-section className="h-screen">
              <motion.div
                    variants={itemLeft}
                    className="flex h-full items-center justify-center"
                    >
                    <h1 className="text-6xl font-bold">About Me</h1>
              </motion.div>
          </section>
      </motion.div>
    </>
  );
}
