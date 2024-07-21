"use client";
import { AiOutlineClose } from "react-icons/ai";
import Label from "@/components/Label";
import PageHeaders from "@/components/PageHeaders";
import SelectInput from "@/components/SelectInput";
import TextInput from "@/components/TextInput";
import { cart } from "@/store/cart";
import React from "react";
import { useSelector } from "react-redux";
import tw from "tailwind-styled-components";
import CartTable from "@/components/CartTable";
import SingleOpenAccordion from "@/components/home/SingleOpenAccordion";
import { redirect } from "next/navigation";
const Header = tw.p`uppercase text-3xl py-4`;
const Container = tw.div``;
const accordionVals = [
  { title: "cash on delivery", content: "pay with cash upon delivery" },
  {
    title: "credit,debit or prepaid card",
    content: "pay with credit or debit card",
  },
];
const Page = () => {
  const { items: cartItems, totalPriceOfItemsInCart } = useSelector(cart);
  if (cartItems.length === 0) redirect(`/cart`);

  return (
    <div>
      <PageHeaders text={`order checkout`} />
      <div className="grid gap-5 px-4 min-[750px]:max-w-[90%] mx-auto max-[750px]:w--full max-[750px]:grid-cols-1 min-[750px]:grid-cols-2">
        <Container>
          <Header>billing details</Header>
          <form>
            <Label htmlFor="first name">first name</Label>
            <TextInput id="first name" />
            <Label htmlFor="last name">last name</Label>
            <TextInput id="last name" />
            <Label htmlFor="address">country / region</Label>
            <span className="block font-bold text-lg py-1">USA</span>
            <input type="hidden" value={`usa`} id="country" name="country" />
            <Label htmlFor="address">address</Label>
            <TextInput id="address" />
            <Label htmlFor="town/city">town / city</Label>
            <TextInput id="town/city" />
            <Label htmlFor="state/county">state / county</Label>
            <SelectInput />
            <Label htmlFor="postcode/zip">postcode / zip</Label>
            <TextInput id="postcode/zip" />
            <Label htmlFor="phone number">phone no</Label>
            <TextInput id="phone number" />
            <Label htmlFor="email address">email address</Label>
            <TextInput id="email address" />
            <Label htmlFor="invoice number">invoice number</Label>
            <TextInput id="invoice number" />
            <Label htmlFor="order notes">order notes</Label>
            <TextInput id="order notes" />
          </form>
        </Container>
        <Container>
          <Header>your order</Header>
          <CartTable>
            <CartTable.Header />
            <tbody>
              <CartTable.Items />
              <CartTable.Total />
              <CartTable.Shipping />
            </tbody>
          </CartTable>
          <div className="border-b-2 py-4">
            <Header>payment methods</Header>
            <SingleOpenAccordion items={accordionVals} />
          </div>
          <div className="pb-12 pt-5">
            <p className="py-2">
              your personal data will be used to process your order, support
              your experience throughout this website.
            </p>
            <label htmlFor="" className="uppercase text-lg py-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="scale-125 mr-2 accent-primary "
              />
              I have read and agree to this
            </label>
            <p className="uppercase text-lg decoration-2 decoration-primary  py-2">
              <span className="underline">terms and conditions</span>
              <span className="text-red-600 text-lg pl-2 no-underline">*</span>
            </p>
          </div>
          <button className="px-5 py-3 w-[50%] rounded-lg bg-primary uppercase text-white float-end">
            place order
          </button>
        </Container>
      </div>
    </div>
  );
};

export default Page;
