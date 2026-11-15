import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-91.75 md:min-h-150 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={"/assets/Hero.png"}
          alt="Hero Image"
          fill
          className="object-center object-conver"
        />
      </div>
      <div className="absolute -left-3 md:left-0 top-1/2 -translate-y-1/2">
        <Image
          priority
          src={"/assets/HeroLogo.png"}
          alt="Hero Logo"
          width={400}
          height={400}
          className="w-24 h-24 md:w-42.5 md:h-42.5 lg:w-80 lg:h-80"
        />
      </div>
      <div className=" relative z-10 max-w-91.75 md:max-w-120 lg:max-w-183.5 mx-auto px-3 md:px-0 text-center flex flex-col justify-center items-center">
        <div className="flex items-center justify-center gap-4">
          <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
          <span className=" text-secondary-normal font-medium text-sm md:text-lg ">
            مِنَ الْحَرْفِ إِلَى الْإِتْقَانِ
          </span>
        </div>
        <h1 className="text-[32px] md:text-[52px] lg:text-[74px]  font-bold text-card-white   ">
          تعلّم التجويد بطريقة{" "}
          <span className="text-secondary-normal"> واضحة ومتدرّجة.</span>
        </h1>
        <p className="text-[16px] md:text-lg lg:text-2xl text-secondary-light-hover ">
          تعرّف على أحكام التجويد، وافهم قواعدها، وتدرّب على تطبيقها خطوة بخطوة.
        </p>
        <div className="flex items-center mt-9 gap-4">
          <Link
            href={"/learn"}
            className="flex items-center gap-2 justify-center text-card-white hover:bg-primary-normal-hover transition-colors rounded-2xl p-3 md:px-8 bg-primary-normal font-medium text-sm md:text-lg "
          >
            ابدأ التعلّم
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <Link
            href={"/"}
            className="flex items-center gap-2 font-medium transition-colors hover:bg-bg-light hover:text-text-primary-normal justify-center border border-primary-light p-3 md:px-8 rounded-2xl text-primary-light text-sm md:text-lg "
          >
            {" "}
            استكشف المصحف
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-bg-light via-bg-light/50 to-transparent pointer-events-none " />
    </div>
  );
};

export default Hero;
