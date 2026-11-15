import Link from "next/link";
import Introduction from "./Introduction";
import { ArrowUpLeft } from "lucide-react";

interface Props {
  label: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

const BlogCard = ({ label, title, description, href, index }: Props) => {
  return (
    <div className="w-100 h-115 bg-card-white shadow-[0.62px_0.62px_6.2px_rgba(69,56,32,0.1)] rounded-2xl   flex ">
      <div className="flex flex-col gap-3 relative py-8 pr-3">
        {Array.from({ length: 15 }, (_, index) => (
          <div
            key={index}
            className="h-4 relative w-4 rounded-sm bg-secondary-light-hover"
          >
            <div className="flex flex-col  absolute -right-4">
              <div className="w-6.5 h-1  rotate-x-45 bg-transparent border-t-2 border-r-2 border-l-2  border-primary-normal rounded-full py-1 "></div>
              <div className="w-6.5 h-1  rotate-x-45 bg-transparent border-t-2 border-r-2 border-l-2  border-primary-normal rounded-full py-1 -translate-y-1 "></div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full text-center flex flex-col justify-between py-2 pl-4.25">
        <div className="flex justify-between items-center h-fit w-full  ">
          <Introduction label={label} />
          <span className="font-bold text-[74px] text-secondary-normal">
            0{index + 1}
          </span>
        </div>
        <div className=" px-4">
          <h4 className="text-2xl font-medium text-text-primary-normal">
            {title}
          </h4>
          <p className="text-[16px] font-medium text-text-secondary-normal mt-3  ">
            {description}
          </p>
        </div>
        <div className="w-full flex justify-end mb-9  ">
          <Link
            href={href}
            className=" p-2 border border-stroke-light rounded-full "
          >
            <ArrowUpLeft className="w-8 h-8 text-text-primary-normal" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
