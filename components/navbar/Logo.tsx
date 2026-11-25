import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="relative block h-14 sm:h-18 lg:h-20 w-12.25 sm:w-15.75 lg:w-17.5">
      <Image
        src={"/assets/logo.png"}
        alt="Kouttab Logo"
        fill
        priority
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;
