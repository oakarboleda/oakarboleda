import { SVGProps, useEffect, useState } from 'react';
import Link from 'next/link';
import { routes } from '@/app/types/global';

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const [isMenuRendered, setIsMenuRendered] = useState(false);

  useEffect(() => {
    let enterDelayTimeout: string | number | NodeJS.Timeout | undefined;
    let exitDelayTimeout: string | number | NodeJS.Timeout | undefined;

    if (isMenuOpen) {
      enterDelayTimeout = setTimeout(() => {
        setIsMenuMounted(true);
        setIsMenuRendered(true);
      }, 20);
    } else {
      setIsMenuRendered(false);
      exitDelayTimeout = setTimeout(() => {
        setIsMenuMounted(false);
      }, 300);
    }

    return () => {
      clearTimeout(enterDelayTimeout);
      clearTimeout(exitDelayTimeout);
    };
  }, [isMenuOpen]);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <nav>
      <div
        className={`flex w-full items-center justify-between ${
          isMenuRendered && 'bg-bg'
        } p-5`}
        style={{ zIndex: 101 }}
      >
        <li className="list-none text-lg font-bold">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Link>
        </li>
        <button
          className="burger visible md:hidden"
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
      </div>
      {isMenuMounted && (
        <ul
          className={`menu bg-bg absolute flex flex-col
            ${isMenuRendered && 'menuRendered'}`}
        >
          {routes.map((item, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <li
                className="border-b border-gray-900 text-sm font-semibold text-gray-100"
                style={{ transitionDelay: `${150 + index * 25}ms` }}
              >
                <Link href={item.path}>
                  <a className="flex w-auto pb-4">{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="absolute h-5 w-5 text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="absolute h-5 w-5 text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
