import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  ref?: (el: any) => any;
}

export function Button({ children, className, ref }: ButtonProps) {
  const classes = clsx(
    'flex h-10 items-center rounded-lg bg-ripe-plum-900 px-4 text-sm font-medium text-white transition-colors hover:bg-ripe-plum-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
    className,
  );

  return (
    <button ref={ref} className={classes}>
      {children}
    </button>
  );
}
