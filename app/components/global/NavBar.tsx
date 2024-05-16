'use client';

import React, { useRef, useState } from 'react';
import {
  faBlog,
  faCode,
  faEnvelope,
  faHouse,
  faQuestionCircle,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const links = [
  { id: 1, name: 'Home', href: '/', icon: faHouse },
  {
    id: 2,
    name: 'About',
    href: '/#about',
    icon: faUserAstronaut,
  },
  { id: 3, name: 'Portfolio', href: '/#portfolio', icon: faCode },
  { id: 4, name: 'Contact', href: '/#contact', icon: faEnvelope },
  // { id: 5, name: 'FAQ', href: '/faq', icon: faQuestionCircle },
  // { id: 6, name: 'Blog', href: '/blog', icon: faBlog },
];
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const mobileMenu = document.getElementById('mobile-menu-2');
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    }
  };
  const router = useRouter();
  return (
    <nav className="header header-nav bg-slate-950 py-2.5 text-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4">
        <a href="#" className="flex items-center">
          <img
            src="/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Arboleda Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Arboleda
          </span>
        </a>
        <div className="flex items-center lg:order-2">
          <div className="mr-4 mt-2 hidden sm:inline-block">
            <span></span>
          </div>
          <a
            href="/resume.pdf"
            download
            className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 sm:mr-2 lg:mr-0 lg:px-5 lg:py-2.5"
          >
            Download Resume
          </a>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="true"
            onClick={() => {
              toggleMenu();
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className="w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
          id="mobile-menu-2"
        >
          <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
            {links.map((link) => (
              <li
                className="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-purple-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                key={link.id}
              >
                <FontAwesomeIcon
                  height={55}
                  className="w-7 text-white"
                  icon={link.icon}
                />
                <Link
                  href={link.href}
                  onClick={() => router.push('/#', { scroll: false })}
                  color="white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
