"use client";
import { navLinks } from "@/constants";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// Targets are the routes already used by the landing page cards (constants/index.tsx).
const learnMenu = [
  { label: "مسارات التجويد", href: "/learn" },
  { label: "خريطة التعلّم", href: "/plan" },
  { label: "مصحف التجويد", href: "/learn" },
  { label: "التحديات التعليمية", href: "/challenge" },
];

const LearnDropdown = ({ anchor, href }: { anchor: React.ReactNode; href: string }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      data-open={open}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          (e.currentTarget.querySelector("a") as HTMLElement | null)?.focus();
        }
      }}
    >
      {anchor}
      <div
        className={`absolute top-full pt-3 start-0 z-50 transition-opacity duration-200 ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <ul className="min-w-48 rounded-2xl border border-stroke-light bg-white p-2 shadow-[0_4px_12px_rgba(89,72,41,0.1),0_6px_20px_rgba(89,72,41,0.09)]">
          {learnMenu.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block rounded-xl px-4 py-2.5 text-base font-medium text-primary-normal transition-colors hover:bg-secondary-light-hover hover:text-secondary-normal focus-visible:bg-secondary-light-hover focus-visible:text-secondary-normal outline-none"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <div className="hidden lg:flex items-center gap-6 xl:gap-10">
      {navLinks.map((link) => {
        const isActive = pathname === link?.href;
        const cls = `relative font-medium text-lg  ${link?.hasDropdown ? "flex items-center gap-4" : ""} ${isActive ? "text-secondary-normal  before:h-0.5 before:absolute  before:bg-primary-normal before:-bottom-2  before:left-0 before:right-0   " : "text-primary-normal hover:text-secondary-normal hover:scale-105 "}  transition-all duration-300`;
        const anchor = (
          <Link href={link?.href} className={cls}>
            {link?.link}
            {link?.hasDropdown && (
              <ChevronDown className="w-4 h-4 transition-transform duration-300 in-data-[open=true]:rotate-180" />
            )}
          </Link>
        );
        if (!link?.hasDropdown) return <span key={link?.link}>{anchor}</span>;
        return <LearnDropdown key={link?.link} anchor={anchor} href={link.href} />;
      })}
    </div>
  );
};

export default NavLinks;
