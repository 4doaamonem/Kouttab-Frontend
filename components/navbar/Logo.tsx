import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="relative block h-20 w-17.5">
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
