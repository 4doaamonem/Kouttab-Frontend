import { learningJourney } from "@/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const tabletOrder = [
  "order-2 lg:order-none",
  "order-1 lg:order-none",
  "order-3 lg:order-none",
  "order-4 lg:order-none",
];

const Challenges = () => {
  return (
    <div className="grid grid-cols-[18.4375rem] justify-center md:grid-cols-[repeat(2,18.4375rem)] md:justify-start lg:grid-cols-4 gap-5 mt-11">
      {learningJourney.map((item, index) => (
        <div
          key={item?.title}
          className={`relative h-70 p-5 pt-6 ${tabletOrder[index]} bg-transparent border border-stroke-light rounded-2xl hover:bg-secondary-light-hover hover:-translate-x-0.5 hover:translate-y-0.5 transition-all`}
        >
          <div className="notch" />
          <div className="absolute -top-px left-[9px] h-10.5 w-17 rounded-2xl bg-secondary-normal flex items-center justify-center text-2xl leading-[1.3] font-medium text-text-primary-normal">
            {item?.number ?? String(index + 1).padStart(2, "0")}
          </div>
          <div className="h-13 w-13 p-2 rounded-xl bg-secondary-light-active flex items-center justify-center text-text-primary-normal mb-6 [&_svg]:size-8 [&_svg]:stroke-[1.5]">
            {item?.icon}
          </div>
          <h3 className="font-medium text-2xl leading-[1.3] text-text-primary-normal mb-1.5">
            {item?.title}
          </h3>
          <p className="text-base min-h-18 text-text-secondary-normal">
            {item?.description}
          </p>
          <Link
            href={item?.href}
            className="mt-8  flex items-center justify-end text-primary-normal font-medium text-lg leading-normal gap-2"
          >
            {item?.btnTitle}
            <div className="flex items-center justify-center w-6 h-6">
              <ArrowRight strokeWidth={1.5} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Challenges;
