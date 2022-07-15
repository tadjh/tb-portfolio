import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { Project } from "../../types";
import Card from "../Card";
import CustomLink from "../CustomLink";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
} & HTMLAttributes<HTMLElement>;

export default function ProjectCard({
  project: { name, description, repository, link, animation },
  className,
  ...props
}: ProjectCardProps) {
  return (
    <Card {...props} className={clsx("project", className)}>
      {/* {image && (
        <Image
          src={image}
          alt={name}
          layout="fill"
          className="object-cover opacity-20 transition group-hover:scale-110 group-hover:opacity-50 group-hover:blur"
        />
      )} */}
      <div className="relative flex flex-1 flex-col items-center justify-center gap-y-8 p-6 text-center md:gap-y-12 md:p-20">
        <h3 className="transition-transform group-hover:-translate-y-1.5">
          {name}
        </h3>
        {animation ? (
          <div className={clsx("h-24 w-24", animation)} />
        ) : (
          <hr className="w-1/5 border-black/90 transition-transform group-hover:scale-150 dark:border-white/90" />
        )}
        <p className="transition-transform group-hover:translate-y-1.5">
          {description}
        </p>
        <div className="flex flex-row gap-x-4">
          <CustomLink
            href={repository}
            external
            className="transition-transform group-hover:translate-y-2"
          >
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          </CustomLink>
          <CustomLink
            href={link}
            external
            className="transition-transform group-hover:translate-y-2"
          >
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
