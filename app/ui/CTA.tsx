import React from 'react';

function CTA() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="">
        <h2 className="mb-10 text-4xl font-bold md:text-5xl">
          Interested in Working Together?
        </h2>
        <a
          href="mailto:oakarboleda@gmail.com"
          className="mt-6 cursor-pointer whitespace-nowrap rounded-full border-2 border-white px-8 py-3 font-bold text-white transition-colors"
        >
          Get in Touch
        </a>
      </div>
      <div className="custom-shape-divider-top-1713042292"></div>
    </div>
  );
}

export default CTA;
