import Image from "next/image";
import Introduction from "./Introduction";

const AppDownloadSection = () => {
  return (
    <section className="bg-bg-light relative overflow-x-clip pt-14 md:pt-16 pb-16 lg:pb-20">
      {/* 1. العنوان والوصف */}
      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <Introduction
          label="تطبيق كُتّاب"
          title="تعلّم التجويد أينما كنت"
          description="تابع تعلّم أحكام التجويد وتدرّب على تطبيقها من خلال تجربة كُتّاب على هاتفك."
        />
      </div>

      {/* 2. منطقة الشريط الأخضر والمحتوى */}
      <div className="relative mt-14 md:mt-16 lg:mt-20">
        {/* خلفية الباترن الأخضر: 215px موبايل | 330px تابلت | 400px ديسكتوب */}
        <div className="absolute inset-x-0 top-[44px] md:top-[64px] lg:top-[52px] h-[215px] md:h-[330px] lg:h-[400px] bg-[#0B1C18] z-0">
          <Image
            src="/assets/newPattern.svg"
            alt="Pattern"
            fill
            className="object-cover"
          />
        </div>

        {/* الكونتينر الرئيسي للعناصر */}
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 md:gap-14 lg:gap-8">
          
          {/* المجموعة الأولى: البرواز الذهبي + اللوجو + المصحف */}
          <div className="relative w-[224px] md:w-[346px] h-[275px] md:h-[415px] shrink-0">
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
            <div className="w-[71px] md:w-[110px] h-[81px] md:h-[126px] absolute top-[62px] md:top-[95px] left-1/2 -translate-x-1/2 z-10">
              <Image
                src="/assets/logoWhite.png"
                alt="Kouttab Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* المصحف في أسفل البرواز */}
            <div className="w-[183px] md:w-[286px] h-[163px] md:h-[254px] absolute -bottom-10 left-1/2 -translate-x-1/2 z-20">
              <Image
                src="/assets/QuranImageApp.png"
                alt="Quran on Stand"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* المجموعة الثانية: الموبايلين */}
          <div className="relative w-[335px] md:w-[410px] h-[465px] md:h-[560px] shrink-0 lg:mt-4">
            {/* الموبايل الخلفي (يمين) */}
            <div className="w-[215px] md:w-[259px] h-[435px] md:h-[523px] absolute right-0 top-0 z-10">
              <Image
                src="/assets/RearPhone.png"
                alt="Kouttab App Screen"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-57.5 md:w-[275px] h-[455px] md:h-[550px] absolute left-0 bottom-0 z-20">
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

      <div className="max-w-7xl mx-auto px-4 md:px-12 mt-10 md:mt-12 lg:-mt-24 relative z-20">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center gap-4">
            <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5" />
            <span className="text-secondary-normal font-medium text-lg">
              تحميل التطبيق
            </span>
          </div>

          <a
            href="#google-play"
            aria-label="Get it on Google Play"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/assets/ArtWork.png"
              alt="Get it on Google Play"
              width={196}
              height={64}
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;