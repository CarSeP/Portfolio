import {
  Contact,
  FlaskConical,
  House,
  NotepadText,
  Pencil,
  Wrench,
} from "@lucide/astro";

export const sections = [
  {
    id: "home",
    text: "Home",
    href: "#home",
    icon: House,
  },
  {
    id: "projects",
    text: "Projects",
    href: "#projects",
    icon: Wrench,
  },
  {
    id: "experience",
    text: "Experience",
    href: "#experience",
    icon: FlaskConical,
  },
  {
    id: "skills",
    text: "Skills",
    href: "#skills",
    icon: Pencil,
  },
  {
    id: "contact",
    text: "Contact",
    href: "#contact",
    icon: Contact,
  },
  {
    id: "certifications",
    text: "Certifications",
    href: "#certifications",
    icon: NotepadText,
  },
];
