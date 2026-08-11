import { ChevronsLeftRightEllipsis, Globe } from "@lucide/astro";
import type { Project } from "../../interfaces/projects";

export const projects: Project[] = [
  {
    title: "Kanban Board",
    content: [
      {
        type: "text",
        value:
          "KanbanBoard es una aplicación full-stack de tablero Kanban colaborativo en tiempo real, diseñada para gestionar tareas organizadas en columnas y tarjetas con un editor de texto enriquecido. El sistema se compone de una API REST con soporte WebSocket en el backend (Node.js, Express 5, Prisma y PostgreSQL) y una SPA en React 19 + Vite en el frontend, ofreciendo creación de boards, columnas y tarjetas con reordenamiento mediante drag-and-drop, además de generación automática de IDs cortos de 7 caracteres para compartir tableros de forma más amigable.",
      },
      {
        type: "image",
        value: "/projects/kanban-dashboard.webp",
      },
      {
        type: "text",
        value:
          "La aplicación permite la colaboración entre múltiples usuarios en el mismo tablero mediante un sistema de invitaciones (por enlace compartible con expiración opcional o por usuario) y un sistema de roles jerárquico (OWNER, ADMIN, EDITOR y VIEWER) que controla los permisos de cada integrante. Las actualizaciones se sincronizan en tiempo real entre todos los participantes a través de Socket.IO, que notifica los cambios para refrescar la vista del cliente.",
      },
      {
        type: "image",
        value: "/projects/kanban-invite-user-menu.webp",
      },
      {
        type: "text",
        value:
          "La autenticación y gestión de sesión se implementan con JWT, transportado en una cookie httpOnly o en el header Authorization Bearer, con una vigencia de 7 días. El login soporta Google OAuth 2.0 (scopes de email y perfil) mediante googleapis, así como un acceso rápido como Guest para crear un usuario anónimo. Existe un endpoint de validación de sesión y un endpoint de logout que limpia la cookie, y el middleware global de auth protege todas las rutas de boards, columnas, tarjetas e invitaciones.",
      },
      {
        type: "subtitle",
        value: "Calidad y documentación",
      },
      {
        type: "text",
        value:
          "El proyecto cuenta con cobertura de tests en ambos extremos: el backend utiliza Jest 30 con ts-jest y tests de integración que ejercitan los servicios contra una base de datos Prisma real (auth, board, card, column y prisma), mientras que el frontend emplea Vitest 4 junto con Testing Library y jsdom para testear componentes, hooks y utilidades (incluyendo el editor de Slate.js). Los comandos `npm test` en cada repositorio ejecutan las suites completas.",
      },
      {
        type: "text",
        value:
          "La API REST del backend está documentada con Swagger, generada automáticamente mediante swagger-autogen desde la configuración de rutas y expuesta en una interfaz Swagger UI servida en /swagger durante desarrollo. Esto facilita la exploración y prueba de todos los endpoints de autenticación, boards, columnas, tarjetas e invitaciones.",
      },
      {
        type: "image",
        value: "/projects/kanban-swagger.webp",
      },
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
  },
];
