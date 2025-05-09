import Image from "next/image";
import React from "react";
import SectionHeaders from "../SectionHeaders";
import image from "../../../public/images/interior.jpg";
import image2 from "../../../public/images/interior2.jpg";
import SectionLinks from "./SectionLinks";
// import InfiniteScroller from "./InfiniteScroller";

const OurProjects = () => {
  return (
    <section className="">
      <SectionHeaders topheader="our" bottomheader="projects" />
      <div className="relative item  flex justify-end align-top  flex-nowrap overflow-hidden">
        <Image
          src={image2}
          alt="interior2"
          className="min-[700px]:w-[40%] self-start  max-[700px]:w-full object-cover  cursor-pointer  "
        />

        <Image
          src={image}
          alt="interior"
          className="w-[calc(55%-100px)]  ml-[100px] mt-[70px] max-[700px]:hidden object-cover cursor-pointer  "
        />
      </div>
      <div className="p-4 flex flex-col items-center md:items-start">
        <p className="max-w-lg text-center">
          At Beacon Interiors, we believe great design begins with purpose. Our
          bespoke furniture and interior solutions are crafted to reflect the
          unique character of every space we touch. Whether its a modern
          minimalist apartment or a warm, rustic retreat, our projects balance
          function and beauty with precision. With a focus on high-quality
          materials, thoughtful craftsmanship, and timeless aesthetics, we help
          transform ordinary rooms into inspired environments. From concept to
          completion, Beacon Interiors brings clarity, elegance, and comfort to
          your living spaces—guiding you home with design that shines.
        </p>
        <SectionLinks link="visit projects" />
      </div>
      <Image
        src={image}
        alt="interior"
        className="w-full min-[700px]:hidden object-cover cursor-pointer  "
      />
    </section>
  );
};

export default OurProjects;
