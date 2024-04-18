import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { footer } from '@/app/types/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="z-5 flex w-screen flex-col border-t px-5 py-10">
      <div className="m-auto grid w-full max-w-4xl grid-cols-2 items-start justify-between sm:grid-cols-3">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="mb-5 text-left sm:mb-0">
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
                          className="flex items-center text-offWhite"
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
        <div className="col-span-2 border-t pt-8 text-center sm:col-auto sm:mt-0 sm:border-0 sm:pt-0 sm:text-left">
          <h4 className="text-sm font-bold uppercase text-offWhite">
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
            <p className="pt-1 text-xs text-offWhite">
              {footer.support.message}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
