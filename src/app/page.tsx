import Carousel from "@/components/Carousel";
import SectionHeaders from "@/components/SectionHeaders";
import BearSection from "@/components/home/BearSection";
import Hero from "@/components/home/Hero";
import OurProjects from "@/components/home/OurProjects";
import Philosophy from "@/components/home/Philosophy";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Philosophy />
      <div>
        <SectionHeaders topheader="featured" bottomheader="products" />
        <Carousel />
      </div>
      {/* <BearSection /> */}
      <OurProjects />
      <Services />
    </main>
  );
}
