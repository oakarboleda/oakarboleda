import React from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '../components/global/button';
import Card from '../components/global/Card';
import Link from 'next/link';
import Tabs from './tabs';
import Resume from '../types/tabs';

const About = () => {
  const pathname = usePathname();
  return (
    <div className="container">
      <div className="grid grid-cols-12 lg:gap-[60px] xl:gap-[100px] 2xl:gap-[134px]">
        <div
          className="aos-init aos-animate col-span-12 lg:col-span-5 2xl:col-span-4"
          data-aos="fade-up"
        >
          <div className="font-Syne mb-4 flex flex-col flex-wrap gap-y-2 font-bold leading-none">
            <span className="text-orange text-xl">Resume</span>
            <h3 className="text-black-800 before:bg-primary relative text-4xl tracking-[-1.5px] before:absolute before:left-0 before:top-[2px] before:-z-[1] before:block before:h-[36px] before:w-[36px] before:rounded-full lg:text-5xl lg:before:h-[48px] lg:before:w-[48px] xl:text-[64px] xl:before:h-[64px] xl:before:w-[64px]">
              All over my details find here...
            </h3>
          </div>
          <div className="tabs my-8 flex flex-wrap gap-2 lg:my-0 lg:flex-col">
            <Tabs items={Resume} />
          </div>
        </div>
        <div
          className="aos-init aos-animate col-span-12 lg:col-span-7 2xl:col-span-8"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <Card id="about_me_tab" className="tab-content active relative">
            <div className="grid grid-cols-1">
              <h4 className="text-black-800 font-Syne mb-6 text-2xl font-bold lg:text-[32px]">
                Based in German
              </h4>
              <p className="paragraph mb-7">
                Mark Henry,{' '}
                <span className="text-black-800">Product Designer</span>, based
                in German. That is where I come in. A lover of words, a wrangler
                of copy. Here to create copy that not only reflects who you are
                and what you stand for,
              </p>
              <p className="paragraph mb-14">
                but words that truly land with those that read them, calling
                your audience in and making them want more.
              </p>
              <ul className="inline-flex flex-col gap-3">
                <li className="inline-flex items-center gap-10">
                  <span className="text-black-text-800 w-[110px] text-lg font-normal leading-none">
                    Name
                  </span>
                  <span className="text-black-800 font-Syne text-2xl font-bold leading-8">
                    Mark Henry
                  </span>
                </li>
                <li className="inline-flex items-center gap-10">
                  <span className="text-black-text-800 w-[110px] text-lg font-normal leading-none">
                    Nationality
                  </span>
                  <span className="text-black-800 font-Syne text-2xl font-bold leading-8">
                    Germany
                  </span>
                </li>
                <li className="inline-flex items-center gap-10">
                  <span className="text-black-text-800 w-[110px] text-lg font-normal leading-none">
                    Phone
                  </span>
                  <span className="text-black-800 font-Syne text-2xl font-bold leading-8">
                    +(2) 870 174 302
                  </span>
                </li>
                <li className="inline-flex items-center gap-10">
                  <span className="text-black-text-800 w-[110px] text-lg font-normal leading-none">
                    Email
                  </span>
                  <span className="text-black-800 font-Syne text-2xl font-bold leading-8">
                    hello@henry.com
                  </span>
                </li>
                <li className="inline-flex items-center gap-10">
                  <span className="text-black-text-800 w-[110px] text-lg font-normal leading-none">
                    Experience
                  </span>
                  <span className="text-black-800 font-Syne text-2xl font-bold leading-8">
                    12+ years
                  </span>
                </li>
                <li className="inline-flex items-center gap-10">
                  <span className="text-black-text-800 w-[110px] text-lg font-normal leading-none">
                    Freelance
                  </span>
                  <span className="text-black-800 font-Syne text-2xl font-bold leading-8">
                    Available
                  </span>
                </li>
                <li className="inline-flex items-center gap-10">
                  <span className="text-black-text-800 w-[110px] text-lg font-normal leading-none">
                    Skype
                  </span>
                  <span className="text-black-800 font-Syne text-2xl font-bold leading-8">
                    henry.halk23
                  </span>
                </li>
                <li className="inline-flex items-center gap-10">
                  <span className="text-black-text-800 w-[110px] text-lg font-normal leading-none">
                    Language
                  </span>
                  <span className="text-black-800 font-Syne text-2xl font-bold leading-8">
                    German, English
                  </span>
                </li>
              </ul>
            </div>
          </Card>
          <Card id="experience_tab" className="tab-content relative">
            <h4 className="text-black-800 font-Syne mb-6 text-2xl font-bold lg:text-[32px]">
              Experience
            </h4>
            <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
              <div className="bg-black-500 flex flex-col flex-wrap justify-between gap-8 rounded-2xl px-7 pb-7 pt-[30px] transition-all hover:bg-white hover:shadow-2xl">
                <span className="font-Inter text-black-text-800 text-sm font-normal leading-tight">
                  03/216 – Running
                </span>
                <div>
                  <p className="text-black-800 before:bg-orange relative z-[1] pl-4 font-sans text-lg font-normal leading-7 before:absolute before:left-0 before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
                    Axtra
                  </p>
                  <h4 className="font-Syne text-black-800 text-2xl font-bold leading-normal">
                    Lead digital marketer
                  </h4>
                </div>
              </div>
              <div className="bg-black-500 flex flex-col flex-wrap justify-between gap-8 rounded-2xl px-7 pb-7 pt-[30px] transition-all hover:bg-white hover:shadow-2xl">
                <span className="font-Inter text-black-text-800 text-sm font-normal leading-tight">
                  03/2008 – 07/2011
                </span>
                <div>
                  <p className="text-black-800 before:bg-orange relative z-[1] pl-4 font-sans text-lg font-normal leading-7 before:absolute before:left-0 before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
                    Axtra
                  </p>
                  <h4 className="font-Syne text-black-800 text-2xl font-bold leading-normal">
                    JavaScript developer
                  </h4>
                </div>
              </div>
              <div className="bg-black-500 flex flex-col flex-wrap justify-between gap-8 rounded-2xl px-7 pb-7 pt-[30px] transition-all hover:bg-white hover:shadow-2xl">
                <span className="font-Inter text-black-text-800 text-sm font-normal leading-tight">
                  03/2008 – 07/2011
                </span>
                <div>
                  <p className="text-black-800 before:bg-orange relative z-[1] pl-4 font-sans text-lg font-normal leading-7 before:absolute before:left-0 before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
                    Axtra
                  </p>
                  <h4 className="font-Syne text-black-800 text-2xl font-bold leading-normal">
                    Product designer
                  </h4>
                </div>
              </div>
              <div className="bg-black-500 flex flex-col flex-wrap justify-between gap-8 rounded-2xl px-7 pb-7 pt-[30px] transition-all hover:bg-white hover:shadow-2xl">
                <span className="font-Inter text-black-text-800 text-sm font-normal leading-tight">
                  03/2008 – 07/2011
                </span>
                <div>
                  <p className="text-black-800 before:bg-orange relative z-[1] pl-4 font-sans text-lg font-normal leading-7 before:absolute before:left-0 before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
                    Axtra
                  </p>
                  <h4 className="font-Syne text-black-800 text-2xl font-bold leading-normal">
                    UX researcher
                  </h4>
                </div>
              </div>
            </div>
          </Card>
          <Card id="education_tab" className="tab-content">
            <h4 className="text-black-800 font-Syne mb-6 text-2xl font-bold lg:text-[32px]">
              Education
            </h4>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-black-500 flex flex-wrap gap-[30px] rounded-2xl px-7 pb-7 pt-[30px] transition-all hover:bg-white hover:shadow-2xl md:gap-[60px] lg:gap-[104px]">
                <span className="font-Inter text-black-text-800 text-sm font-normal leading-tight">
                  003/2008 – 07/2011
                </span>
                <div className="flex-1">
                  <p className="text-black-800 before:bg-orange relative z-[1] pl-4 font-sans text-lg font-normal leading-7 before:absolute before:left-0 before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
                    Axtra
                  </p>
                  <h4 className="font-Syne text-black-800 text-2xl font-bold leading-normal">
                    BA Business Management
                  </h4>
                </div>
              </div>
              <div className="bg-black-500 flex flex-wrap gap-[30px] rounded-2xl px-7 pb-7 pt-[30px] transition-all hover:bg-white hover:shadow-2xl md:gap-[60px] lg:gap-[104px]">
                <span className="font-Inter text-black-text-800 text-sm font-normal leading-tight">
                  03/2008 – 07/2011
                </span>
                <div className="flex-1">
                  <p className="text-black-800 before:bg-orange relative z-[1] pl-4 font-sans text-lg font-normal leading-7 before:absolute before:left-0 before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
                    Axtra
                  </p>
                  <h4 className="font-Syne text-black-800 text-2xl font-bold leading-normal">
                    BA Business Management
                  </h4>
                </div>
              </div>
              <div className="bg-black-500 flex flex-wrap gap-[30px] rounded-2xl px-7 pb-7 pt-[30px] transition-all hover:bg-white hover:shadow-2xl md:gap-[60px] lg:gap-[104px]">
                <span className="font-Inter text-black-text-800 text-sm font-normal leading-tight">
                  03/2008 – 07/2011
                </span>
                <div className="flex-1">
                  <p className="text-black-800 before:bg-orange relative z-[1] pl-4 font-sans text-lg font-normal leading-7 before:absolute before:left-0 before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
                    Axtra
                  </p>
                  <h4 className="font-Syne text-black-800 text-2xl font-bold leading-normal">
                    BA Business Management
                  </h4>
                </div>
              </div>
            </div>
          </Card>
          <Card id="skills_tab" className="tab-content">
            <h4 className="text-black-800 font-Syne mb-6 text-2xl font-bold lg:text-[32px]">
              Skills
            </h4>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              <div className="bg-black-500 flex flex-wrap items-start gap-4 rounded-2xl px-7 pb-7 pt-[30px] transition-all hover:bg-white hover:shadow-2xl">
                <img
                  className="items-start"
                  src="assets/images/skills/vs-code.png"
                  alt="icons"
                />
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="font-Syne text-black-800 text-xl font-bold leading-normal">
                    React JS
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (90%)
                  </p>
                </div>
              </div>
              <div className="bg-black-500 flex flex-wrap items-start gap-4 rounded-2xl px-7 pb-7 pt-[30px] transition-all hover:bg-white hover:shadow-2xl">
                <img
                  className="items-start"
                  src="assets/images/skills/figma.png"
                  alt="icons"
                />
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="font-Syne text-black-800 text-xl font-bold leading-normal">
                    Figma
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (70%)
                  </p>
                </div>
              </div>
              <div className="bg-black-500 flex flex-wrap items-start gap-4 rounded-2xl px-7 pb-7 pt-[30px] transition-all hover:bg-white hover:shadow-2xl">
                <img
                  className="items-start"
                  src="assets/images/skills/framer.png"
                  alt="icons"
                />
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="font-Syne text-black-800 text-xl font-bold leading-normal">
                    Framer
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (80%)
                  </p>
                </div>
              </div>
              <div className="bg-black-500 flex flex-wrap items-start gap-4 rounded-2xl px-7 pb-7 pt-[30px] transition-all hover:bg-white hover:shadow-2xl">
                <img
                  className="items-start"
                  src="assets/images/skills/framer.png"
                  alt="icons"
                />
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="font-Syne text-black-800 text-xl font-bold leading-normal">
                    Framer
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (80%)
                  </p>
                </div>
              </div>
              <div className="bg-black-500 flex flex-wrap items-start gap-4 rounded-2xl px-7 pb-7 pt-[30px] transition-all hover:bg-white hover:shadow-2xl">
                <img
                  className="items-start"
                  src="assets/images/skills/framer.png"
                  alt="icons"
                />
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="font-Syne text-black-800 text-xl font-bold leading-normal">
                    Framer
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (80%)
                  </p>
                </div>
              </div>
              <div className="bg-black-500 flex flex-wrap items-start gap-4 rounded-2xl px-7 pb-7 pt-[30px] transition-all hover:bg-white hover:shadow-2xl">
                <img
                  className="items-start"
                  src="assets/images/skills/framer.png"
                  alt="icons"
                />
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="font-Syne text-black-800 text-xl font-bold leading-normal">
                    Framer
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (80%)
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card id="awards_tab" className="tab-content">
            <h4 className="text-black-800 font-Syne mb-6 text-2xl font-bold lg:text-[32px]">
              Awards
            </h4>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="bg-black-500 group flex flex-col flex-wrap gap-8 rounded-2xl p-8 transition-all hover:bg-white hover:shadow-2xl">
                <div className="flex items-start justify-between">
                  <img src="assets/images/awards/w-dot.png" alt="icons" />
                  <span className="font-Inter text-black-text-800 text-sm font-normal">
                    2018
                  </span>
                </div>
                <div>
                  <p className="text-black-800 before:bg-orange relative z-[1] pl-4 font-sans text-lg font-normal leading-7 before:absolute before:left-0 before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
                    Winner
                  </p>
                  <h4 className="font-Syne text-black-800 text-xl font-bold leading-normal">
                    01X Developer Award
                  </h4>
                </div>
              </div>
              <div className="bg-black-500 group flex flex-col flex-wrap gap-8 rounded-2xl p-8 transition-all hover:bg-white hover:shadow-2xl">
                <div className="flex items-start justify-between">
                  <img src="assets/images/awards/webby.png" alt="icons" />
                  <span className="font-Inter text-black-text-800 text-sm font-normal">
                    2018
                  </span>
                </div>
                <div>
                  <p className="text-black-800 before:bg-orange relative z-[1] pl-4 font-sans text-lg font-normal leading-7 before:absolute before:left-0 before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
                    Winner
                  </p>
                  <h4 className="font-Syne text-black-800 text-xl font-bold leading-normal">
                    01X Developer Award
                  </h4>
                </div>
              </div>
              <div className="bg-black-500 group flex flex-col flex-wrap gap-8 rounded-2xl p-8 transition-all hover:bg-white hover:shadow-2xl">
                <div className="flex items-start justify-between">
                  <img src="assets/images/awards/fwa.png" alt="icons" />
                  <span className="font-Inter text-black-text-800 text-sm font-normal">
                    2018
                  </span>
                </div>
                <div>
                  <p className="text-black-800 before:bg-orange relative z-[1] pl-4 font-sans text-lg font-normal leading-7 before:absolute before:left-0 before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
                    Winner
                  </p>
                  <h4 className="font-Syne text-black-800 text-xl font-bold leading-normal">
                    01X Developer Award
                  </h4>
                </div>
              </div>
              <div className="bg-black-500 group flex flex-col flex-wrap gap-8 rounded-2xl p-8 transition-all hover:bg-white hover:shadow-2xl">
                <div className="flex items-start justify-between">
                  <img src="assets/images/awards/wordpress.png" alt="icons" />
                  <span className="font-Inter text-black-text-800 text-sm font-normal">
                    2018
                  </span>
                </div>
                <div>
                  <p className="text-black-800 before:bg-orange relative z-[1] pl-4 font-sans text-lg font-normal leading-7 before:absolute before:left-0 before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
                    Winner
                  </p>
                  <h4 className="font-Syne text-black-800 text-xl font-bold leading-normal">
                    01X Developer Award
                  </h4>
                </div>
              </div>
            </div>
          </Card>
          <span className="-mr-3 mt-14 flex justify-end">
            <svg
              width={54}
              height={54}
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5625 0C27.5625 23.1273 9.1875 28.5455 0 27.8182C16.875 31.0909 25.3125 34.3636 27 54C27 40.3636 34.875 30.5455 54 27.8182C46.125 28.3636 29.8125 24 27.5625 0Z"
                fill="#FFB646"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
