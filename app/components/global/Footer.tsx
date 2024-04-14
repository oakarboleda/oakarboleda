import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { footer } from '@/app/types/global';

function Footer() {
  return (
    <footer className="z-5 bg-bg flex w-screen flex-col border-t px-5 py-10">
      <div className="m-auto grid w-full max-w-4xl grid-cols-2 items-start justify-between sm:grid-cols-3">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="mb-5 text-left sm:mb-0">
              <h4 className="text-fun-gray text-sm font-bold uppercase">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="flex items-center"
                        >
                          {item.icon && (
                            <span className="-mb-1 pr-2">
                              <Image
                                src={item.icon}
                                width={20}
                                height={20}
                                alt={''}
                              />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="text-fun-gray border-fun-pink-dark col-span-2 border-t pt-8 text-center sm:col-auto sm:mt-0 sm:border-0 sm:pt-0 sm:text-left">
          <h4 className="text-fun-gray text-sm font-bold uppercase">
            Support My Work
          </h4>
          <div className="mt-4 flex w-full flex-col items-center space-y-2 sm:items-start">
            {footer.support.buymeacoffee !== '' && (
              <div>
                <a
                  href={`https://buymeacoffee.com/${footer.support.buymeacoffee}`}
                  target="_blank"
                >
                  <Image
                    src="coffee.svg"
                    className="mr-2 h-12 opacity-100 transition-opacity hover:opacity-80"
                    alt="Buy me Coffee"
                    width={15}
                    height={15}
                  />
                </a>
              </div>
            )}
            {footer.support.paypal !== '' && (
              <div>
                <a
                  href={`https://paypal.me/${footer.support.paypal}`}
                  target="_blank"
                >
                  <Image
                    src="paypal.svg"
                    className="mr-2 h-12 opacity-100 transition-opacity hover:opacity-80"
                    alt="paypal"
                    width={15}
                    height={15}
                  />
                </a>
              </div>
            )}
            <p className="text-fun-gray pt-1 text-xs">
              {footer.support.message}
            </p>
          </div>
        </div>
      </div>
      <div className="text-fun-gray border-fun-pink-dark m-auto mt-8 w-full max-w-4xl border-t pt-8 text-center sm:mt-4 sm:pt-4">
        <p className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center text-xs font-bold uppercase tracking-widest">
            Made with{' '}
            <div className="-mt-1 ml-3 inline-flex items-center space-x-2">
              <span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  title="React"
                  alt="React"
                  width={15}
                  height={15}
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width={15}
                  height={15}
                  className="invert"
                  title="NextJS"
                  alt={''}
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width={15}
                  height={15}
                  title="TailwindCSS"
                  alt={''}
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs ">
            Made by{' '}
            <a
              href="mailto:contact@braydentw.io"
              className="text-fun-gray-light font-medium"
            ></a>
            .
          </div>
        </p>
      </div>
      <div className="mt-8 text-center sm:-mt-12 sm:text-right">
        <a
          className="border-fun-pink text-fun-pink inline-flex w-auto flex-shrink cursor-pointer items-center rounded-xl border px-4 py-2 text-xs font-bold opacity-50 sm:w-auto"
          href="https://github.com/oakarboleda/"
          rel="nooreferrer"
        >
          <Image src="github.svg" width={16} height={16} alt="Github Icon" />
          <span className="ml-2">View Source Code </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
