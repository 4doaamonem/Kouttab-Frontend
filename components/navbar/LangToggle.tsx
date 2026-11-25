"use client";

import { ChevronDown, Languages } from "lucide-react";

const LangToggle = () => {
  return (
    <button className="flex gap-1.5 lg:gap-1 lg:px-1 items-center hover:bg-secondary-light transition-colors cursor-pointer text-[16px] text-primary-normal border rounded-lg border-secondary-light-active p-2">
      <ChevronDown className="w-4 h-4" />
      العربية <Languages className="w-4 h-4" />
    </button>
  );
};

export default LangToggle;
