"use client";

import { useEffect, useState } from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

function useIsLg() {
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLg(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isLg;
}

export function Toaster(props: ToasterProps) {
  const isLg = useIsLg();

  if (isLg) {
    // lg and up: first version
    return (
      <Sonner
        dir="rtl"
        position="top-center"
        offset={{ top: 51, left: 16, right: 16 }}
        mobileOffset={{ top: 16, left: 16, right: 16 }}
        className="lg:translate-x-[clamp(0px,14.6vw,210px)]"
        style={
          {
            "--width": "min(638px, calc(100vw - 2rem))",
            zIndex: 100,
          } as React.CSSProperties
        }
        toastOptions={{
          unstyled: true,
          style: { width: "100%" },
        }}
        {...props}
      />
    );
  }

  // below lg: second version
  return (
    <Sonner
      dir="rtl"
      position="top-center"
      offset={{ top: 51, left: 16, right: 16 }}
      mobileOffset={{ top: 16, left: 16, right: 16 }}
      className="auth-toaster"
      style={
        {
          "--width": "638px",
          zIndex: 100,
        } as React.CSSProperties
      }
      toastOptions={{ unstyled: true }}
      {...props}
    />
  );
}
