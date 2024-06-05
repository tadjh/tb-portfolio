import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Project {
  slug: string;
  title: string;
  description: string;
  hype: string[];
  tasks: string[];
  repository: string;
  link: string;
  tags?: string[];
  animation?: string;
  image?: string;
  categories?: string[];
}

export interface SocialLink {
  url: string;
  icon: IconDefinition;
}

export interface NavigationItem {
  url: string;
  vanity: string;
}
