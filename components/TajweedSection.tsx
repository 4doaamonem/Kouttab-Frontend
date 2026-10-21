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

const TajweedSection = () => {
  return (
    <section className="bg-secondary-light-hover">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col items-center justify-start lg:flex-row gap-7">
          {/* Right Section */}
          <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start">
            <div className="flex items-center justify-start gap-4">
              <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
              <span className=" text-secondary-normal font-medium text-lg  ">
                المصحف بالتجويد{" "}
              </span>
            </div>
            <h3 className="font-medium text-[28px] text-text-primary-normal mb-3">
              طبّق ما تتعلّمه من أحكام التجويد
            </h3>
            <p className="text-lg font-medium  text-text-secondary-normal max-w-137.5">
              استفد من تجربة المصحف لدعم تعلّمك وتطبيق أحكام التجويد، وفقًا
              للأدوات المتاحة في المنصة.
            </p>
            <div className="mt-11 space-y-3">
              <p className="flex items-center  gap-2.5 font-medium text-lg text-primary-normal">
                <CircleCheckBig className="w-6 h-6 text-secondary-normal" />
                واجهة قراءة تركّز على النص
              </p>
              <p className="flex items-center  gap-2.5 font-medium text-lg text-primary-normal">
                <CircleCheckBig className="w-6 h-6 text-secondary-normal" />
                تنقّل منظّم بين محتوى المصحف{" "}
              </p>
              <p className="flex items-center  gap-2.5 font-medium text-lg text-primary-normal">
                <CircleCheckBig className="w-6 h-6 text-secondary-normal" />
                تجربة مختلفة عن دروس شرح الأحكام{" "}
              </p>
            </div>
            <Link
              href={"/learn"}
              className="mt-16 w-fit flex items-center gap-2 justify-center text-card-white hover:bg-primary-normal-hover transition-colors rounded-2xl px-8 py-3 bg-primary-normal font-medium text-lg "
            >
              استكشف المصحف <ArrowLeft className="w-6 h-6" />
            </Link>
          </div>

          {/* Left Section */}
          <div className="relative min-h-142.5 bg-bg-light border border-stroke-light rounded-xl min-w-125 -rotate-3 shadow-xl ">
            <div className="flex items-center justify-center p-3 border-b border-stroke-light">
              <p className="font-medium text-xl text-primary-normal">
                مصحف التجويد
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center ">
              <Image
                src={"/assets/QuranPage.png"}
                alt="Quran Image"
                width={328}
                height={415}
                className="rotate-4"
              />

              <div className="w-97.5 h-[47.47px] mt-3 flex items-center p-3 gap-3 rounded-full bg-primary-normal ">
                <span className="text-xs text-secondary-normal">1x</span>
                <div className="w-62.75 h-1.5 rounded-full bg-secondary-normal">
                  <div className="w-1/2 h-1.5 rounded-full bg-primary-light"></div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-secondary-normal">
                    1:05 / 2:32
                  </span>
                  <PlayCircle className="w-5 h-5 text-secondary-light" />
                </div>
              </div>
            </div>
            <div className="hidden xl:block absolute -rotate-30 shadow-md bottom-31.75 -right-37 bg-bg-light border border-stroke-light p-3 rounded-xl  ">
              <GaugeCircle className="w-6 h-6 text-secondary-normal -rotate-90" />
              <h3 className="font-medium text-sm text-primary-normal mb-2">
                سرعة التلاوة
              </h3>
              <p className="text-xs text-text-secondary-normal w-46.75">
                غيّر سرعة الاستماع لتتمكن من متابعة التلاوة بسهولة.
              </p>
            </div>
            <div className="hidden xl:block  absolute -rotate-25 shadow-md top-44 -left-37 bg-bg-light border border-stroke-light p-3 rounded-xl  ">
              <Headphones className="w-6 h-6 text-secondary-normal " />
              <h3 className="font-medium text-sm text-primary-normal mb-2">
                استمع و تعلم{" "}
              </h3>
              <p className="text-xs text-text-secondary-normal w-46.75">
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
