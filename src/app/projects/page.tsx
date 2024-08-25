"use client";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div>
      <div className="h-[calc(100vh-64px)] relative px-5 flex justify-center items-center lg:justify-normal overflow-hidden ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text flex flex-col gap-8 items-center uppercase relative  text-5xl text-black"
        >
          <p>our</p>
          <p>projects</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
