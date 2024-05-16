import Link from 'next/link';
import React from 'react';
import UFO from '@/app/components/UFO';
import { useRouter } from 'next/navigation';
function Footer() {
  const router = useRouter();
  return (
    <footer className="footer bg-baltic-sea-950 pb-[60px] pt-[80px] lg:pt-[100px] xl:pt-[120px]">
      <div className="container">
        <div className="overflow-x-hidden" data-aos="flip-down">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <div className="pt-12">
              <h3 className="font-Syne text-4xl font-bold tracking-[-1.5px] text-white lg:text-5xl xl:text-[64px]">
                <span className="before:bg-primary relative z-[1] before:absolute before:left-[0] before:top-[8px] before:-z-[1] before:block before:h-[36px] before:w-[36px] before:rounded-full lg:before:h-[48px] lg:before:w-[48px] xl:before:h-[60px] xl:before:w-[60px]">
                  Le
                </span>
                t’s work together
              </h3>
              <div className="mt-10 flex flex-wrap items-center">
                <span className="font-Syne text-xl font-bold text-white"></span>
                <div className="ml-5 md:ml-[5px] lg:ml-0 xl:ml-[16px] 2xl:ml-5"></div>
              </div>
            </div>
            <div className="border-border-white group flex flex-col justify-between rounded-2xl border px-7 py-9">
              <h3 className="font-Syne text-xl font-bold text-white">
                Looking for ?
              </h3>
              <div className="flex items-center justify-between">
                <p className="font-Syne text-2xl font-bold leading-none text-white">
                  hello@oakarboleda.com
                </p>
                <a
                  onClick={() => router.push('mailto:hello@oakarboleda.com')}
                  href="mailto:oakarboleda@gmail.com"
                  className="group-hover:animate-arrow-move-up group-hover:text-orange text-white"
                >
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6667 28.3334L28.3334 11.6667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6667 11.6667H28.3334V28.3334"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="border-border-white group flex flex-col justify-between rounded-2xl border px-7 py-9">
              <h3 className="font-Syne text-xl font-bold text-white">
                Want to support my work?
              </h3>
              <div className="flex items-center justify-between">
                <p className="font-Syne text-2xl font-bold leading-none text-white">
                  Buy Me A Coffee
                </p>
                <Link
                  href="https://www.buymeacoffee.com/oakarboleda"
                  className="group-hover:animate-arrow-move-up group-hover:text-orange text-white"
                >
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6667 28.3334L28.3334 11.6667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6667 11.6667H28.3334V28.3334"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="z-40 py-[220px]">
              <UFO />
            </div>
          </div>
          <div className="border-border-white border-t pt-6 ">
            <div className="grid grid-cols-12">
              <div className="order-last col-span-12 sm:order-first sm:col-span-8">
                <p className="font-sans text-lg font-normal leading-7 text-white">
                  ©2024 Oak Arboleda, All Rights Reserved
                </p>
              </div>
              <div className="order-first col-span-12 sm:order-last sm:col-span-4">
                <div className="mb-2 flex justify-end sm:mb-0">
                  <a
                    id="scrollUp"
                    className="group flex flex-wrap items-center gap-2"
                    href="#"
                    aria-label="scroll up"
                    style={{ bottom: 60 }}
                  >
                    <span className="group-hover:text-orange font-sans text-lg font-normal leading-7 text-white transition-all">
                      Back to Top
                    </span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 19V5"
                        stroke="#FFB646"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 12L12 5L5 12"
                        stroke="#FFB646"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
