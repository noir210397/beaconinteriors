"use client";
import React, { useEffect, useState } from "react";
type Props = {
  text: string;
};

const PageHeaders = ({ text }: Props) => {
  const textArr = text.split(" ");
  return (
    <div className="flex w-[90%] flex-col gap-2 mx-auto min-h-[300px] lg:items-start items-center justify-center py-4 px-2 text-5xl">
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
