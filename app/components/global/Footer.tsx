import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { footer } from '@/app/types/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer bg-black-800 pb-[60px] pt-[80px] lg:pt-[100px] xl:pt-[120px]">
      <div className="container">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {footer.columns.map((item, index) => {
            return (
              <div
                key={index}
                className="border-border-white group flex flex-col justify-between rounded-2xl border px-7 py-9"
              >
                <h4 className="text-sm font-bold uppercase text-slate-50">
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
                            className="text-offWhite flex items-center"
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
                          <Link className="text-offWhite" href={item.link}>
                            {item.name}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="border-border-white group flex flex-col justify-between rounded-2xl border px-7 py-9">
            <h4 className="text-offWhite text-sm font-bold uppercase">
              Support My Work
            </h4>
            <div className="mt-4 flex w-full flex-col items-center space-y-2 sm:items-start">
              {footer.support.buymeacoffee !== '' && (
                <div>
                  <a
                    href={`https://buymeacoffee.com/${footer.support.buymeacoffee}`}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faCoffee} size="1x" color="white" />
                  </a>
                </div>
              )}
              {footer.support.paypal !== '' && (
                <div>
                  <a
                    href={`https://paypal.me/${footer.support.paypal}`}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faPaypal} size="1x" color="white" />
                  </a>
                </div>
              )}
              <p className="text-offWhite pt-1 text-xs">
                {footer.support.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
