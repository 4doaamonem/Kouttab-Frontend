import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Introduction from "./Introduction";

const stepIcon = (viewBox: string, paths: string[]) => (
  <svg
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    className="size-[21.33px]! md:size-8!"
  >
    {paths.map((d) => (
      <path
        key={d}
        d={d}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    ))}
  </svg>
);

const steps = [
  {
    icon: stepIcon("674 3688 32 32", [
      "M697.937 3710C700.429 3707.8 702 3704.58 702 3701C702 3694.37 696.627 3689 690 3689C683.373 3689 678 3694.37 678 3701C678 3704.58 679.571 3707.8 682.063 3710",
      "M690.08 3706.85H690.005M687 3698C687 3696.34 688.343 3695 690 3695C691.657 3695 693 3696.34 693 3698C693 3699.14 692.369 3700.12 691.438 3700.63C690.712 3701.03 690 3701.67 690 3702.5M690.155 3706.85C690.155 3706.93 690.088 3707 690.005 3707C689.922 3707 689.855 3706.93 689.855 3706.85C689.855 3706.77 689.922 3706.7 690.005 3706.7C690.088 3706.7 690.155 3706.77 690.155 3706.85Z",
      "M684.75 3714.5H695.25",
      "M687 3719H693",
    ]),
    title: "تعرّف على مستواك",
    description:
      "أجب عن أسئلة التقييم لتحديد نقطة البداية وفق الموضوعات التي يقيسها الاختبار.",
    position:
      "min-h-33 md:min-h-0 mt-10.25 md:mt-0 md:top-59 md:right-11 lg:top-57 lg:[--r:87px]",
  },
  {
    icon: stepIcon("555 3855 32 32", [
      "M586 3871C586 3879.28 579.284 3886 571 3886C562.716 3886 556 3879.28 556 3871C556 3862.72 562.716 3856 571 3856C579.284 3856 586 3862.72 586 3871Z",
      "M567.25 3867.25L572.5 3872.5M577 3865L569.5 3872.5",
    ]),
    title: "حدّد هدفك ووقتك",
    description: "اختر هدفك التعليمي والوقت الذي تستطيع تخصيصه للتعلّم.",
    descClass: "max-w-59 md:max-w-none",
    position:
      "min-h-[141.36px] md:min-h-0 mt-[0.75px] md:mt-0 mr-10.5 md:mr-0 md:top-100.75 md:right-40.75 lg:top-94 lg:[--r:399px]",
  },
  {
    icon: stepIcon("435 4022 32 32", [
      "M451 4039.5L458.5 4046.25M451 4039.5L443.5 4046.25M451 4039.5V4032",
      "M460.287 4044.67C461.062 4044.22 461.45 4044 461.875 4044C462.3 4044 462.688 4044.22 463.463 4044.67L464.412 4045.21C465.187 4045.66 465.575 4045.88 465.787 4046.25C466 4046.62 466 4047.06 466 4047.95V4049.05C466 4049.94 466 4050.38 465.787 4050.75C465.575 4051.12 465.187 4051.34 464.412 4051.79L463.463 4052.33C462.688 4052.78 462.3 4053 461.875 4053C461.45 4053 461.062 4052.78 460.287 4052.33L459.338 4051.79C458.563 4051.34 458.175 4051.12 457.963 4050.75C457.75 4050.38 457.75 4049.94 457.75 4049.05V4047.95C457.75 4047.06 457.75 4046.62 457.963 4046.25C458.175 4045.88 458.563 4045.66 459.338 4045.21L460.287 4044.67Z",
      "M438.537 4044.67C439.312 4044.22 439.7 4044 440.125 4044C440.55 4044 440.938 4044.22 441.713 4044.67L442.662 4045.21C443.437 4045.66 443.825 4045.88 444.037 4046.25C444.25 4046.62 444.25 4047.06 444.25 4047.95V4049.05C444.25 4049.94 444.25 4050.38 444.037 4050.75C443.825 4051.12 443.437 4051.34 442.662 4051.79L441.713 4052.33C440.938 4052.78 440.55 4053 440.125 4053C439.7 4053 439.312 4052.78 438.537 4052.33L437.588 4051.79C436.813 4051.34 436.425 4051.12 436.213 4050.75C436 4050.38 436 4049.94 436 4049.05V4047.95C436 4047.06 436 4046.62 436.213 4046.25C436.425 4045.88 436.813 4045.66 437.588 4045.21L438.537 4044.67Z",
      "M449.412 4023.67C450.187 4023.22 450.575 4023 451 4023C451.425 4023 451.813 4023.22 452.588 4023.67L453.537 4024.21C454.312 4024.66 454.7 4024.88 454.912 4025.25C455.125 4025.62 455.125 4026.06 455.125 4026.95V4028.05C455.125 4028.94 455.125 4029.38 454.912 4029.75C454.7 4030.12 454.312 4030.34 453.537 4030.79L452.588 4031.33C451.813 4031.78 451.425 4032 451 4032C450.575 4032 450.187 4031.78 449.412 4031.33L448.463 4030.79C447.688 4030.34 447.3 4030.12 447.088 4029.75C446.875 4029.38 446.875 4028.94 446.875 4028.05V4026.95C446.875 4026.06 446.875 4025.62 447.088 4025.25C447.3 4024.88 447.688 4024.66 448.463 4024.21L449.412 4023.67Z",
    ]),
    title: "ابدأ خطتك التعليمية",
    description:
      "تعرّف على الخطوات المقترحة وفق نتائج التقييم واختياراتك، بحسب آلية التخطيط المتاحة في المنصة.",
    position:
      "mr-20 md:mr-0 md:top-142.5 md:right-70.75 lg:top-131 lg:[--r:654px]",
  },
];

const GettingStartedSection = () => {
  return (
    <section className="bg-secondary-light-hover">
      <div className="relative mx-auto flex flex-col pt-8 pb-[50.68px] md:block md:p-0 md:h-215 md:w-192 lg:w-full lg:max-w-360 lg:h-190.5 lg:max-[1139px]:h-[800px]">
        <Introduction
          label="خطتك التعليمية"
          title="كيف تبدأ رحلتك في تعلّم التجويد؟"
          description="ابدأ بتحديد نقطة البداية، واختر هدفك والوقت المتاح لك، ثم تعرّف على الخطوات التي تساعدك على تنظيم رحلتك التعليمية."
          className="max-md:self-center w-97.25 max-w-full px-4 md:px-0 md:absolute md:top-13 md:left-14.75 lg:left-[calc(50%-325px)] md:w-165.25"
        />

        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`flex items-start gap-3 px-4 py-2 md:absolute md:p-2 md:w-111.5 lg:right-(--r) lg:w-[min(682px,calc(100%-var(--r)))] ${step.position}`}
          >
            <div className="shrink-0 flex flex-col items-center gap-1 w-10 md:w-13">
              <div className="size-10 md:size-13 rounded-xl bg-primary-light-hover text-[#141B34] flex items-center justify-center [&_svg]:size-6 md:[&_svg]:size-8 [&_svg]:stroke-[1.5] md:[&_svg]:stroke-[1.125]">
                {step.icon}
              </div>
              <span className="w-[1.5px] h-16.5 md:h-19 bg-linear-to-b from-transparent via-secondary-normal to-transparent" />
            </div>

            <div className="flex-1 flex flex-col gap-0.5 font-medium">
              <span className="text-sm md:text-base leading-normal text-secondary-normal">
                الخطوة ٠{i + 1}
              </span>
              <div className="flex flex-col gap-2 md:gap-3">
                <h4 className="text-lg md:text-2xl leading-normal md:leading-[1.3] text-text-primary-normal">
                  {step.title}
                </h4>
                <p className={`text-xs md:text-lg leading-normal text-text-secondary-normal ${step.descClass ?? ""}`}>
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <Image
          src="/assets/logoSvg.svg"
          alt="كتّاب"
          width={303}
          height={346}
          className="self-start relative top-0.75 md:top-125.75 mr-[18px] -mt-[72.3px] md:m-0 md:absolute md:right-[50.7px] lg:top-93.25 lg:right-[min(100.5px,calc(100%-302.51px))] w-[103.4px] h-[124.8px] md:w-[178.9px] md:h-[204.3px] lg:w-[302.51px] lg:h-86 object-contain"
        />

        <Link
          href="/assessment"
          className="self-end mx-4 -mt-[13.5px] max-[343px]:mt-4 md:m-0 md:absolute md:top-193 md:left-11.75 lg:top-170 lg:max-[1139px]:top-[718px] lg:left-26 flex items-center justify-center gap-2 w-51 h-12 md:w-55 md:h-13 rounded-2xl bg-primary-normal text-sm md:text-base font-medium text-white hover:bg-primary-normal-hover"
        >
          ابدأ بتحديد مستواك
          <ArrowLeft className="size-6 stroke-[1.5]" />
        </Link>
      </div>
    </section>
  );
};

export default GettingStartedSection;
