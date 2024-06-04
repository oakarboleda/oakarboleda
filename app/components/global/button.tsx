import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function Button({ children, className, onClick }: ButtonProps) {
  const classes = clsx(
    'polygon-btn button flex h-10 items-center text-sm text-white transition-colors focus-visible:outline aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
    className,
  );

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
