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
  freelance?: boolean;
};
type Education = {
  id: number;
  label: string;
  school: string;
  duration: string;
};

type Skills = {
  id: number;
  label: string;
  company: string;
  duration: string;
};

type PDF = {
  id: number;
  pdf: boolean;
};
type TabData = {
  id?: number;
  label: string;
};

const tabsData: TabData[] = [
  {
    id: 1,
    label: 'About Me',
  },
  {
    id: 2,
    label: 'Experience',
  },
  {
    id: 3,
    label: 'Education',
  },
  {
    id: 4,
    label: 'Skills',
  },
];
export default tabsData;
