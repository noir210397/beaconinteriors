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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          hic praesentium consequuntur porro blanditiis aperiam nesciunt eos
          odit, dolores laudantium id consequatur obcaecati delectus optio
          repellat qui reiciendis harum rerum? Saepe molestiae autem excepturi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam modi
          tenetur beatae ullam vel fuga impedit repellat consequuntur minima
          itaque, dicta repudiandae reiciendis ad perferendis voluptas eligendi
          ut sint reprehenderit.
        </div>
      </div>
      <SectionLinks link="our services" />
    </section>
  );
};

export default Services;
