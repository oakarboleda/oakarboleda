import projects from '@/app/types/projects';
import ProjectCard from '@/app/portfolio/ProjectCard';

function AllProjects() {
  return (
    <div className=" py-[120px]">
      <div className="relative my-3 grid grid-cols-12 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="col-span-12 rounded-lg p-2 sm:col-span-6 lg:col-span-4"
          >
            <ProjectCard project={project} key={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
