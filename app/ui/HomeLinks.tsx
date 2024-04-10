'use client';

import {
  UserGroupIcon,
  HomeIcon,
  CodeBracketIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

function classNames(classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const links = [
  { name: 'Home', href: '/home', icon: HomeIcon },
  {
    name: 'About',
    href: '/about',
    icon: SparklesIcon,
  },
  { name: 'Projects', href: '/projects', icon: CodeBracketIcon },
  { name: 'Contact', href: '/contact', icon: EnvelopeIcon },
  { name: 'FAQ', href: '/faq', icon: QuestionMarkCircleIcon },
  { name: 'Blog', href: '/blog', icon: UserGroupIcon },
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
            className={clsx(
              'flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />

            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
