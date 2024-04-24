import React from 'react';
import Image from 'next/image';
import skills from '@/app/types/skills';

function Skills() {
  return (
    <div className="container w-full text-slate-50">
      <div className="relative flex flex-col justify-between px-4 py-3 md:flex-row">
        <h2 className="text-offWhite relative mb-10 mr-0 w-full text-center text-3xl font-bold md:mb-0 md:mr-10 md:w-max md:max-w-lg md:text-left">
          Technologies known:
          <br />
        </h2>
        <div className="md:mx-none text-offWhite relative mx-auto grid w-full max-w-lg grid-cols-3 place-content-center items-center gap-x-8 gap-y-12 sm:grid-cols-6 sm:gap-8 md:gap-12">
          {skills.map((item, index) => {
            return (
              <div
                title={item.title}
                key={index}
                className="mx-auto flex w-10 flex-col items-center justify-center"
              >
                <Image src={item.icon} alt={''} width={25} height={25} />
                <p className="text-fun-gray mt-3 text-xs font-bold opacity-80">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
