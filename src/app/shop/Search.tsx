"use client";

import Card from "@/components/Card";
import { data } from "@/products";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useRef } from "react";

const Search = () => {
  const router = useRouter();
  const params = useSearchParams();
  const filter = params.get("filter");
  const pageNumber = params.get("page") || "1";
  //   const furnitureRef = useRef<HTMLInputElement | null>(null);
  //   const lightingRef = useRef<HTMLInputElement | null>(null);
  function change(e: ChangeEvent<HTMLInputElement>) {
    router.push(`/shop/?filter=${e.target.value}`);
    // if (e.target.value === "furniture") {
    //   lightingRef.current!.checked = false;
    // } else furnitureRef.current!.checked = false;
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
      <div className="relative p-3 flex flex-col lg:flex-row lg:items-start items-center gap-[20px] ">
        <div className="lg:sticky static w-[250px] px-5  top-[calc(64px+12px)]">
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
                // ref={furnitureRef}
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
        <div className="grid max-[600px]:gap-[20px]  max-[600px]:py-[10px] max-[600px]:grid-cols-1 min-[600px]:grid-cols-2 min-[600px]:gap-[50px] min-[600px]:py-[50px] px-3 flex-1  ">
          {dataToDisplay &&
            dataToDisplay.map((product, index) => (
              <Card
                image={product.images}
                name={product.name}
                price={product.price}
                key={`${product.name}-${product.price}`}
                style={`${
                  index % 2 === 0
                    ? ""
                    : "min-[600px]:-mt-[50px] max-[600px]:mt-0 "
                } max-w-[400px] place-self-center w-full `}
              />
            ))}
        </div>
      </div>
      <div className="flex justify-center gap-4 p-4">
        {buttonArr.map((item, index) => (
          <button
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
          </button>
        ))}
      </div>
    </div>
  );
};

export default Search;
