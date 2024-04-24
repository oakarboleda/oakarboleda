import Link from 'next/link';
import React from 'react';
import projects from '@/app/types/projects';
import ProjectCard from '@/app/projects/ProjectCard';
import Title from '@/app/components/global/Title';
import { syne } from '../components/fonts';

function Projects() {
  return (
    <div
      className="aos-init aos-animate container text-slate-50"
      data-aos="fade-left"
    >
      <div className="relative flex flex-col justify-between pt-8 text-left">
        <div id="learnmore" className={`${syne.className}" text-slate-50`}>
          <Title title="Here are a few of the most recent projects." />
        </div>
        <div className="grid grid-cols-1 items-start gap-12 text-slate-50 md:grid-cols-3 md:gap-5">
          {projects.slice(0, 3).map((item) => {
            return <ProjectCard key={item.id} project={item} />;
          })}
        </div>
        <div className="relative mt-2 w-full pb-20">
          <Link href="/projects">
            <div className="mx-auto mt-8 w-full max-w-sm cursor-pointer whitespace-nowrap rounded-full border bg-ripe-plum-900 px-8 py-3 text-center transition-colors hover:text-white md:max-w-2xl">
              View All
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
