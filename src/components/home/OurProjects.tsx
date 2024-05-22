import Image from "next/image";
import React from "react";
import SectionHeaders from "../SectionHeaders";
import image from "../../../public/images/interior.jpg";
import image2 from "../../../public/images/interior2.jpg";

const OurProjects = () => {
  return (
    <section>
      <SectionHeaders topheader="our" bottomheader="projects" />
      <div className="relative item  flex justify-end align-top  flex-nowrap h-screen overflow-hidden">
        <Image
          src={image2}
          alt="interior2"
          className="min-[700px]:w-[40%] min-[700px]:h-[80%]  max-[700px]:w-full max-[700px]:object-cover max-[700px]:h-full cursor-pointer  "
        />

        <Image
          src={image}
          alt="interior"
          className="w-[calc(55%-100px)] h-[calc(100%-100px)] ml-[100px] mt-[100px] max-[700px]:hidden object-cover cursor-pointer  "
        />
      </div>
    </section>
  );
};

export default OurProjects;
