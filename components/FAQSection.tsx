import React from "react";
import Introduction from "./Introduction";

const FAQSection = () => {
  return (
    <section className="bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 py-16 ">
        <Introduction
          label="قبل ما تبدأ"
          title="الأسئلة الشائعة"
          description="إجابات واضحة عن أهم الأسئلة قبل أن تبدأ رحلتك مع كُتّاب."
        />
      </div>
    </section>
  );
};

export default FAQSection;
