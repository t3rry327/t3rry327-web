import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const links = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/resume", label: "Resume" },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      style={{ zIndex: 999 }}
      className="bg-black/30 backdrop-blur-xl border-b border-gray-800 fixed w-full top-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center w-full justify-between">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link) => (
                  <motion.div key={link.path}>
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === link.path ? "text-blue-500" : "text-white"}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="mr-10 ml-6 flex items-baseline space-x-10">
              <a
                href="https://github.com/t3rry327"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={25}
                  className="flex hover:scale-130 hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/t3rry327/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={25}
                  className="flex hover:scale-130 hover:text-blue-300 transition-all duration-300 ease-in-out cursor-pointer"
                />
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-lg text-white cursor-pointer ${isOpen ? "bg-red-500/30" : "hover:bg-gray-700"} focus:outline-none`}
            >
              {isOpen ? (
                <IoIosClose className="block h-6 w-6" />
              ) : (
                <IoIosMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden"
      >
        <div className="px-2 pt-2 pb-20 pt-10 space-y-1 sm:px-3">
          {links.map((link) => (
            <motion.div
              key={link.path}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium mx-6 ${location.pathname === link.path ? "text-blue-500" : "text-white"}`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};
