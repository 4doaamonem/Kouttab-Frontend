"use client";

import { Check, ChevronDown, Languages } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const languages = [
  { code: "ar", label: "العربية", available: true },
  { code: "en", label: "English", available: false },
];

const LangToggle = () => {
  const [open, setOpen] = useState(false);
  // The site is Arabic-only for now: English is shown but disabled until i18n exists.
  const selected = "ar";
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", esc);
    };
  }, []);

  const current = languages.find((l) => l.code === selected)!;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex gap-1.5 lg:gap-1 lg:px-1 items-center hover:bg-secondary-light transition-colors cursor-pointer text-[16px] text-primary-normal border rounded-lg border-secondary-light-active p-2"
      >
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
        {current.label} <Languages className="w-4 h-4" />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute top-full mt-2 start-0 min-w-36 z-50 rounded-xl border border-stroke-light bg-white p-1 shadow-[0_4px_12px_rgba(89,72,41,0.1)]"
        >
          {languages.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === selected}>
              <button
                type="button"
                disabled={!l.available}
                onClick={() => setOpen(false)}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-base transition-colors ${l.available ? "cursor-pointer hover:bg-secondary-light-hover hover:text-secondary-normal" : "cursor-not-allowed text-text-secondary-normal/60"} ${l.code === selected ? "text-secondary-normal font-medium" : l.available ? "text-primary-normal" : ""}`}
              >
                <span>
                  {l.label}
                  {!l.available && <span className="ms-2 text-xs">قريبًا</span>}
                </span>
                {l.code === selected && <Check className="w-4 h-4" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LangToggle;
