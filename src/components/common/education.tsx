import { motion } from "framer-motion";

const education = [
  {
    id: 1,
    title: "Game Development with Unreal Engine 5",
    institution: "Udemy",
    period: "July 2022",
    description: [
      "I learned how to develop a game from scratch. From level design, lighting, physics, mechanics, to architecture, multiplayer, optimization and procedural generation. (a lot of math D:)",
    ],
  },
  {
    id: 2,
    title: "Node.JS",
    institution: "Nice guy in YouTube",
    period: "April 2022",
    description: [
      "Building discord bots mainly, but then I delved into Express, Sockets and eventually microservices development.",
    ],
  },
  {
    id: 3,
    title: "TypeScript",
    institution: "Nice guy in YouTube",
    period: "January 2022",
    description: [
      "The Java-developer's JavaScript. Now with fewer foot-guns! (Now they're compiler errors…!)",
    ],
  },
  {
    id: 4,
    title: "JavaScript",
    institution: "Nice guy in YouTube",
    period: "December 2021",
    description: [
      "Single-threaded, natively asynchronous, designed in a week, revised by committee, installed on every modern computer. What could go… Await for it… Promise it's worth it…",
    ],
  },
  {
    id: 5,
    title: "C++",
    institution: "Nice guy in YouTube",
    period: "September 2021",
    description: ["I Thought It Was Complicated BEFORE .. (Beginner course)"],
  },
  {
    id: 6,
    title: "C#",
    institution: "A lot of practice & StackOverflow",
    period: "May 2021",
    description: ["You'll Swear It's Not Java..."],
  },
  {
    id: 7,
    title: "PHP",
    institution: "Nice Indian (i won't forget) YouTube Guy",
    period: "June 2020",
    description: [
      "Wait, you put HTML, CSS and SQL in here? And we installed this everywhere? This should be called 'How To Build The Internet in 30 Days or Less… Pocket Edition… for Dummies… with root.'",
    ],
  },
  {
    id: 8,
    title: "LUA",
    institution: "A lot of practice and docs",
    period: "March 2020",
    description: [
      "And You Thought JavaScript Was Confusing...",
      "We don’t have much anything, but we have tables! Tables for everything! Even integers and strings are tables!",
      "Game scripting and time burning.",
    ],
  },
  {
    id: 9,
    title: "Java (Android Studio)",
    institution: "A lot of practice and docs",
    period: "August 2019",
    description: [
      "Write once, debug everywhere!",
      "(Re)Write Once (Every Major Version), Pray Your Containers Still Work.",
      "School Thesis.",
    ],
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

