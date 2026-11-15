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
    <section className="bg-secondary-light-hover">
      <div className="max-w-7xl  mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col items-start w-full justify-start xl:flex-row gap-7">
          {/* Right Section */}
          <div className="flex flex-col items-start text-start">
            <Introduction
              className="text-start"
              labelClassName="justify-start"
              contentClassName="md:max-w-[580px] w-full"
              label="المصحف بالتجويد"
              title="طبق ماتتعلمه من أحكام التجويد"
              description="استفد من تجربة المصحف لدعم تعلّمك وتطبيق أحكام التجويد، وفقًا للأدوات المتاحة في المنصة."
            />
            <div className="mt-8 space-y-3">
              <p className="flex items-center  gap-2.5 font-medium text-base text-primary-normal">
                <CircleCheckBig className="w-6 h-6 text-secondary-normal" />
                واجهة قراءة تركّز على النص
              </p>
              <p className="flex items-center  gap-2.5 font-medium text-base text-primary-normal">
                <CircleCheckBig className="w-6 h-6 text-secondary-normal" />
                تنقّل منظّم بين محتوى المصحف{" "}
              </p>
              <p className="flex items-center  gap-2.5 font-medium text-base text-primary-normal">
                <CircleCheckBig className="w-6 h-6 text-secondary-normal" />
                تجربة مختلفة عن دروس شرح الأحكام{" "}
              </p>
            </div>
            <Link
              href={"/learn"}
              className="mt-16 w-fit flex items-center gap-2 justify-center text-card-white hover:bg-primary-normal-hover transition-colors rounded-2xl px-4 py-3 bg-primary-normal font-medium text-sm "
            >
              استكشف المصحف <ArrowLeft className="w-6 h-6" />
            </Link>
          </div>
          {/* Left Section */}
          <div className="relative mx-auto min-h-70.75 md:min-h-[567.99px] bg-bg-light border border-stroke-light rounded-xl min-w-51.5 md:min-w-[413.89px] -rotate-4  shadow-xl ">
            <div className="flex items-center justify-center p-3 border-b border-stroke-light">
              <p className="font-medium text-[10.2px] md:text-[20.46px] text-primary-normal">
                مصحف التجويد
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center py-2 ">
              <Image
                src={"/assets/QuranPage.png"}
                alt="Quran Image"
                width={328}
                height={415}
                className=" w-40.75 md:w-82 h-51.75 md:h-[415.86px] "
              />
              <div className="w-[194.21px] md:w-[389.9px] h-[23.59px] md:h-[47.74px] mt-3 flex items-center p-3 gap-3 rounded-full bg-primary-normal mb-2 ">
                <span className="text-[6px] md:text-[12px] text-secondary-normal">
                  1x
                </span>
                <div className="w-[110.32px] md:w-[251.48px] h-[3.4px] md:h-[6.82px] rounded-full bg-secondary-normal">
                  <div className="w-1/2 h-[3.4px] md:h-[6.82px] rounded-full bg-primary-light"></div>
                </div>
                <div className="flex items-center gap-0.5">
                  <span className="text-[6px] md:text-[12px] text-secondary-normal">
                    1:05 / 2:32
                  </span>
                  <PlayCircle className="w-2.5 h-2.5 md:w-5 md:h-5 text-secondary-light" />
                </div>
              </div>
            </div>
            <div className=" absolute -rotate-30 shadow-md bottom-35 -right-35 bg-bg-light border border-stroke-light p-1.5 rounded-xl  ">
              <GaugeCircle className="w-3 h-3 md:w-6 md:h-6 text-secondary-normal -rotate-90" />
              <h3 className="font-medium text-[8px] md:text-sm text-primary-normal ">
                سرعة التلاوة
              </h3>
              <p className="text-[6px] md:text-[12px] text-text-secondary-normal w-46.75">
                غيّر سرعة الاستماع لتتمكن من متابعة التلاوة بسهولة.
              </p>
            </div>
            <div className="  absolute -rotate-25 shadow-md top-44 -left-35 bg-bg-light border border-stroke-light p-1.5 rounded-xl  ">
              <Headphones className="w-3 h-3 md:w-6 md:h-6 text-secondary-normal " />
              <h3 className="font-medium text-[8px] md:text-sm text-primary-normal ">
                استمع و تعلم{" "}
              </h3>
              <p className="text-[6px] md:text-[12px] text-text-secondary-normal w-46.75">
                استمع إلى التلاوة وركّز على النطق الصحيح للأحكام.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TajweedSection;
