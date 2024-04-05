import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function Section() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  return (
    <section>
      <motion.div
        className="section"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div className="section-content"></motion.div>
      </motion.div>
    </section>
  );
}
