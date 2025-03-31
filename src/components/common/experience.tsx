import { motion } from "framer-motion";
import { experiences } from "../../data/data.tsx";

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

export const Experiences = () => (
  <div className="p-2 lg:p-10 font-thin">
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
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
        >
          <div className="flex flex-row items-start">
            <div className="hidden md:flex items-center justify-center ml-[8px] w-[50px] h-[50px] bg-[#212029] rounded-full border-2 border-gray-600 z-10 text-[#3b82f6]">
              {experience.icon}
            </div>
            <div className="md:ml-6 border-b border-t border-white/5 p-6 rounded-xl flex-1 hover:border-[#3b82f6] transition-colors duration-500">
              <h3 className="text-xl font-bold text-white mb-2">
                {experience.title}
              </h3>
              <div className="text-lg font-semibold text-[#3b82f6] mb-2">
                {experience.company}
              </div>
              {experience.description.map((text, index) => (
                <p key={index} className="text-gray-300 mb-2">
                  {text}
                </p>
              ))}
              <p className="text-xs ml-3 text-blue-200 mt-6">
                {experience.period}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);
