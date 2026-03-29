import { ChevronsLeftRightEllipsis, Globe } from "@lucide/astro";

export const projects = [
  {
    title: "Kanban Board",
    content: [
      "Una plataforma de gestión de tareas en tiempo real que permite organizar flujos de trabajo de manera visual. Implementa comunicación bidireccional para actualizaciones instantáneas entre usuarios y una arquitectura robusta con validación de datos y documentación de API integrada.",
    ],
    links: [
      {
        title: "Codigo del Backend",
        icon: ChevronsLeftRightEllipsis,
        url: "https://github.com/CarSeP/url-shortener",
      },
      {
        title: "Codigo del Frontend",
        icon: ChevronsLeftRightEllipsis,
        url: "https://github.com/CarSeP/KanbanBoard-Frontend",
      },
      {
        title: "Web",
        icon: Globe,
        url: "https://kanban.carsep.xyz",
      },
    ],
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "Vitest",
      "Tailwind CSS",
      "ExpressJS",
      "PostgreSQL",
      "Prisma ORM",
      "Swagger",
      "SocketIO",
      "Jest",
      "Zod",
      "Pino",
    ],
    img: "/projects/02.webp",
  },
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
        url: "https://short.carsep.xyz",
      },
    ],
    technologies: ["Bun", "Elysia", "TypeScript", "Sqlite", "PostgreSQL"],
    img: "/projects/01.webp",
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
