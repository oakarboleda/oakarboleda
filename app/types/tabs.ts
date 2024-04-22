type Experience = {
  id: number;
  label: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
};
type About = {
  id: number;
  label: string;
  email: string;
  experience: string;
  freelance: string;
  description: string;
};
type Education = {
  id: number;
  label: string;
  company: string;
  duration: string;
  description: string;
};

type Skills = {
  id: number;
  label: string;
  company: string;
  duration: string;
  description: string;
};
type TabData = {
  id?: number;
  label: string;
  content: About[] | Experience[] | Education[] | Skills[];
};

const tabsData: TabData[] = [
  {
    id: 1,
    label: 'About Me',
    content: [
      {
        id: 1,
        label: '',
        email: 'Google',
        experience: '2019 - Present',
        freelance: 'Avalible',
        description:
          'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
      },
      // Add more about me here
    ],
  },
  {
    id: 2,
    label: 'Experience',
    content: [
      {
        id: 1,
        label: 'Software Engineer',
        company: 'Google',
        duration: '2019 - Present',
        description:
          'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
        technologies: ['React', 'Node.js', 'TypeScript', 'GraphQL'],
      },
      {
        id: 2,
        label: 'Frontend Developer',
        company: 'Facebook',
        duration: '2018 - 2019',
        description:
          'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
        technologies: ['React', 'JavaScript', 'TypeScript', 'Redux'],
      },

      // Add more experiences here
    ],
  },
  {
    id: 3,
    label: 'Education',
    content: [
      {
        id: 1,
        label: 'Bachelor of Science in Computer Science',
        company: 'The Art Institute of Minnesota',
        duration: '2010 - 2014',
        description:
          'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
      },
      // Add more educations here
    ],
  },
  {
    id: 4,
    label: 'Skills',
    content: [
      {
        id: 1,
        label: 'Frontend',
        company: 'React, JavaScript, TypeScript, Redux, GraphQL',
        duration: '2015 - 2019',
        description:
          'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
      },
    ],
  },
];
export default tabsData;
