"use client";
import { ForwardedRef, forwardRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
interface Props {
  maxnumber: number;
}
const SetQuantity = forwardRef<HTMLDivElement, Props>(
  ({ maxnumber }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const [number, setNumber] = useState(1);
    function increase() {
      if (number === maxnumber) {
        return;
      } else {
        setNumber((num) => num + 1);
      }
    }
    function decrease() {
      if (number === 1) {
        return;
      } else {
        setNumber((num) => num - 1);
      }
    }
    return (
      <div className="flex w-full max-w-xs  md:max-w-[200px] justify-center items-center py-2 ">
        <button
          className="size-9 bg-white font-bold text-primary hover:text-white hover:bg-primary transition-colors  rounded-full flex justify-center items-center"
          onClick={decrease}
        >
          <AiOutlineMinus />
        </button>
        <div ref={ref} className="flex-1 text-center text-lg font-bold">
          {number}
        </div>
        <button
          className="size-9 bg-white font-bold text-primary hover:text-white hover:bg-primary transition-colors  rounded-full flex justify-center items-center"
          onClick={increase}
        >
          <AiOutlinePlus />
        </button>
      </div>
    );
  }
);
SetQuantity.displayName = "SetQuantity";
export default SetQuantity;
