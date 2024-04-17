import React from 'react';

function CTA() {
  return (
    <div className="py-15 relative flex h-full items-center justify-center">
      <div className="mx-auto py-10">
        <h2 className="mb-10 text-4xl font-bold text-offWhite md:text-5xl">
          Interested in Working Together?
        </h2>
        <div className="flex items-center justify-center">
          <a
            href="mailto:oakarboleda@gmail.com"
            className="mt-6 cursor-pointer whitespace-nowrap rounded-full border-2 border-white px-8 py-3 font-bold text-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default CTA;
