"use client";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import React, { MouseEvent, useRef } from "react";
import image from "../../../public/images/hero.jpg";

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
  return (
    <div
      className="h-[calc(100vh-80px)]  bg-center bg-cover flex items-center relative px-5 "
      style={{ backgroundImage: `url("/images/hero.jpg")` }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      ref={sectionRef}
    >
      <div className="flex w-max border-2 border-red-600 flex-col gap-10 p-4">
        <span className="block w-full text-[50px] uppercase font-extrabold text-white leading-none ">
          passion
        </span>
        <span className="block w-full text-[50px] uppercase font-extrabold text-white leading-none ">
          for
        </span>
        <span className="block w-full text-[50px] uppercase font-extrabold text-white leading-none ">
          quality
        </span>
      </div>
      <button
        ref={buttonRef}
        className=" w-24 cursor-none aspect-square rounded-full justify-center items-center flex border border-white text-white text-[30px] lead-none"
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default Hero;
