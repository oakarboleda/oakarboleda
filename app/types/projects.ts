export type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  year?: string;
  category?: string[];
  tags: string[];
};

const projects: Project[] = [
  // {
  //   id: 0,
  //   title: 'We Bug Out',
  //   desc: 'Big Commerce store.',
  //   img: '/projects/uhc.jpeg',
  //   link: '',
  //   github: '',
  //   year: '2021',
  //   category: ['Ecommerce', 'Development', 'Design'],
  //   tags: ['BigCommerce', 'React'],
  // },
  // {
  //   id: 1,
  //   title: 'Hockey App',
  //   desc: 'Hockey Stats for Association Players',
  //   img: '/projects/cub.png',
  //   link: '',
  //   github: '',
  //   year: '2021',
  //   category: ['Mobile', 'Development'],
  //   tags: ['Laravel', 'PHP', 'React'],
  // },
  // {
  //   id: 2,
  //   title: 'Orange Tree',
  //   desc: 'New modern dashboard for Orange Tree.',
  //   img: 'projects/Dashboard_Vertical.jpg',
  //   tags: ['Figma'],
  // },
  {
    id: 3,
    title: 'United Health Care App',
    desc: 'React Native App for United Healthcare.',
    img: '/projects/uhc.jpeg',
    link: 'https://apps.apple.com/us/app/unitedhealthcare/id1348316600',
    tags: ['React', 'Typescript', 'Abyss', 'CSS', 'Firebase', 'Redux'],
  },
  // {
  //   id: 4,
  //   title: 'Optum App',
  //   desc: 'Broker React Native App for Optum.',
  //   img: 'placeholder.svg',
  //   tags: ['React Native', 'Storyboard', 'NX', 'Typescript'],
  // },
  {
    id: 5,
    title: 'Prep Network',
    desc: 'React Native App for Prep Network.',
    img: '/projects/prep.jpg',
    link: 'https://prepnetwork.com/',
    tags: ['React Native'],
  },
  {
    id: 6,
    title: 'Star Tribune',
    desc: 'React Native App for Star Tribune.',
    img: '/projects/star.jpg',
    link: 'https://play.google.com/store/apps/details?id=com.startribune.android.newsclient&hl=en_US&pli=1',
    tags: [
      'React Native',
      'Typescript',
      'SCSS',
      'GraphQL',
      'Apollo Client',
      'Firebase',
      'Redux',
      'Storybook',
    ],
  },
  {
    id: 7,
    title: 'Twin Cities Orthopedics',
    desc: 'Wordpress Custom Website for TCO.',
    img: '/projects/TCO.png',
    link: 'https://tcomn.com/',
    tags: ['Wordpress', 'CSS', 'Game'],
  },
  {
    id: 8,
    title: 'Revo Healthcare',
    desc: 'Wordpress Custom Website for Revo Healthcare.',
    img: '/projects/revo.png',
    link: 'https://revohealth.com/',
    tags: ['Wordpress', 'SCSS', 'Javascript'],
  },
  {
    id: 9,
    title: 'Sentera',
    desc: 'Wordpress Custom Website for Sentera.',
    img: '/projects/sentera.png',
    link: 'https://sentera.com/',
    tags: ['Wordpress', 'SCSS', 'Javascript'],
  },
  {
    id: 10,
    title: 'Duke Cannon',
    desc: 'Shopify Storefront for Duke Cannon.',
    img: '/projects/duke.png',
    link: 'https://dukecannon.com/',
    tags: ['Shopify', 'SCSS', 'Javascript'],
  },
  {
    id: 11,
    title: 'Irish Titan',
    desc: 'Homepage for Irish Titan.',
    img: '/projects/irish.png',
    link: 'https://irishtitan.com/',
    tags: ['Drupal', 'SCSS', 'Javascript'],
  },
  {
    id: 12,
    title: 'Core Products',
    desc: 'Shopify Storefront for Core Products.',
    img: '/projects/core.png',
    link: 'https://coreproducts.com/',
    tags: ['Shopify', 'SCSS', 'Javascript'],
  },
  {
    id: 13,
    title: 'JAMF',
    desc: 'Dashboard for JAMF Software.',
    img: '/projects/jamf.jpg',
    link: 'https://cub.com/',
    tags: ['Wordpress', 'SCSS', 'Javascript'],
  },
  {
    id: 14,
    title: 'Gander Mountain',
    desc: 'Ecommerce website for Gander Mountain.',
    img: '/projects/gander.jpeg',
    tags: ['Javascript', 'NPM'],
  },
  {
    id: 15,
    title: 'Hallmark Crown Rewards',
    desc: 'Generate a vanilla HTML boilerplate in a flash!',
    img: '/projects/hallmark.png',
    link: 'https://www.hallmark.com/',
    tags: ['Node', 'Javascript', 'NPM', 'HTML'],
  },
  {
    id: 16,
    title: 'Natures Bounty',
    desc: 'Homepage for Natures Bounty.',
    img: '/projects/cub.png',
    link: 'https://www.naturesbounty.com/',
    tags: ['HTML', 'SCSS', 'Javascript'],
  },
  {
    id: 17,
    title: '3M',
    desc: 'Magento Storefront for 3M.',
    img: '/projects/3M.png',
    link: 'https://www.3m.com/3M/en_US/p/',
    tags: ['Magento', 'PHP', 'Javascript'],
  },
];

export default projects;
