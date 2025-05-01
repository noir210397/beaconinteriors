"use client";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import image from "../../../public/images/hero.jpg";
import { color, delay, motion, useAnimate, Variants } from "framer-motion";
const MotionImage = motion(Image);

const Hero = () => {
  const [scope, animate] = useAnimate();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const stopButtonRef = useRef<HTMLButtonElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const onEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(min-width:1024px)").matches) {
      const left = e.pageX - 120 / 2;
      const top = e.pageY - (64 + 120 / 2);
      if (buttonRef.current) {
        buttonRef!.current!.style.position = `absolute`;
        buttonRef!.current!.style.left = `${left}px`;
        buttonRef!.current!.style.top = `${top}px`;
      }
      if (stopButtonRef.current) {
        // stopButtonRef!.current!.style.position = `absolute`;
        stopButtonRef!.current!.style.left = `${left}px`;
        stopButtonRef!.current!.style.top = `${top}px`;
      }
    } else {
      if (buttonRef.current) buttonRef!.current!.style.position = `static`;
      if (stopButtonRef.current)
        stopButtonRef!.current!.style.right = `${20}px`;
      stopButtonRef!.current!.style.bottom = `${20}px`;
    }
  };
  const onLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(min-width:1024px)").matches) {
    } else {
      if (buttonRef.current) buttonRef!.current!.style.position = `static`;
      if (stopButtonRef.current)
        stopButtonRef!.current!.style.right = `${20}px`;
      stopButtonRef!.current!.style.bottom = `${20}px`;
    }
  };
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(min-width:1024px)").matches) {
      const left = e.pageX - 120 / 2;
      const top = e.pageY - (64 + 120 / 2);
      if (buttonRef.current) {
        buttonRef!.current!.style.position = `absolute`;
        buttonRef!.current!.style.left = `${left}px`;
        buttonRef!.current!.style.top = `${top}px`;
      }
      if (stopButtonRef.current) {
        // stopButtonRef!.current!.style.position = `absolute`;
        stopButtonRef!.current!.style.left = `${left}px`;
        stopButtonRef!.current!.style.top = `${top}px`;
      }
    } else {
      if (buttonRef.current) buttonRef!.current!.style.position = `static`;
      if (stopButtonRef.current)
        stopButtonRef!.current!.style.right = `${20}px`;
      stopButtonRef!.current!.style.bottom = `${20}px`;
    }
  };
  useEffect(() => {
    animate(
      ".front",
      { y: 0, filter: "blur(0px)", opacity: 1 },
      { duration: 1 }
    );
    animate(".myblur", { y: "-100%" }, { duration: 0.4, delay: 1.2 });
    animate(".front", { color: "white" }, { delay: 1.3 });
  }, []);
  function play(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    buttonRef.current!.style.visibility = "hidden";
    stopButtonRef.current!.style.visibility = "visible";
    ``;
    animate(".front", { y: "100%", opacity: 0 }, { duration: 0.5 }).then(
      () => {}
    );
    animate(".image", { opacity: 0 }, { duration: 0.4 });
    animate("video", { opacity: 1 }).then(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    });
  }
  function stop(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    stopButtonRef.current!.style.visibility = "hidden";
    buttonRef.current!.style.visibility = "visible";
    if (videoRef.current) {
      videoRef.current.pause();
    }
    animate(".front", { y: "0", opacity: 1 }, { duration: 0.5 }).then(() => {
      animate("video", { opacity: 0 });
      videoRef.current!.currentTime = 0;
    });
    animate(".image", { opacity: 1 }, { duration: 0.4 });
  }

  return (
    <div
      className="h-[calc(100vh-64px)]  lg:cursor-none cursor-pointer lg:justify-between  bg-center bg-cover flex lg:flex-row flex-col gap-3 justify-center items-center relative px-5 overflow-hidden "
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      onPointerMove={onMove}
      ref={scope}
    >
      <video
        loop
        muted
        ref={videoRef}
        className="absolute inset-0 min-w-full h-full object-cover opacity-0"
      >
        <source src="/video/video_bg.mp4" type="video/mp4" />
      </video>
      <MotionImage
        src={image}
        alt="hero"
        className="absolute image h-full inset-0 object-cover lg:cursor-none"
      />
      <motion.div className="absolute inset-0  bg-secondary lg:cursor-none z-[2] myblur"></motion.div>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        className="flex w-max relative flex-col gap-10 p-4 lg:cursor-none z-[6] front  blur-sm items-center   "
      >
        <motion.span className="block text-[calc(1vw+40px)]  md:text-[calc(1vw+50px)] lg:text-[calc(1vw+50px)] uppercase font-extrabold  leading-none  ">
          passion
        </motion.span>
        <p className="lg:flex-col flex-row gap-4 flex lg:gap-10">
          <motion.span className="block lg:w-full text-[calc(1vw+40px)] md:text-[calc(1vw+50px)] lg:text-[calc(1vw+50px)] lg:text-end  uppercase font-extrabold  leading-none  ">
            for
          </motion.span>
          <motion.span className="block lg:w-full text-[calc(1vw+40px)] md:text-[calc(1vw+50px)] lg:text-[calc(1vw+50px)] uppercase font-extrabold  leading-none  ">
            quality
          </motion.span>
        </p>
      </motion.div>
      <button
        ref={buttonRef}
        onClick={play}
        className={`lg:w-[120px] md:w-[96px] w-[70px] z-[1] play  lg:cursor-none  relative  aspect-square rounded-full justify-center items-center flex border-2 border-white text-white lg:text-[60px] text-[40px] font-normal lead-none`}
      >
        <BsArrowRight />
      </button>
      <button
        onClick={stop}
        ref={stopButtonRef}
        className={`lg:w-[100px] z-[7] md:w-[80px] w-[60px] invisible  lg:cursor-none  absolute bottom-[20px] right-[30px] aspect-square rounded-full justify-center items-center flex border-2 border-white text-white lg:text-[40px] text-[20px] font-normal lead-none 
        `}
      >
        <BsArrowLeft />
      </button>
    </div>
  );
};

export default Hero;
