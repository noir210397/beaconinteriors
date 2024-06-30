`use client`;

import { ImCancelCircle } from "react-icons/im";
import { ComponentProps } from "react";
import { useAppDispatch } from "@/store/hooks";
import { removeItemFromCart } from "@/store/cart";

interface CartButtonProps extends ComponentProps<"button"> {
  itemName: string;
}

const CartDeleteButton = ({
  className,
  itemName,
  ...rest
}: CartButtonProps) => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        dispatch(removeItemFromCart(itemName));
      }}
      className={`${className} text-xl px-2`}
      {...rest}
    >
      <ImCancelCircle />
    </button>
  );
};

export default CartDeleteButton;
