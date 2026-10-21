import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-150 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={"/assets/Hero.png"}
          alt="Hero Image"
          fill
          className="object-center "
        />
      </div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <Image
          priority
          src={"/assets/HeroLogo.png"}
          alt="Hero Logo"
          width={400}
          height={400}
        />
      </div>
      <div className=" relative z-10 max-w-3xl mx-auto px-4 text-center flex flex-col justify-center items-center">
        <div className="flex items-center justify-center gap-4">
          <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
          <span className=" text-secondary-normal font-medium text-lg  ">
            مِنَ الْحَرْفِ إِلَى الْإِتْقَانِ
          </span>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-card-white leading-relaxed  ">
          تعلّم التجويد بطريقة{" "}
          <span className="text-secondary-normal"> واضحة ومتدرّجة.</span>
        </h1>
        <p className="text-2xl text-secondary-light-hover">
          تعرّف على أحكام التجويد، وافهم قواعدها، وتدرّب على تطبيقها خطوة بخطوة.
        </p>
        <div className="flex items-center mt-9 gap-4">
          <Link
            href={"/learn"}
            className="flex items-center gap-2 justify-center text-card-white hover:bg-primary-normal-hover transition-colors rounded-2xl px-8 py-3 bg-primary-normal font-medium text-lg "
          >
            ابدأ التعلّم
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <Link
            href={"/"}
            className="flex items-center gap-2 font-medium transition-colors hover:bg-bg-light hover:text-text-primary-normal justify-center border border-primary-light px-8 py-3 rounded-2xl text-primary-light  "
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
