import Image from "next/image";
import Introduction from "./Introduction";

const AppDownloadSection = () => {
  return (
    <section className="bg-bg-light relative overflow-x-clip pt-12.75 md:pt-7.25 lg:pt-13 pb-13.5 md:pb-13 lg:pb-15">
      {/* 1. العنوان والوصف */}
      <div className="max-w-318 mx-auto px-4 lg:pl-7 relative z-20">
        <Introduction
          label="تطبيق كُتّاب"
          title="تعلّم التجويد أينما كنت"
          description="تابع تعلّم أحكام التجويد وتدرّب على تطبيقها من خلال تجربة كُتّاب على هاتفك."
        />
      </div>

      {/* 2. منطقة الشريط الأخضر والمحتوى */}
      <div className="relative mt-9 md:mt-16 lg:mt-16.75 lg:h-134.5">
        {/* خلفية الباترن الأخضر: 215px موبايل | 330px تابلت | 400px ديسكتوب */}
        <div className="absolute inset-x-0 top-[41px] md:top-[27px] lg:top-0 h-[215px] md:h-[330px] lg:h-[400px] bg-[#0B1C18] z-0">
          <Image
            src="/assets/newPattern.svg"
            alt="Pattern"
            fill
            className="object-cover"
          />
        </div>

        {/* الكونتينر الرئيسي للعناصر */}
        <div className="max-w-318 mx-auto px-4 md:px-12 lg:px-4 relative z-10 lg:h-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10.5 md:gap-16 lg:gap-8">
          
          {/* المجموعة الأولى: البرواز الذهبي + اللوجو + المصحف */}
          <div className="relative w-[224px] md:w-[346px] h-[275px] md:h-[415px] md:-mt-6 lg:mt-0 shrink-0 lg:absolute lg:right-4 lg:-top-3.25">
            {/* البرواز الذهبي */}
            <div className="w-full h-[222px] md:h-[344px] relative">
              <Image
                src="/assets/GoldArtwork.svg"
                alt="Gold Artwork"
                fill
                className="object-contain"
              />
            </div>

            {/* اللوجو الأبيض في منتصف البرواز الذهبي */}
            <div className="w-[71px] md:w-[110px] h-[81px] md:h-[126px] absolute top-[62px] md:top-[95px] lg:top-[105px] left-1/2 -translate-x-1/2 z-10">
              <Image
                src="/assets/logoWhite.png"
                alt="Kouttab Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* المجموعة الثانية: الموبايلين */}
          <div className="relative max-[375px]:[zoom:0.84] w-[344px] md:w-[483px] h-[506px] md:h-[574px] shrink-0 lg:absolute lg:left-4 lg:-top-8.25 lg:w-112.25 lg:h-138">
            {/* الموبايل الخلفي (يمين) */}
            <div className="w-56.25 md:w-73.25 h-112.5 md:h-146.75 absolute -right-3.25 md:right-0 lg:-right-4.25 -top-[1.5px] md:-top-0.5 lg:-top-1 z-10">
              <Image
                src="/assets/RearPhone.png"
                alt="Kouttab App Screen"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-65.5 md:w-85.5 h-116 md:h-151.25 absolute -left-3.25 md:left-0 top-6 md:top-[27px] lg:-left-4.25 lg:top-[25.5px] lg:w-85.5 lg:h-151.25 z-20">
              <Image
                src="/assets/FrontPhone.svg"
                alt="Kouttab App Splash"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-318 mx-auto px-4 md:px-12 mt-6 md:mt-5 lg:mt-4 xl:-mt-24.75 relative z-20">
        <div className="flex flex-col items-center justify-center gap-2 md:gap-3 lg:gap-2">
          <div className="flex items-center justify-center gap-4">
            <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5" />
            <span className="text-secondary-normal font-medium text-sm md:text-lg leading-normal">
              تحميل التطبيق
            </span>
          </div>

          <a
            href="#google-play"
            aria-label="Get it on Google Play"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/assets/Artwork.png"
              alt="Get it on Google Play"
              width={196}
              height={64}
              className="object-contain w-45.75 h-auto md:w-49"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;