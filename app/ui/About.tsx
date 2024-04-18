import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';
const AboutMe = () => {
  return (
    <div className={`container mx-auto px-4 py-12`}>
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <h2 className={`text-2xl font-semibold text-slate-50`}>About Me</h2>
            <div className="mb-4 mt-2  h-1 w-12 rounded"></div>
          </div>
          <p className="text-xl text-offWhite">
            I implement user interface design and solve user problems using web
            technologies. I have 3 years of making products that solve user
            problems and implementing responsive website
          </p>
          <button className="absolute"></button>
          <div className=""></div>
        </div>
        <div className="flex w-full justify-center md:w-1/2">
          <div className="flex flex-col items-center">
            <div className="mb-4 flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
