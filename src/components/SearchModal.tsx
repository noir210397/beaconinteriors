import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import tw from "tailwind-styled-components";

const Search = tw.div` fixed search  transition-all inset-0  bg-transparent flex justify-center items-center  `;
type Props = {
  openSearch: () => void;
};
const colorTransition = [
  "rgba(228, 223, 218, 0)", // Transparent
  "#f0efee", // Lighter shade
  "#eae8e6", // Slightly darker
  "#e5e3e0", // Getting closer to the final color
  "#e4e1dd", // Very close to the final color
  "#E4DFDA",
];
const SearchModal = ({ openSearch }: Props) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {}, []);
  return (
    <Search ref={scope}>
      <button onClick={openSearch} className="text-2xl absolute top-2 right-4">
        <AiOutlineClose />
      </button>
      <div className="relative flex flex-wrap gap-2 justify-center items-center">
        <input
          type="text"
          placeholder="Search Products..."
          className="text-2xl outline-none p-2 border-b border-black bg-mygray text-black placeholder:text-black"
        />
        <button className="uppercase border border-mydark text-mydark p-3 text-lg rounded ">
          search
        </button>
      </div>
    </Search>
  );
};

export default SearchModal;
