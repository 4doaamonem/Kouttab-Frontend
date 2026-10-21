import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" relative bg-bg-normal overflow-hidden ">
      <div className="absolute inset-0 z-0  opacity-5.5">
        <Image
          src={"/assets/pattern.jpeg"}
          alt="Pattern"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-13.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start gap-20">
          <div className="">
            <Link href={"/"} className="">
              <Image
                src={"/assets/logoWhite.png"}
                alt="Logo"
                width={105}
                height={120}
              />
            </Link>
            <h2 className="text-[32px] font-medium text-bg-light">
              من الحرف إلى الإتقان
            </h2>
            <p className="text-lg font-medium text-text-secondary-normal max-w-73">
              تعلّم التجويد خطوة بخطوة، وافهم أحكامه من خلال تجربة تعليمية
              تفاعلية.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-secondary-normal font-medium">
              روابط المنصة
            </p>
            <Link
              href={"/"}
              className="font-medium text-lg text-text-primary-light-active"
            >
              الرئيسية
            </Link>
            <Link
              href={"/"}
              className="font-medium text-lg text-text-primary-light-active"
            >
              مسارات التعلّم
            </Link>
            <Link
              href={"/"}
              className="font-medium text-lg text-text-primary-light-active"
            >
              {" "}
              مصحف التجويد
            </Link>
            <Link
              href={"/"}
              className="font-medium text-lg text-text-primary-light-active"
            >
              التحديات
            </Link>
            <Link
              href={"/"}
              className="font-medium text-lg text-text-primary-light-active"
            >
              خريطة التعلّم
            </Link>
            <Link
              href={"/"}
              className="font-medium text-lg text-text-primary-light-active"
            >
              التقدّم والشهادة
            </Link>
            <Link
              href={"/"}
              className="font-medium text-lg text-text-primary-light-active"
            >
              المدونة
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-secondary-normal font-medium">
              المساعدة{" "}
            </p>
            <Link
              href={"/"}
              className="font-medium text-lg text-text-primary-light-active"
            >
              الأسئلة الشائعة{" "}
            </Link>
            <Link
              href={"/"}
              className="font-medium text-lg text-text-primary-light-active"
            >
              تواصل معنا{" "}
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-secondary-normal font-medium">
              معلومات قانونية{" "}
            </p>
            <Link
              href={"/"}
              className="font-medium text-lg text-text-primary-light-active"
            >
              سياسة الخصوصية
            </Link>
            <Link
              href={"/"}
              className="font-medium text-lg text-text-primary-light-active"
            >
              شروط الاستخدام{" "}
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-secondary-normal font-medium">
              مصادر التعلّم{" "}
            </p>
            <Link
              href={"/"}
              className="font-medium text-lg text-text-primary-light-active"
            >
              المراجع ومصادر المحتوى
            </Link>
          </div>
        </div>
        <div className="border-t border-text-primary-light-active mt-15 flex items-center justify-center pt-6">
          <p className="text-base font-medium text-primary-light-active">
            © 2026 كُتّاب. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
