import { twMerge } from "tailwind-merge";
import { projects } from "../config/projects";
import ProjectCard from "./ProjectCard";

export default function AnimatedLogo() {
  const isOdd = projects.length % 2 === 1;
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:-mx-[2vw] xl:-mx-[10%]">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          className={twMerge(index === 0 && isOdd && "md:col-span-2")}
        />
      ))}
    </div>
  );
}
