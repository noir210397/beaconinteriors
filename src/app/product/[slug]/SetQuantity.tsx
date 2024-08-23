"use client";
import { ForwardedRef, forwardRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
interface Props {
  maxnumber: number;
}
const SetQuantity = forwardRef<HTMLInputElement, Props>(
  ({ maxnumber }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const [number, setNumber] = useState(1);
    function increase() {
      if (!number) {
        setNumber(1);
        return;
      }
      if (number === maxnumber) {
        return;
      } else {
        setNumber((num) => num + 1);
      }
    }
    function decrease() {
      if (!number) {
        setNumber(1);
        return;
      }
      if (number === 1) {
        return;
      } else {
        setNumber((num) => num - 1);
      }
    }
    return (
      <div className="flex w-full max-w-xs gap-1  md:max-w-[200px] justify-center items-center py-2 ">
        <button
          className="size-9 bg-white font-bold text-primary hover:text-white hover:bg-primary transition-colors  rounded-full flex justify-center items-center"
          onClick={decrease}
        >
          <AiOutlineMinus />
        </button>
        <div className="flex-1">
          <input
            ref={ref}
            // onBlur={() => {
            //   setNumber(1);
            // }}
            value={number}
            type="number"
            min={1}
            max={maxnumber}
            className="w-full text-center  text-lg font-bold focus"
            onChange={(e) => {
              const num = parseInt(e.target.value);
              // console.log(num);
              if (!(num > maxnumber)) {
                setNumber(num);
              }
            }}
          />
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
