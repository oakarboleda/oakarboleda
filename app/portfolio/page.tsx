import Heading from '@/app/portfolio/Heading';
import More from '@/app/portfolio/More';
import React from 'react';
import AllProjects from '@/app/portfolio/allProjects';

export default function Portfolio() {
  return (
    <div className="container top-0 w-full bg-slate-900">
      <Heading />
      <AllProjects />
      <More />
    </div>
  );
}
