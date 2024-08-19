"use client";

import Loading from "@/components/Loading";
import { setCart, Cart as CartType } from "@/store/cart";
import { useAppDispatch } from "@/store/hooks";
import { Saved, setSaved } from "@/store/saved";
import { store } from "@/store/store";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
const MyApp = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    function getCart(): false | CartType {
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
    function getSaved(): false | Saved {
      const savedItem = localStorage.getItem("saved");
      if (savedItem) {
        try {
          return JSON.parse(savedItem);
        } catch (error) {
          return false;
        }
      } else {
        return false;
      }
    }
    const cart = getCart();
    const saved = getSaved();
    if (cart) dispatch(setCart(cart));
    if (saved) dispatch(setSaved(saved));

    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="bg-secondary fixed z-[5] inset-x-0 h-[calc(100vh-64px)] top-16 border-2 border-yellow-600"></div>
    );
  return <>{children}</>;
};

export default MyApp;
