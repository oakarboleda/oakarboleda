import React from 'react';


const AboutMe = () => {
  return (
      <div className={`container mx-auto px-4 py-12`}>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <h2 className={`text-2xl font-semibold text-offWhite`}>About Me</h2>
              <div className="w-12 h-1  rounded mt-2 mb-4"></div>
            </div>
            <p className='text-xl text-offWhite'>
              I implement user interface design and solve user problems using web technologies. I have 3 years of making products that solve user problems and implementing responsive website
            </p>
            <button className='absolute'>


            </button>
            <div className="">
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="flex flex-col items-center">
              <div className="flex mb-4">
                <img className="w-12 h-12 rounded-full" src="https://placehold.co/48x48" alt="Dedication" />
                <div className="ml-4 text-center">
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">DEDICATION</p>
                </div>
              </div>
              <div className="flex mb-4">
                <img className="w-12 h-12 rounded-full" src="https://placehold.co/48x48" alt="Intelligence" />
                <div className="ml-4 text-center">
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">INTELLIGENCE</p>
                </div>
              </div>
              <div className="flex">
                <img className="w-12 h-12 rounded-full" src="https://placehold.co/48x48" alt="Smart Work" />
                <div className="ml-4 text-center">
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">SMART WORK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AboutMe;