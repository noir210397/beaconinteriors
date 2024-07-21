"use client";
import { AiTwotoneCalendar } from "react-icons/ai";
import PageHeaders from "@/components/PageHeaders";
import { cart } from "@/store/cart";
import { useSelector } from "react-redux";
import Link from "next/link";

const Page = () => {
  const { items: cartItems, totalPriceOfItemsInCart } = useSelector(cart);

  return (
    <div>
      <PageHeaders text="my cart" />
      {cartItems.length === 0 && (
        <div className="w-[90%] mx-auto py-5">
          <div className="bg-white px-4  h-[50px] flex items-center relative text-primary capitalize ">
            <div className="absolute h-1 top-0 inset-x-0 bg-mydark"></div>
            <AiTwotoneCalendar className="text-2xl mr-2" /> your cart is
            currently empty
          </div>
          <Link
            href={`/shop`}
            className="p-2 uppercase bg-primary text-white block w-fit rounded-lg mt-[20px]"
          >
            return to shop
          </Link>
        </div>
      )}
    </div>
  );
};

export default Page;
