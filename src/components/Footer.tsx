import tw from "tailwind-styled-components";
import FooterLinks from "./footer/FooterLinks";

const Wrapper = tw.footer`p-4 flex max-[400px]:flex-col min-[400px]:flex-row justify-between gap-4 flex-wrap text-primary`;
const Address = tw.div``;
interface Links {
  header: string;
  links: string[];
}
const companyLinks: Links = {
  header: "company",
  links: ["philosophy", "get in touch"],
};
const socialLinks: Links = {
  header: "Social",
  links: ["instagram", "facebook"],
};
const generalLinks: Links = {
  header: "general",
  links: ["use of terms", "order policy", "return policy", "privacy policy"],
};

const Footer = () => {
  return (
    <Wrapper>
      <div className="flex-1 max-w-xl min-w-[200px] ">
        <div className="lg:text-5xl md:text-4xl text-3xl font-semibold font-single uppercase text-primary ">
          our newsletter
        </div>
        <form action="">
          <div className="flex items-center border-b border-mydark pb-2">
            <input
              type="text"
              placeholder="your email"
              className="text-primary mr-1 focus:outline-none placeholder:uppercase placeholder:text-primary lg:placeholder:text-xl placeholder:text-base w-full bg-transparent"
            />
            <button className="rounded-md uppercase p-2 border border-mydark h-max ">
              subscribe
            </button>
          </div>
          <div className="flex py-3">
            <input
              type="checkbox"
              name=""
              id=""
              className="scale-125 mx-2 accent-primary"
            />
            <div className="capitalize">
              i agree to privacy terms & conditions
            </div>
          </div>
        </form>
      </div>
      <div className="flex-1  max-[400px]:max-w-xl min-[400px]:min-w-[300px]  grid grid-cols-2">
        <FooterLinks header={generalLinks.header} links={generalLinks.links} />
        <FooterLinks header={socialLinks.header} links={socialLinks.links} />
        <FooterLinks header={companyLinks.header} links={companyLinks.links} />
      </div>
    </Wrapper>
  );
};

export default Footer;
