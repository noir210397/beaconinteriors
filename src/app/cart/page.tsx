"use client";
// import { GiCancel } from "react-icons/gi";
import { AiTwotoneCalendar } from "react-icons/ai";
import PageHeaders from "@/components/PageHeaders";
import { cart } from "@/store/cart";
import { useSelector } from "react-redux";
import Link from "next/link";
import { data } from "@/products";
// import Image from "next/image";
import tw from "tailwind-styled-components";
import CartTable from "@/components/CartTable";
// import RemoveFromCartButton from "@/components/RemoveFromCartButton";
import CartPageCard from "@/components/CartPageCard";
const Header = tw.p`uppercase text-3xl py-4 max-[650px]:text-center`;

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
      {cartItems.length > 0 && (
        <table className="w-[90%] mx-auto">
          <thead>
            <tr className="max-[650px]:hidden">
              <th className="text-start uppercase text-lg font-normal px-2">
                product
              </th>
              <th className="text-start uppercase text-lg font-normal px-2"></th>
              <th className="text-center uppercase text-lg font-normal px-2">
                price
              </th>
              <th className="text-center uppercase text-lg font-normal px-2">
                quantity
              </th>
              <th className="text-center uppercase text-lg font-normal px-2">
                subtotal
              </th>
              <th className="text-start uppercase text-lg font-normal px-2"></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem, index) => (
              <CartPageCard
                {...cartItem}
                key={cartItem.name}
                borderBottom={index + 1 === cartItems.length}
              />
            ))}
          </tbody>
        </table>
      )}
      {cartItems.length > 0 && (
        <>
          <div className="w-[90%] mx-auto ">
            <Header>got a coupon?</Header>
            <div className="flex gap-2 max-[650px]:flex-col min-[650px]:flex-row p-2">
              <input
                type="text"
                className="py-2 w-full min-[650px]:max-w-[300px] px-2 focus:outline-none focus:border-primary border-b-2 border-mydark"
                placeholder="Coupon Code"
              />
              <button className="uppercase bg-primary text-white px-4 py-2 rounded-lg max-[650px]:w-full min-[650px]:min-w-fit">
                apply coupon
              </button>
            </div>
            <div className=" max-w-sm lg:float-end float-none mx-auto lg:mx-0">
              <Header>cart totals</Header>
              <CartTable>
                <tbody>
                  <CartTable.Total />
                  <CartTable.Shipping />
                </tbody>
              </CartTable>
              <div className="flex p-2 justify-between w-full uppercase">
                <span>total</span>
                <span>$ {totalPriceOfItemsInCart}</span>
              </div>
              <Link
                href={`/checkout`}
                className="px-2 py-2 block w-[80%] text-center mx-auto lg:mx-0 float-none lg:float-end uppercase text-white rounded-lg bg-primary my-3 min-w-fit"
              >
                proceed to checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
