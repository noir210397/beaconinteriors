import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  text: string;
  to: string;
  className?: string;
};

const InfiniteScroller = ({ text, to, className }: Props) => {
  return (
    <Link
      className={twMerge(`overflow-hidden w-full block`, className)}
      href={to}
    >
      <div className="flex w-[200vw] active font-extrabold ">
        <div className="uppercase w-[100vw]   text-[50px] leading-none md:text-[60px] lg:text-[80px] text-center flex-shrink-0  ">
          {text}
        </div>
        <div className="uppercase w-[100vw] text-[50px] leading-none md:text-[60px] lg:text-[80px] text-center flex-shrink-0  ">
          {text}
        </div>
        {/* <div className="uppercase text-8xl px-10 text-center   ">interiors</div>
        <div className="uppercase text-8xl px-10 text-center  ">interiors</div> */}
      </div>
    </Link>
  );
};

export default InfiniteScroller;
