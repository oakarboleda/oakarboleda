import React from 'react';

const Divider: React.FC = () => {
  return (
    <svg
      id="wave"
      style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
      viewBox="0 0 1440 490"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stop-color="rgba(7, 7, 16, 1)" offset="0%" />
          <stop stop-color="rgba(63, 12, 88, 1)" offset="100%" />
        </linearGradient>
      </defs>
      <path
        style={{ transform: '', opacity: 1 }}
        fill="url(#sw-gradient-0)"
        d="M0,49L80,81.7C160,114,320,180,480,171.5C640,163,800,82,960,73.5C1120,65,1280,131,1440,171.5C1600,212,1760,229,1920,261.3C2080,294,2240,343,2400,351.2C2560,359,2720,327,2880,318.5C3040,310,3200,327,3360,277.7C3520,229,3680,114,3840,73.5C4000,33,4160,65,4320,114.3C4480,163,4640,229,4800,261.3C4960,294,5120,294,5280,245C5440,196,5600,98,5760,65.3C5920,33,6080,65,6240,89.8C6400,114,6560,131,6720,179.7C6880,229,7040,310,7200,302.2C7360,294,7520,196,7680,147C7840,98,8000,98,8160,89.8C8320,82,8480,65,8640,81.7C8800,98,8960,147,9120,204.2C9280,261,9440,327,9600,310.3C9760,294,9920,196,10080,130.7C10240,65,10400,33,10560,16.3C10720,0,10880,0,11040,16.3C11200,33,11360,65,11440,81.7L11520,98L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"
      />
    </svg>
  );
};

export default Divider;