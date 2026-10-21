import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LearningPathSection = () => {
  return (
    <section className="bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 pb-32 pt-16 md:pt-20 md:pb-36 ">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
            <span className=" text-secondary-normal font-medium text-lg  ">
              مسارات التعلّم{" "}
            </span>
          </div>
          <h3 className="font-medium text-[28px] text-text-primary-normal mb-3 ">
            اختر مسار التعلّم المناسب لك
          </h3>
          <p className="font-medium text-lg text-text-secondary-normal ">
            ابدأ من المسار الأقرب إلى هدفك، ثم تقدّم في التعلّم وفق محتوى المسار
            ومستواك.
          </p>
        </div>
        <div className="mt-11 flex items-center flex-col lg:flex-row gap-8.5 justify-center">
          <div className="group px-11 py-6 bg-[linear-gradient(176.01deg,rgba(237,226,204,0.75)_31.73%,rgba(198,161,91,0.45)_86.44%)] rounded-2xl border border-stroke-light text-center w-fit flex flex-col justify-center items-center ">
            <div className="flex items-center justify-center gap-4">
              <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
              <span className=" text-secondary-normal font-medium text-lg  ">
                المسار الأول{" "}
              </span>
            </div>
            <h3 className="font-medium text-[28px] text-text-primary-normal mb-3">
              أساسيات التجويد
            </h3>
            <p className="font-medium text-lg text-text-secondary-normal w-93 mb-3">
              ابدأ بفهم المفاهيم والقواعد الأساسية التي تساعدك على بناء معرفة
              واضحة بالتجويد.
            </p>
            <div>
              <h5 className="text-lg font-medium text-text-primary-normal">
                عدد المحتوى:
              </h5>
              <span className="text-lg font-medium text-text-secondary-normal">
                <span className="text-text-primary-normal">6 </span>
                أبواب ·
              </span>
              <span className="text-lg font-medium text-text-secondary-normal">
                {" "}
                <span className="text-text-primary-normal">30 </span> درسًا
              </span>
            </div>

            <div className="relative flex flex-col items-center justify-center group-hover:scale-105 transition-transform">
              <Image
                src={"/assets/QuranImage.png"}
                alt="Quran Image"
                width={216}
                height={192}
              />
              <Link
                href={"/learn"}
                className=" absolute -bottom-4 whitespace-nowrap flex items-center gap-2 justify-center text-card-white hover:bg-primary-normal-hover transition-colors rounded-2xl px-8 py-3 bg-primary-normal font-medium text-lg "
              >
                تعرّف على طريقة البدء <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="group lg:translate-y-20 px-11 py-6 bg-[linear-gradient(156.38deg,rgba(18,60,53,0.85)_13.71%,rgba(198,161,91,0.425)_87.28%)] rounded-2xl border border-stroke-light text-center w-fit flex flex-col justify-center items-center ">
            <div className="flex items-center justify-center gap-4">
              <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
              <span className=" text-secondary-normal font-medium text-lg  ">
                المسار الثاني
              </span>
            </div>
            <h3 className="font-medium text-[28px] text-card-white mb-3">
              التجويد المتقدم{" "}
            </h3>
            <p className="font-medium text-lg text-text-secondary-light-hover w-93 mb-3">
              تعمّق في الأحكام والتطبيقات المتقدمة وفق ترتيب المنهج التعليمي.
            </p>
            <div>
              <h5 className="text-lg font-medium text-card-white ">
                عدد المحتوى:
              </h5>
              <span className="text-lg font-medium text-text-secondary-light-hover">
                <span className="text-card-white">5 </span>
                أبواب ·
              </span>
              <span className="text-lg font-medium text-text-secondary-light-hover">
                {" "}
                <span className="text-card-white">22 </span> درسًا
              </span>
            </div>

            <div className="relative flex flex-col items-center justify-center group-hover:scale-105 transition-transform">
              <Image
                src={"/assets/QuranImage.png"}
                alt="Quran Image"
                width={216}
                height={192}
              />
              <Link
                href={"/learn"}
                className=" absolute -bottom-4 whitespace-nowrap flex items-center gap-2 justify-center text-card-white hover:bg-primary-normal-hover transition-colors rounded-2xl px-8 py-3 bg-primary-normal font-medium text-lg "
              >
                تعرّف على طريقة البدء <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathSection;
