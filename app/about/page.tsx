import React from 'react';

const About = () => {
  return (
    <div className={`container mx-auto px-4 py-12`}>
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <h2 className={`text-2xl font-semibold text-slate-50`}>About Me</h2>
            <div className="mb-4 mt-2  h-1 w-12 rounded"></div>
          </div>
          <p className="text-offWhite text-xl">
            {' '}
            I'm a full stack developer with experience in the following
            technologies: React, Redux, Node, Express, MongoDB and more.
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

export default About;
