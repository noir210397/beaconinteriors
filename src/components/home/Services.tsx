import Image from "next/image";
import image from "../../../public/images/services.jpg";
import SectionLinks from "./SectionLinks";
import InfiniteScroller from "./InfiniteScroller";
const Services = () => {
  return (
    <section className="mt-20">
      <InfiniteScroller
        text="interiors"
        to="/interiors"
        className="relative z-[1] translate-y-full md:translate-y-0"
      />
      <div className="flex flex-col md:flex-row">
        <div className="relative md:flex-1 h-[60vh] w-full">
          <Image
            alt="services"
            src={image}
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="flex  justify-center flex-1  text-center md:max-w-[500px] md:p-10 p-5">
          At Beacon Interiors, our services are built around your vision. We
          offer a full spectrum of interior design and custom furniture
          solutions tailored to elevate every corner of your home or workspace.
          From personalized consultations and space planning to material
          selection and final styling, we ensure a seamless experience from
          start to finish. Our team collaborates closely with you to create
          interiors that are functional, refined, and uniquely yours. Whether
          you are refreshing a single room or undertaking a full renovation,
          Beacon Interiors brings craftsmanship, creativity, and care to every
          project.
        </div>
      </div>
      <SectionLinks link="our services" />
    </section>
  );
};

export default Services;
