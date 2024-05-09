'use client';

import React, { useState } from 'react';
import {
  faBlog,
  faCode,
  faEnvelope,
  faHouse,
  faQuestionCircle,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const links = [
  { id: 1, name: 'Home', href: '/', icon: faHouse },
  {
    id: 2,
    name: 'About',
    href: '#about',
    icon: faUserAstronaut,
  },
  { id: 3, name: 'Portfolio', href: '/portfolio', icon: faCode },
  { id: 4, name: 'Contact', href: '#contact', icon: faEnvelope },
  // { id: 5, name: 'FAQ', href: '/faq', icon: faQuestionCircle },
  // { id: 6, name: 'Blog', href: '/blog', icon: faBlog },
];
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute top-0 z-10 flex w-full xl:pl-12">
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
      </div>
      <nav className={isOpen ? 'header-nav open' : 'header-nav'}>
        <div className="flex justify-between px-3 py-2">
          <ul className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium">
            {links.map((link) => (
              <li
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-50"
                key={link.id}
              >
                <FontAwesomeIcon className="w-6" icon={link.icon} />
                <a href={link.href} className="text-white">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
