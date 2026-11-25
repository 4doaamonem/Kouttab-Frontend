"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/constants";
import Introduction from "./Introduction";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggle = (index: number) =>
    setOpenItems((items) =>
      items.includes(index)
        ? items.filter((item) => item !== index)
        : [...items, index],
    );

  return (
    <section className="bg-bg-light">
      <div className="max-w-336 mx-auto px-4 md:px-13 pt-13 pb-13 md:pb-38.25">
        <Introduction
          className="mx-auto md:w-165.25 max-w-full"
          label="قبل ما تبدأ"
          title="الأسئلة الشائعة"
          description="إجابات واضحة عن أهم الأسئلة قبل أن تبدأ رحلتك مع كُتّاب."
        />
        <ul className="mt-11 flex flex-col gap-4">
          {faqItems.map(({ question, answer }, index) => {
            const isOpen = openItems.includes(index);
            return (
              <li
                key={question}
                className={`py-4 md:p-4 border-b transition-colors duration-200 ease-in ${
                  isOpen
                    ? "bg-secondary-light-hover rounded-2xl px-4 border-transparent"
                    : "border-stroke-light"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between cursor-pointer text-start"
                >
                  <span className="flex items-center gap-2 md:gap-3 font-medium text-sm leading-normal md:text-base lg:text-2xl lg:leading-[1.3] text-text-primary-normal">
                    <span className="text-secondary-normal">0{index + 1}</span>
                    <span>{question}</span>
                  </span>
                  <span
                    className={`shrink-0 size-9.5 md:size-10.5 flex items-center justify-center rounded-lg border transition-colors duration-200 ease-in ${
                      isOpen
                        ? "bg-primary-normal border-primary-normal text-white"
                        : "border-stroke-light text-text-primary-normal"
                    }`}
                  >
                    <ChevronDown
                      className={`size-5 md:size-6 transition-transform duration-200 ease-in ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ease-in ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pt-4.5 lg:w-222.5 text-sm leading-normal font-medium text-text-secondary-normal">
                      {answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;
