import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faBehance,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { Button } from '@/app/components/global/button';

function About() {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-2 xl:gap-[134px]">
          <div className="relative">
            <Image
              width={300}
              height={300}
              src="/oak.png"
              alt="Oak Arboleda"
              layout="responsive"
              objectFit="cover"
            />
            <div className="absolute bottom-0 right-0 z-10 flex flex-col flex-wrap md:right-[170px] lg:right-[-30px]">
              <span className="font-Syne before:bg-primary relative inline-block text-[65px] font-bold leading-none text-white before:absolute before:left-[-13px] before:top-[50%] before:-z-[1] before:block before:h-[95px] before:w-[95px] before:translate-y-[-50%] before:rounded-full lg:before:h-[100px] lg:before:w-[100px] xl:text-[80px] xl:before:h-[110px] xl:before:w-[110px]">
                10+
              </span>
              <span className="outline-text mt-5 text-[90px] text-white sm:text-[60px]">
                Years of <br /> experience
              </span>
            </div>
          </div>
          <div className="font-Syne flex flex-col flex-wrap gap-y-2 font-bold leading-none">
            <span className="text-xl text-ripe-plum-400">Hello I’m</span>
            <h3 className="before:bg-primary relative text-4xl tracking-[-1.5px] text-white before:absolute before:left-0 before:top-[2px] before:-z-[1] before:block before:h-[36px] before:w-[36px] before:rounded-full lg:text-5xl lg:before:h-[48px] lg:before:w-[48px] xl:text-[64px] xl:before:h-[64px] xl:before:w-[64px]">
              Oak Arboleda, Software Engineer
            </h3>

            <h4 className="mb-4 mt-3 text-2xl text-white lg:text-3xl xl:text-[44px]">
              Based in USA
            </h4>
            <br />
            <p className="paragraph mb-6">
              I am a seasoned software developer with decades of hands-on
              experience in the ever-evolving world of software engineering. My
              passion lies in crafting exceptional applications, and I
              specialize in harnessing its power to deliver cross-platform
              solutions that blend efficiency with user-centric design.
            </p>
            <ul className="mb-7 flex flex-wrap gap-9 2xl:gap-[40px]">
              <li>
                <span className="before:bg-black-300 font-Syne relative text-[32px] font-bold leading-10 text-white before:absolute before:left-0 before:right-0 before:top-[0px] before:-z-[1] before:block before:h-[43px] before:w-[43px] before:rounded-full">
                  <a href="https://github.com/oakarboleda">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </span>
              </li>
              <li>
                <span className="before:bg-black-300 font-Syne relative text-[32px] font-bold leading-10 text-white before:absolute before:left-0 before:right-0 before:top-[0px] before:-z-[1] before:block before:h-[43px] before:w-[43px] before:rounded-full">
                  <a href="https://www.linkedin.com/in/oakarboleda/">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </span>
              </li>
              <li>
                <span className="before:bg-black-300 font-Syne relative text-[32px] font-bold leading-10 text-white before:absolute before:left-0 before:right-0 before:top-[0px] before:-z-[1] before:block before:h-[43px] before:w-[43px] before:rounded-full">
                  <a href="https://www.behance.net/oaknarboleda">
                    <FontAwesomeIcon icon={faBehance} />
                  </a>
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap">
              <Button
                className="button polygon-btn text-white"
                href="/arboleda.pdf"
              >
                Download my resume
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
