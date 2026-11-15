import { blogDetails } from "@/constants";
import BlogCard from "./BlogCard";
import Introduction from "./Introduction";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BlogPreviewSection = () => {
  return (
    <section className="bg-secondary-light-hover">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Introduction
          label="المدونة التعليمية"
          title="مقالات تساعدك على تعلّم التجويد"
          description="اكتشف شروحات مبسّطة تساعدك على فهم أحكام التجويد وتطبيقها."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-11">
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
        <div className="flex items-center justify-center mt-11">
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
