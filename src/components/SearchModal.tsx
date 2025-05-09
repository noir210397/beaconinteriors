import { data, Product } from "@/products";
import { useAnimate, motion, usePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
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
  const [search, setSearch] = useState<{
    products: Product[];
    searching: boolean;
  }>({ products: [], searching: false });
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
  function filterData(e: ChangeEvent<HTMLInputElement>) {
    const query = e.currentTarget.value.trim().toLowerCase();
    if (query.length > 0) {
      setSearch({
        products: data.filter((item) =>
          item.name.toLowerCase().includes(query)
        ),
        searching: true,
      });
    } else {
      setSearch({ products: [], searching: false });
    }
  }
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
          onChange={filterData}
          type="text"
          placeholder="Search Products..."
          className="text-lg md:text-2xl outline-none p-2 bg-secondary text-black placeholder:text-black opacity-0"
        />
        <button className="uppercase border border-mydark text-mydark px-5 py-2 rounded search-button opacity-0 ">
          search
        </button>
        <motion.div
          initial={{ width: 0 }}
          className="h-[1px] bg-black line absolute left-0 -bottom-[12px]"
        ></motion.div>
        <div className="absolute top-[calc(100%+13px)]  max-h-[250px] w-full overflow-y-auto">
          {search.searching &&
            search.products.length > 0 &&
            search.products.map((item) => (
              <SearchCard {...item} key={item.name} />
            ))}
          {search.searching && search.products.length === 0 && (
            <span className="uppercase  p-2">no products found.</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SearchModal;

const SearchCard = ({ name, images }: Product) => {
  return (
    <Link
      className="flex w-full gap-4  items-center"
      href={`/product/${name.replaceAll(" ", "-").toLowerCase()}`}
    >
      <Image
        src={images[0]}
        alt={name}
        className="w-[40px] aspect-square my-1"
      />
      <span>{name}</span>
    </Link>
  );
};
