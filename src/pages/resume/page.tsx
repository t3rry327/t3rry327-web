import { ExperiencesSM } from "../../components/common/experience-sm";
import SkillsPortfolioSm from "../../components/common/skills-sm";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdCloudQueue } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Footer from "../../components/layout/footer";

export default function Summary() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./cv/cv.pdf";
    link.download = "CV_Ulises_Bravo.pdf";
    link.click();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-[120px]"
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
        <button
          onClick={handleDownload}
          className="relative px-5 py-2.5 overflow-hidden cursor-pointer font-medium text-indigo-400 bg-black-30 border border-gray-700 rounded-lg shadow-inner group my-6"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-indigo-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-indigo-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-indigo-600 opacity-0 group-hover:opacity-100"></span>
          <span className="relative text-base font-semibold transition-colors duration-300 delay-200 group-hover:text-white ease">
            Download CV
          </span>
        </button>
      </motion.div>
      <section className="mb-16 flex p-3 flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-10 mt-6 text-center">What I Do</h2>
        <div className="max-w-[1000px] flex flex-col sm:grid sm:grid-flow-col sm:grid-rows-2 p-3 gap-10 mb-10">
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
      <div className="flex flex-col lg:flex-row mt-[70px] justify-center gap-3 pb-40">
        <div className="flex flex-col">
          <h2 className="text-3xl p-3 text-center">Experience</h2>
          <ExperiencesSM />
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl p-3 text-center">Skills</h2>
          <SkillsPortfolioSm />
        </div>
      </div>
      <Footer />
    </>
  );
}
