import React from 'react';
import services from '@/app/types/skills';

function Services() {
  return (
    <div className="container">
      <div className="aos-init aos-animate mb-12 grid grid-cols-12  gap-6 2xl:gap-0">
        <div className="col-span-12 lg:col-span-6 xl:col-span-6">
          <div className="flex flex-col flex-wrap gap-y-2 font-Syne font-bold leading-none">
            <span className="text-xl text-white">Services</span>
            <h3 className="before:bg-primary relative text-4xl tracking-[-1.5px] text-white before:absolute before:left-0 before:top-[2px] before:-z-[1] before:block before:h-[36px] before:w-[36px] before:rounded-full lg:text-5xl lg:before:h-[48px] lg:before:w-[48px] xl:text-[64px] xl:before:h-[60px] xl:before:w-[60px]">
              My specialties
            </h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {services.map((item) => {
              return (
                <>
                  <li
                    key={item.id}
                    className="aos-animate aos-init flex flex-col flex-wrap justify-between gap-8 rounded-2xl border-2 border-solid border-baltic-sea-50 bg-transparent px-7 pb-7 pt-[30px] transition-all hover:bg-slate-950 hover:shadow-2xl"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h4>
                      <a
                        href="/projects"
                        className="lex  flex-wrap items-end justify-between font-Syne text-xl font-bold text-white transition-all"
                      >
                        {item.title}
                        <span className="group-hover:animate-arrow-move-up">
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
                              strokeOpacity="0.6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              className="transition-all"
                              d="M7 7H17V17"
                              stroke="currentColor"
                              strokeOpacity="0.6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </h4>
                  </li>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
