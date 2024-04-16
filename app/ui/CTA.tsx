import React from 'react';
import UFO from "@/app/ui/UFO";

function CTA() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="">
        <h2 className="mb-10 text-4xl text-offWhite font-bold md:text-5xl">
          Interested in Working Together?
        </h2>
          <div className="flex items-center justify-center"><a
              href="mailto:oakarboleda@gmail.com"
              className="mt-6 cursor-pointer whitespace-nowrap rounded-full border-2 border-white px-8 py-3 font-bold text-white transition-colors"
          >
              Get in Touch
          </a></div>

      </div>
        <div className="ufo">
            <UFO />
        </div>
    </div>
  );
}

export default CTA;
