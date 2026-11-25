import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Introduction from "./Introduction";

const LearningPathSection = () => {
  return (
    <section className="bg-bg-light">
      <div className="max-w-318 mx-auto px-4 pt-9 pb-9 md:pt-18.5 md:pb-14.5 xl:pt-13.75 xl:pb-20">
        <Introduction
          label="مسارات التعلّم"
          labelClassName="[&>span:last-child]:text-lg"
          title="اختر مسار التعلّم المناسب لك"
          description="بدأ من الأساسيات أو انتقل إلى المستوى المتقدم، وفقًا لمعرفتك بأحكام التجويد."
        />
        <div className="mt-11 grid grid-cols-1 xl:grid-cols-2 gap-4 md:max-w-153 md:mx-auto xl:max-w-none">
          <div className="group relative overflow-hidden h-50.5 md:h-80.5 bg-[linear-gradient(176.01deg,rgba(237,226,204,0.75)_31.73%,rgba(198,161,91,0.45)_86.44%)] rounded-[9.33px] md:rounded-2xl border-[0.58px] md:border border-stroke-light text-center flex transition-shadow duration-300 hover:shadow-[0_8px_20px_rgba(89,72,41,0.14)]">
            <span className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            <div className="flex flex-col items-start z-10 w-54.5 md:w-93.25 px-3 py-2.5 md:px-5 md:pt-5.5 md:pb-5">
              <div className="flex items-center justify-center gap-2.5">
                <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
                <span className=" text-secondary-normal font-medium text-[12px] md:text-[18px]  ">
                  مناسب للمبتدئين{" "}
                </span>
              </div>
              <h3 className="font-medium mt-0.5 md:mt-1 text-[16px] md:text-[28px] md:leading-[1.25] text-text-primary-normal">
                أساسيات التجويد
              </h3>
              <p className="text-start w-53 md:w-full font-medium text-[12px] md:text-[18px] text-text-secondary-normal mt-2 md:mt-3">
                ابدأ بفهم المفاهيم والقواعد الأساسية التي تساعدك على بناء معرفة
                واضحة بالتجويد.
              </p>
              <div className="mt-2 md:mt-3 text-start">
                <p className="font-medium text-[12px] md:text-[18px] text-text-primary-normal">
                  عدد المحتوى:
                </p>
                <div className="flex gap-2 md:gap-3 mt-0.5 md:mt-1">
                  <span className="font-medium text-[12px] md:text-[18px] text-text-secondary-normal">
                    <span className="text-text-primary-normal xl:ml-1.25">6 </span>
                    أبواب
                  </span>
                  <div className="w-px h-4 md:h-6 bg-primary-normal "></div>

                  <span className="font-medium text-[12px] md:text-[18px] text-text-secondary-normal">
                    <span className="text-text-primary-normal xl:ml-1.25">30 </span>
                    درسًا
                  </span>
                </div>
              </div>
              <Link
                href={"/learn"}
                className=" mt-3 md:mt-6.5 flex items-center gap-2 justify-center text-card-white hover:bg-primary-normal-hover rounded-xl md:rounded-2xl px-4 md:px-8 py-2 md:py-3 bg-primary-normal font-medium text-sm md:text-base "
              >
                استعراض المستوى
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 xl:[stroke-width:1.5]" />
              </Link>
            </div>
            <div className="hidden xl:block absolute left-2 -bottom-11.5 w-64.5 h-57.25 overflow-hidden pointer-events-none origin-bottom transition-transform duration-300 group-hover:scale-115">
              <Image
                src={"/assets/QuranImageDesktop.png"}
                alt="Quran Image"
                width={735}
                height={636}
                className="absolute -left-2 top-0 max-w-none w-[274.6px] h-[237.2px]"
              />
            </div>
            <div className="absolute left-0 md:left-2 pointer-events-none top-[97.4px] md:top-auto md:bottom-0 xl:hidden origin-bottom transition-transform duration-300 group-hover:scale-105">
              <Image
                src={"/assets/QuranImage.png"}
                alt="Quran Image"
                width={258}
                height={230}
                className="h-25.5 md:h-43.75 w-37.75 md:w-64.5 object-center"
              />
            </div>
          </div>
          <div className="group relative overflow-hidden h-50.5 md:h-80.5 bg-[linear-gradient(236.42deg,rgba(18,60,53,0.85)_19.72%,rgba(198,161,91,0.425)_104.72%)] xl:bg-[linear-gradient(218.42deg,rgb(52_88_81)_19.7%,rgb(83_108_95)_30.3%,rgb(110_126_108)_41.0%,rgb(136_144_121)_51.6%,rgb(159_160_133)_62.2%,rgb(179_174_145)_72.8%,rgb(198_187_156)_83.5%,rgb(213_199_166)_94.1%,rgb(227_210_177)_104.7%)] rounded-[9.33px] md:rounded-2xl border-[0.58px] md:border border-stroke-light text-center flex transition-shadow duration-300 hover:shadow-[0_8px_20px_rgba(89,72,41,0.14)]">
            <span className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            <div className="flex flex-col items-start z-10 w-54.5 md:w-93.25 px-3 py-2.5 md:px-5 md:pt-5.5 md:pb-5">
              <div className="flex items-center justify-center gap-2.5">
                <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
                <span className=" text-secondary-normal font-medium text-[12px] md:text-[18px]  ">
                  لمن أتقن الأساسيات{" "}
                </span>
              </div>
              <h3 className="font-medium mt-0.5 md:mt-1 text-[16px] md:text-[28px] md:leading-[1.25] text-card-white">
                التجويد المتقدم{" "}
              </h3>
              <p className="text-start w-53 md:w-full font-medium text-[12px] md:text-[18px] text-text-secondary-light-hover mt-2 md:mt-3">
                تعمّق في الأحكام والتطبيقات المتقدمة وفق ترتيب المنهج
                التعليمي.{" "}
              </p>
              <div className="mt-2 md:mt-3 text-start">
                <p className="font-medium text-[12px] md:text-[18px] text-card-white">
                  عدد المحتوى:
                </p>
                <div className="flex gap-2 md:gap-3 mt-0.5 md:mt-1">
                  <span className="font-medium text-[12px] md:text-[18px] text-text-secondary-light-hover">
                    <span className="text-card-white xl:ml-1.25">5 </span>
                    أبواب
                  </span>
                  <div className="w-px h-4 md:h-6 bg-primary-normal "></div>

                  <span className="font-medium text-[12px] md:text-[18px] text-text-secondary-light-hover">
                    <span className="text-card-white xl:ml-1.25">22 </span>
                    درسًا
                  </span>
                </div>
              </div>
              <Link
                href={"/learn"}
                className=" mt-3 md:mt-6.5 flex items-center gap-2 justify-center text-card-white hover:bg-primary-normal-hover rounded-xl md:rounded-2xl px-4 md:px-8 py-2 md:py-3 bg-primary-normal font-medium text-sm md:text-base "
              >
                استعراض المستوى
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 xl:[stroke-width:1.5]" />
              </Link>
            </div>
            <div className="hidden xl:block absolute left-2 -bottom-11.5 w-64.5 h-57.25 overflow-hidden pointer-events-none origin-bottom transition-transform duration-300 group-hover:scale-115">
              <Image
                src={"/assets/QuranImageDesktop.png"}
                alt="Quran Image"
                width={735}
                height={636}
                className="absolute -left-2 top-0 max-w-none w-[274.6px] h-[237.2px]"
              />
            </div>
            <div className="absolute left-0 md:left-2 pointer-events-none top-[97.4px] md:top-auto md:bottom-0 xl:hidden origin-bottom transition-transform duration-300 group-hover:scale-105">
              <Image
                src={"/assets/QuranImage.png"}
                alt="Quran Image"
                width={258}
                height={230}
                className="h-25.5 md:h-43.75 w-37.75 md:w-64.5 object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathSection;
