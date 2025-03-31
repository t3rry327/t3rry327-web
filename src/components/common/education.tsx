import { motion } from "framer-motion";
import { education } from "../../data/data";

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

export const Education = () => (
  <div className="p-2 lg:p-6 font-thin">
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {education.map((edu) => (
        <motion.div
          key={edu.id}
          className="relative mb-5"
          variants={itemVariants}
        >
          <div className="flex items-start">
            <div className="md:ml-6 border-b border-t border-white/5 p-6 rounded-xl flex-1 hover:border-white/20 transition-colors duration-500">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-white">{edu.title}</h3>
              </div>
              {edu.description.map((text, index) => (
                <p key={index} className="text-gray-300 mb-2">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);
