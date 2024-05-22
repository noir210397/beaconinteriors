import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={`/`} className="">
      <Image
        src={`/images/logo2.png`}
        alt="beacon"
        width={160}
        height={40}
        className=""
      />
    </Link>
  );
};

export default Logo;
