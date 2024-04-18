import React from 'react';
import Image from 'next/image';
import { kebabCase } from '@/app/utils/utils';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
type project = {
  name: string;
  tags: string[];
};

function ProjectCard({ children, project, ...props }: any) {
  return (
    <div
      className="projects-center md:projects-start mx-auto flex max-w-sm flex-col px-4 md:justify-center"
      key={project.id}
    >
      <a
        href={project.link || project.github}
        target="_blank"
        className={`relative w-full rounded-xl border p-2 transition hover:-translate-y-2 hover:opacity-75`}
      >
        <Image
          className="w-full rounded-b-md"
          alt="Project image"
          src={project.img}
          width={125}
          height={125}
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
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
          </div>
        </div>
        <p className="text-offWhite text-left text-sm">{project.desc}</p>
        <ul className="-ml-2 mt-2 flex list-none flex-wrap items-center">
          {project.tags.map((tag, index) => {
            return (
              <li key={tag}>
                <Link href={`/projects/tag/${kebabCase(tag)}`}>
                  <div className="m-1 cursor-pointer rounded-lg px-2 py-1 text-sm hover:opacity-75">
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
