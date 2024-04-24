import { kebabCase } from '@/app/utils/utils';
type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 0,
    title: 'United Health Care App',
    desc: 'All the resources you will need to get a boost into economics.',
    img: 'placeholder.svg',
    link: 'https://learn.theyei.org/',
    github: 'https://github.com/braydentw/learn.theyei',
    tags: ['React', 'Typescript', 'Abyss', 'CSS', 'Firebase', 'Redux'],
  },
  {
    id: 1,
    title: 'Broker Optum Application',
    desc: 'Beautiful HTML templates ready-made for your next landing page.',
    img: 'placeholder.svg',
    link: 'https://buildfaster-io.vercel.app/',
    tags: ['React Native', 'Storyboard', 'NX', 'Typescript'],
  },
  {
    id: 2,
    title: 'Prep Network',
    desc: '1800+ emojis at your fingertips. Ready-to-use with just a simple copy+paste.',
    img: 'placeholder.svg',
    link: 'https://react-emoji-search.braydentw.vercel.app/',
    github: 'https://github.com/braydentw/react-emoji-search',
    tags: ['React', 'CSS', 'JSON'],
  },
  {
    id: 3,
    title: 'Star Tribune',
    desc: 'A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!',
    img: 'placeholder.svg',
    link: 'https://bitcointemp.com',
    tags: ['React', 'NextJS', 'SCSS', 'API'],
  },
  {
    id: 4,
    title: 'Create HTML Boilerplate',
    desc: 'Generate a vanilla HTML boilerplate in a flash!',
    img: 'placeholder.svg',
    github: 'https://github.com/BraydenTW/create-html-boilerplate',
    tags: ['Node', 'Javascript', 'NPM', 'HTML'],
  },
  {
    id: 5,
    title: '8 Ball in your CLI',
    desc: 'An 8 ball simulation in your CLI built with Rust!',
    img: 'placeholder.svg',
    github: 'https://github.com/BraydenTW/8ball-rust',
    tags: ['Rust', 'CLI', 'Game'],
  },
  {
    id: 6,
    title: 'DontLeaveMe 😭',
    desc: 'Beg for users to stay on your website.',
    img: 'placeholder.svg',
    link: 'https://github.com/BraydenTW/dontleaveme/',
    tags: ['Javascript', 'NPM'],
  },
  {
    id: 7,
    title: 'Madlibs',
    desc: 'A simple version of Madlibs built for the web!',
    img: 'placeholder.svg',
    link: 'https://fillemin.netlify.app/',
    github: 'https://github.com/braydentw/madlibs',
    tags: ['HTML', 'CSS', 'Javascript'],
  },
];

export const allTags: string[] = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => {
    return !allTags.includes(tag) && allTags.push(tag);
  });
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
