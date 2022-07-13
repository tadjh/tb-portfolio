import { StaticImageData } from "next/image";

export interface Project {
  name: string;
  image: StaticImageData;
  hype: string[];
  tasks: string[];
}
