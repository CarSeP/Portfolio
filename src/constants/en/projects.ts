import { ChevronsLeftRightEllipsis, Globe } from "@lucide/astro";

export const projects = [
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
        url: "",
      },
    ],
    technologies: ["Bun", "Elysia", "TypeScript", "Sqlite", "PostgreSQL"],
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
