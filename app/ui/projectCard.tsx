import React from 'react';
import Image from 'next/image';
import { kebabCase } from '@/app/utils/utils';
import Link from 'next/link';

function ProjectCard({ project }) {
  return (
    <div
      className="projects-center md:projects-start mx-auto flex max-w-sm flex-col md:justify-center"
      key={project.id}
    >
      <a
        href={project.link || project.github}
        target="_blank"
        className={`border-fun-gray hover:border-fun-pink will-change-projectCard relative w-full rounded-xl border p-2 transition hover:-translate-y-2 hover:opacity-75`}
      >
        <Image
          className="w-full rounded-md"
          src={project.img}
          alt="projects"
          width={16}
          height={16}
        />
      </a>
      <div className="mt-5 w-full">
        <div className="projects-center flex justify-between">
          <a href={project.link || project.github} target="_blank">
            <h3 className="text-lg font-bold">{project.title}</h3>
          </a>
          <div className="space-x-2">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <Image
                  src="external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Image
                  src="github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-fun-gray text-left text-sm">{project.desc}</p>
        <ul className="-ml-2 mt-2 flex list-none flex-wrap items-center">
          {project.tags.map((tag, index) => {
            return (
              <li key={tag}>
                <Link href={`/projects/tag/${kebabCase(tag)}`}>
                  <div className="bg-fun-pink-dark m-1 cursor-pointer rounded-lg px-2 py-1 text-sm hover:opacity-75">
                    {tag}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
