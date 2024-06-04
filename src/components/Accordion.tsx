"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import React, { useState } from "react";
interface Props {
  header: string;
  text: string;
}

const Accordion = ({ header, text }: Props) => {
  const [open, setOpen] = useState(false);
  function openAccordion() {
    setOpen(!open);
  }
  return (
    <div className=" w-full lg:max-w-none  ">
      <div
        className="flex justify-between items-center p-2 w-full cursor-pointer "
        onClick={openAccordion}
      >
        <span className="text-lg font-semibold capitalize">{header}</span>
        <span className="text-2xl">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
      </div>
      <div className={`${open ? "h-max p-2" : "h-0 p-0"} overflow-hidden `}>
        {text}
      </div>
    </div>
  );
};

export default Accordion;
