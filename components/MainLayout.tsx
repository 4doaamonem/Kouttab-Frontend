"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = pathname.startsWith("/auth");

  if (isAuthRoute) return <>{children}</>;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
