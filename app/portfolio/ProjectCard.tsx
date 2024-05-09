import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type ProjectProps = {
  project: {
    link?: string;
    github?: string;
    img: string;
    title: string;
    tags?: string[];
    desc: string;
  };
  selectedTag?: string | null;
};

function ProjectCard({ project, selectedTag }: ProjectProps) {
  return (
    <div className="projects-center md:projects-start mx-auto flex max-w-sm flex-col md:justify-center">
      <a
        href={project.link || project.github}
        target="_blank"
        className="projectCard relative w-full border p-2 transition hover:opacity-75"
      >
        <img
          className="w-full overflow-hidden rounded-md"
          alt="Project image"
          src={project.img}
          width={125}
          height={125}
        />
      </a>
      <div className="mt-5 w-full">
        <div className="projects-center flex justify-between">
          <a href={project.link || project.github} target="_blank">
            <h3 className="text-lg font-bold text-slate-50">{project.title}</h3>
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
        <div className="justify-between py-4">
          <div className="flex flex-wrap gap-2">
            {project.tags &&
              project.tags.map((tags) => (
                <div
                  key={tags}
                  className="rounded-lg bg-slate-600 px-2 py-1 text-sm"
                >
                  {tags}
                </div>
              ))}
          </div>
        </div>
        <p className="text-left text-sm text-slate-50">{project.desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
