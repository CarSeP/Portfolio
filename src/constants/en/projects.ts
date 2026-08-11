import { ChevronsLeftRightEllipsis, Globe } from "@lucide/astro";
import type { Project } from "../../interfaces/projects";

export const projects: Project[] = [
  {
    title: "Kanban Board",
    content: [
      {
        type: "text",
        value:
          "KanbanBoard is a full-stack, real-time collaborative Kanban board application designed to manage tasks organized into columns and cards with a rich text editor. The system is composed of a REST API with WebSocket support on the backend (Node.js, Express 5, Prisma, and PostgreSQL) and a React 19 + Vite SPA on the frontend, offering board, column, and card creation with drag-and-drop reordering, plus auto-generated 7-character short IDs for sharing boards easily.",
      },
      {
        type: "image",
        value: "/projects/kanban-dashboard.webp",
      },
      {
        type: "text",
        value:
          "The application enables multiple users to collaborate on the same board through an invitation system (via shareable link with optional expiration or by user ID) and a hierarchical role system (OWNER, ADMIN, EDITOR, and VIEWER) that controls each member's permissions. Updates are synchronized in real time across all participants using Socket.IO, which notifies changes so the client can refresh its view.",
      },
      {
        type: "image",
        value: "/projects/kanban-invite-user-menu.webp",
      },
      {
        type: "text",
        value:
          "Authentication and session management are implemented with JWT, transported via an httpOnly cookie or the Authorization Bearer header, with a 7-day expiration. Login supports Google OAuth 2.0 (email and profile scopes) through googleapis, as well as a quick Guest login that creates an anonymous user. There is a session validation endpoint and a logout endpoint that clears the cookie, and a global auth middleware protects all board, column, card, and invitation routes.",
      },
      {
        type: "subtitle",
        value: "Quality and documentation",
      },
      {
        type: "text",
        value:
          "The project has test coverage on both ends: the backend uses Jest 30 with ts-jest and integration tests that exercise services against a real Prisma database (auth, board, card, column, and prisma), while the frontend uses Vitest 4 with Testing Library and jsdom to test components, hooks, and utilities (including the Slate.js editor). The `npm test` command in each repository runs the full suites.",
      },
      {
        type: "text",
        value:
          "The backend REST API is documented with Swagger, auto-generated through swagger-autogen from the route definitions and exposed in a Swagger UI served at /swagger during development. This makes it easy to explore and try out all authentication, board, column, card, and invitation endpoints.",
      },
      {
        type: "image",
        value: "/projects/kanban-swagger.webp",
      },
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
  },
];
