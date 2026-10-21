import { ArrowLeft, CircleHelp, Clock, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    icon: <CircleHelp />,
    title: "تعرّف على مستواك",
    description:
      "أجب عن أسئلة التقييم لتحديد نقطة البداية وفق الموضوعات التي يقيسها الاختبار.",
    position: "lg:col-span-2",
  },
  {
    icon: <Clock />,
    title: "حدّد هدفك ووقتك",
    description: "اختر هدفك التعليمي والوقت الذي تستطيع تخصيصه للتعلّم.",
    position: "lg:col-start-2 lg:row-start-2",
  },
  {
    icon: <Workflow />,
    title: "ابدأ خطتك التعليمية",
    description:
      "تعرّف على الخطوات المقترحة وفق نتائج التقييم واختياراتك، بحسب آلية التخطيط المتاحة في المنصة.",
    position: "lg:col-start-2 lg:row-start-3 lg:ms-56",
  },
];

const GettingStartedSection = () => {
  return (
    <section className="bg-secondary-light-hover">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        {/* الهيدر */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-4">
            <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
            <span className="text-secondary-normal font-medium text-lg">
              خطتك التعليمية
            </span>
          </div>
          <h3 className="text-[28px] font-medium text-text-primary-normal mb-3">
            كيف تبدأ رحلتك في تعلّم التجويد؟
          </h3>
          <p className="text-lg font-medium text-text-secondary-normal max-w-2xl mx-auto">
            ابدأ بتحديد نقطة البداية، واختر هدفك والوقت المتاح لك، ثم تعرّف على
            الخطوات التي تساعدك على تنظيم رحلتك التعليمية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[19rem_1fr] gap-y-7">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`flex items-start gap-4 ${step.position}`}
            >
              <div className="shrink-0 flex flex-col items-center gap-3">
                <div className="h-14 w-14 rounded-xl bg-[#dfe4e1] text-primary-normal flex items-center justify-center [&_svg]:size-6">
                  {step.icon}
                </div>
                <span className="hidden sm:block w-px h-16 bg-linear-to-b from-transparent via-secondary-normal to-transparent" />
              </div>

              <div className="max-w-150">
                <span className="text-sm text-secondary-normal">
                  الخطوة {i + 1}
                </span>
                <h4 className="text-2xl font-medium text-text-primary-normal">
                  {step.title}
                </h4>
                <p className="text-base text-text-secondary-normal mt-1 text-pretty">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          <div className="flex justify-center lg:justify-start lg:col-start-1 lg:row-start-2 lg:row-span-3 lg:self-center">
            <Image
              src="/assets/logoSvg.svg"
              alt="كتّاب"
              width={290}
              height={350}
              className="w-72 h-auto"
            />
          </div>

          <div className="flex justify-center lg:justify-end lg:col-start-2 lg:row-start-4">
            <Link
              href="/assessment"
              className="flex items-center gap-2 rounded-xl bg-primary-normal px-6 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            >
              ابدأ بتحديد مستواك
              <ArrowLeft className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
