"use client";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { FiBriefcase } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import tw from "tailwind-styled-components";
import { useSelector } from "react-redux";
import { Cart as CartType, cart, setCart } from "@/store/cart";
import { usePathname } from "next/navigation";
import CartData from "./cart/CartData";
import { useAppDispatch } from "@/store/hooks";
import Loading from "./Loading";
type CartProps = {
  $isopen: boolean;
};
const LinkWrapper = tw.div` flex gap-10 pt-5 lg:pt-0 lg:flex-row flex-col `;
const Cart = tw.div<{
  $isopen: boolean;
  $isCartEmpty: boolean;
}>`fixed ease-in-out duration-500 cart bg-white overflow-y-auto   inset-0 top-16 md:start-1/2 py-[80px] px-2  lg:start-2/3 ${(
  p
) => (p.$isopen ? "" : "translate-x-full transition-transform ")} ${(p) =>
  p.$isCartEmpty ? "flex justify-center items-center" : ""}`;
const SearchModal = tw.div<CartProps>` fixed search  transition-all inset-0 bg-mygray  flex justify-center items-center ${(
  p
) => (p.$isopen ? "" : "hidden")} `;
const links = [
  {
    name: "showroom",
    path: "/showroom",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "interior design",
    path: "/interior-design",
  },
  {
    name: "revamping",
    path: "/revamping",
  },
  {
    name: "shop",
    path: "/shop",
  },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const { totalItemsInCart, items } = useSelector(cart);
  const onCartPage = usePathname() === `/cart`;
  const dispatch = useAppDispatch();
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
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (cartOpen || menuOpen) {
      document.body.style.overflow = "hidden";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [cartOpen, menuOpen]);

  const openMenu = () => {
    setCartOpen(false);
    setMenuOpen(!menuOpen);
  };
  const openSearch = () => {
    setSearchOpen(!searchOpen);
  };
  const openCart = () => {
    setMenuOpen(false);
    setCartOpen(!cartOpen);
  };
  if (!mounted) return <Loading />;

  return (
    <nav
      className={`
      } flex border-b-2    gap-2 px-3 justify-between items-center h-16 fixed w-full top-0 z-20 bg-secondary`}
    >
      <Logo />
      <div
        className={` flex-1 ease-in-out duration-500  lg:p-0 lg:static lg:translate-x-0 inset-0  flex lg:items-center lg:justify-center fixed end-0 md:end-1/2 top-16 flex-col gap-2  lg:bg-inherit bg-mygray2  transition-transform px-4 py-8  ${
          menuOpen ? "" : "-translate-x-full"
        }`}
      >
        <div className="flex  min-[500px]:hidden  lg:gap-2 gap-8 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 items-center">
          <button
            onClick={openSearch}
            className="text-2xl font-extrabold lg:text-xl  "
          >
            <BiSearch />
          </button>
          <Link
            href={`/login`}
            className="text-2xl font-extrabold lg:text-xl  flex justify-center items-center "
          >
            <BsPerson />
          </Link>
          <Link
            href={`/saved`}
            className="text-2xl font-extrabold lg:text-xl  flex justify-center items-center  "
          >
            <AiOutlineHeart />
          </Link>
        </div>
        <LinkWrapper>
          {links.map((link) => (
            <Link
              key={link.name}
              className="uppercase text-mydark hover:underline decoration-2 decoration-primary font-extrabold lg:font-semibold text-lg lg:text-base"
              href={`${link.path}`}
            >
              {link.name}
            </Link>
          ))}
        </LinkWrapper>
      </div>
      <div className="flex items-center justify-center gap-2 ">
        <div className="hidden min-[500px]:flex  gap-2  items-center">
          <button onClick={openSearch} className="text-xl font-extrabold ">
            <BiSearch />
          </button>
          <Link
            href={`/login`}
            className=" font-extrabold text-xl  flex justify-center items-center "
          >
            <BsPerson />
          </Link>
          <Link
            href={`/saved`}
            className=" font-extrabold text-xl  flex justify-center items-center  "
          >
            <AiOutlineHeart />
          </Link>
        </div>
        <button
          disabled={onCartPage}
          onClick={openCart}
          className="flex justify-center items-center gap-1 text-lg  "
        >
          <span>
            <FiBriefcase />
          </span>
          <span>{`(${totalItemsInCart})`}</span>
        </button>
        <button
          onClick={openMenu}
          className="flex justify-center items-center gap-1 text-2xl lg:hidden  "
        >
          <span className={``}>
            {menuOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
          </span>
        </button>
      </div>
      <Cart $isopen={cartOpen} $isCartEmpty={totalItemsInCart === 0}>
        <button className="text-2xl absolute top-2 right-4" onClick={openCart}>
          <AiOutlineClose />
        </button>
        {totalItemsInCart === 0 && (
          <div className="capitalize font-bold">no cart items</div>
        )}
        {totalItemsInCart !== 0 && <CartData />}
      </Cart>
      <SearchModal $isopen={searchOpen}>
        <button
          onClick={openSearch}
          className="text-2xl absolute top-2 right-4"
        >
          <AiOutlineClose />
        </button>
        <div className="relative flex flex-wrap gap-2 justify-center items-center">
          <input
            type="text"
            placeholder="Search Products..."
            className="text-2xl outline-none p-2 border-b border-black bg-mygray text-black placeholder:text-black"
          />
          <button className="uppercase border border-mydark text-mydark p-3 text-lg rounded ">
            search
          </button>
        </div>
      </SearchModal>
    </nav>
  );
};

export default NavBar;
