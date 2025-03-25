import { motion } from "framer-motion";
import React, { useState } from "react";
import { Box, IconButton, Modal as JoyModal, Typography } from "@mui/joy";
import { FaTimes } from "react-icons/fa";

const skillDescriptions: Record<string, string> = {
  React:
    "React es una biblioteca de JavaScript para construir interfaces de usuario. Permite a los desarrolladores crear componentes de UI reutilizables y gestionar el estado de la aplicación de manera eficiente.",
  TypeScript:
    "TypeScript es un lenguaje de programación fuertemente tipado que se basa en JavaScript, brindándote mejores herramientas a cualquier escala.",
  "Framer Motion":
    "Framer Motion es una biblioteca de movimiento lista para producción para React que impulsa las animaciones en interfaces de usuario.",
  "Tailwind CSS":
    "Tailwind CSS es un framework CSS utility-first que permite el desarrollo rápido de UI con clases predefinidas.",
  Sass: "Sass es un lenguaje de script preprocesador que se interpreta o compila en CSS, agregando funciones poderosas como variables y reglas anidadas.",
  CSS: "CSS (Hojas de Estilo en Cascada) es un lenguaje de hojas de estilo utilizado para describir la presentación de un documento escrito en HTML.",
  HTML: "HTML es el lenguaje de marcado estándar para documentos diseñados para mostrarse en un navegador web.",
  JavaScript:
    "JavaScript es un lenguaje de programación que permite páginas web interactivas y es una parte esencial de las aplicaciones web.",
  "Node.js":
    "Node.js es un entorno de ejecución de JavaScript construido sobre el motor V8 de Chrome, que permite ejecutar JavaScript en el lado del servidor.",
  "Next.js":
    "Next.js es un framework de React que permite funcionalidades como renderizado del lado del servidor y generación de sitios web estáticos.",
  "Express.js":
    "Express.js es un framework de aplicación web minimalista y flexible para Node.js que proporciona un conjunto robusto de características.",
  MongoDB:
    "MongoDB es un programa de base de datos orientado a documentos multiplataforma, clasificado como una base de datos NoSQL.",
  Prisma:
    "Prisma es un ORM de próxima generación que ayuda a los desarrolladores a construir más rápido y cometer menos errores con un modelo de datos intuitivo.",
  MySQL:
    "MySQL es un sistema de gestión de bases de datos relacionales de código abierto utilizado para aplicaciones web y procesamiento de transacciones en línea.",
  Docker:
    "Docker es una plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.",
  Git: "Git es un sistema de control de versiones distribuido para rastrear cambios en el código fuente durante el desarrollo de software.",
  GitHub:
    "GitHub es un servicio de alojamiento basado en web para control de versiones usando Git, utilizado principalmente para código.",
  Trello:
    "Trello es una aplicación de gestión de proyectos y organización de tareas basada en web, estilo Kanban.",
  Jira: "Jira es un producto de seguimiento de problemas que permite el seguimiento de errores y la gestión ágil de proyectos.",
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

