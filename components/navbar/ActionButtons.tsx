import Link from "next/link";
import LangToggle from "./LangToggle";
import SideBar from "./SideBar";

const ActionButtons = () => {
  return (
    <div className="flex items-center gap-7 md:gap-9 lg:gap-5">
      <LangToggle />
      <Link
        href={"/learn"}
        className="hidden lg:block py-3 px-9.5 bg-primary-normal text-card-white font-medium text-lg rounded-2xl hover:bg-primary-dark"
      >
        ابدأ التعلم
      </Link>
      <Link
        href={"/login"}
        className="hidden lg:block font-medium text-lg text-text-secondary-normal hover:scale-105 hover:text-text-primary-normal-hover transition-all"
      >
        تسجيل الدخول
      </Link>
      <SideBar />
    </div>
  );
};

export default ActionButtons;
