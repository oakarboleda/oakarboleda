import React from 'react';
import { Button } from './global/button';

function CTA() {
  return (
    <div className="py-15 relative flex h-full items-center justify-center">
      <div className="mx-auto py-10">
        <h2 className="text-offWhite mb-10 text-4xl font-bold md:text-5xl">
          Interested in Working Together?
        </h2>
        <div className="flex items-center justify-center">
          <Button
            className="mr-5"
            onClick={() => {
              window.open('mailto:<EMAIL>?subject=Hello%20Arboleda', 'mailto');
            }}
          >
            {' '}
            Send Email{' '}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
