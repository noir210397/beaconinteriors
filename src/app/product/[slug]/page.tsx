"use client";
import { AiOutlineHeart } from "react-icons/ai";
import { data } from "@/products";
import { notFound } from "next/navigation";
import React, { useRef } from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import SectionHeaders from "@/components/SectionHeaders";
import Card from "@/components/Card";
import SetQuantity from "./SetQuantity";
const StickyContainer = tw.div` p-2 lg:sticky static flex flex-col gap-4 lg:items-start top-[76px] lg:h-[70vh] lg:ml-[20px] lg:w-[calc(45%-20px)] overflow-y-auto w-full items-center  `;
const Wrapper = tw.div`flex-1`;
const CardsContainer = tw.div`mt-[10vh]`;
interface Props {
  params: { slug: string };
}

const SingleProduct = ({ params }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const item = data.find(
    (item) => item.name.toLowerCase() === params.slug.replaceAll("-", " ")
  );
  function getRelatedProducts() {
    if (item) {
      const index = data.findIndex(
        (product) => product.name.toLowerCase() === item.name.toLowerCase()
      );
      const rearrangedArr = [...data.slice(0, index), ...data.slice(index + 1)];
      const related = rearrangedArr
        .filter(
          (product) =>
            product.category.toLowerCase() === item.category.toLowerCase()
        )
        .slice(0, 3);
      return related;
    } else return;
  }
  const relatedProducts = getRelatedProducts();
  if (!item) notFound();

  return (
    <div>
      <div className=" relative flex lg:flex-row flex-col gap-8 items-center lg:items-start py-3   ">
        <StickyContainer>
          <h1 className="lg:text-7xl md:text-5xl text-4xl lg:text-start text-center w-full max-w-lg">
            {item.name}
          </h1>
          <p className="font-semibold lg:text-start text-center w-full max-w-lg">
            {item.description}
          </p>
          <span className="text-xl font-bold w-full text-center lg:text-start px-2">
            $ {item.price}
          </span>
          <span className="uppercase font-extrabold text-primary w-full px-2">
            {item.inStock} in stock
          </span>
          <SetQuantity maxnumber={item.inStock} ref={ref} />
          <div className="flex gap-2 justify-center lg:justify-normal items-center w-full flex-wrap px-2 ">
            <button className="px-14 py-2 uppercase bg-primary text-white rounded flex-1  min-w-max lg:flex-none ">
              add to cart
            </button>
            <button className="px-3 text-3xl text-primary">
              <AiOutlineHeart />
            </button>
          </div>
          {item.shortDescription && (
            <Accordion header={`description`} text={item.description} />
          )}
          {item.dimensions && (
            <Accordion header={`dimensions`} text={item.dimensions} />
          )}
        </StickyContainer>
        <Wrapper>
          {Array.isArray(item.images) ? (
            item.images.map((image, index) => (
              <Image
                src={image}
                alt={`${item.name}-${index}`}
                key={`${item.name}-${index}`}
                className="w-full"
              />
            ))
          ) : (
            <Image
              src={item.images}
              alt={`${item.name}`}
              className="w-full object-contain"
            />
          )}
        </Wrapper>
      </div>
      <CardsContainer>
        <SectionHeaders topheader="related" bottomheader="products" />
        <div className="flex justify-center gap-8 py-8 flex-wrap  px-3 ">
          {relatedProducts
            ? relatedProducts.map((product, index) => (
                <Card
                  image={product.images}
                  name={product.name}
                  price={product.price}
                  key={`${product.name}-${product.price}`}
                  style={`w-full flex-1 md:max-w-[300px] min-w-[200px] md:min-w-[250px] max-w-[250px] ${
                    index === 1 ? "mt-8" : ""
                  }`}
                />
              ))
            : ""}
        </div>
      </CardsContainer>
    </div>
  );
};

export default SingleProduct;
