import React from 'react';

type HeadingProps = {
  heading: string;
};

function Heading({ heading }: HeadingProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white">{heading}</h1>
      <hr className="my-3 border-gray-600" />
    </div>
  );
}

export default Heading;
