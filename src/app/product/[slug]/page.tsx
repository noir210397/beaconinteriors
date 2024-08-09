"use client";
import { AiOutlineHeart } from "react-icons/ai";
import { data } from "@/products";
import { notFound } from "next/navigation";
import React, { useRef, useState } from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import SectionHeaders from "@/components/SectionHeaders";
import Card from "@/components/Card";
import SetQuantity from "./SetQuantity";
import { useSelector } from "react-redux";
import { addToCartByQuantity, cart } from "@/store/cart";
import { useAppDispatch } from "@/store/hooks";
import AddToCartButton from "@/components/AddToCartButton";
import { toast } from "sonner";
import useMounted from "@/hooks/useMounted";
import Link from "next/link";
const StickyContainer = tw.div` p-2 lg:sticky static flex flex-col gap-4 lg:items-start top-[76px] lg:h-[70vh] lg:ml-[20px] lg:w-[calc(45%-20px)] overflow-y-auto w-full items-center  `;
const Wrapper = tw.div`flex-1`;
const CardsContainer = tw.div`mt-[10vh]`;
interface Props {
  params: { slug: string };
}

const SingleProduct = ({ params }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const mounted = useMounted();
  const [message, setMessage] = useState<null | string>(null);
  const { items: cartItems } = useSelector(cart);
  const dispatch = useAppDispatch();
  const productName = params.slug.replaceAll("-", " ").toLowerCase();
  const item = data.find((item) => item.name.toLowerCase() === productName);
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
  const quantityInCart =
    cartItems.find(
      (product) => product.name.toLowerCase() === item?.name.toLowerCase()
    )?.quantity || 0;
  const relatedProducts = getRelatedProducts();
  if (!item) notFound();

  function checkIsQuantity() {
    const num = parseInt(ref.current!.textContent!.trim() as string);
    const isOkay = quantityInCart + num > item?.inStock!;
    if (!isOkay) {
      dispatch(addToCartByQuantity({ by: num, name: item!.name }));
      setMessage(null);
    } else {
      setMessage(
        `we currently have ${item?.inStock} of this item in stock and you have ${quantityInCart} in cart, so you can't add  ${num} more`
      );
      document.documentElement.scrollTo(0, 0);
      toast.error("unable to add item to cart as there is not enough in stock");
    }
  }
  return (
    <div className="relative">
      {mounted && quantityInCart !== 0 && (
        <div className="flex p-2 gap-2 justify-center items-center flex-wrap bg-white">
          <div className="text-center p-2 text-xs capitalize text-primary max-w-sm">
            {!message
              ? `you currently have ${quantityInCart} of this item in cart`
              : message}
          </div>
          <Link
            href={`/cart`}
            className="bg-primary text-white p-2 uppercase rounded"
          >
            View Cart
          </Link>
        </div>
      )}
      <div className=" relative flex lg:flex-row flex-col gap-8 items-center lg:items-start py-3    ">
        <StickyContainer>
          <h1 className="lg:text-7xl md:text-5xl text-4xl lg:text-start text-center w-full max-w-lg">
            {item.name}
          </h1>
          <p className="font-semibold lg:text-start text-center w-full max-w-lg">
            {item.description}
          </p>
          <span className="text-xl font-bold w-full text-center lg:text-start">
            $ {item.price}
          </span>
          <span className="uppercase font-extrabold text-primary w-full ">
            {item.inStock} in stock
          </span>
          <SetQuantity maxnumber={item.inStock} ref={ref} />
          <div className="flex gap-2 justify-center lg:justify-normal items-center w-full flex-wrap  ">
            <AddToCartButton
              onClick={checkIsQuantity}
              className="px-14 py-2 hover:bg-mydark uppercase bg-primary text-white rounded flex-1  min-w-max lg:flex-none "
            >
              add to cart
            </AddToCartButton>
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 py-8 px-3 md:w-[90%]  mx-auto w-[80%] ">
          {relatedProducts
            ? relatedProducts.map((product, index) => (
                <Card
                  image={product.images}
                  name={product.name}
                  price={product.price}
                  key={`${product.name}-${product.price}`}
                  style={`w-full ${
                    index === 1 && "lg:mt-8 md:translate-y-1/2 lg:translate-y-0"
                  } ${index === 2 && " lg:mt-0 mt-0"}`}
                />
              ))
            : ""}
        </div>
      </CardsContainer>
    </div>
  );
};

export default SingleProduct;
