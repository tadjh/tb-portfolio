import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { StaticImageData } from "next/image";

export interface Project {
  name: string;
  description: string;
  image?: StaticImageData;
  hype: string[];
  tasks: string[];
  repository: string;
  link: string;
  animation?: string;
}

export interface SocialLink {
  url: string;
  icon: IconDefinition;
}

export interface NavigationItem {
  url: string;
  vanity: string;
}
