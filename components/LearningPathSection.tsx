import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Introduction from "./Introduction";

const LearningPathSection = () => {
  return (
    <section className="bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 py-16 ">
        <Introduction
          label="مسارات التعلّم"
          title="اختر مسار التعلّم المناسب لك"
          description="بدأ من الأساسيات أو انتقل إلى المستوى المتقدم، وفقًا لمعرفتك بأحكام التجويد."
        />
        <div className="mt-11 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="group relative overflow-hidden h-50.5 md:h-80.5 px-3 md:px-5 py-4 md:py-5 bg-[linear-gradient(176.01deg,rgba(237,226,204,0.75)_31.73%,rgba(198,161,91,0.45)_86.44%)] rounded-2xl border border-stroke-light text-center  flex    ">
            <div className="flex flex-col items-start z-10 max-w-md">
              <div className="flex items-center justify-center gap-2.5">
                <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
                <span className=" text-secondary-normal font-medium text-[12px] md:text-[18px]  ">
                  مناسب للمبتدئين{" "}
                </span>
              </div>
              <h3 className="font-medium md:mt-1 text-[16px] md:text-[28px] text-text-primary-normal">
                أساسيات التجويد
              </h3>
              <p className="text-start w-53 md:w-83.25 font-medium text-[12px] md:text-[18px] text-text-secondary-normal mt-2 md:mt-3">
                ابدأ بفهم المفاهيم والقواعد الأساسية التي تساعدك على بناء معرفة
                واضحة بالتجويد.
              </p>
              <div className="mt-2 md:mt-3 text-start">
                <p className="font-medium text-[12px] md:text-[18px] text-text-primary-normal">
                  عدد المحتوى:
                </p>
                <div className="flex gap-2 md:gap-3 mt-0.5 md:mt-1">
                  <span className="font-medium text-[12px] md:text-[18px] text-text-secondary-normal">
                    <span className="text-text-primary-normal">6 </span>
                    أبواب
                  </span>
                  <div className="w-px h-4 md:h-6 bg-primary-normal "></div>

                  <span className="font-medium text-[12px] md:text-[18px] text-text-secondary-normal">
                    <span className="text-text-primary-normal">30 </span>
                    درسا
                  </span>
                </div>
              </div>
              <Link
                href={"/learn"}
                className=" mt-3 md:mt-6.5 flex items-center gap-2 justify-center text-card-white hover:bg-primary-normal-hover transition-colors rounded-xl md:rounded-2xl px-4 md:px-8 py-2 md:py-3 bg-primary-normal font-medium text-sm md:text-base "
              >
                استعراض المستوى
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </div>
            <div className="absolute left-0 pointer-events-none bottom-0">
              <Image
                src={"/assets/QuranImage.png"}
                alt="Quran Image"
                width={258}
                height={230}
                className="h-25.5 md:h-57.25 w-37.75 md:w-64.5 object-center"
              />
            </div>
          </div>
          <div className="group relative overflow-hidden h-50.5 md:h-80.5 px-3 md:px-5 py-4 md:py-5 bg-[linear-gradient(236.42deg,rgba(18,60,53,0.85)_19.72%,rgba(198,161,91,0.425)_104.72%)] rounded-2xl border border-stroke-light text-center  flex    ">
            <div className="flex flex-col items-start z-10 max-w-md">
              <div className="flex items-center justify-center gap-2.5">
                <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
                <span className=" text-secondary-normal font-medium text-[12px] md:text-[18px]  ">
                  لمن أتقن الأساسيات{" "}
                </span>
              </div>
              <h3 className="font-medium md:mt-1 text-[16px] md:text-[28px] text-card-white">
                التجويد المتقدم{" "}
              </h3>
              <p className="text-start w-53 md:w-83.25 font-medium text-[12px] md:text-[18px] text-text-secondary-light-hover mt-2 md:mt-3">
                تعمّق في الأحكام والتطبيقات المتقدمة وفق ترتيب المنهج
                التعليمي.{" "}
              </p>
              <div className="mt-2 md:mt-3 text-start">
                <p className="font-medium text-[12px] md:text-[18px] text-card-white">
                  عدد المحتوى:
                </p>
                <div className="flex gap-2 md:gap-3 mt-0.5 md:mt-1">
                  <span className="font-medium text-[12px] md:text-[18px] text-text-secondary-light-hover">
                    <span className="text-card-white">5 </span>
                    أبواب
                  </span>
                  <div className="w-px h-4 md:h-6 bg-primary-normal "></div>

                  <span className="font-medium text-[12px] md:text-[18px] text-text-secondary-light-hover">
                    <span className="text-card-white">22 </span>
                    درسا
                  </span>
                </div>
              </div>
              <Link
                href={"/learn"}
                className=" mt-3 md:mt-6.5 flex items-center gap-2 justify-center text-card-white hover:bg-primary-normal-hover transition-colors rounded-xl md:rounded-2xl px-4 md:px-8 py-2 md:py-3 bg-primary-normal font-medium text-sm md:text-base "
              >
                استعراض المستوى
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </div>
            <div className="absolute left-0 pointer-events-none bottom-0">
              <Image
                src={"/assets/QuranImage.png"}
                alt="Quran Image"
                width={258}
                height={230}
                className="h-25.5 md:h-57.25 w-37.75 md:w-64.5 object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathSection;
