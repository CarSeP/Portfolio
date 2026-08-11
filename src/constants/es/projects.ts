import { ChevronsLeftRightEllipsis, Globe } from "@lucide/astro";
import type { Project } from "../../interfaces/projects";

export const projects: Project[] = [
  {
    title: "Gestor de Préstamos",
    content: [
      {
        type: "text",
        value:
          "Platika es un gestor de préstamos orientado a entidades financieras y administradores de cartera que necesitan administrar clientes, préstamos, cuotas y pagos de forma centralizada. La plataforma cubre el ciclo completo del crédito: alta de clientes, simulación de préstamos, asignación de créditos, seguimiento de cuotas (pendientes, pagadas y vencidas), registro de abonos y morosidad con cálculo automático de cargos por mora, y reportes consolidados para la toma de decisiones.",
      },
      {
        type: "image",
        value: "/projects/platika-login.webp",
      },
      {
        type: "image",
        value: "/projects/platika-dashboard.webp",
      },
      {
        type: "text",
        value:
          "El sistema soporta múltiples métodos de amortización (Alemán y Francés), distintas frecuencias de pago (semanal, quincenal y mensual) y tipos de tasa (mensual y anual), con un simulador que permite proyectar el cronograma de cuotas antes de formalizar el préstamo. Además, incorpora un módulo de mensajería entre administradores y usuarios, gestión de roles con permisos granulares y un sistema de logs que audita cada acción realizada en la plataforma.",
      },
      {
        type: "image",
        value: "/projects/platika-loan-simulation.webp",
      },
      {
        type: "text",
        value:
          "El acceso se gestiona con autenticación mediante JWT y contraseña encriptada con bcrypt, integrando también inicio de sesión con Google OAuth; la sesión se mantiene en una cookie httpOnly y todas las rutas del dashboard y de la API están protegidas por un middleware centralizado que valida el token y la vigencia del acceso del usuario. El sistema de roles es jerárquico con permisos personalizables por usuario y soporta renovaciones de acceso controladas por el administrador.",
      },
      {
        type: "subtitle",
        value: "Internacionalización y experiencia de usuario",
      },
      {
        type: "text",
        value:
          "La aplicación está preparada para usuarios de distintos países: incluye internacionalización completa con next-intl en español e inglés, preferencias configurables de moneda (DOP, USD o ambas), idioma, tema (claro, oscuro o sistema) y métodos de amortización por defecto. Ofrece además soporte de carga de archivos a S3, validaciones robustas en backend y un dashboard responsivo con tablas, filtros y vistas detalladas para cada entidad del dominio.",
      },
      {
        type: "image",
        value: "/projects/platika-settings.webp",
      },
    ],
    links: [
      {
        title: "Web",
        icon: Globe,
        url: "https://platika.vercel.app/login",
      },
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "React",
      "PostgreSQL",
      "Prisma ORM",
      "Next-intl",
      "Tailwind CSS",
      "JWT",
      "bcryptjs",
      "Google OAuth",
      "AWS S3",
    ],
  },
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
