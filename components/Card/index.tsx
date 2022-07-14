import clsx from "clsx";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";
import CustomLink from "../CustomLink";

type CardProps = {
  description: string;
  image?: StaticImageData;
  title: string;
  link: string;
  repository: string;
} & HTMLAttributes<HTMLDivElement>;

// opacity-0 transition-opacity group-hover:opacity-100

// bg-black

export default function Card({
  className,
  // image,
  title,
  description,
  link,
  repository,
}: CardProps) {
  return (
    <div
      className={clsx(
        "group relative flex flex-col overflow-hidden rounded-lg border bg-blue-gulf text-black/90",
        className
      )}
    >
      {/* {image && (
        <Image
          src={image}
          alt={title || "background image"}
          layout="fill"
          width={1500}
          height={1200}
          className="object-cover transition group-hover:scale-110 group-hover:opacity-50 group-hover:blur"
        />
      )} */}
      <div className="relative flex flex-1 flex-col items-center justify-center gap-y-8 p-6 text-center md:gap-y-12 md:p-20">
        <h3 className="transition-transform group-hover:-translate-y-1.5">
          {title}
        </h3>
        <hr className="w-1/5 border-black/90 transition-transform group-hover:scale-150" />
        <p className="transition-transform group-hover:translate-y-1.5">
          {description}
        </p>
        <div className="flex flex-row gap-x-4">
          <CustomLink
            href={repository}
            external={true}
            className="transition-transform group-hover:translate-y-2"
          >
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          </CustomLink>
          <CustomLink
            href={link}
            external={true}
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
    </div>
  );
}
