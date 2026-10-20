"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <div className="hidden lg:flex items-center gap-6">
      {navLinks.map((link) => {
        const isActive = pathname === link?.href;
        return (
          <Link
            key={link?.link}
            href={link?.href}
            className={`relative font-medium text-lg  ${isActive ? "text-secondary-normal  before:h-0.5 before:absolute  before:bg-primary-normal before:-bottom-2  before:left-0 before:right-0   " : "text-primary-normal hover:text-secondary-normal hover:scale-105 "}  transition-all duration-300`}
          >
            {link?.link}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
