import React from 'react';
import { duruSans, oranienbaum, syne } from '../components/fonts';

type TabContentProps = {
  activeTabIndex: number;
};

const TabContent: React.FC<TabContentProps> = ({ activeTabIndex }) => {
  const renderTabContent = () => {
    switch (activeTabIndex) {
      case 0:
        return (
          <div id="1" className="tab-content active relative">
            <div className="grid grid-cols-1">
              <h4 className=" mb-6 font-Syne text-2xl font-bold lg:text-[32px]">
                Hello from Minnesota
              </h4>
              <p className="paragraph mb-7">
                Oak Arboleda,{' '}
                <span className="text-slate-50">Software Engineer</span>, based
                in Minneapolis, Minnesota.
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
                    Oak Arboleda
                  </span>
                </li>
                <li className="inline-flex items-center gap-10">
                  <span className="text-black-text-800 w-[110px] text-lg font-normal leading-none">
                    Email
                  </span>
                  <span className="text-black-800 font-Syne text-2xl font-bold leading-8">
                    hello@sharedcreatives.com
                  </span>
                </li>
                <li className="inline-flex items-center gap-10">
                  <span className="text-black-text-800 w-[110px] text-lg font-normal leading-none">
                    Experience
                  </span>
                  <span className="text-black-800 font-Syne text-2xl font-bold leading-8">
                    10+ years
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
              </ul>
            </div>
          </div>
        );
      case 1:
        return (
          <div id="2" className="tab-content relative">
            <h4 className="mb-6 text-2xl font-bold text-slate-50 lg:text-[32px]">
              Experience
            </h4>

            <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
              <div className="flex flex-col flex-wrap justify-between gap-8 rounded-2xl border-2 border-solid border-slate-50 bg-transparent px-7 pb-7 pt-[30px] transition-all hover:bg-slate-950 hover:shadow-2xl">
                <span
                  className={`${syne.className} text-sm font-normal leading-tight`}
                >
                  08/08 – Present
                </span>
                <div>
                  <p
                    className={`${syne.className} relative z-[1] pl-4 text-lg font-normal leading-7 before:absolute before:left-0 before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full`}
                  >
                    Shared Creatives Collective
                  </p>
                  <h4
                    className={`${syne.className} mb-2 text-xl font-bold leading-normal`}
                  >
                    Software Engineer
                  </h4>
                </div>
              </div>

              <div className="flex flex-col flex-wrap justify-between gap-8 rounded-2xl bg-baltic-sea-500 px-7 pb-7 pt-[30px] transition-all hover:bg-ripe-plum-400 hover:shadow-2xl">
                <span className="text-black-text-800 text-sm font-normal leading-tight">
                  03/2021 – 11/2023
                </span>
                <div>
                  <p className="text-black-800 before:bg-orange relative z-[1] pl-4 font-sans text-lg font-normal leading-7 before:absolute before:left-0 before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
                    Experience IT
                  </p>
                  <h4 className="text-black-800 text-2xl font-bold leading-normal">
                    Senior Software Engineer
                  </h4>
                </div>
              </div>

              <div className="flex flex-col flex-wrap justify-between gap-8 rounded-2xl bg-baltic-sea-500 px-7 pb-7 pt-[30px] transition-all hover:bg-ripe-plum-400 hover:shadow-2xl">
                <span className="font-Inter text-black-text-800 text-sm font-normal leading-tight">
                  03/2021 – 07/2021
                </span>
                <div>
                  <p className="text-black-800 before:bg-orange relative z-[1] pl-4 font-sans text-lg font-normal leading-7 before:absolute before:left-0 before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
                    Prep Network
                  </p>
                  <h4 className="text-black-800 font-Syne text-2xl font-bold leading-normal">
                    FullStack Developer
                  </h4>
                </div>
              </div>

              <div className="flex flex-col flex-wrap justify-between gap-8 rounded-2xl bg-baltic-sea-500 px-7 pb-7 pt-[30px] transition-all hover:bg-ripe-plum-400 hover:shadow-2xl">
                <span className="font-Inter text-black-text-800 text-sm font-normal leading-tight">
                  03/2018 – 07/2021
                </span>
                <div>
                  <p className="text-black-800 before:bg-orange relative z-[1] pl-4 font-sans text-lg font-normal leading-7 before:absolute before:left-0 before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
                    The Star Tribune
                  </p>
                  <h4 className="text-black-800 font-Syne text-2xl font-bold leading-normal">
                    Software Engineer
                  </h4>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div id="3" className="tab-content">
            <h4 className="text-black-800 mb-6 font-Syne text-2xl font-bold lg:text-[32px]">
              Education
            </h4>

            <div className="grid grid-cols-1 gap-6">
              <div className="border-solid-slate-300 flex flex-wrap gap-[30px] rounded-2xl border-2 px-7 pb-7 pt-[30px] transition-all hover:bg-slate-950 hover:shadow-2xl md:gap-[60px] lg:gap-[104px]">
                <span className="font-Inter text-black-text-800 text-sm font-normal leading-tight">
                  10/2010 – 07/2014
                </span>
                <div className="flex-1">
                  <p className="text-black-800 before:bg-orange relative z-[1] pl-4 font-sans text-lg font-normal leading-7 before:absolute before:left-0 before:top-[50%] before:-z-[1] before:block before:h-[8px] before:w-[8px] before:translate-y-[-50%] before:rounded-full">
                    The Art Insititues International of Minnesota
                  </p>
                  <h4 className="text-black-800 font-Syne text-2xl font-bold leading-normal">
                    Bacholers of Science in Software Development & Interactive
                    Media
                  </h4>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div id="skills_tab" className="tab-content">
            <h4 className="text-black-800 mb-6 font-Syne text-2xl font-bold lg:text-[32px]">
              Skills
            </h4>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              <div className="flex flex-col flex-wrap justify-between gap-8 rounded-2xl border-2 border-slate-300 bg-transparent px-7 pb-7 pt-[30px] transition-all hover:bg-slate-950 hover:shadow-2xl">
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="text-black-800 font-Syne text-xl font-bold leading-normal">
                    React JS
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (90%)
                  </p>
                </div>

                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="text-black-800 font-Syne text-xl font-bold leading-normal">
                    Figma
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (70%)
                  </p>
                </div>
              </div>

              <div className="flex flex-col flex-wrap justify-between gap-8 rounded-2xl border-2 border-slate-300 bg-transparent px-7 pb-7 pt-[30px] transition-all hover:bg-slate-950 hover:shadow-2xl">
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="text-black-800 font-Syne text-xl font-bold leading-normal">
                    Framer
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (80%)
                  </p>
                </div>
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="text-black-800 font-Syne text-xl font-bold leading-normal">
                    Figma
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (70%)
                  </p>
                </div>
              </div>

              <div className="flex flex-col flex-wrap justify-between gap-8 rounded-2xl border-2 border-slate-300 bg-transparent px-7 pb-7 pt-[30px] transition-all hover:bg-slate-950 hover:shadow-2xl">
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="text-black-800 font-Syne text-xl font-bold leading-normal">
                    Framer
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (80%)
                  </p>
                </div>
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="text-black-800 font-Syne text-xl font-bold leading-normal">
                    Figma
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (70%)
                  </p>
                </div>
              </div>

              <div className="flex flex-col flex-wrap justify-between gap-8 rounded-2xl border-2 border-slate-300 bg-transparent px-7 pb-7 pt-[30px] transition-all hover:bg-slate-950 hover:shadow-2xl">
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="text-black-800 font-Syne text-xl font-bold leading-normal">
                    Framer
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (80%)
                  </p>
                </div>
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="text-black-800 font-Syne text-xl font-bold leading-normal">
                    Figma
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (70%)
                  </p>
                </div>
              </div>

              <div className="flex flex-col flex-wrap justify-between gap-8 rounded-2xl border-2 border-slate-300 bg-transparent px-7 pb-7 pt-[30px] transition-all hover:bg-slate-950 hover:shadow-2xl">
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="text-black-800 font-Syne text-xl font-bold leading-normal">
                    Framer
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (80%)
                  </p>
                </div>
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="text-black-800 font-Syne text-xl font-bold leading-normal">
                    Figma
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (70%)
                  </p>
                </div>
              </div>
              <div className="flex flex-col flex-wrap justify-between gap-8 rounded-2xl border-2 border-slate-300 bg-transparent px-7 pb-7 pt-[30px] transition-all hover:bg-slate-950 hover:shadow-2xl">
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="text-black-800 font-Syne text-xl font-bold leading-normal">
                    Framer
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (80%)
                  </p>
                </div>
                <div className="flex flex-1 flex-col flex-wrap gap-1">
                  <h4 className="text-black-800 font-Syne text-xl font-bold leading-normal">
                    Figma
                  </h4>
                  <p className="font-Inter text-black-800 text-sm font-normal leading-none">
                    (70%)
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return <>{renderTabContent()}</>;
};

export default TabContent;
