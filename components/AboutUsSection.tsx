import { ArrowLeft, Compass, Layers, Share2 } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Share2 className="rotate-90" />,
    title: "تعلّم منظّم",
    description:
      "مسارات واضحة تساعدك على الانتقال من الأساسيات إلى الموضوعات التالية وفق المنهج المتاح.",
  },
  {
    icon: <Layers />,
    title: "فهم وتطبيق",
    description:
      "تجربة تجمع بين دراسة الأحكام واستكشاف مصحف التجويد وتطبيق المعرفة من خلال الأنشطة المتاحة.",
  },
  {
    icon: <Compass />,
    title: "بداية واضحة",
    description:
      "خطوات تساعدك على فهم نقطة البداية واختيار الخطوة التالية دون تعقيد غير ضروري.",
  },
];

const AboutUsSection = () => {
  return (
    <section className="bg-[linear-gradient(176.01deg,rgba(237,226,204,0.75)_31.73%,rgba(198,161,91,0.45)_86.44%)]">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-8 items-start">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-3">
              <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
              <span className="text-secondary-normal font-medium text-lg">
                من نحن؟
              </span>
            </div>

            <h2 className="text-[28px] font-medium text-text-primary-normal mb-4">
              منصة تعليمية تجعل رحلة التعلّم أكثر وضوحًا
            </h2>

            <p className="text-lg font-medium text-text-primary-normal text-pretty">
              كُتّاب منصة تعليمية تساعدك على تعلّم أحكام التجويد وفهمها وتطبيقها
              من خلال تجربة تعليمية منظّمة تجمع بين التعلّم والتدريب.
            </p>

            <blockquote className="mt-10 border-s-2 border-secondary-normal ps-4 py-2 text-2xl font-medium text-secondary-normal text-pretty">
              نؤمن أن التعلّم الواضح يبدأ بخطوة مفهومة، وأن التدرّج يساعد
              المتعلّم على بناء معرفته بثقة.
            </blockquote>

            <Link
              href="/"
              className="mt-10 lg:mt-24 flex items-center gap-2 rounded-xl bg-primary-normal px-6 py-3.5 text-lg font-medium text-white hover:opacity-90 transition"
            >
              اكتشف تجربة كُتّاب
              <ArrowLeft className="size-4" />
            </Link>
          </div>

          <ul className="flex flex-col">
            {features.map((item, i) => {
              const isLast = i === features.length - 1;
              return (
                <li key={item.title} className="flex gap-4">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="size-13 rounded-xl bg-secondary-light shadow-sm flex items-center justify-center text-text-primary-normal [&_svg]:size-6 [&_svg]:stroke-[1.5]">
                      {item.icon}
                    </div>
                    {!isLast && (
                      <span className="w-px flex-1 my-2 bg-secondary-normal" />
                    )}
                  </div>

                  <div className={isLast ? "" : "pb-8"}>
                    <h3 className="text-2xl font-medium text-text-primary-normal mb-1">
                      {item.title}
                    </h3>
                    <p className="text-lg text-text-secondary-normal text-pretty">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
