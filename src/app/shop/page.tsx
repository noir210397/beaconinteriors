"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import PageHeaders from "@/components/PageHeaders";
import SectionHeaders from "@/components/SectionHeaders";
import { data } from "@/products";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChangeEvent, useRef } from "react";

const Shop = ({
  searchParams,
}: {
  searchParams: { filter?: "furniture" | "lighting"; page?: string };
}) => {
  const router = useRouter();
  const filter = searchParams.filter;
  const pageNumber = searchParams.page || "1";

  function change(e: ChangeEvent<HTMLInputElement>) {
    router.push(`/shop/?filter=${e.target.value}`);
  }
  function getData() {
    if (filter === "furniture")
      return data.filter(
        (product) => product.category.toLowerCase() === filter
      );
    if (filter === "lighting")
      return data.filter(
        (product) => product.category.toLowerCase() === filter
      );
    else return data;
  }
  function dataToShow() {
    if (parseInt(pageNumber) > numberOfPages) router.replace(`/shop`);
    else if (parseInt(pageNumber) === numberOfPages) {
      return products.slice((parseInt(pageNumber) - 1) * 10 + 1);
    } else {
      return products.slice(
        (parseInt(pageNumber) - 1) * 10,
        parseInt(pageNumber) * 10
      );
    }
  }
  const products = getData();
  const numberOfPages = Math.ceil(products.length / 10);
  const buttonArr = new Array(numberOfPages).fill(0);
  const dataToDisplay = dataToShow();
  return (
    <div>
      <PageHeaders text="our products" />
      <div className="relative p-3 flex flex-col lg:flex-row lg:items-start items-center gap-[20px] ">
        <div className="lg:sticky static w-[350px] px-5  top-[calc(64px+12px)]">
          <div className="py-2 border-b-2 border-primary cursor-pointer text-lg font-semibold">
            Categories
          </div>
          <form action="" className="py-3">
            <div className="py-1">
              <input
                type="checkbox"
                className="mr-3 scale-125 accent-primary"
                name="categories"
                onChange={change}
                value={`furniture`}
                checked={filter === "furniture"}
              />
              <label className="uppercase">furniture</label>
            </div>
            <div className="py-1">
              <input
                type="checkbox"
                className="mr-3 scale-125 accent-primary"
                name="categories"
                value={`lighting`}
                onChange={change}
                // ref={lightingRef}
                checked={filter === "lighting"}
              />
              <label className="uppercase">lighting</label>
            </div>
          </form>
        </div>
        <div className="grid max-[600px]:gap-[20px]  max-[600px]:py-[10px] max-[600px]:grid-cols-1 min-[600px]:grid-cols-2 min-[600px]:gap-x-[10%] min-[600px]:gap-y-[50px] min-[600px]:pt-[150px] px-3 flex-1  ">
          <AnimatePresence>
            {dataToDisplay &&
              dataToDisplay.map((product, index) => (
                <motion.div
                  key={`${product.name}-${product.price}`}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.05, duration: 1 }}
                >
                  <Card
                    image={product.images}
                    name={product.name}
                    price={product.price}
                    style={`${
                      index % 2 === 0 ? "" : "min-[600px]:-translate-y-[120px] "
                    }  w-full `}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex justify-center gap-4 p-4">
        {buttonArr.map((item, index) => (
          <Button
            key={index}
            className={`text-xl p-3 ${
              index + 1 === parseInt(pageNumber) ? "font-extrabold" : ""
            }`}
            onClick={() => {
              if (filter)
                router.push(`/shop?filter=${filter}&page=${index + 1}`);
              else {
                router.push(`/shop?page=${index + 1}`);
              }
            }}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Shop;
