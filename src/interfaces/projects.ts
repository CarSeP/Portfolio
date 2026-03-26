import type { AstroComponent } from "@lucide/astro";

export interface Project {
  title: string;
  content: string[];
  links: Link[];
  technologies: string[];
}

export interface Link {
  title: string;
  icon: AstroComponent;
  url: string;
}
