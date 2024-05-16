import Heading from '@/app/portfolio/Heading';
import More from '@/app/portfolio/More';
import Page from '@/app/components/Page';
import React from 'react';
import AllProjects from '@/app/portfolio/allProjects';

function Portfolio({ ...props }) {
  return (
    <Page
      currentPage="Portfolio"
      meta={{
        title: 'Oak Arboleda - Senior Software Developer',
        desc: 'YO!',
      }}
    >
      <div className="container top-0 w-full bg-slate-900">
        <Heading />
        <AllProjects />
        <More />
      </div>
    </Page>
  );
}

export default Portfolio;
