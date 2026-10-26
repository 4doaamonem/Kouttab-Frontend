import Link from "next/link";
import { CircleAlert } from "lucide-react";
import AuthStatus from "../_components/AuthStatus";

export default function LinkExpiredPage() {
  return (
    <AuthStatus
      icon={CircleAlert}
      tone="warning"
      title="انتهت صلاحية هذا الرابط"
      description="لأسباب أمنية، تنتهي صلاحية الرابط بعد وقت قصير. اطلب رابطاً جديداً للمتابعة"
    >
      <Link
        href="/auth/forgot-password"
        className="flex h-12 items-center justify-center rounded-2xl bg-[#143b35] px-4 text-lg font-medium leading-6.75 text-white transition-colors hover:bg-[#103630] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123c35] md:h-13 md:bg-[#123c35]"
      >
        طلب رابط جديد
      </Link>

      <Link
        href="/auth/login"
        className="text-lg font-bold leading-6.75 text-[#123C35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123c35]"
      >
        العودة إلى تسجيل الدخول
      </Link>
    </AuthStatus>
  );
}
