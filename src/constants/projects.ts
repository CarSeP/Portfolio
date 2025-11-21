import { ChevronsLeftRightEllipsis, Globe } from "@lucide/astro";

export const projects = [
  {
    title: "Url shortener",
    img: "/public/image01.webp",
    content: [
      `
      A fast, lightweight, and standalone URL shortening service, developed as a
      complete server application. This project demonstrates the ability to create an
      efficient RESTful API with a modern technology stack, handling everything from
      business logic and data storage to deployment and testing.
      `,
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
        url: "https://url-shortener-omega-two.vercel.app/",
      },
    ],
    technologies: ["Bun", "TypeScript", "Sqlite"],
  },
];
