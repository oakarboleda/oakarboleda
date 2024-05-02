'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import {
  faHouse,
  faCode,
  faUserAstronaut,
  faEnvelope,
  faQuestionCircle,
  faBlog,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const links = [
  { name: 'Home', href: '/home', icon: faHouse },
  {
    name: 'About',
    href: '/about',
    icon: faUserAstronaut,
  },
  { name: 'Projects', href: '/projects', icon: faCode },
  { name: 'Contact', href: '/contact', icon: faEnvelope },
  { name: 'FAQ', href: '/faq', icon: faQuestionCircle },
  { name: 'Blog', href: '/blog', icon: faBlog },
];

export default function HomeLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium"
          >
            <FontAwesomeIcon className="w-6" icon={link.icon} />

            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
