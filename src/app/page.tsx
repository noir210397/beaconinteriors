import Carousel from "@/components/Carousel";
import SectionHeaders from "@/components/SectionHeaders";
import BearSection from "@/components/home/BearSection";
import Hero from "@/components/home/Hero";
import OurProjects from "@/components/home/OurProjects";
import Philosophy from "@/components/home/Philosophy";
import Services from "@/components/home/Services";
import { getData, randNum } from "@/products";

export default function Home() {
  const arr = randNum(8);
  const data = getData(arr);
  return (
    <main className="">
      <Hero />
      <Philosophy />
      <div>
        <SectionHeaders topheader="featured" bottomheader="products" />
        <Carousel data={data} />
      </div>
      {/* <BearSection /> */}
      <OurProjects />
      <Services />
    </main>
  );
}
