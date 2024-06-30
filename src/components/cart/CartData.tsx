import { ProductWithQuantity, cart } from "@/store/cart";
import React from "react";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";
type Props = {
  items: ProductWithQuantity[];
};
const CartData = () => {
  const { items } = useSelector(cart);

  return (
    <div>
      <div className="ps-5 md:ps-10">
        {items.map((item) => (
          <CartCard {...item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default CartData;
