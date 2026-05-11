import type { AstroComponent } from "@lucide/astro";

export interface Project {
  title: string;
  content: Content[];
  links: Link[];
  technologies: string[];
}

export interface Link {
  title: string;
  icon: AstroComponent;
  url: string;
}

export interface Content {
  type: "text" | "subtitle" | "image" | "video";
  value: string;
}
