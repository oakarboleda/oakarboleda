import Heading from '@/app/projects/Heading';
import More from '@/app/projects/More';
import Page from '@/app/components/Page';
import React from 'react';

function Portfolio() {
  return (
    <Page
      currentPage="Portfolio"
      meta={{
        title: 'Portfolio',
        desc: 'I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.',
      }}
    >
      <Heading />
      {/*<Projects />*/}
      <More />
    </Page>
  );
}

export default Portfolio;
