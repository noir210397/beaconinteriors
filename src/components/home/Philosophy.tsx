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
        <p className="max-w-lg text-center font-extrabold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ad
          eligendi quibusdam temporibus ab. Ad facilis recusandae architecto
          alias eius dolorum, nostrum modi neque culpa cumque saepe earum
          similique. Deserunt?
        </p>
        <SectionLinks link="read more +" />
      </div>
    </section>
  );
};

export default Philosophy;
