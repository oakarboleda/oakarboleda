import React from 'react';

function CTA() {
  return (
    <div className="">
      <div className="pb-40 pt-14">
        <h2 className="mb-10 text-4xl font-bold md:text-5xl">
          Interested in Working Together?
        </h2>
        <a
          href="mailto:oakarboleda@gmail.com"
          className="bg-bg
        mt-6 cursor-pointer whitespace-nowrap rounded-full border-2 border-white px-8 py-3 font-bold text-white transition-colors"
        >
          Get in Touch
        </a>
      </div>
      <div className="custom-shape-divider-top-1713042292">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>{' '}
    </div>
  );
}

export default CTA;
