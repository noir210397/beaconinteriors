"use client";
import Image from "next/image";
import image from "../../../public/images/hero.jpg";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import SectionHeaders from "@/components/SectionHeaders";
import showroomimage from "../../../public/images/showroom.jpg";
import bespoke from "../../../public/images/bespoke-bg.jpg";
import InfiniteScroller from "@/components/home/InfiniteScroller";
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
      <p className="md:ps-[10%] md:w-[80%] pt-[40px] px-4">
        Designing and creating spaces that instantly feel familiar and intimate
        lies at the core of our business; nothing would therefore make more
        sense regarding the concept of our showroom, than creating a space that
        feels like home. This is the primary role of our showroom in Neo
        Psychiko, a design space that takes up four floors, extending at a total
        of 1000 square meters, where we both work and showcase the results of
        our inspiration. The visitors can wander through our creative ideas, get
        the assistance they need from our associates and find inspiration for
        their own home.
        <br />
        <br />
        What makes our showroom stand out is that it constantly changes,
        reflecting the dynamic nature of our creativity, without ever failing to
        produce a warm, welcoming allure. The model spaces we design for the
        showroom get constantly revisited, the range of our furniture refreshed,
        the handpicked objects and artifacts carefully displayed in a curated
        mix’n’match play of styles and eras.
        <br />
        <br />
        Simply put, by entering our showroom you actually enter our hospitable
        world of creativity and inspiration; you take a step towards a solution
        that will uniquely elevate your space, giving it the perfectly imperfect
        charm of tailored, handmade creations; towards discovering that one
        piece you were looking for, or finding the gift that is just right for
        the receiver. Welcome!
      </p>
      <SectionHeaders topheader="get" bottomheader="inspired" />
      <Image src={showroomimage} alt="showroom" />
      <div className="pb-3 pt-[30px] relative ">
        <div className="relative w-[80%] max-w-4xl md:aspect-[1/.5] aspect-[1/.8] mx-auto">
          <Image
            src={bespoke}
            alt="bespoke"
            className=" object-cover w-full h-full"
          />
        </div>
        <InfiniteScroller
          text="revamping"
          to="/revamping"
          className="absolute top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default Page;
