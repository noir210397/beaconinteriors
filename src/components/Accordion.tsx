"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import React, { useState, useRef } from "react";
interface Props {
  header: string;
  text: string;
}

interface Props {
  header: string;
  text: string;
}

const Accordion = ({ header, text }: Props) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    if (!open && contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      setHeight(`${scrollHeight}px`);
    } else {
      setHeight("0px");
    }
    setOpen(!open);
  };

  return (
    <div className="w-full lg:max-w-none">
      <div
        className="flex justify-between items-center p-2 w-full cursor-pointer"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-semibold capitalize">{header}</span>
        <span className="text-2xl">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
      </div>

      <div
        ref={contentRef}
        style={{ height }}
        className={`overflow-hidden transition-all duration-75 ease-linear ${
          open ? "p-2" : "p-0"
        }`}
        onTransitionEnd={() => {
          // Allow auto height after animation finishes (for responsiveness)
          if (open && contentRef.current) {
            contentRef.current.style.height = "auto";
          }
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Accordion;
