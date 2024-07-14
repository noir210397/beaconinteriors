// "use client";
import Label from "@/components/Label";
import PageHeaders from "@/components/PageHeaders";
import SelectInput from "@/components/SelectInput";
import TextInput from "@/components/TextInput";
import React from "react";
import tw from "tailwind-styled-components";
const Header = tw.p`uppercase text-3xl py-4`;
const Container = tw.div``;

const page = () => {
  return (
    <div>
      <PageHeaders text={`order checkout`} />
      <div className="grid  grid-cols-2 gap-3 px-4 max-w-[90%] mx-auto">
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
        </Container>
      </div>
    </div>
  );
};

export default page;
