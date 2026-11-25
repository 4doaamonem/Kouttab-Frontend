import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-91.75 md:min-h-151.5 lg:min-h-150.25 flex items-start pt-13.25 md:pt-25 lg:pt-20.25 justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={"/assets/Hero.png"}
          alt="Hero Image"
          fill
          className="hidden lg:block object-top object-cover"
        />
        <Image
          src={"/assets/HeroWide.jpg"}
          alt="Hero Image"
          fill
          className="lg:hidden object-center object-cover"
        />
        <div className="absolute inset-0 opacity-85 lg:hidden bg-[linear-gradient(154.3deg,rgb(18_60_53/1.0)_33.4%,rgb(40_73_58/0.938)_41.1%,rgb(63_85_62/0.875)_48.9%,rgb(86_98_67/0.812)_56.6%,rgb(108_110_72/0.75)_64.3%,rgb(130_123_77/0.688)_72.0%,rgb(153_136_82/0.625)_79.8%,rgb(176_148_86/0.562)_87.5%,rgb(198_161_91/0.5)_95.2%)]" />
      </div>
      <div className="absolute -left-4.25 top-30 md:left-0.75 md:top-39 lg:left-1.25 lg:top-15">
        <Image
          priority
          src={"/assets/HeroLogo.png"}
          alt="Hero Logo"
          width={400}
          height={400}
          className="w-28.75 h-29 md:w-54.5 md:h-55 lg:w-102.5 lg:h-103"
        />
      </div>
      <div className=" relative z-10 max-w-91.75 md:max-w-120 lg:max-w-184 mx-auto px-3 md:px-0 text-center flex flex-col justify-center items-center">
        <div className="flex items-center justify-center gap-4">
          <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
          <span className=" text-secondary-normal font-medium text-sm md:text-lg md:leading-[1.5]">
            مِنَ الْحَرْفِ إِلَى الْإِتْقَانِ
          </span>
        </div>
        <h1 className="text-[32px] leading-[1.25] md:text-[52px] md:leading-[1.6] md:mt-2.5 lg:mt-4.5 lg:pl-2 lg:text-[71px] lg:leading-[1.5] font-bold text-card-white lg:[text-shadow:0_2px_4px_rgb(18_60_53/0.3)]">
          تعلّم التجويد بطريقة{" "}
          <span className="text-secondary-normal lg:text-[75px]"> واضحة ومتدرّجة.</span>
        </h1>
        <p className="text-base leading-6 md:text-lg md:leading-[1.5] lg:text-2xl lg:leading-[1.3] mt-2 md:-mt-1 lg:-mt-0.5 max-w-70 md:max-w-100 lg:max-w-none text-secondary-light-hover ">
          تعرّف على أحكام التجويد. وافهم قواعدها، وتدرّب على تطبيقها خطوة بخطوة.
        </p>
        <div className="flex items-center mt-9.25 md:mt-8.75 lg:mt-8.75 gap-4 max-[360px]:gap-2">
          <Link
            href={"/learn"}
            className="flex items-center gap-2 justify-center text-card-white hover:bg-primary-normal-hover rounded-2xl p-3 w-30 max-[360px]:w-auto whitespace-nowrap h-12 md:p-4 md:w-45 md:h-13 bg-primary-normal font-medium text-sm md:text-lg "
          >
            ابدأ التعلّم
            <ArrowLeft className="w-6 h-6 [stroke-width:1.5]" />
          </Link>
          <Link
            href={"/"}
            className="flex items-center gap-2 font-medium transition-colors hover:bg-bg-light hover:text-text-primary-normal justify-center border border-primary-light p-3 w-50 max-[360px]:w-auto whitespace-nowrap h-12 md:p-4 md:w-55 md:h-13 rounded-2xl text-primary-light text-sm md:text-lg "
          >
            {" "}
            استكشف المصحف
            <ArrowLeft className="w-6 h-6 [stroke-width:1.5]" />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 md:bottom-21.5 lg:hidden left-0 right-0 h-22 md:h-20 bg-[linear-gradient(to_top,rgb(248_246_240)_9%,rgb(248_246_240/0.88)_26%,rgb(248_246_240/0.51)_60%,rgb(248_246_240/0.03)_94%,transparent)] md:bg-linear-to-t md:from-bg-light md:via-bg-light/50 md:to-transparent pointer-events-none" />
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-130 lg:top-128.25 lg:ml-10.625 w-439.25 h-52 bg-bg-light rounded-t-[50%/100%] lg:rounded-[50%] lg:blur-[22px] pointer-events-none" />
    </div>
  );
};

export default Hero;
