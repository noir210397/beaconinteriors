import { ProductWithQuantity, cart } from "@/store/cart";
import React from "react";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";
import Link from "next/link";
type Props = {
  items: ProductWithQuantity[];
};
const CartData = () => {
  const { items, totalPriceOfItemsInCart } = useSelector(cart);

  return (
    <div>
      <div className="w-4/5 mx-auto">
        {items.map((item) => (
          <CartCard {...item} key={item.name} />
        ))}
        <div className="inline-block border-t-2 border-mydark py-2">
          <span className="font-bold ">Subtotal:</span>{" "}
          <span>$ {totalPriceOfItemsInCart}</span>
        </div>
        <div className="py-4">
          <Link
            href={`/cart`}
            className="uppercase bg-primary text-base py-2 px-2 md:px-4 mr-2 text-white rounded-md mb-2 hover:bg-mydark transition-colors"
          >
            view cart
          </Link>
          <Link
            href={`/checkout`}
            className="uppercase bg-primary text-base py-2 px-2 md:px-4 mr-2 text-white rounded-md hover:bg-mydark transition-colors"
          >
            checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartData;
