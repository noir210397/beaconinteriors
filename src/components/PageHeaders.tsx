"use client";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  text: string;
  className?: string;
};

const PageHeaders = ({ text, className }: Props) => {
  const textArr = text.split(" ");
  return (
    <div
      className={twMerge(
        `flex w-[90%] flex-col gap-2 mx-auto min-h-[200px] py-7 lg:items-start items-center justify-center  px-2 text-5xl`,
        className
      )}
    >
      {textArr.map((item, index) => (
        <span
          className={`${textArr.length === 1 ? "font-bold" : "font-semibold"} ${
            textArr.length > 1 && index === 0 && "lg:translate-x-1/4"
          } uppercase block`}
          key={`${index}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default PageHeaders;
