"use client";
import React, { useEffect, useState } from "react";
type Props = {
  text: string;
};

const PageHeaders = ({ text }: Props) => {
  const textArr = text.split(" ");
  return (
    <div className="flex flex-col bg-green-700 gap-2 w-full min-h-[300px] lg:items-start items-center justify-center py-4 px-2 text-xl md:text-2xl lg:text-3xl">
      {textArr.map((item, index) => (
        <span
          className={`${
            textArr.length === 1 && index === 0
              ? "font-bold"
              : "font-semibold lg:ps-6"
          } uppercase block border-2 border-yellow-700`}
          key={`${index}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default PageHeaders;
