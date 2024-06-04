import { AiOutlineHeart } from "react-icons/ai";
import React, { ComponentProps } from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
const CardWrapper = tw.div`w-[90%] max-w-96 flex-shrink-0 snap-center`;
const CardInformation = tw.div` mt-2`;

const Card = ({ name, price, image, style }: CardType) => {
  return (
    <CardWrapper className={`${style}`}>
      <div className="lg:h-64 md:h-56 h-48 relative">
        <Image
          src="/images/hero.jpg"
          alt="we"
          fill={true}
          className=" object-cover"
        />
      </div>
      <CardInformation>
        <div className="text-3xl font-semibold py-2 uppercase w-[90%] border-t border-mydark">
          alano armchair
        </div>
        <div className="text-lg font-medium py-2">$1,300</div>
        <div className="flex justify-between items-center ">
          <button className="uppercase py-2 px-4  border-primary hover:bg-primary hover:text-white transition-transform border rounded-md">
            view product
          </button>
          <button className="lg:text-3xl text-xl text-primary">
            <AiOutlineHeart />
          </button>
        </div>
      </CardInformation>
    </CardWrapper>
  );
};

export default Card;
