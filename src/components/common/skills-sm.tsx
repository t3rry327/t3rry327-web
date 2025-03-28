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
import { SkillSectionSm } from "./skill-section-sm.tsx";
import { BsDatabaseFillGear } from "react-icons/bs";
import { FaJava } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";
import { TbBrandKotlin } from "react-icons/tb";

const SkillsPortfolioSm = () => {
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

  return (
    <div className="flex flex-row justify-between min-h-screen px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full mt-6"
      >
        <div className="space-y-2">
          <SkillSectionSm
            title="Frontend development"
            items={skills.frontend}
            icon={<FaReact className="text-blue-500" />}
          />
          <SkillSectionSm
            title="Backend development"
            items={skills.backend}
            icon={<BsDatabaseFillGear className="text-green-500" />}
          />
          <SkillSectionSm
            title="Database management"
            items={skills.database}
            icon={<FaDatabase className="text-blue-400" />}
          />
          <SkillSectionSm
            title="Tools"
            items={skills.tools}
            icon={<TbTool className="text-blue-400" />}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPortfolioSm;
