'use client';

import React, { useState } from 'react';
import { Tabs } from '@/app/tabs/Tabs';
import TabContent from '@/app/tabs/content';
import { syne } from '@/app/components/fonts';

function Features() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="container text-slate-50">
      <span className="-mr-3 mt-14 flex justify-start">
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
      <div className="grid grid-cols-12 lg:gap-[60px] xl:gap-[100px] 2xl:gap-[134px]">
        <div
          className="aos-init aos-animate col-span-12 lg:col-span-5 2xl:col-span-4"
          data-aos="fade-up"
        >
          <div
            className={`${syne.className} mb-4 flex flex-col flex-wrap gap-y-2 font-bold leading-none`}
          >
            <span className="text-xl">Resume</span>
            <h3 className="before:bg-primary relative text-4xl tracking-[-1.5px] before:absolute before:left-0 before:top-[2px] before:-z-[1] before:block before:h-[36px] before:w-[36px] before:rounded-full lg:text-5xl lg:before:h-[48px] lg:before:w-[48px] xl:text-[64px] xl:before:h-[64px] xl:before:w-[64px]">
              All over my details find here...
            </h3>
          </div>
          <div className="tabs my-8 flex flex-wrap gap-2 lg:my-0 lg:flex-col">
            <Tabs
              activeTabIndex={activeTabIndex}
              setActiveTabIndex={setActiveTabIndex}
            />
          </div>
        </div>
        <div
          className="aos-init aos-animate col-span-12 lg:col-span-7 2xl:col-span-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="tab-content active relative">
            <TabContent activeTabIndex={activeTabIndex} />
          </div>
        </div>
        {/* Rest of the code */}
      </div>
      <span className="-mr-2 mt-11 flex justify-end">
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
  );
}

export default Features;
