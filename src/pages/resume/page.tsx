import { ExperiencesSM } from "../../components/common/experience-sm";
import SkillsPortfolioSm from "../../components/common/skills-sm";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdCloudQueue } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Summary() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 mt-[120px]"
      >
        <img
          src="./t3rry.jpg"
          alt="Perfil"
          className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-neutral-600"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hello! I'm Ulises.
        </h1>
        <p className="text-xl text-neutral-400">
          I am a full time software developer.
        </p>
      </motion.div>
      <section className="mb-16 flex p-3 flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-20 text-center">What I Do</h2>
        <div className="max-w-[1000px] grid grid-flow-col grid-rows-2 gap-10 mb-10">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-base text-neutral-400 mb-3 leading-relaxed"
          >
            <span className="font-bold mr-2 flex flex-row items-center gap-3">
              <IoGameControllerOutline /> Game Development:
            </span>
            One of my greatest ambitions since I was a child, to develop games
            and bring them to market, with an emphasis on gameplay and
            graphics... nothing better than UE5 (Unity is also good)
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base text-neutral-400 mb-3 leading-relaxed"
          >
            <span className="font-bold mr-2 flex flex-row items-center gap-3">
              <IoSettingsOutline /> DevOps:
            </span>
            More than once I faced problems where a human was not enough to test
            everything that had to be tested. So I became interested in
            automation, and I can't stop using it in all my projects.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-base text-neutral-400 mb-3 leading-relaxed"
          >
            <span className="font-bold mr-2 flex flex-row items-center gap-3">
              <MdCloudQueue />
              Server Management:
            </span>
            With extensive experience in operating systems, software, networks
            and infrastructure, Server administration is one of my favorite
            activities
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-base text-neutral-400 mb-3 leading-relaxed"
          >
            <span className="font-bold mr-2 flex flex-row items-center gap-3">
              <MdOutlineComputer /> Web Design:
            </span>
            Web design is not my best field, but I manage to make websites with
            a responsive, elegant and dynamic design.
          </motion.p>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row mt-[70px] justify-center gap-3">
        <div className="flex flex-col">
          <h2 className="text-3xl p-3 text-center">Experience</h2>
          <ExperiencesSM />
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl p-3 text-center">Skills</h2>
          <SkillsPortfolioSm />
        </div>
      </div>
    </>
  );
}
