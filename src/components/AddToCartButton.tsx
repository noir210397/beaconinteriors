"use client";
import { cart } from "@/store/cart";
import { ComponentProps, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import ToastMessage from "./ToastMessage";

type Props = ComponentProps<"button"> & {
  itemId: string;
  setMessage: React.Dispatch<React.SetStateAction<string | null>>;
};
const AddToCartButton = ({
  children,
  className,
  itemId,
  setMessage,
  ...rest
}: Props) => {
  const { items: cartItems } = useSelector(cart);
  const quantityInCart =
    cartItems.find((product) => product.name.toLowerCase() === itemId)
      ?.quantity || 0;
  const prevQuantityInCart = useRef(quantityInCart);
  useEffect(() => {
    prevQuantityInCart.current < quantityInCart &&
      toast.success(
        quantityInCart - prevQuantityInCart.current === 1
          ? "item added to cart"
          : `${
              quantityInCart - prevQuantityInCart.current
            } of ${itemId} added to cart`
      );
    prevQuantityInCart.current = quantityInCart;
    setMessage(null);
  }, [quantityInCart]);

  return (
    <button className={`${className}`} {...rest}>
      {children}
    </button>
  );
};

export default AddToCartButton;
