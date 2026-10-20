import Link from "next/link";
import LangToggle from "./LangToggle";
import SideBar from "./SideBar";

const ActionButtons = () => {
  return (
    <div className="flex items-center gap-3">
      <LangToggle />
      <Link
        href={"/learn"}
        className="hidden md:block py-3 px-6 bg-primary-normal text-card-white font-medium text-lg rounded-2xl hover:bg-primary-normal-hover transition-colors"
      >
        ابدأ التعلم
      </Link>
      <Link
        href={"/login"}
        className="hidden md:block font-medium text-lg text-text-secondary-normal hover:scale-105 hover:text-text-primary-normal-hover transition-all"
      >
        تسجيل الدخول
      </Link>
      <SideBar />
    </div>
  );
};

export default ActionButtons;
