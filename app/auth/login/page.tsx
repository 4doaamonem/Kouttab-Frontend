"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import AuthCard from "../_components/AuthCard";
import { Authentication_Fields, Authentication_Errors } from "@/constants";

type FieldErrors = Partial<Record<string, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Record<string, string>): FieldErrors {
  const e = Authentication_Errors.login;
  const errors: FieldErrors = {};

  const email = values.email.trim();
  if (!email) errors.email = e.email.required;
  else if (!EMAIL_REGEX.test(email)) errors.email = e.email.invalid;

  if (!values.password) errors.password = e.password.required;

  return errors;
}

export default function LoginPage() {
  const fields = Authentication_Fields.login;
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
      // const res = await login(values);
      // if (res.code === "USER_NOT_FOUND") {
      //   setErrors({ email: Authentication_Errors.login.email.notFound });
      //   return;
      // }
      // if (res.code === "WRONG_PASSWORD") {
      //   setErrors({ password: Authentication_Errors.login.password.incorrect });
      //   return;
      // }
      // if (res.code === "TOO_MANY_ATTEMPTS") {
      //   setFormError(Authentication_Errors.login.general.tooManyAttempts);
      //   return;
      // }
    } catch (err) {
      setFormError(
        err instanceof TypeError
          ? Authentication_Errors.login.general.network
          : Authentication_Errors.login.general.unknown,
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard className="md:max-h-[110vh] ">
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
              تسجيل الدخول
            </h1>
            <p className="mt-1 text-lg font-normal leading-6.75 text-[#66736F] md:mt-2">
              أهلاً بعودتك، أكمل رحلتك مع القرآن الكريم
            </p>
          </div>
        </header>

        <form
          className="mt-8 flex flex-col gap-8 md:mt-14 md:gap-14"
          method="post"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-5 md:gap-2.5">
            {fields.map(
              ({ id, label, placeholder, type, icon: Icon, autoComplete }) => {
                const error = errors[id];
                const messageId = `${id}-message`;
                const isPassword = type === "password";

                return (
                  <div key={id} className="flex flex-col gap-0 md:gap-2">
                    {/* Label + error in the same row */}
                    <div className="flex items-baseline justify-between gap-3">
                      <label
                        htmlFor={id}
                        className="mb-0 shrink-0 text-lg font-medium leading-6.75 text-[#262626]"
                      >
                        {label}
                      </label>
                    </div>

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
                        type={isPassword && showPassword ? "text" : type}
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
                      {isPassword && (
                        <button
                          type="button"
                          onClick={() => setShowPassword((v) => !v)}
                          aria-label={
                            showPassword
                              ? "إخفاء كلمة المرور"
                              : "إظهار كلمة المرور"
                          }
                          aria-pressed={showPassword}
                          className="absolute left-4 flex h-6 w-6 items-center justify-center text-[#66736f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123c35] md:left-5"
                        >
                          {showPassword ? (
                            <Eye className="h-6 w-6" strokeWidth={1.6} />
                          ) : (
                            <EyeOff className="h-6 w-6" strokeWidth={1.6} />
                          )}
                        </button>
                      )}
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
                    {isPassword && (
                      <Link
                        href="/auth/forgot-password"
                        className="mt-2 w-fit text-sm font-normal leading-5 text-[#C9A24D] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123c35] md:mt-0 md:text-base md:leading-6"
                      >
                        هل نسيت كلمة المرور؟
                      </Link>
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
              تسجيل الدخول
            </button>
            <div
              className="flex items-center gap-5.75 text-lg font-normal leading-6.75 text-[#66736F]"
              aria-hidden="true"
            >
              <span className="h-px flex-1 bg-[#ddd8ca]" />
              <span>أو</span>
              <span className="h-px flex-1 bg-[#ddd8ca]" />
            </div>
            <button
              type="button"
              className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#123c35] bg-white px-4 text-lg leading-6.75 text-[#123c35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123c35] md:h-13"
            >
              <Image
                src="/assets/flat-color-icons_google.png"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                className="h-6 w-6 shrink-0"
              />
              <span className="text-lg font-normal leading-6.75 text-[#123C35]">
                المتابعة بحساب جوجل
              </span>
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-lg font-medium leading-6.75 text-[#66736F] md:mt-5">
          ليس لديك حساب؟{" "}
          <Link
            href="/auth/register"
            className="font-bold leading-6.75 text-[#123C35] focus-visible:outline-2 focus-visible:outline-[#123c35]"
          >
            إنشاء حساب جديد
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}
