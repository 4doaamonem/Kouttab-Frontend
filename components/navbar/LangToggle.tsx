"use client";

import { Languages } from "lucide-react";

const LangToggle = () => {
  return (
    <button className="hidden md:flex gap-2 items-center hover:bg-white transition-colors cursor-pointer text-[16px] text-primary-normal border rounded-lg border-secondary-light-active p-2">
      العربية <Languages className="w-4 h-4" />
    </button>
  );
};

export default LangToggle;
