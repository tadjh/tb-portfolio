import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { StaticImageData } from "next/image";

export interface Project {
  name: string;
  image: StaticImageData;
  hype: string[];
  tasks: string[];
}

export interface Socials {
  url: string;
  icon: IconDefinition;
}
