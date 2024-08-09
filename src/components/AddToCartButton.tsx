"use client";
import { cart } from "@/store/cart";
import { ComponentProps, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

type Props = ComponentProps<"button">;
const AddToCartButton = ({ children, className, ...rest }: Props) => {
  return (
    <button className={`${className}`} {...rest}>
      {children}
    </button>
  );
};

export default AddToCartButton;
