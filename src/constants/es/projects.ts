import { ChevronsLeftRightEllipsis, Globe } from "@lucide/astro";

export const projects = [
  {
    title: "Url shortener",
    content: [
      "Un acortador de enlaces diseñado para ser ligero y rápido. Permite generar códigos únicos de redirección y gestionar el almacenamiento de datos de forma flexible entre SQLite y PostgreSQL.",
    ],
    links: [
      {
        title: "Codigo",
        icon: ChevronsLeftRightEllipsis,
        url: "https://github.com/CarSeP/url-shortener",
      },
      {
        title: "Web",
        icon: Globe,
        url: "",
      },
    ],
    technologies: ["Bun", "Elysia", "TypeScript", "Sqlite", "PostgreSQL"],
  },
  {
    title: "The Mcp Repository",
    content: [
      "Servidor basado en el Model Context Protocol (MCP) que expone un conjunto de herramientas modulares para agentes de IA.",
    ],
    links: [
      {
        title: "Codigo",
        icon: ChevronsLeftRightEllipsis,
        url: "https://github.com/CarSeP/TheMcpRepository",
      },
    ],
    technologies: ["TypeScript", "MCP"],
  },
];
