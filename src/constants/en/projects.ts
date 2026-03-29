import { ChevronsLeftRightEllipsis, Globe } from "@lucide/astro";

export const projects = [
  {
    title: "Kanban Board",
    content: [
      "A real-time task management platform designed for visual workflow organization. It features bi-directional communication for instant user updates, a robust architecture with strict data validation, and integrated API documentation.",
    ],
    links: [
      {
        title: "Backend Code",
        icon: ChevronsLeftRightEllipsis,
        url: "https://github.com/CarSeP/url-shortener",
      },
      {
        title: "Frontend Code",
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
      "A link shortener designed to be lightweight and fast. It allows generating unique redirection codes and managing data storage flexibly between SQLite and PostgreSQL.",
    ],
    links: [
      {
        title: "Code",
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
      "Server based on the Model Context Protocol (MCP) that exposes a set of modular tools for AI agents.",
    ],
    links: [
      {
        title: "Code",
        icon: ChevronsLeftRightEllipsis,
        url: "https://github.com/CarSeP/TheMcpRepository",
      },
    ],
    technologies: ["TypeScript", "MCP"],
  },
];
