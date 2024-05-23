import Link from "next/link";

const SectionLinks = ({ link }: { link: string }) => {
  return (
    <Link
      href={"/"}
      className="w-[108px] mt-5 capitalize text-white  flex justify-center items-center aspect-square rounded-full bg-primary"
    >
      {link}
    </Link>
  );
};

export default SectionLinks;
