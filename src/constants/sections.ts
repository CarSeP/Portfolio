import {
  AtSign,
  BriefcaseBusiness,
  House,
  NotepadText,
  CodeXml,
  Pickaxe,
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
    icon: Pickaxe,
  },
  {
    id: "experience",
    text: "Experience",
    href: "#experience",
    icon: BriefcaseBusiness,
  },
  {
    id: "skills",
    text: "Skills",
    href: "#skills",
    icon: CodeXml,
  },
  {
    id: "contact",
    text: "Contact",
    href: "#contact",
    icon: AtSign,
  },
  // {
  //   id: "certifications",
  //   text: "Certifications",
  //   href: "#certifications",
  //   icon: NotepadText,
  // },
];
