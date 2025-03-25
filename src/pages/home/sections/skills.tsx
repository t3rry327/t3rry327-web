import { motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaDatabase,
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
import { TbTool } from "react-icons/tb";
import { SkillSection } from "../../../components/common/skills-components.tsx";
import { BsDatabaseFillGear } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import { FaJava } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";

const SkillsPortfolio = () => {
  const skills = {
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

  return (
    <div className="flex flex-row justify-between min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="hidden lg:flex flex-col items-center justify-center mt-60 ml-30 relative">
        <motion.div
          className=" absolute top-[-120px] left-[-120px]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <MdSettings className="text-[196px] text-white/5" />
        </motion.div>
        <motion.div
          className=" absolute rotate-30 top-[12px] left-[-45px]"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <MdSettings className="text-[200px] text-white/5" />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full"
      >
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-neutral-100 text-end mr-6 mb-4">
            Skills
          </h1>
        </div>

        <div className="space-y-2">
          <SkillSection
            title="Desarrollo Frontend"
            items={skills.frontend}
            icon={<FaReact className="text-blue-500" />}
          />
          <SkillSection
            title="Desarrollo Backend"
            items={skills.backend}
            icon={<BsDatabaseFillGear className="text-green-500" />}
          />
          <SkillSection
            title="Gestión de Bases de Datos"
            items={skills.database}
            icon={<FaDatabase className="text-blue-400" />}
          />
          <SkillSection
            title="Herramientas"
            items={skills.tools}
            icon={<TbTool className="text-blue-400" />}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPortfolio;
