import Link from "next/link";
import LangToggle from "./LangToggle";
import SideBar from "./SideBar";

const ActionButtons = () => {
  return (
    <div className="flex items-center gap-7 md:gap-9 xl:gap-5 whitespace-nowrap">
      <LangToggle />
      <Link
        href={"/learn"}
        className="hidden xl:block py-3 px-9.5 bg-primary-normal text-card-white font-medium text-lg rounded-2xl hover:bg-primary-normal-hover"
      >
        ابدأ التعلم
      </Link>
      <Link
        href={"/login"}
        className="hidden xl:block font-medium text-lg text-text-secondary-normal hover:scale-105 hover:text-text-primary-normal-hover transition-all"
      >
        تسجيل الدخول
      </Link>
      <SideBar />
    </div>
  );
};

export default ActionButtons;
