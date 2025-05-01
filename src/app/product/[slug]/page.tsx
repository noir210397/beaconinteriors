"use client";
import { AiOutlineHeart } from "react-icons/ai";
import { data, Product } from "@/products";
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
import SaveButton from "@/components/SaveButton";
import Button from "@/components/Button";
import { GiCancel } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
const StickyContainer = tw.div` p-2 lg:sticky static flex flex-col gap-4 lg:items-start top-[76px] lg:h-[70vh] lg:ml-[20px] lg:w-[calc(45%-20px)] overflow-y-auto w-full items-center  `;
const Wrapper = tw.div`flex-1`;
const CardsContainer = tw.div`mt-[10vh]`;
const Modal = motion(
  tw.div<{
    $modal: number | null;
  }>`fixed inset-0 bg-black bg-opacity-40 z-[10000] flex justify-center items-center `
);
const MotionImage = motion(Image);
interface Props {
  params: { slug: string };
}

const SingleProduct = ({ params }: Props) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const mounted = useMounted();
  const [message, setMessage] = useState<null | string>(null);
  const [modal, setModal] = useState<number | null>(null);
  const { items: cartItems } = useSelector(cart);
  const dispatch = useAppDispatch();
  const productName = params.slug.replaceAll("-", " ").toLowerCase();
  const item = data.find((item) => item.name.toLowerCase() === productName);
  const multipleImages = Array.isArray(item?.images);
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
      {/* <AnimatePresence> */}
      {modal && (
        <Modal
          $modal={modal}
          // layoutId={`${item.name}-${modal}`}
          transition={{ duration: 0.1 }}
        >
          <Button
            onClick={() => setModal(null)}
            className="text-xl absolute z-[4] top-0 left-0"
          >
            <GiCancel />
          </Button>
          <div className="border-2 border-purple-700 ">
            <button>backward</button>
            <button>forward</button>

            <motion.div
              // style={{ transform: `-translateX(${(modal - 1) * 100})` }}
              className="aspect-square w-[400px]"
            >
              <Image
                alt={`${item.name}-${modal - 1}`}
                src={
                  !Array.isArray(item.images)
                    ? item.images
                    : item.images[modal - 1]
                }
              />
            </motion.div>
          </div>
        </Modal>
      )}
      {/* </AnimatePresence> */}
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
      <div className="relative flex lg:flex-row flex-col gap-8 items-center lg:items-start py-3">
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

            <SaveButton itemName={item.name} checkSaved />
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
              <MotionImage
                src={image}
                alt={`${item.name}-${index + 1}`}
                key={`${item.name}-${index + 1}`}
                className="w-full object-cover"
                id={`${item.name}-${index + 1}`}
                onClick={(e) => {
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
              onClick={() => {
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
}: {
  item: Product;
  modal: number;
}) {
  const [visibleImage, setVisibleImage] = useState(modal);

  return (
    <motion.div className="aspect-square w-[400px]">
      <button>forward</button>
      <motion.div className="aspect-square w-[400px]">
        <AnimatePresence>
          <MotionImage
            alt={``}
            src={
              !Array.isArray(item.images)
                ? item.images
                : item.images[visibleImage - 1]
            }
            exit={{ x: -10000 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          />
        </AnimatePresence>
      </motion.div>
      <button>backward</button>
    </motion.div>
  );
}
