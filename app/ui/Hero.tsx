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
      <section className="relative flex h-screen flex-col items-center justify-center text-center text-white ">
        <div className="video-docker absolute left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="absolute min-h-full min-w-full object-cover"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </section>
    </>
  );
}
