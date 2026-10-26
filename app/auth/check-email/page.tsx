"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Mail } from "lucide-react";
import AuthStatus from "../_components/AuthStatus";
import { Authentication_Errors } from "@/constants";

const RESEND_SECONDS = 30;

const toArabicDigits = (s: string) =>
  s.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);

const formatTime = (total: number) => {
  const m = Math.floor(total / 60);
  const s = String(total % 60).padStart(2, "0");
  return toArabicDigits(`${m}:${s}`);
};

function CheckEmailContent() {
  const email = useSearchParams().get("email") ?? "";
  const [seconds, setSeconds] = useState(RESEND_SECONDS);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [seconds]);

  const handleResend = useCallback(async () => {
    if (seconds > 0 || loading) return;
    setError("");
    try {
      setLoading(true);
      // TODO: replace with your real request
      // const res = await sendResetLink(email);
      // if (res.code === "TOO_MANY_ATTEMPTS") {
      //   setError(Authentication_Errors.checkEmail.tooManyAttempts);
      //   return;
      // }
      setSeconds(RESEND_SECONDS);
    } catch {
      setError(Authentication_Errors.checkEmail.resendFailed);
    } finally {
      setLoading(false);
    }
  }, [seconds, loading]);

  return (
    <AuthStatus
      icon={Mail}
      tone="gold"
      title="تحقق من بريدك الإلكتروني"
      description={
        <>
          أرسلنا رابط إعادة تعيين كلمة المرور إلى{" "}
          <bdi dir="ltr" className="break-all">
            {email}
          </bdi>
          .
          <br />
          إن لم تجده، تفقد البريد غير المرغوب فيه
        </>
      }
    >
      <a
        href="mailto:"
        className="flex h-12 items-center justify-center rounded-2xl bg-[#143b35] px-4 text-lg font-medium leading-6.75 text-white transition-colors hover:bg-[#103630] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123c35] md:h-13 md:bg-[#123c35]"
      >
        فتح تطبيق البريد
      </a>

      <div className="text-lg font-normal leading-6.75 text-[#66736F]">
        <p>
          لم يصلك البريد؟{" "}
          <button
            type="button"
            onClick={handleResend}
            disabled={seconds > 0 || loading}
            className="font-bold text-[#123C35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123c35] disabled:cursor-not-allowed disabled:opacity-60"
          >
            إعادة الإرسال
          </button>
        </p>
        {seconds > 0 && (
          <p aria-live="polite">
            يمكنك إعادة الإرسال بعد <bdi dir="ltr">{formatTime(seconds)}</bdi>
          </p>
        )}
        {error && (
          <p role="alert" className="mt-1 text-base text-[#C1121F]">
            {error}
          </p>
        )}
      </div>

      <Link
        href="/auth/login"
        className="text-lg font-bold leading-6.75 text-[#123C35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123c35]"
      >
        العودة إلى تسجيل الدخول
      </Link>
    </AuthStatus>
  );
}

export default function CheckEmailPage() {
  return (
    <Suspense>
      <CheckEmailContent />
    </Suspense>
  );
}
