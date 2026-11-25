import {
  ArrowLeft,
  CircleCheckBig,
  GaugeCircle,
  Headphones,
  PlayCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Introduction from "./Introduction";

const TajweedSection = () => {
  return (
    <section className="bg-secondary-light-hover overflow-x-clip">
      <div className="max-w-318 mx-auto px-4 pt-9 pb-11.25 md:px-10 md:py-10 xl:px-4 xl:py-9">
        <div className="flex flex-col items-start w-full justify-start xl:items-center xl:flex-row gap-6 xl:gap-7">
          {/* Right Section */}
          <div className="flex flex-col items-start text-start md:px-3 md:w-full xl:py-0 xl:pl-0 xl:pr-2.5 xl:w-auto">
            <Introduction
              className="text-start"
              labelClassName="justify-start"
              contentClassName="md:max-w-[580px] xl:max-w-128.75 w-full"
              label="المصحف بالتجويد"
              title="طبق ماتتعلمه من أحكام التجويد"
              description="استفد من تجربة المصحف لدعم تعلّمك وتطبيق أحكام التجويد، وفقًا للأدوات المتاحة في المنصة."
            />
            <div className="mt-8 md:mt-11 space-y-3">
              <p className="flex items-center  gap-2.5 font-medium text-base md:text-lg leading-normal text-primary-normal">
                <CircleCheckBig className="w-5 h-5 md:w-6 md:h-6 text-secondary-normal" />
                واجهة قراءة تركّز على النص
              </p>
              <p className="flex items-center  gap-2.5 font-medium text-base md:text-lg leading-normal text-primary-normal">
                <CircleCheckBig className="w-5 h-5 md:w-6 md:h-6 text-secondary-normal" />
                تنقّل منظّم بين محتوى المصحف{" "}
              </p>
              <p className="flex items-center  gap-2.5 font-medium text-base md:text-lg leading-normal text-primary-normal">
                <CircleCheckBig className="w-5 h-5 md:w-6 md:h-6 text-secondary-normal" />
                تجربة مختلفة عن دروس شرح الأحكام{" "}
              </p>
            </div>
            <Link
              href={"/learn"}
              className="mt-9 md:mt-13 w-fit flex items-center gap-2 justify-center text-card-white hover:bg-primary-dark rounded-2xl p-4 h-12 md:h-13 bg-primary-normal font-medium text-sm md:text-lg "
            >
              استكشف المصحف <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
          </div>
          {/* Left Section */}
          <div className="relative mx-auto shrink-0 max-[360px]:[zoom:0.84] w-[342.86px] h-75 md:w-172 md:h-150.5 xl:w-[697px] xl:mx-0">
            <div className="absolute left-[72.4px] top-[8.2px] md:left-[145.3px] md:top-[16.4px] xl:left-[167.2px] xl:top-[16.8px] flex flex-col gap-[5.1px] md:gap-[10.23px] w-[206.26px] h-[283.05px] md:w-[413.89px] md:h-[567.99px] xl:w-[501.29px] xl:h-[568px] bg-bg-light border-[0.42px] md:border-[0.85px] border-stroke-light rounded-[6.8px] md:rounded-[13.64px] -rotate-[4.84deg] xl:-rotate-4 shadow-xl">
              <div className="flex items-center justify-center h-[27.61px] md:h-[55.22px] p-[3.4px] md:p-[6.8px] border-b border-stroke-light">
                <p className="font-medium text-[10.2px] md:text-[20.46px] text-primary-normal">
                  مصحف التجويد
                </p>
              </div>
              <div className="flex flex-col items-center gap-[10.2px] md:gap-[20.4px] pb-[8.5px] md:pb-[17px]">
                <Image
                  src={"/assets/QuranPage.png"}
                  alt="Quran Image"
                  width={328}
                  height={415}
                  className="w-[163.5px] h-[207.4px] md:w-82 md:h-[415.86px]"
                />
                <div className="w-[194.21px] md:w-[389.9px] h-[23.59px] md:h-[47.74px] flex items-center p-1.5 md:p-3 gap-1.5 md:gap-3 rounded-full bg-primary-normal">
                  <span className="text-[6px] md:text-[12px] text-secondary-normal">
                    1x
                  </span>
                  <div className="w-[110.32px] md:w-[251.48px] h-[3.4px] md:h-[6.82px] rounded-full bg-secondary-normal">
                    <div className="w-1/2 h-[3.4px] md:h-[6.82px] rounded-full bg-primary-light"></div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <span
                      dir="ltr"
                      className="text-[6px] md:text-[12px] text-secondary-normal"
                    >
                      1:05 / 2:32
                    </span>
                    <PlayCircle className="w-2.5 h-2.5 md:w-5 md:h-5 text-secondary-light" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[251.5px] top-[160.4px] md:left-[504.8px] md:top-[321.9px] xl:left-[608.2px] xl:top-[323.6px] flex flex-col gap-0.5 md:gap-1.5 w-[91.5px] h-[52.62px] md:w-[183.62px] md:h-[105.59px] xl:w-[213px] xl:h-[109px] px-1.5 py-1 md:px-3 md:py-2 -rotate-[30.94deg] xl:-rotate-[26.29deg] shadow-md bg-bg-light border-[0.5px] md:border border-stroke-light rounded-[5.98px] md:rounded-xl">
              <GaugeCircle className="w-3 h-3 md:w-6 md:h-6 text-secondary-normal -rotate-90" />
              <div className="flex flex-col gap-0.5">
                <h3 className="font-medium text-[8px] md:text-sm text-primary-normal">
                  سرعة التلاوة
                </h3>
                <p className="text-[6px] md:text-[12px] text-text-secondary-normal">
                  غيّر سرعة الاستماع لتتمكن من متابعة التلاوة بسهولة.
                </p>
              </div>
            </div>
            <div className="absolute left-[7px] top-[107.6px] md:left-[14.1px] md:top-[215.8px] xl:left-[13.2px] xl:top-[217.6px] flex flex-col gap-0.5 md:gap-1.5 w-[91.5px] h-[52.62px] md:w-[183.62px] md:h-[105.59px] xl:w-[213px] xl:h-[109px] px-1.5 py-1 md:px-3 md:py-2 -rotate-[30.94deg] xl:-rotate-[26.29deg] shadow-md bg-bg-light border-[0.5px] md:border border-stroke-light rounded-[5.98px] md:rounded-xl">
              <Headphones className="w-3 h-3 md:w-6 md:h-6 text-secondary-normal" />
              <div className="flex flex-col gap-0.5">
                <h3 className="font-medium text-[8px] md:text-sm text-primary-normal">
                  استمع و تعلم{" "}
                </h3>
                <p className="text-[6px] md:text-[12px] text-text-secondary-normal">
                  استمع إلى التلاوة وركّز على النطق الصحيح للأحكام.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TajweedSection;
