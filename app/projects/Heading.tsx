import React from 'react';
import Image from 'next/image';

type HeadingProps = {
  tag?: string;
};

function Heading({ tag }: HeadingProps) {
  return (
    <div
      className={`${
        tag ? 'pb-4 pt-10 sm:pb-20 sm:pt-24' : 'py-12 sm:py-20'
      } relative w-full text-center`}
    >
      {tag ? (
        <>
          <h1 className="relative mx-auto mb-8 inline-block w-auto text-3xl sm:text-4xl">
            Projects built with <b>{tag}</b>
            <Image
              className="sqD absolute -right-2 -top-6 w-8 sm:-right-8 sm:-top-8 sm:w-10"
              src="/static/doodles/hero/code.svg"
              alt={''}
            />
          </h1>
        </>
      ) : (
        <h1 className="relative mx-auto mb-8 inline-block w-auto text-4xl sm:text-6xl">
          Projects
          <Image
            className="sqD absolute -right-8 -top-8 w-10"
            src="/static/doodles/hero/code.svg"
            alt={''}
          />
        </h1>
      )}
      {!tag && (
        <p className="text-fun-gray m-auto max-w-3xl text-xl sm:text-2xl">
          I`&#39;`ve built cool apps and websites using anything from HTML to
          React (and even PHP!). Here are some of my favorite projects over the
          course of my journey.
        </p>
      )}
    </div>
  );
}

export default Heading;
