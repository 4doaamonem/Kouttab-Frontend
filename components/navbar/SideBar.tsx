"use client";

import { navLinks } from "@/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { learnMenu } from "./NavLinks";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 80rem)");
    const onChange = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="xl:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center cursor-pointer text-text-primary-normal -mx-1 md:mx-0"
      >
        {open ? (
          <X className="size-8 [stroke-width:1.5]" />
        ) : (
          <Menu className="size-8 [stroke-width:1.5]" />
        )}
      </button>
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-50 max-h-[calc(100vh-100%)] overflow-y-auto border-b border-stroke-light bg-secondary-light-hover px-4 md:px-12 lg:px-7 pb-6 pt-2 shadow-[0_8px_16px_rgba(89,72,41,0.1)]"
        >
          <ul className="mx-auto max-w-7xl flex flex-col">
            {navLinks.map((link) => (
              <li key={link.link} className="border-b border-stroke-light last:border-b-0">
                <Link
                  href={link.href}
                  onClick={close}
                  className="block py-3 text-lg font-medium text-primary-normal hover:text-secondary-normal transition-colors"
                >
                  {link.link}
                </Link>
                {link.hasDropdown && (
                  <ul className="pb-2 ps-4 flex flex-col">
                    {learnMenu.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={close}
                          className="block py-2 text-base text-text-secondary-normal hover:text-secondary-normal transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="mt-4 flex flex-wrap items-center gap-4">
              <Link
                href={"/learn"}
                onClick={close}
                className="py-3 px-9.5 bg-primary-normal text-card-white font-medium text-lg rounded-2xl hover:bg-primary-normal-hover"
              >
                ابدأ التعلم
              </Link>
              <Link
                href={"/login"}
                onClick={close}
                className="font-medium text-lg text-text-secondary-normal hover:text-text-primary-normal-hover transition-colors"
              >
                تسجيل الدخول
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;
