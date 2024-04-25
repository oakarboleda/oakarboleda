import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/app/components/global/button';
import tabsData from '@/app/types/tabs';
import { syne } from '../components/fonts';

export function Tabs({
  activeTabIndex,
  setActiveTabIndex,
}: {
  activeTabIndex: number;
  setActiveTabIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const tabsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    // Rest of the code
  }, [activeTabIndex]);

  return (
    <div className={`${syne.className}`}>
      <div className="tabs my-8 flex flex-wrap gap-2 lg:my-0 lg:flex-col">
        <div className="tabs my-8 flex flex-wrap gap-2 lg:my-0 lg:flex-col">
          {tabsData.map((tab, id) => {
            return (
              <Button
                key={id}
                className={`aria-disabled:opacity-50' flex h-10 items-center  px-4 text-sm font-medium transition-colors hover:bg-ripe-plum-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed
 ${
   activeTabIndex === id ? 'active' : ''
 } group inline-flex items-center justify-between`}
                onClick={() => {
                  setActiveTabIndex(id);
                }}
              >
                {tab.label}

                <span className="group-hover:animate-arrow-move-up ml-3 inline-block">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="currentColor"
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7 7H17V17"
                      stroke="currentColor"
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </Button>
            );
          })}
        </div>
        {/* Rest of the code */}
      </div>
    </div>
  );
}
