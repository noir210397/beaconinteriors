import Image from "next/image";
import React from "react";

const BearSection = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      <Image
        width={1600}
        height={771}
        src={"/images/bear.jpg"}
        alt="bear pillow image"
        className="w-[1000px] h-screen"
      />
    </section>
  );
};

export default BearSection;
