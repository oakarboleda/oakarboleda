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

  return <></>;
}
