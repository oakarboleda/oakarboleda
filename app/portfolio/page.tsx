import Heading from '@/app/portfolio/Heading';
import More from '@/app/portfolio/More';
import React from 'react';
import AllProjects from '@/app/portfolio/allProjects';
import Title from '../components/global/Title';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#1D1D1D] py-32 text-gray-100">
      <div className="container mx-auto flex flex-col justify-center p-4 md:p-8">
        <Title title={'Portfolio'} />
        <AllProjects />
        <More />
      </div>
    </div>
  );
}
