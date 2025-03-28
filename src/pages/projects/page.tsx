import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaSearch } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of the project.",
    image: "/t3rry.jpg",
    technologies: ["React", "Tailwind", "Framer Motion"],
    codeLink: "https://github.com/user/project1",
    demoLink: "https://project1.com",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Another short description.",
    image: "/t3rry.jpg",
    technologies: ["Next.js", "MUI", "TypeScript"],
    codeLink: "https://github.com/user/project2",
    demoLink: "https://project2.com",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Another short description.",
    image: "/t3rry.jpg",
    technologies: ["React", "Tailwind", "Framer Motion"],
    codeLink: "https://github.com/user/project3",
    demoLink: "https://project3.com",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Another short description.",
    image: "/t3rry.jpg",
    technologies: ["Next.js", "MUI", "TypeScript"],
    codeLink: "https://github.com/user/project4",
    demoLink: "https://project4.com",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Another short description.",
    image: "/t3rry.jpg",
    technologies: ["React", "Tailwind", "Framer Motion"],
    codeLink: "https://github.com/user/project5",
    demoLink: "https://project5.com",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Another short description.",
    image: "/t3rry.jpg",
    technologies: ["Next.js", "MUI", "TypeScript"],
    codeLink: "https://github.com/user/project6",
    demoLink: "https://project6.com",
  },
  {
    id: 7,
    title: "Project 7",
    description: "Another short description.",
    image: "/t3rry.jpg",
    technologies: ["React", "Tailwind", "Framer Motion"],
    codeLink: "https://github.com/user/project7",
    demoLink: "https://project7.com",
  },
  {
    id: 8,
    title: "Project 8",
    description: "Another short description.",
    image: "/t3rry.jpg",
    technologies: ["Next.js", "MUI", "TypeScript"],
    codeLink: "https://github.com/user/project8",
    demoLink: "https://project8.com",
  },
  {
    id: 9,
    title: "Project 9",
    description: "Another short description.",
    image: "/t3rry.jpg",
    technologies: ["React", "Tailwind", "Framer Motion"],
    codeLink: "https://github.com/user/project9",
    demoLink: "https://project9.com",
  },
  {
    id: 10,
    title: "Project 10",
    description: "Another short description.",
    image: "/t3rry.jpg",
    technologies: ["Next.js", "MUI", "TypeScript"],
    codeLink: "https://github.com/user/project10",
    demoLink: "https://project10.com",
  },
];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen mt-[100px] text-gray-200 p-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-10">My Projects</h1>
        <motion.div
          className={`relative w-full flex items-center bg-white rounded-full shadow-md transition-all duration-300 max-w-[1000px] ${
            focused ? "ring-2 ring-blue-400 scale-105" : "ring-1 ring-gray-300"
          }`}
        >
          <FaSearch className="text-gray-500 ml-4" size={20} />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full p-3 pl-10 pr-4 text-gray-900 rounded-full outline-none bg-transparent"
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </motion.div>
        <div className="border-t border-gray-200/10 w-full mt-10" />
        <motion.div
          className="space-y-6 mt-6 w-full lg:w-3/4 transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="flex flex-col md:flex-row items-center gap-6 p-4 bg-gray-800/30 rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-24 h-24 md:w-20 md:h-20 rounded-md object-cover"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-sm bg-gray-700 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    >
                      <FaGithub size={20} /> Code
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-400 hover:text-green-300"
                    >
                      <FaExternalLinkAlt size={20} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-400">No projects found</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
