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
