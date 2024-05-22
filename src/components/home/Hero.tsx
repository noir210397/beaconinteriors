import Image from "next/image";
import React from "react";
import image from "../../../public/images/hero.jpg";

const Hero = () => {
  return (
    <section
      className="h-[calc(100vh-80px)]  bg-center bg-cover "
      style={{ backgroundImage: `url("/images/hero.jpg")` }}
    >
      {/* <Image fill src={image} alt="hero" className="object-cover" /> */}
      {/* <img src={image} alt="" className="h-full w-full object-cover" /> */}
    </section>
  );
};

export default Hero;
