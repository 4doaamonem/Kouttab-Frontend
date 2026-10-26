import Image from "next/image";

const AppDownloadSection = () => {
  return (
    <section className="bg-bg-light relative overflow-hidden pt-16 pb-45  ">
      <div className="max-w-7xl mx-auto px-4   relative ">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-1">
            <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
            <span className=" text-secondary-normal font-medium text-lg ">
              تطبيق كُتّاب{" "}
            </span>
          </div>
          <h3 className="font-medium text-text-primary-normal text-[28px]">
            تعلّم التجويد أينما كنت
          </h3>
          <p className="text-lg font-medium text-text-secondary-normal">
            تابع تعلّم أحكام التجويد وتدرّب على تطبيقها من خلال تجربة كُتّاب على
            هاتفك.
          </p>
        </div>
      </div>
      <div className="relative  h-100 mt-16  ">
        <div className=" absolute inset-0   z-10">
          <Image
            src={"/assets/newPattern.svg"}
            alt="Pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 z-10 h-full relative">
          <div className="">
            <div className="w-86.5 h-86 absolute top-0 z-10">
              <Image
                src={"/assets/GoldArtwork.svg"}
                alt="Gold ArtWork"
                width={346}
                height={344}
                className=""
              />
            </div>
            <div className="w-27.5 h-31.5 absolute right-36 top-25 z-10">
              <Image
                src={"/assets/logoWhite.png"}
                alt="Logo"
                width={110}
                height={126}
                className=""
              />
            </div>
            <div className="h-63.5 w-71.5 absolute z-20 -bottom-12 right-12 ">
              <Image
                src={"/assets/QuranImage.png"}
                alt="Quran Image"
                width={286}
                height={254}
              />
            </div>
          </div>
          <div className="">
            <div className="w-64.75 h-130.75 absolute left-35.25 -bottom-24  z-10 ">
              <Image
                src={"/assets/RearPhone.png"}
                alt="Kouttab Phone "
                width={259}
                height={523}
              />
            </div>
            <div className="w-64.75 h-130.75 absolute left-1 -bottom-38  z-20  ">
              <Image
                src={"/assets/FrontPhone.svg"}
                alt="Kouttab Phone "
                width={259}
                height={550}
                className="object-cover scale-110"
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pb-15">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-4 mb-1">
              <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
              <span className=" text-secondary-normal font-medium text-lg ">
                تحميل التطبيق{" "}
              </span>
            </div>
            <div>
              <Image
                src={"/assets/ArtWork.png"}
                alt="Google Play"
                width={196}
                height={64}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
