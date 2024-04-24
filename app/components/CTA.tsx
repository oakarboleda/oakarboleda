import React from 'react';
import { Button } from './global/button';
import { syne } from '@/app/components/fonts';

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
              <span className="font-xl text-orange-600">Pricing</span>
              <h3 className="text-4xl tracking-[-1.5px] lg:text-5xl xl:text-[64px]">
                Stay chill and pick your{' '}
                <span className="before:bg-primary relative z-[1] before:absolute before:left-[-4px] before:top-[13px] before:-z-[1] before:block before:h-[36px] before:w-[36px] before:rounded-full lg:before:h-[48px] lg:before:w-[48px] xl:before:h-[64px] xl:before:w-[64px]">
                  pl
                </span>
                an
              </h3>
            </div>
            <div
              className="aos-init aos-animate mt-8 flex md:mt-0"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <Button
                href={'/contact'}
                className="btn-primary group flex flex-wrap items-center"
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
          className="aos-init aos-animate group flex flex-col flex-wrap gap-10 rounded-2xl p-6 transition-all hover:bg-white hover:shadow-2xl lg:gap-12 lg:p-8"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="flex items-center justify-between">
            <span className="font-sans text-lg font-normal leading-none">
              Basic
            </span>
            <span className="text-orange font-Syne text-xl font-bold">
              $30/h
            </span>
          </div>
          <div className="flex flex-wrap items-end justify-between">
            <div>
              <h4
                className={`${syne.className} mb-1 text-[32px] font-bold leading-10`}
              >
                20 hrs
              </h4>
              <p className=" font-sans text-lg font-normal leading-none">
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
          className="bg-black-500 aos-init aos-animate group flex flex-col flex-wrap gap-10 rounded-2xl p-6 transition-all hover:bg-white hover:shadow-2xl lg:gap-12 lg:p-8"
          data-aos="fade-up"
          data-aos-delay={500}
        >
          <div className="flex items-center justify-between">
            <span className="text-black-text-600 font-sans text-lg font-normal leading-none">
              Premium
            </span>
            <span className="text-orange font-Syne text-xl font-bold">
              $35/h
            </span>
          </div>
          <div className="flex flex-wrap items-end justify-between">
            <div>
              <h4
                className={`${syne.className} mb-1 text-[32px] font-bold leading-10`}
              >
                30 hrs
              </h4>
              <p className="text-black-text-600 font-sans text-lg font-normal leading-none">
                15 hours per week
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
          className="bg-black-500 aos-init aos-animate group flex flex-col flex-wrap gap-10 rounded-2xl p-6 transition-all hover:bg-white hover:shadow-2xl lg:gap-12 lg:p-8"
          data-aos="fade-up"
          data-aos-delay={700}
        >
          <div className="flex items-center justify-between">
            <span className="font-sans text-lg font-normal leading-none">
              Platinum
            </span>
            <span className="text-orange font-Syne text-xl font-bold">
              $65/h
            </span>
          </div>
          <div className="flex flex-wrap items-end justify-between">
            <div>
              <h4
                className={`${syne.className} mb-1 text-[32px] font-bold leading-10`}
              >
                20 hrs
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
      </div>
    </div>
  );
}

export default CTA;
