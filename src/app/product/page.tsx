import { notFound, redirect } from "next/navigation";
import React from "react";

const Product = () => {
  const west = false;
  redirect("/shop");
  return <div>Product</div>;
};

export default Product;
