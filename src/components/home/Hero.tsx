"use client";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import React, { MouseEvent, useRef } from "react";
import image from "../../../public/images/hero.jpg";
import { color, motion, Variants } from "framer-motion";
// import tw from "tailwind-styled-components";
// const container=tw(motion.div)``

const Hero = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const onEnter = (e: MouseEvent) => {
    console.log("event", e.clientX, e.clientY);
    // buttonRef?.current!.classList.toggle("absolute");
    const left = e.clientX;
    const top = e.clientY - 80;
    buttonRef!.current!.style.position = `absolute`;

    buttonRef!.current!.style.left = `${left}px`;

    buttonRef!.current!.style.top = `${top}px`;
  };
  const onLeave = (e: MouseEvent) => {
    buttonRef!.current!.style.position = "static";
  };
  const onMove = (e: MouseEvent) => {
    const left = e.clientX;
    const top = e.clientY - 80;
    buttonRef!.current!.style.left = `${left}px`;
    buttonRef!.current!.style.top = `${top}px`;
  };
  const containerVariant: Variants = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div
      className="h-[calc(100vh-80px)]   bg-center bg-cover flex items-center relative px-5 overflow-hidden "
      style={{ backgroundImage: `url("/images/hero.jpg")` }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      ref={sectionRef}
    >
      <motion.div
        variants={containerVariant}
        initial={"initial"}
        animate={"animate"}
        transition={{
          staggerChildren: 0.3,
          duration: 1,
          ease: "easeIn",
        }}
        className="flex w-max border-2 border-red-600 flex-col gap-10 p-4 z-[1] "
      >
        <motion.span
          animate={{ color: "white" }}
          transition={{ delay: 1 }}
          className="block w-full text-[50px] uppercase font-extrabold  leading-none text-black  "
        >
          passion
        </motion.span>
        <motion.span
          animate={{ color: "white" }}
          transition={{}}
          className="block w-full text-[50px] uppercase font-extrabold  leading-none text-black  "
        >
          for
        </motion.span>
        <motion.span
          animate={{ color: "white" }}
          transition={{ delay: 2 }}
          className="block w-full text-[50px] uppercase font-extrabold  leading-none text-black  "
        >
          quality
        </motion.span>
      </motion.div>
      <button
        ref={buttonRef}
        className=" w-24 cursor-none aspect-square rounded-full justify-center items-center flex border border-white text-white text-[30px] lead-none"
      >
        <AiOutlineArrowRight />
      </button>
      {/* <motion.div
        animate={{ bottom: "100vh" }}
        initial={{ left: 0, right: 0, bottom: 0, top: 0 }}
        transition={{ duration: 0.6, ease: "linear", delay: 2 }}
        className="absolute  bg-secondary z-[0]"
      ></motion.div> */}
    </div>
  );
};

export default Hero;
