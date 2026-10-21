import { learningJourney } from "@/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Challenges = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {learningJourney.map((item, index) => (
        <div
          key={item?.title}
          className="relative  p-5 bg-transparent border border-stroke-light rounded-2xl hover:bg-secondary-light-hover hover:-translate-x-0.5 hover:translate-y-0.5 transition-all"
        >
          <div className="notch" />
          <div className="absolute top-px left-2 h-12.5 w-13.75 rounded-2xl bg-secondary-normal flex items-center justify-center text-2xl font-medium text-text-primary-normal">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="h-14 w-14 p-2 rounded-xl bg-secondary-light-active flex items-center justify-center  text-text-primary-normal mb-6">
            {item?.icon}
          </div>
          <h3 className="font-medium text-2xl text-text-primary-normal mb-1.5">
            {item?.title}
          </h3>
          <p className="text-base text-text-secondary-normal">
            {item?.description}
          </p>
          <Link
            href={item?.href}
            className="mt-8  flex items-center justify-end text-primary-normal font-medium text-lg gap-2"
          >
            {item?.btnTitle}
            <div className="flex items-center justify-center w-6 h-6">
              <ArrowRight />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Challenges;
