// "use client";
import Image from "next/image";
import SectionHeaders from "../SectionHeaders";
// import { useEffect, useRef } from "react";
import SectionLinks from "./SectionLinks";

const Philosophy = () => {
  // const ref = useRef<HTMLImageElement | null>(null);
  // useEffect(() => {
  //   console.log(ref.current?.clientWidth, ref.current?.clientHeight);

  //   // return (cleanUp = () => {});
  // }, []);
  return (
    <section className="">
      <SectionHeaders topheader="our" bottomheader="philosophy" />
      <div className="relative flex justify-center items-center overflow-hidden ">
        <Image
          src={"/images/philosophy/DSC_0180.jpg"}
          width={300}
          height={300}
          alt="west"
          className="absolute -left-0 min-[820px]:-translate-x-1/2 z-[2]  max-[550px]:hidden bottom-6 
          min-[550px]:-translate-x-2/3 "
        />
        <Image
          src={"/images/philosophy/01_A_Interiors_01.jpg"}
          alt="interior"
          width={500}
          height={400}
          className=" relative min-[820px]:max-w-[800px] min-[550px]:max-w-[calc(100%-250px)] max-[550px]:w-full"
        />
        <Image
          src={"/images/philosophy/13A7099_LowRes.jpg"}
          width={300}
          height={300}
          alt="west"
          className="absolute -right-0 min-[820px]:translate-x-1/2 z-[2] max-[550px]:hidden top-6 min-[550px]:translate-x-2/3  "
        />
      </div>
      <div className="p-4 flex flex-col items-center md:items-start">
        <p className="max-w-lg text-center">
          Welcome to a world where style meets comfort. At Beacon Interiors, we
          craft timeless furniture pieces that elevate your space and reflect
          your personal taste. Whether you are furnishing a cozy apartment or
          redesigning your dream home, our expertly curated collections are
          designed to inspire. From sleek modern lines to classic wooden
          finishes, each piece is built with premium materials and exceptional
          attention to detail. We believe your furniture should not only look
          good but feel right—offering lasting durability and everyday
          functionality. Discover sofas, chairs, tables, and more that fit
          seamlessly into your lifestyle. Let your home tell your story through
          pieces that matter.
        </p>
        <SectionLinks link="read more +" />
      </div>
    </section>
  );
};

export default Philosophy;
