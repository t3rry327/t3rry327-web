import { motion } from "framer-motion";
import React, { useState } from "react";
import { Box, IconButton, Modal as JoyModal, Typography } from "@mui/joy";
import { FaTimes } from "react-icons/fa";

const skillDescriptions: Record<string, string> = {
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

interface Skill {
  name: string;
  icon: React.JSX.Element;
}

interface SkillSectionProps {
  title: string;
  items: Skill[];
  icon: React.JSX.Element;
}
interface ModalProps {
  skill: Skill;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ skill, isOpen, onClose }: ModalProps) => (
  <JoyModal open={isOpen} onClose={onClose}>
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        backgroundColor: "#212029",
        color: "#fff",
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", top: 8, right: 8, color: "#fff" }}
      >
        <FaTimes />
      </IconButton>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Box sx={{ fontSize: 32 }}>{skill.icon}</Box>
        <Typography sx={{ color: "#fff" }}>{skill.name}</Typography>
      </Box>
      <Typography sx={{ color: "#fff" }}>
        {skillDescriptions[skill.name]}
      </Typography>
    </Box>
  </JoyModal>
);

export const SkillSection = ({ title, items, icon }: SkillSectionProps) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-row gap-3 items-center justify-end w-full"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="flex lg:flex-row flex-col w-full overflow-hidden justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: onHover ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="gap-3 p-1 flex flex-row items-center w-[350px] items-center lg:justify-end pr-6"
        >
          <div className="text-2xl text-neutral-400 p-2 text-center">
            {icon}
          </div>
          <h2 className="text-sm text-neutral-100 p-2 text-center">{title}</h2>
        </motion.div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
          {items.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const SkillCard = ({ name, icon }: Skill) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#212029] p-4 rounded-sm flex flex-col items-center justify-center gap-2 hover:bg-white/15 transition-colors duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="text-3xl">{icon}</div>
        <p className="text-neutral-300 text-sm font-medium text-center">
          {name}
        </p>
      </motion.div>
      <Modal
        skill={{ name, icon }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
