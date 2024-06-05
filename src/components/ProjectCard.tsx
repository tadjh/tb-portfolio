import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { HTMLAttributes } from "react";
import type { Project } from "../types";
import Card from "./Card";
import CustomLink from "./CustomLink";
import { twMerge } from "tailwind-merge";

type ProjectCardProps = {
  project: Project;
} & HTMLAttributes<HTMLElement>;

export default function ProjectCard({
  project: { title: name, description, repository, link, animation },
  className,
  ...props
}: ProjectCardProps) {
  return (
    <Card {...props} className={twMerge("project", className)}>
      {/* {image && (
        <Image
          src={image}
          alt={name}
          layout="fill"
          className="object-cover opacity-20 transition group-hover:scale-110 group-hover:opacity-50 group-hover:blur"
        />
      )} */}
      <div className="relative flex flex-1 flex-col items-center justify-center gap-y-8 p-6 text-center md:gap-y-12 md:p-20">
        <h3 className="text-xl font-bold transition-transform group-hover:-translate-y-1.5 md:text-4xl">
          {name}
        </h3>
        {animation ? (
          <div className={twMerge("h-24 w-24", animation)} />
        ) : (
          <hr className="w-1/5 border-black/90 transition-transform group-hover:scale-x-150 dark:border-white/90" />
        )}
        <p className="text-xs transition-transform group-hover:translate-y-1.5 md:text-base">
          {description}
        </p>
        <div className="flex flex-row gap-x-4 transition-transform group-hover:translate-y-2">
          <CustomLink href={repository} external>
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          </CustomLink>
          <CustomLink href={link} external>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="h-6 w-6"
            />
            Visit this project
          </CustomLink>
        </div>
      </div>
    </Card>
  );
}
