"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { EyeOff } from "lucide-react";
import AuthCard from "../_components/AuthCard";
import { Authentication_Fields, Authentication_Errors } from "@/constants";

type FieldErrors = Partial<Record<string, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Record<string, string>): FieldErrors {
  const e = Authentication_Errors.register;
  const errors: FieldErrors = {};

  const name = values.name.trim();
  if (!name) errors.name = e.name.required;
  else if (name.split(/\s+/).length < 2) errors.name = e.name.minLength;

  const email = values.email.trim();
  if (!email) errors.email = e.email.required;
  else if (!EMAIL_REGEX.test(email)) errors.email = e.email.invalid;

  if (!values.password) errors.password = e.password.required;
  else if (values.password.length < 8) errors.password = e.password.minLength;

  if (!values["confirm-password"]) {
    errors["confirm-password"] = e["confirm-password"].required;
  } else if (values["confirm-password"] !== values.password) {
    errors["confirm-password"] = e["confirm-password"].mismatch;
  }

  return errors;
}

export default function RegisterPage() {
  const fields = Authentication_Fields.register;
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
      // const res = await register(values);
      // if (res.code === "EMAIL_EXISTS") {
      //   setErrors({ email: Authentication_Errors.register.email.exists });
      //   return;
      // }
    } catch (err) {
      setFormError(
        err instanceof TypeError
          ? Authentication_Errors.register.general.network
          : Authentication_Errors.register.general.unknown,
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard>
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
              إنشاء حساب جديد
            </h1>
            <p className="mt-1 text-lg font-normal leading-6.75 text-[#66736F] md:mt-2">
              ابدأ رحلتك في إتقان التجويد
            </p>
          </div>
        </header>

        <form
          className="mt-4.5 flex flex-col gap-3 md:mt-2.5 md:gap-5.5"
          method="post"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-5 md:gap-2.5">
            {fields.map(
              ({
                id,
                label,
                placeholder,
                type,
                icon: Icon,
                autoComplete,
                hint,
              }) => {
                const error = errors[id];
                const messageId = `${id}-message`;

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
                      {error && (
                        <p
                          id={messageId}
                          role="alert"
                          className="min-w-0 text-left text-xs font-normal leading-4 text-[#C1121F] md:text-sm md:leading-5"
                        >
                          {error}
                        </p>
                      )}
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
                        type={type}
                        autoComplete={autoComplete}
                        placeholder={placeholder}
                        aria-invalid={!!error}
                        aria-describedby={error || hint ? messageId : undefined}
                        onChange={() => clearError(id)}
                        data-lpignore="true" // LastPass
                        data-1p-ignore // 1Password
                        data-bwignore="true" // Bitwarden
                        data-form-type="other" // Dashlane
                        className="min-w-0 flex-1 bg-transparent pr-8 text-right text-base font-normal leading-6 text-[#262626] outline-hidden placeholder:text-base placeholder:font-normal placeholder:leading-6 placeholder:text-[#8A8A8A] md:text-lg md:leading-6.75 md:placeholder:text-lg md:placeholder:leading-6.75 md:placeholder:text-[#66736F]"
                      />
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6 shrink-0 text-[#66736f]"
                        strokeWidth={1.6}
                      />
                      {type === "password" && (
                        <EyeOff
                          aria-hidden="true"
                          className="absolute left-4 h-6 w-6 text-[#66736f] md:left-5"
                          strokeWidth={1.6}
                        />
                      )}
                    </div>

                    {!error && hint && (
                      <p
                        id={messageId}
                        className="mt-2 text-xs font-normal leading-4 text-[#8A8A8A] md:mt-0 md:text-base md:leading-6 md:text-[#66736F]"
                      >
                        {hint}
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
              إنشاء حساب
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
          لديك حساب بالفعل؟{" "}
          <Link
            href="/auth/login"
            className="font-bold leading-6.75 text-[#123C35] focus-visible:outline-2 focus-visible:outline-[#123c35]"
          >
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}
