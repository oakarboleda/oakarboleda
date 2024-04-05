import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Loader from './Loader';

export function Hero() {
  const [Loading, setLoading] = useState(true);
  const controls = useAnimation();
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

  return (
    <>
              <h1 className="text-4xl font-bold">Welcome to</h1>
              <h2 className="text-6xl font-bold">My Portfolio</h2>
              <p className="text-2xl">
                This is a simple portfolio website built with Next.js and
                TailwindCSS.
              </p>
              <button className="btn">Get Started</button>
    </>
  );
}
