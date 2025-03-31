import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaSass,
  FaGithub,
  FaTrello,
  FaJira,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiMysql,
  SiDocker,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";
import { TbBrandKotlin } from "react-icons/tb";

export const skills = {
  frontend: [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Framer Motion", icon: <FaReact className="text-purple-500" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" />,
    },
    { name: "Sass", icon: <FaSass className="text-pink-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNode className="text-green-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    { name: "Java", icon: <FaJava className="text-gray-200" /> },
    { name: "C#", icon: <TbBrandCSharp className="text-blue-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
    { name: "Spring", icon: <SiSpring className="text-green-500" /> },
    { name: "Kotlin", icon: <TbBrandKotlin className="text-blue-500" /> },
    { name: "PHP", icon: <FaPhp className="text-blue-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "Laravel", icon: <FaLaravel className="text-blue-500" /> },
  ],
  database: [
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Prisma", icon: <SiPrisma className="text-teal-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  ],
  tools: [
    { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
    { name: "Git", icon: <FaGithub className="text-gray-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-purple-400" /> },
    { name: "Trello", icon: <FaTrello className="text-blue-500" /> },
    { name: "Jira", icon: <FaJira className="text-blue-400" /> },
  ],
};

export const skillDescriptions: Record<string, string> = {
  React:
    "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage application state.",
  TypeScript:
    "TypeScript is a strongly typed programming language based on JavaScript, providing better tools at any scale.",
  "Framer Motion":
    "Framer Motion is a production-ready motion library for React that powers animations in user interfaces.",
  "Tailwind CSS":
    "Tailwind CSS is a utility-first CSS framework that enables rapid UI development with predefined classes.",
  Sass: "Sass is a preprocessor scripting language that compiles into CSS, adding powerful features like variables and nested rules.",
  CSS: "CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of a document written in HTML.",
  HTML: "HTML is the standard markup language for documents designed to be displayed in a web browser.",
  JavaScript:
    "JavaScript is a programming language that enables interactive web pages and is an essential part of web applications.",
  "Node.js":
    "Node.js is a JavaScript runtime built on Chrome's V8 engine, allowing JavaScript to run on the server side.",
  "Next.js":
    "Next.js is a React framework that enables server-side rendering and static site generation.",
  "Express.js":
    "Express.js is a minimalist and flexible web application framework for Node.js that provides a robust set of features.",
  MongoDB:
    "MongoDB is a cross-platform document-oriented database program, classified as a NoSQL database.",
  Prisma:
    "Prisma is a next-generation ORM that helps developers build faster and make fewer errors with an intuitive data model.",
  MySQL:
    "MySQL is an open-source relational database management system used for web applications and online transaction processing.",
  Docker:
    "Docker is a platform for developing, shipping, and running applications in containers.",
  Git: "Git is a distributed version control system used to track changes in source code during software development.",
  GitHub:
    "GitHub is a web-based hosting service for version control using Git, primarily used for code.",
  Trello:
    "Trello is a web-based project management and task organization application in Kanban style.",
  Jira: "Jira is an issue tracking product that allows bug tracking and agile project management.",
  "C++":
    "C++ is a high-performance programming language widely used for software development, game development, and embedded systems.",
  "C#": "C# is a programming language developed by Microsoft, primarily used for desktop applications, game development with Unity, and web development with .NET.",
  Java: "Java is an object-oriented programming language widely used in enterprise applications, mobile development, and backend services.",
  PHP: "PHP is an open-source programming language designed for web development and server-side execution.",
  PostgreSQL:
    "PostgreSQL is an open-source relational database management system known for its stability, scalability, and advanced transaction support.",
  Laravel:
    "Laravel is a PHP framework designed to simplify the development of robust and secure web applications with an elegant syntax.",
  Spring:
    "Spring is a Java framework that provides infrastructure for developing enterprise and web applications.",
  Kotlin:
    "Kotlin is a modern and concise programming language that runs on the JVM, primarily used for Android development.",
  Python:
    "Python is an interpreted, multipurpose programming language known for its clear syntax and use in web development, data science, and artificial intelligence.",
};
