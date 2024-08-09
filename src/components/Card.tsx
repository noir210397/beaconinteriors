"use client";
import { AiOutlineHeart } from "react-icons/ai";
import React, { ComponentProps } from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
import { CardType } from "@/types/carouseltype";
import Link from "next/link";
import SaveButton from "./SaveButton";
import { useRouter } from "next/navigation";
const CardWrapper = tw.div``;
const CardInformation = tw.div` mt-2`;

const Card = ({ name, price, image, style }: CardType) => {
  const router = useRouter();

  const navigate = () => {
    router.push(`/product/${name.replaceAll(" ", "-").toLowerCase()}`);
  };
  return (
    <CardWrapper className={`${style} cursor-pointer`} onClick={navigate}>
      <div className="lg:h-64 md:h-56 h-48 relative">
        <Image
          src={Array.isArray(image) ? image[0] : image}
          alt={"west"}
          fill={true}
          className=" object-cover"
        />
      </div>
      <CardInformation>
        <div className="text-3xl font-semibold py-2 uppercase w-[90%] border-t border-mydark">
          {name}
        </div>
        <div className="text-lg font-medium py-2">${price}</div>
        <div className="flex justify-between items-center ">
          <button className="uppercase py-2 px-4  border-primary hover:bg-primary hover:text-white transition-transform border rounded-md">
            view product
          </button>
          {/* <button className="text-3xl  text-primary">
            <AiOutlineHeart />
          </button> */}
          <SaveButton itemName={`${name}`} />
        </div>
      </CardInformation>
    </CardWrapper>
  );
};

export default Card;
