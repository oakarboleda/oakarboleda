type Route = {
  title: string;
  path: string;
};
export const routes: Route[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Projects',
    path: '/projects',
  },
  {
    title: 'FAQ',
    path: '/faq',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
  support: {
    buymeacoffee: string;
    paypal: string;
    message: string;
  };
};
export const footer: Footer = {
  columns: [
    {
      title: 'Pages',
      links: [
        {
          name: 'Home',
          link: '/',
          leavesWebsite: false,
        },
        {
          name: 'Blog',
          link: '/blog',
          leavesWebsite: false,
        },
        {
          name: 'Projects',
          link: '/projects',
          leavesWebsite: false,
        },
        {
          name: 'Designs',
          link: '/designs',
          leavesWebsite: false,
        },
      ],
    },
    {
      title: 'Social',
      links: [
        {
          name: 'GitHub',
          link: 'https://github.com/oakarboleda',

          leavesWebsite: true,
        },
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/oakarboleda/',

          leavesWebsite: true,
        },
        {
          name: 'Dribbble',
          link: 'https://dribbble.com/oakarboleda',

          leavesWebsite: true,
        },
        {
          name: 'Email',
          link: 'mailto:oakarboleda@gmail.com',

          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: 'oakarboleda',
    paypal: 'oakarboleda',
    message: 'I appreciate your support very much! 💙',
  },
};
