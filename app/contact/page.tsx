import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Astronaut from '../components/Astro';
import { Button } from '@/app/components/global/button';

export default function Contact() {
  return (
    <>
      <div
        className="mb-0 ml-auto mr-auto mt-0 flex max-w-7xl flex-col items-center justify-between pb-0 pl-10 pr-10 pt-0
      lg:flex-row xl:px-5"
      >
        <div className="flex w-full flex-col items-center pb-20 pl-10 pr-10 pt-5 lg:flex-row lg:pt-20">
          <div className="relative w-full max-w-md bg-cover lg:w-7/12 lg:max-w-2xl">
            <div className="relative flex h-full w-full flex-col items-center justify-center lg:pr-10">
              <Astronaut />
            </div>
          </div>
          <div className="relative z-10 mb-0 ml-0 mr-0 mt-20 w-full max-w-2xl lg:mt-0 lg:w-5/12">
            <div
              className="relative z-10 flex flex-col items-start justify-start rounded-xl bg-white pb-10 pl-10 pr-10
            pt-10 shadow-2xl"
            >
              <p className="w-full text-center font-serif text-4xl font-medium leading-snug">
                Feel Free to Contact me
              </p>
              <div className="relative mb-0 ml-0 mr-0 mt-6 w-full space-y-8">
                <div className="relative">
                  <p
                    className="absolute -mt-3 mb-0 ml-2 mr-0 bg-white pb-0 pl-2 pr-2 pt-0 font-medium
                  text-gray-600"
                  >
                    Name
                  </p>
                  <input
                    placeholder="John"
                    type="text"
                    className="mb-0 ml-0 mr-0
                  mt-2 block w-full rounded-md border border-gray-300 bg-white pb-4 pl-4 pr-4 pt-4 text-base placeholder-gray-400
                  focus:border-black focus:outline-none"
                  />
                </div>
                <div className="relative">
                  <p className="absolute -mt-3 mb-0 ml-2 mr-0 bg-white pb-0 pl-2 pr-2 pt-0 font-medium text-gray-600">
                    Email
                  </p>
                  <input
                    placeholder="123@ex.com"
                    type="email"
                    className="mb-0 ml-0 mr-0
                  mt-2 block w-full rounded-md border border-gray-300 bg-white pb-4 pl-4 pr-4 pt-4 text-base placeholder-gray-400
                  focus:border-black focus:outline-none"
                  />
                </div>
                <div className="relative">
                  <p
                    className="absolute -mt-3 mb-0 ml-2 mr-0 bg-white pb-0 pl-2 pr-2 pt-0 font-medium
                  text-gray-600"
                  >
                    Message
                  </p>
                  <input
                    placeholder="Message"
                    type="textarea"
                    className="mb-0 ml-0 mr-0
                  mt-2 block w-full rounded-md border border-gray-300 bg-white pb-4 pl-4 pr-4 pt-4 text-base placeholder-gray-400
                  focus:border-black focus:outline-none"
                  />
                </div>
                <div className="relative">
                  <a
                    className="ease inline-block w-full border border-gray-300 bg-gray-900 pb-4 pl-5 pr-5 pt-4 text-center text-xl font-medium
                  text-white  transition duration-200 hover:bg-ripe-plum-900"
                    onClick={() => console.log('clicked')}
                  >
                    Submit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
