"use client";
import Image from "next/image";
import image from "../../../public/images/hero.jpg";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
const MotionImage = motion(Image);

const Page = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const enterAnimation = async () => {
      await animate(".text", { opacity: 1, y: 0 }, { duration: 0.5 });
      animate(".myblur", { y: "-100%" }, { duration: 0.5 });
      animate(".text", { color: "white" }, { duration: 0.5, delay: 0.2 });
    };
    enterAnimation();
  }, []);
  return (
    <div>
      <div
        ref={scope}
        className="h-[calc(100vh-64px)] relative px-5 flex justify-center items-center lg:justify-normal overflow-hidden "
      >
        <MotionImage
          src={image}
          alt="image"
          className="absolute image h-full inset-0 object-cover"
        />
        <motion.div className="absolute inset-0  bg-secondary myblur"></motion.div>
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          className="text flex flex-col gap-8 items-center uppercase relative  text-5xl text-black"
        >
          <p>envision</p>
          <p>your home</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
