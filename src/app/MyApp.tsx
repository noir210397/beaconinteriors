"use client";

import Loading from "@/components/Loading";
import { setCart, Cart as CartType } from "@/store/cart";
import { useAppDispatch } from "@/store/hooks";
import { store } from "@/store/store";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
const MyApp = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    function getItem(): false | CartType {
      const cartItem = localStorage.getItem("cart");
      if (cartItem) {
        try {
          return JSON.parse(cartItem);
        } catch (error) {
          return false;
        }
      } else {
        return false;
      }
    }
    const cart = getItem();
    if (cart) dispatch(setCart(cart));
    setMounted(true);
  }, []);
  if (!mounted) return <Loading />;
  return <>{children}</>;
};

export default MyApp;
