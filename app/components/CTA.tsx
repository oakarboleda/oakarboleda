import React from 'react';
import { Button } from './global/button';
import { syne } from '@/app/components/fonts';
import { router } from 'next/client';

function CTA() {
  return (
    <div className="container text-slate-100">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="mb-16 flex flex-col justify-between md:flex-row md:items-end">
            <div
              className="aos-init aos-animate flex max-w-[325px] flex-col flex-wrap gap-y-2 font-bold leading-none lg:max-w-[400px] xl:max-w-[527px]"
              data-aos="fade-up"
            >
              <span className="font-xl text-ripe-plum-400">Pricing</span>
              <h3
                className={`${syne.className} text-4xl tracking-[-1.5px] lg:text-5xl xl:text-[64px]`}
              >
                Need a Freelancer?{' '}
                <span className="before:bg-primary relative z-[1] before:absolute before:left-[-4px] before:top-[13px] before:-z-[1] before:block before:h-[36px] before:w-[36px] before:rounded-full lg:before:h-[48px] lg:before:w-[48px] xl:before:h-[64px] xl:before:w-[64px]"></span>
              </h3>
            </div>
            <div
              className="aos-init aos-animate mt-8 flex md:mt-0"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <Button
                onClick={() => router.push('mailto:hello@oakarboleda.com')}
              >
                Contact for Custom Project
                <span className="group-hover:animate-arrow-move-up ml-3 inline-block">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="currentColor"
                      strokeOpacity="0.9"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17V17"
                      stroke="currentColor"
                      strokeOpacity="0.9"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {/* Pricing Item Start */}
        <div
          className="aos-init aos-animate group flex flex-col flex-wrap gap-10 rounded-2xl border-2 border-solid border-slate-50 p-6 transition-all hover:bg-slate-950 hover:shadow-2xl lg:gap-12 lg:p-8"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="flex items-center justify-between">
            <span className="font-sans text-lg font-normal leading-none">
              Basic
            </span>
            <span className="text-orange font-Syne text-xl font-bold">
              $50/h
            </span>
          </div>
          <div className="flex flex-wrap items-end justify-between">
            <div>
              <h4 className="mb-1 text-[32px] font-bold leading-10">10 hrs</h4>
              <p className="font-sans text-lg font-normal leading-none">
                10 hours per week
              </p>
            </div>
            <a
              href="#"
              className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all"
                  d="M7 17L17 7"
                  stroke="currentColor"
                  strokeOpacity="0.6"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="transition-all"
                  d="M7 7H17V17"
                  stroke="currentColor"
                  strokeOpacity="0.6"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Pricing Item End */}
        {/* Pricing Item Start */}
        <div
          className="aos-init aos-animate group flex flex-col flex-wrap gap-10 rounded-2xl border-2 border-solid border-slate-50 p-6 transition-all hover:bg-slate-950 hover:shadow-2xl lg:gap-12 lg:p-8"
          data-aos="fade-up"
          data-aos-delay={500}
        >
          <div className="flex items-center justify-between">
            <span className="text-black-text-600 font-sans text-lg font-normal leading-none">
              Premium
            </span>
            <span className="text-orange font-Syne text-xl font-bold">
              $60/h
            </span>
          </div>
          <div className="flex flex-wrap items-end justify-between">
            <div>
              <h4 className="mb-1 text-[32px] font-bold leading-10">20 hrs</h4>
              <p className="text-black-text-600 font-sans text-lg font-normal leading-none">
                20 hours per week
              </p>
            </div>
            <a
              href="#"
              className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all"
                  d="M7 17L17 7"
                  stroke="currentColor"
                  strokeOpacity="0.6"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="transition-all"
                  d="M7 7H17V17"
                  stroke="currentColor"
                  strokeOpacity="0.6"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Pricing Item End */}
        {/* Pricing Item Start */}
        <div
          className="aos-init aos-animate group flex flex-col flex-wrap gap-10 rounded-2xl border-2 border-solid border-slate-50 p-6 transition-all hover:bg-slate-950 hover:shadow-2xl lg:gap-12 lg:p-8"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="flex items-center justify-between">
            <span className="text-black-text-600 font-sans text-lg font-normal leading-none">
              Platinum
            </span>
            <span className="text-orange font-Syne text-xl font-bold">
              $60/h
            </span>
          </div>

          <div className="flex flex-wrap items-end justify-between">
            <div>
              <h4 className="text-black-800 mb-1 font-Syne text-[32px] font-bold leading-10">
                40 hrs
              </h4>
              <p className="text-black-text-600 font-sans text-lg font-normal leading-none">
                40 hours per week
              </p>
            </div>

            <a
              href="#"
              className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all"
                  d="M7 17L17 7"
                  stroke="currentColor"
                  stroke-opacity="0.6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  className="transition-all"
                  d="M7 7H17V17"
                  stroke="currentColor"
                  stroke-opacity="0.6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
