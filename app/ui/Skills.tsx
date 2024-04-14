import React from 'react';
import Image from 'next/image';

type Skill = {
  title: string;
  icon: string;
  style?: object;
};
type Testimonial = {
  quote: string;
  name: string;
  job: string;
};

export const skills: Skill[] = [
  {
    title: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    title: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    title: 'Javascript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    title: 'Sass',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  },
  {
    title: 'TailwindCSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg',
  },
  {
    title: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    title: 'NextJS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
    style: { filter: 'invert(1)' },
  },
  {
    title: 'Typescript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    title: 'NodeJS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    title: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    title: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    title: 'Laravel',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
];

function Skills() {
  return (
    <div className="relative flex flex-col justify-between md:flex-row">
      <h2 className="text-offWhite relative mb-10 mr-0 w-full text-center text-3xl font-bold md:mb-0 md:mr-10 md:w-max md:max-w-lg md:text-left ">
        I got the experience.
        <br />
        Here is my toolbelt for success.
      </h2>
      <div className="md:mx-none text-offWhite relative mx-auto grid w-full max-w-lg grid-cols-3 place-content-center items-center gap-x-8 gap-y-12 sm:grid-cols-6 sm:gap-8 md:gap-12">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="mx-auto flex w-10 flex-col items-center justify-center"
            >
              <Image
                src={item.icon}
                style={item.style}
                alt={''}
                width={25}
                height={25}
              />
              <p className="text-fun-gray mt-3 text-xs font-bold opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
