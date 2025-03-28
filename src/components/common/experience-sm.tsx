import { motion } from "framer-motion";
import {
  FaServer,
  FaGamepad,
  FaShieldAlt,
  FaAndroid,
  FaBug,
  FaTools,
} from "react-icons/fa";

const experiences = [
  {
    id: 1,
    title: "Back-end Developer & DevOps guy",
    company: "Superbid",
    period: "2023 - 2024",
    description: [
      "Adaptation of the Superbid system to support all of LATAM.",
      "Process automation and system optimization.",
    ],
    icon: <FaServer />,
  },
  {
    id: 2,
    title: "Unreal Engine Game Developer",
    company: "Stage1 Labs",
    period: "2022 - 2024",
    description: [
      "I can't say anything, it's a game that hasn't been announced yet.",
    ],
    icon: <FaGamepad />,
  },
  {
    id: 3,
    title: "Vanguard Anti-Cheat Team",
    company: "Riot Games",
    period: "2021 - 2022",
    description: [
      "Improvements in EFI cheat detection and security enhancements.",
    ],
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "Android Java Developer",
    company: "Jubbler Technologies",
    period: "2021 - 2021",
    description: [
      "Added functionalities and fixed existing issues in the mobile billing system.",
    ],
    icon: <FaAndroid />,
  },
  {
    id: 5,
    title: "Trainee Java Developer",
    company: "NeuralSoft",
    period: "2021 - 2021",
    description: [
      "Fixed a critical bug that caused the ERP RAM usage to reach approximately 1 TB.",
    ],
    icon: <FaBug />,
  },
  {
    id: 6,
    title: "Technical Support",
    company: "Bluefish",
    period: "2019 - 2020",
    description: [
      "Performed maintenance and installation tasks for hardware, software, networks, and infrastructure.",
    ],
    icon: <FaTools />,
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

export const ExperiencesSM = () => (
  <div className="p-2 lg:p-10 font-thin">
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="hidden md:block absolute left-8 top-8 bottom-0 w-0.5 bg-gray-600">
        <motion.div
          className="absolute w-[2px] h-[3px] bg-white/60 opacity-10"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            boxShadow: "0 0 16px 6px rgba(255,255, 255, 0.9)",
          }}
          animate={{
            top: ["0%", "100%"],
            opacity: [0.7, 0, 1, 0, 0.7, 0, 0.7],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute left-[-3px] -top-1 w-2 h-2 bg-gray-600 rounded-full" />
        <div className="absolute left-[-3px] -bottom-1 w-2 h-2 bg-gray-600 rounded-full" />
      </div>
      {experiences.map((experience) => (
        <motion.div
          key={experience.id}
          className="relative mt-6"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-row items-start">
            <div className="hidden md:flex items-center justify-center ml-[8px] min-w-[50px] min-h-[50px] bg-[#212029] rounded-full border-2 border-gray-600 z-10 text-[#3b82f6]">
              {experience.icon}
            </div>
            <div className="md:ml-6 p-6 rounded-xl border border-white/5 w-full transition-colors duration-500">
              <h3 className="text-lg font-semibold">{experience.title}</h3>
              <p className="text-sm text-gray-400">
                {experience.company} | {experience.period}
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                {experience.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);
