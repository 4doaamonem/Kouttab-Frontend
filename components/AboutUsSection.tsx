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
    <section className="bg-[linear-gradient(180deg,rgba(237,226,204,0.75)_28%,rgba(198,161,91,0.52)_78%)]">
      <div className="max-w-318 mx-auto px-4 pt-9 pb-13.5 md:pt-11 md:pb-10.25 md:pl-12.25 md:pr-10.5 xl:px-4 xl:pt-13 xl:pb-8.5">
        <div className="grid grid-cols-1 xl:flex xl:justify-between gap-9 xl:gap-0 items-start">
          <div className="flex flex-col items-start p-2 md:w-167.5 xl:p-0 xl:pt-1.5 xl:w-132.75 xl:shrink-0">
            <div className="flex items-center gap-4 mb-1">
              <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
              <span className="text-secondary-normal font-medium text-base md:text-lg leading-normal">
                من نحن؟
              </span>
            </div>

            <h2 className="text-2xl md:text-[28px] leading-[1.3] md:leading-tight font-medium text-text-primary-normal mb-1 md:mb-3 xl:mb-3.5">
              منصة تعليمية تجعل رحلة التعلّم أكثر وضوحًا
            </h2>

            <p className="text-sm md:text-lg md:max-w-128 xl:max-w-none leading-normal font-medium text-text-primary-normal text-pretty">
              كُتّاب منصة تعليمية تساعدك على تعلّم أحكام التجويد وفهمها وتطبيقها
              من خلال تجربة تعليمية منظّمة تجمع بين التعلّم والتدريب.
            </p>

            <blockquote className="mt-8 xl:mt-6.75 w-full md:w-128 xl:w-full border-s border-secondary-normal ps-3 pe-2 py-2 text-lg leading-normal md:text-2xl md:leading-[1.3] font-medium text-secondary-normal text-pretty">
              نؤمن أن التعلّم الواضح يبدأ بخطوة مفهومة، وأن التدرّج يساعد
              المتعلّم على بناء معرفته بثقة.
            </blockquote>

            <div className="hidden xl:block xl:mt-23.5">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-primary-normal p-4 w-55 h-13 text-lg font-medium text-white hover:bg-primary-dark"
            >
              اكتشف تجربة كُتّاب
              <ArrowLeft className="size-4" />
            </Link>
            </div>
          </div>

          <ul className="flex flex-col gap-4 md:gap-0 md:justify-between">
            {features.map((item, i) => {
              const isLast = i === features.length - 1;
              return (
                <li key={item.title} className={`flex gap-3 min-h-27.5 md:min-h-0 md:h-33 md:p-2 xl:pl-0 xl:w-169.25 ${i === 0 ? "md:max-xl:h-31 xl:h-35.5" : i === 1 ? "md:max-xl:h-35 xl:h-30.5" : "xl:h-33"}`}>
                  <div className={`flex flex-col items-center shrink-0 ${i === 1 ? "xl:-mt-4.5" : ""}`}>
                    <div className="size-10 md:size-13 rounded-xl bg-secondary-light shadow-sm flex items-center justify-center text-text-primary-normal [&_svg]:size-6 md:[&_svg]:size-8 [&_svg]:stroke-[1.5] md:[&_svg]:stroke-[1.125]">
                      {item.icon}
                    </div>
                    {!isLast && (
                      <span className="w-[1.5px] flex-1 my-1 bg-linear-to-b from-transparent via-secondary-normal to-transparent" />
                    )}
                  </div>

                  <div className={`xl:w-153 ${i === 1 ? "md:max-xl:pt-4.5" : ""}`}>
                    <h3 className={`text-xl leading-normal md:text-2xl md:leading-[1.3] font-medium text-text-primary-normal mb-2 md:mb-0.5 md:max-xl:mb-2.75 ${i === 1 ? "xl:mb-2.5" : "xl:mb-3"}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-lg leading-normal font-medium md:font-normal xl:font-medium text-text-secondary-normal">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="px-2 xl:hidden">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-primary-normal p-4 w-51 h-13 text-lg font-medium text-white hover:bg-primary-dark"
            >
              اكتشف تجربة كُتّاب
              <ArrowLeft className="size-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
