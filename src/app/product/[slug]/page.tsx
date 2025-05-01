"use client";
import { AiOutlineClose } from "react-icons/ai";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineHeart,
} from "react-icons/ai";
import { data, isImageArray, Product } from "@/products";
import { notFound } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
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
import SaveButton from "@/components/SaveButton";
import Button from "@/components/Button";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
} from "@/components/accordion/Accordion";
const StickyContainer = tw.div` p-2 md:sticky static flex flex-col gap-4 lg:items-start top-[76px] md:h-[70vh] md:ml-[20px] md:w-[calc(45%-20px)] overflow-y-auto w-full items-center  `;
const Wrapper = tw.div`flex-1`;
const CardsContainer = tw.div`mt-[10vh]`;
const Modal = motion(
  tw.div<{
    $modal: number | null;
  }>`fixed inset-0 overflow-x-hidden bg-white bg-opacity-40 z-[10000] flex justify-center items-center `
);
const MotionImage = motion(Image);
interface Props {
  params: { slug: string };
}
type Dimension = {
  left: number;
  top: number;
  width: number;
  height: number;
};

const SingleProduct = ({ params }: Props) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const dimensionRef = useRef<null | Dimension>(null);
  const mounted = useMounted();
  const [message, setMessage] = useState<null | string>(null);
  const [modal, setModal] = useState<number | null>(null);
  const { items: cartItems } = useSelector(cart);
  const dispatch = useAppDispatch();
  const productName = params.slug.replaceAll("-", " ").toLowerCase();
  const item = data.find((item) => item.name.toLowerCase() === productName);
  const multipleImages = Array.isArray(item?.images);
  function getDimensions(element: HTMLElement) {
    const dimension = element.getBoundingClientRect();
    dimensionRef.current = {
      left: dimension.left,
      height: element.clientHeight,
      top: dimension.top,
      width: element.clientWidth,
    };
  }
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
    const num = parseInt(ref.current!.value!.trim() as string);
    if (!num) {
      ref.current?.focus();
      return;
    }
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
      {modal && (
        <Modal $modal={modal} onClick={() => setModal(null)}>
          <AnimatePresence>
            <SingleProductCarousel
              item={item}
              modal={modal}
              dimension={dimensionRef.current}
              setModal={setModal}
            />
          </AnimatePresence>
        </Modal>
      )}
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
      <div className="relative flex md:flex-row flex-col gap-8 items-center lg:items-start py-3">
        <StickyContainer>
          <h1 className="lg:text-7xl md:text-5xl text-4xl lg:text-start text-center w-full max-w-lg">
            {item.name}
          </h1>
          <p className=" md:text-start text-center w-full max-w-lg">
            {item.description}
          </p>
          <span className="text-xl font-bold w-full text-center lg:text-start">
            $ {item.price}
          </span>
          <span className="uppercase font-extrabold text-primary w-full ">
            {item.inStock} in stock
          </span>
          <SetQuantity maxnumber={item.inStock} ref={ref} />
          <div className="flex gap-2 justify-center md:justify-normal items-center w-full flex-wrap  ">
            <AddToCartButton
              onClick={checkIsQuantity}
              className="px-14 py-2 hover:bg-mydark uppercase bg-primary text-white rounded flex-1  min-w-max md:flex-none "
            >
              add to cart
            </AddToCartButton>

            <SaveButton itemName={item.name} checkSaved />
          </div>
          <div className="w-full">
            <AccordionRoot type="multiple">
              {item.shortDescription && (
                <AccordionItem value="description">
                  <AccordionHeader hasIcon>Description</AccordionHeader>
                  <AccordionContent animate>
                    {item.shortDescription}
                  </AccordionContent>
                </AccordionItem>
              )}
              {item.dimensions && (
                <AccordionItem value="dimension">
                  <AccordionHeader hasIcon>Dimensions</AccordionHeader>
                  <AccordionContent animate>{item.dimensions}</AccordionContent>
                </AccordionItem>
              )}
            </AccordionRoot>
          </div>
          {/* {item.shortDescription && (
            <Accordion header={`description`} text={item.description} />
          )} */}
          {/* {item.dimensions && (
            <Accordion header={`dimensions`} text={item.dimensions} />
          )} */}
        </StickyContainer>
        <Wrapper>
          {Array.isArray(item.images) ? (
            item.images.map((image, index) => (
              <MotionImage
                src={image}
                alt={`${item.name}-${index + 1}`}
                key={`${item.name}-${index + 1}`}
                className="w-full object-cover"
                id={`${item.name}-${index + 1}`}
                onClick={(e) => {
                  getDimensions(e.currentTarget);
                  setModal(index + 1);
                  console.log(index);
                }}
                // layoutId={`${item.name}-${index + 1}`}
                transition={{ duration: 0.1 }}
              />
            ))
          ) : (
            <MotionImage
              src={item.images}
              alt={`${item.name}`}
              id={`${item.name}-${1}`}
              className="w-full object-cover"
              onClick={(e) => {
                getDimensions(e.currentTarget);

                setModal(1);
                console.log("done");
              }}
              // layoutId={`${item.name}-1`}
              transition={{ duration: 0.1 }}
            />
          )}
        </Wrapper>
      </div>
      <CardsContainer>
        <SectionHeaders topheader="related" bottomheader="products" />
        <div className="grid lg:grid-cols-3 min-[617px]:grid-cols-2 max-[617px]:grid-cols-1 gap-12 lg:pb-[50px] px-3 md:w-[90%]   mx-auto ">
          {relatedProducts
            ? relatedProducts.map((product, index) => (
                <Card
                  image={product.images}
                  name={product.name}
                  price={product.price}
                  key={`${product.name}-${product.price}`}
                  style={`min-[617px]:w-full max-[617px]:w-[90%] max-[617px]:mx-auto ${
                    index === 1 &&
                    "min-[617px]:translate-y-1/3 lg:translate-y-[50px]"
                  } `}
                />
              ))
            : ""}
        </div>
      </CardsContainer>
    </div>
  );
};

export default SingleProduct;

function SingleProductCarousel({
  item,
  modal,
  dimension,
  setModal,
}: {
  item: Product;
  modal: number;
  dimension: Dimension | null;
  setModal: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const [visibleImage, setVisibleImage] = useState(modal);
  const [scope, animate] = useAnimate();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const initialRender = useRef(true);

  useEffect(() => {
    animate(
      scope.current,
      {
        height: 400,
        objectFit: "contain",
        left: "50%",
        x: "-50%",
        top: "50%",
        y: "-50%",
      },
      { duration: 0.2 }
    ).then(() => {
      if (buttonRef.current) {
        const card = buttonRef.current.parentElement!.querySelector(
          ".active-card"
        )! as HTMLDivElement;
        const decoyImage = buttonRef.current.parentElement!.querySelector(
          "#decoy-image"
        )! as HTMLDivElement;
        card.style.opacity = "1";
        console.log(card);
        initialRender.current = false;
        decoyImage.style.display = "none";
        // decoyImage.style.opacity = "0";
      }
    });
    // const cardDimensions = card.getBoundingClientRect();
  }, []);

  return (
    <>
      <MotionImage
        ref={scope}
        src={item.images[visibleImage - 1]}
        alt={`${item.name}-image-${visibleImage}`}
        id="decoy-image"
        className="z-[1000] "
        initial={{
          width: dimension?.width,
          height: dimension?.height,
          top: dimension?.top,
          left: dimension?.left,
          objectFit: "none",
          position: "fixed",
        }}
        transition={{ duration: 0.2 }}
      />
      <button
        disabled={visibleImage === 1}
        onClick={(e) => {
          e.stopPropagation();
          setVisibleImage(visibleImage - 1);
        }}
        ref={buttonRef}
        className="absolute left-2 z-10 text-lg aspect-square p-4 rounded-full border border-black"
      >
        <AiOutlineArrowLeft />
      </button>

      <motion.div className=" relative w-full overflow-hidden">
        <div
          style={{ transform: `translateX(-${(visibleImage - 1) * 100}%)` }}
          className="w-full flex  ease-in-out duration-150 "
        >
          {item.images.length > 0 ? (
            item.images.map((image, index) => {
              const check = index + 1 === visibleImage;
              return (
                <div
                  key={`${item.name}-${index} `}
                  onClick={() => {
                    setModal(null);
                  }}
                  className={`flex   w-full h-[400px]  flex-shrink-0 justify-center`}
                >
                  <MotionImage
                    alt={``}
                    onClick={(e) => e.stopPropagation()}
                    src={image}
                    className={` ${
                      check && initialRender.current && "active-card opacity-0"
                    } object-contain h-full`}
                  />
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </motion.div>
      <button
        disabled={visibleImage === item.images.length}
        onClick={(e) => {
          e.stopPropagation();
          setVisibleImage(visibleImage + 1);
        }}
        className="absolute right-2 z-10 text-lg aspect-square p-4 rounded-full border border-black"
      >
        <AiOutlineArrowRight />
      </button>
    </>
  );
}
