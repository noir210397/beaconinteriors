"use client";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import Card from "./Card";
import { Product } from "@/products";
import Link from "next/link";
const CarouselWrapper = tw.div` carousel flex  overflow-x-scroll gap-3 pb-2 snap-x snap-mandatory  scroll-smooth  `;
const Container = tw.div`p-2 `;
const ButtonConatiner = tw.div` flex justify-center items-center py-4`;
// const arr = randNum(8);

const Carousel = ({ data }: { data: Product[] }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isPrevDisabled, setPrevDisabled] = useState(true);
  const [isNextDisabled, setNextDisabled] = useState(false);
  const checkScrollPosition = () => {
    if (wrapperRef.current) {
      const left = wrapperRef.current.scrollLeft;
      const maxScroll =
        wrapperRef.current.scrollWidth - wrapperRef.current.clientWidth || 0;

      setPrevDisabled(left <= 0);
      setNextDisabled(left >= maxScroll);
    }
  };

  useEffect(() => {
    checkScrollPosition();
  });
  const nextCard = () => {
    if (wrapperRef.current) {
      const left = wrapperRef.current.scrollLeft;
      const maxScroll =
        wrapperRef.current.scrollWidth - wrapperRef.current.clientWidth || 0;
      const cardSize = wrapperRef.current.firstElementChild?.clientWidth || 0;
      const distance = left + (cardSize + 12);

      wrapperRef.current.scrollTo(Math.min(distance, maxScroll), 0);
    }
  };
  const previousCard = () => {
    if (wrapperRef.current) {
      const left = wrapperRef.current.scrollLeft;
      const cardSize = wrapperRef.current.firstElementChild?.clientWidth || 0;
      const distance = left - (cardSize + 12);

      wrapperRef.current.scrollTo(Math.max(distance, 0), 0);
    }
  };
  return (
    <Container>
      <CarouselWrapper ref={wrapperRef} onScroll={checkScrollPosition}>
        {data.map((item) => (
          <Card
            image={item.images}
            name={item.name}
            price={item.price}
            key={`${item.name}-${item.price}`}
            style="w-[90%] block max-w-96 flex-shrink-0 snap-center"
          />
        ))}
      </CarouselWrapper>
      <ButtonConatiner>
        <div className=" flex gap-5">
          <button
            disabled={isPrevDisabled}
            onClick={previousCard}
            className={`${
              isPrevDisabled ? "" : ""
            } disabled:opacity-50 md:text-2xl text-xl font-semibold text-primary border border-primary rounded-full md:w-14  w-12 aspect-square flex justify-center items-center`}
          >
            <span>
              <AiOutlineArrowLeft />
            </span>
          </button>
          <button
            disabled={isNextDisabled}
            onClick={nextCard}
            className={`${
              isNextDisabled ? "" : ""
            } disabled:opacity-50  md:text-2xl text-xl font-semibold text-primary border border-primary rounded-full md:w-14  w-12 aspect-square flex justify-center items-center`}
          >
            <span>
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
      </ButtonConatiner>
    </Container>
  );
};

export default Carousel;
