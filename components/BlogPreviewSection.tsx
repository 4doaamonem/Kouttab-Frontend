import { blogDetails } from "@/constants";
import BlogCard from "./BlogCard";
import Introduction from "./Introduction";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BlogPreviewSection = () => {
  return (
    <section className="bg-secondary-light-hover">
      <div className="max-w-7xl mx-auto px-7.5 md:px-4 pt-9.25 md:pt-15.25 lg:pt-13 pb-12 md:pb-14.5 lg:pb-9.5">
        <Introduction
          label="المدونة التعليمية"
          contentClassName="min-[380px]:[&_h3]:whitespace-nowrap md:[&_h3]:whitespace-normal"
          title="مقالات تساعدك على تعلّم التجويد"
          description="اكتشف شروحات مبسّطة تساعدك على فهم أحكام التجويد وتطبيقها."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:max-w-310 lg:mx-auto lg:py-4.25 gap-5 mt-8.75 lg:mt-11">
          {blogDetails.map((item, index) => (
            <BlogCard
              index={index}
              label={item?.label}
              title={item?.title}
              description={item?.description}
              href={item?.href}
              key={index}
            />
          ))}
        </div>
        <div className="flex items-center justify-center mt-9 lg:mt-11">
          <Link
            href={"/blog"}
            className=" bg-primary-normal px-9 py-3 rounded-2xl text-card-white font-medium text-lg flex gap-2 w-fit items-center justify-center text-center align-middle  "
          >
            عرض جميع المقالات
            <ArrowLeft />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
