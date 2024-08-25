import { useAnimate, motion, usePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import tw from "tailwind-styled-components";

const Search = tw.div<{ $mounted: boolean }>`${(p) =>
  p.$mounted
    ? "transform-none"
    : "-translate-y-[10%]"} transition-transform fixed search  inset-0   flex justify-center items-center   `;
type Props = {
  openSearch: () => void;
};
const colorTransition = [
  "rgba(228, 223, 218, 0)",
  "#f0efee",
  "#eae8e6",
  "#e5e3e0",
  "#e4e1dd",
  "#E4DFDA",
];
const SearchModal = ({ openSearch }: Props) => {
  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();
  useEffect(() => {
    if (isPresent) {
      const enterAnimation = () => {
        animate(
          scope.current,
          { y: "0", opacity: 1 },
          { duration: 0.3, ease: "easeIn" }
        );
        animate(
          ".search-button",
          { opacity: 1 },
          { delay: 0.5, duration: 0.28 }
        );
        animate("input", { opacity: 1 }, { delay: 0.5, duration: 0.2 });
        animate(".line", { width: "100%" }, { delay: 0.3, duration: 0.4 });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(
          scope.current,
          { y: "-20%", opacity: 0 },
          { duration: 0.3 }
        );
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent]);
  return (
    <motion.div
      ref={scope}
      initial={{ y: "-20%", opacity: 0 }}
      className="fixed search inset-0 bg-secondary flex justify-center items-center px-2 "
    >
      <button onClick={openSearch} className="text-5xl absolute top-2 right-4">
        <AiOutlineClose />
      </button>
      <div className="relative flex flex-wrap gap-2 justify-center items-center">
        <input
          type="text"
          placeholder="Search Products..."
          className="text-2xl outline-none p-2 bg-secondary text-black placeholder:text-black opacity-0"
        />
        <button className="uppercase border border-mydark text-mydark px-5 py-2 rounded search-button opacity-0 ">
          search
        </button>
        <motion.div
          initial={{ width: 0 }}
          className="h-[1px] bg-black line absolute left-0 -bottom-[12px]"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SearchModal;
