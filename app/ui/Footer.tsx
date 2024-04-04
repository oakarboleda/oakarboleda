import React, { useState } from 'react';
import ScrollArrow from '../assets/ScrollArrow.svg';

import { useLocomotiveScroll } from 'react-locomotive-scroll';

export default function Footer() {
  const { scroll } = useLocomotiveScroll();
  return (
    <>
      <div
        data-scroll-section
        className="flex items-center justify-center pb-2  pt-4 md:justify-between"
      >
        Footer
      </div>
    </>
  );
}
