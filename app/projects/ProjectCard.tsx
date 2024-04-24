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
    <div className="projects-center md:projects-start mx-auto flex max-w-sm flex-col md:justify-center">
      <a
        href={project.link || project.github}
        target="_blank"
        className={`will-change-projectCard relative w-full rounded-xl border border-b-fuchsia-950 p-2 transition hover:-translate-y-2 hover:border-b-baltic-sea-600 hover:opacity-75`}
      >
        <Image
          className="w-full rounded-md"
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
        <p className="text-left text-sm text-slate-200">{project.desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
