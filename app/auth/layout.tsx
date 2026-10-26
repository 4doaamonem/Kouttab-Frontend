import type { ReactNode } from "react";
import AuthBackground from "./_components/AuthBackground";

type AuthLayoutProps = {
  children: ReactNode;
  className?: string;
};

export default function Layout({ children, className = "" }: AuthLayoutProps) {
  return (
    <main
      className={`auth-page relative isolate flex min-h-svh w-full items-start justify-center overflow-x-visible pb-6 pl-4 pr-5.25 pt-11.5 md:items-center md:overflow-x-hidden md:px-6 md:py-6 ${className}`}
    >
      <AuthBackground />
      <div className="relative z-10 w-full max-w-160 lg:translate-x-[clamp(0px,14.6vw,210px)]">
        {children}
      </div>
    </main>
  );
}
