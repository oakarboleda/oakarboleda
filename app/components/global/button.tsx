import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  ref?: (el: any) => any;
  onClick?: () => void;
}

export function Button({ children, className, ref, onClick }: ButtonProps) {
  const classes = clsx(
    'button polygon-btn flex h-10 items-center text-sm text-white transition-colors  focus-visible:outline  f aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
    className,
  );

  return (
    <button ref={ref} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
