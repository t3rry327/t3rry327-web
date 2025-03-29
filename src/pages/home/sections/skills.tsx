import { motion } from "framer-motion";
import { FaReact, FaDatabase } from "react-icons/fa";
import { TbTool } from "react-icons/tb";
import { SkillSection } from "../../../components/common/skills-components.tsx";
import { BsDatabaseFillGear } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import { skills } from "../../../data/skills-data.tsx";

const SkillsPortfolio = () => {
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
            title="Frontend development"
            items={skills.frontend}
            icon={<FaReact className="text-blue-500" />}
          />
          <SkillSection
            title="Backend development"
            items={skills.backend}
            icon={<BsDatabaseFillGear className="text-green-500" />}
          />
          <SkillSection
            title="Database management"
            items={skills.database}
            icon={<FaDatabase className="text-blue-400" />}
          />
          <SkillSection
            title="Tools"
            items={skills.tools}
            icon={<TbTool className="text-blue-400" />}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPortfolio;
