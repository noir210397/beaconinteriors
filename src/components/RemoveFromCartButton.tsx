"use client";
import { removeItemFromCart } from "@/store/cart";
import { useAppDispatch } from "@/store/hooks";
import { ComponentProps } from "react";

type Props = ComponentProps<"button"> & { itemName: string };

const RemoveFromCartButton = ({
  className,
  itemName,
  children,
  ...rest
}: Props) => {
  const dispatch = useAppDispatch();

  return (
    <button
      {...rest}
      className={`${className}`}
      onClick={() => dispatch(removeItemFromCart(itemName))}
    >
      {children}
    </button>
  );
};

export default RemoveFromCartButton;
