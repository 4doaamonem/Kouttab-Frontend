"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthCard from "../_components/AuthCard";
import { Authentication_Fields, Authentication_Errors } from "@/constants";

type FieldErrors = Partial<Record<string, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Record<string, string>): FieldErrors {
  const e = Authentication_Errors.forgotPassword;
  const errors: FieldErrors = {};

  const email = values.email.trim();
  if (!email) errors.email = e.email.required;
  else if (!EMAIL_REGEX.test(email)) errors.email = e.email.invalid;

  return errors;
}

export default function ForgotPasswordPage() {
  const router = useRouter();
  const fields = Authentication_Fields.forgotPassword;
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const clearError = (id: string) => {
    setFormError("");
    setErrors((prev) => (prev[id] ? { ...prev, [id]: undefined } : prev));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(
      fields.map(({ id }) => [id, String(data.get(id) ?? "")]),
    );

    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    try {
      setLoading(true);
      // TODO: replace with your real request
      // const res = await sendResetLink(values.email);
      // if (res.code === "TOO_MANY_ATTEMPTS") {
      //   setFormError(Authentication_Errors.forgotPassword.general.tooManyAttempts);
      //   return;
      // }
      router.push(
        `/auth/check-email?email=${encodeURIComponent(values.email.trim())}`,
      );
    } catch (err) {
      setFormError(
        err instanceof TypeError
          ? Authentication_Errors.forgotPassword.general.network
          : Authentication_Errors.forgotPassword.general.unknown,
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard className="md:max-h-screen">
      <div className="flex flex-col md:min-h-full">
        <header className="flex shrink-0 flex-col items-center text-center">
          <Image
            src="/assets/logo.png"
            alt="كُتّاب"
            width={70}
            height={80}
            priority
            className="h-auto w-17 object-contain md:h-20 md:w-17.5"
          />
          <div className="mt-2 md:mt-3">
            <h1 className="text-[28px] font-bold leading-8.75 text-[#262626]">
              نسيت كلمة المرور؟
            </h1>
            <p className="mt-1 text-lg font-normal leading-6.75 text-[#66736F] md:mt-2">
              سنرسل لك رابطاً لإعادة تعيين كلمة المرور
            </p>
          </div>
        </header>

        <form
          className="mt-8 flex flex-col gap-8 md:mt-16 md:gap-14"
          method="post"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-5 md:gap-2.5">
            {fields.map(
              ({ id, label, placeholder, type, icon: Icon, autoComplete }) => {
                const error = errors[id];
                const messageId = `${id}-message`;

                return (
                  <div key={id} className="flex flex-col gap-0 md:gap-2">
                    <label
                      htmlFor={id}
                      className="mb-0 text-lg font-medium leading-6.75 text-[#262626]"
                    >
                      {label}
                    </label>
                    <div
                      className={`relative flex h-10 flex-row-reverse items-center rounded-2xl border bg-white px-4 py-0 md:h-auto md:min-h-13.5 md:rounded-xl md:px-5 md:py-3 ${
                        error
                          ? "border-[#C1121F] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#C1121F] md:border md:bg-white"
                          : "border-[#DDD8CA] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#123c35] md:border-0 md:bg-[#f6f6f6]"
                      }`}
                    >
                      <input
                        id={id}
                        name={id}
                        type={type}
                        autoComplete={autoComplete}
                        placeholder={placeholder}
                        aria-invalid={!!error}
                        aria-describedby={error ? messageId : undefined}
                        onChange={() => clearError(id)}
                        className="min-w-0 flex-1 bg-transparent text-right text-base font-normal leading-6 text-[#262626] outline-hidden placeholder:text-base placeholder:font-normal placeholder:leading-6 placeholder:text-[#8A8A8A] md:text-lg md:leading-6.75 md:placeholder:text-lg md:placeholder:leading-6.75 md:placeholder:text-[#66736F]"
                      />
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6 shrink-0 text-[#66736f]"
                        strokeWidth={1.6}
                      />
                    </div>
                    {error && (
                      <p
                        id={messageId}
                        role="alert"
                        className="min-w-0 text-right text-xs font-normal leading-4 text-[#C1121F] md:text-sm md:leading-5"
                      >
                        {error}
                      </p>
                    )}
                  </div>
                );
              },
            )}
          </div>

          <div className="flex flex-col gap-3.5 md:gap-4">
            {formError && (
              <p
                role="alert"
                className="text-center text-base font-normal leading-6 text-[#C1121F]"
              >
                {formError}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="h-12 rounded-2xl bg-[#143b35] px-4 text-lg font-medium leading-6.75 text-white transition-colors hover:bg-[#103630] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123c35] disabled:cursor-not-allowed disabled:opacity-70 md:h-13 md:bg-[#123c35]"
            >
              إرسال الرابط
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-lg font-bold leading-6.75 text-[#123C35] md:mt-5">
          <Link
            href="/auth/login"
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123c35]"
          >
            العودة إلى تسجيل الدخول
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}
