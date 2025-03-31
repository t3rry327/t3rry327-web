import { motion } from "framer-motion";
import React, { useState } from "react";
import { Box, IconButton, Modal as JoyModal, Typography } from "@mui/joy";
import { FaTimes } from "react-icons/fa";
import { skillDescriptions } from "../../data/skills-data.tsx";

interface Skill {
  name: string;
  icon: React.JSX.Element;
}

interface SkillSectionProps {
  title: string;
  items: Skill[];
  icon: React.JSX.Element;
}
interface ModalProps {
  skill: Skill;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ skill, isOpen, onClose }: ModalProps) => (
  <JoyModal open={isOpen} onClose={onClose}>
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        backgroundColor: "#212029",
        color: "#fff",
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", top: 8, right: 8, color: "#fff" }}
      >
        <FaTimes />
      </IconButton>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Box sx={{ fontSize: 32 }}>{skill.icon}</Box>
        <Typography sx={{ color: "#fff" }}>{skill.name}</Typography>
      </Box>
      <Typography sx={{ color: "#fff" }}>
        {skillDescriptions[skill.name]}
      </Typography>
    </Box>
  </JoyModal>
);

export const SkillSectionSm = ({ title, items, icon }: SkillSectionProps) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-row gap-3 items-center justify-end w-full"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="flex flex-col w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: onHover ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="gap-3 p-1 flex flex-row items-center pl-3 w-full"
        >
          <div className="text-2xl text-neutral-400 p-2 text-center">
            {icon}
          </div>
          <h2 className="text-sm text-neutral-100 p-2 text-center">{title}</h2>
        </motion.div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
          {items.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const SkillCard = ({ name, icon }: Skill) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#212029] p-4 rounded-sm flex flex-col items-center justify-center gap-2 hover:bg-white/15 transition-colors duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="text-3xl">{icon}</div>
        <p className="text-neutral-300 text-sm font-medium text-center">
          {name}
        </p>
      </motion.div>
      <Modal
        skill={{ name, icon }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
