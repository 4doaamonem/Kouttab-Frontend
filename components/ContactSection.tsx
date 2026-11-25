import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Introduction from "./Introduction";

const fields = [
  {
    id: "name",
    label: "اسمك الثلاثى",
    placeholder: "اكتب اسمك الثلاثى",
    paths: [
      {
        d: "M20 21C19.713 17.27 16.729 14.32 12.995 14.07L12 14C11.645 14.01 11.313 14.02 11.001 14.04C7.3 14.22 4.284 17.31 4 21",
        round: true,
      },
      {
        d: "M16 7C16 9.21 14.209 11 12 11C9.791 11 8 9.21 8 7C8 4.79 9.791 3 12 3C14.209 3 16 4.79 16 7Z",
        round: true,
      },
    ],
  },
  {
    id: "email",
    label: "البريد الإلكتروني",
    placeholder: "اكتب بريدك الالكتروني",
    paths: [
      {
        d: "M2 6L8.913 9.92C11.462 11.36 12.538 11.36 15.087 9.92L22 6",
        round: false,
      },
      {
        d: "M2.016 13.48C2.081 16.54 2.114 18.07 3.245 19.21C4.376 20.34 5.95 20.38 9.099 20.46C11.039 20.51 12.961 20.51 14.901 20.46C18.05 20.38 19.624 20.34 20.755 19.21C21.886 18.07 21.919 16.54 21.984 13.48C22.005 12.49 22.005 11.51 21.984 10.52C21.919 7.46 21.886 5.93 20.755 4.79C19.624 3.66 18.05 3.62 14.901 3.54C12.961 3.49 11.039 3.49 9.099 3.54C5.95 3.62 4.376 3.66 3.245 4.79C2.114 5.93 2.081 7.46 2.016 10.52C1.995 11.51 1.995 12.49 2.016 13.48Z",
        round: false,
      },
    ],
  },
  {
    id: "subject",
    label: "موضوع الرسالة",
    placeholder: "اكتب موضوع رسالتك",
    paths: [
      {
        d: "M8.172 19.83L19.828 8.17C20.374 7.63 20.646 7.35 20.792 7.06C21.069 6.5 21.069 5.84 20.792 5.28C20.646 4.99 20.374 4.72 19.828 4.17C19.283 3.63 19.011 3.35 18.716 3.21C18.157 2.93 17.5 2.93 16.94 3.21C16.646 3.35 16.374 3.63 15.828 4.17L4.172 15.83C3.594 16.41 3.304 16.7 3.152 17.06C3 17.43 3 17.84 3 18.66V21H5.343C6.161 21 6.569 21 6.937 20.85C7.304 20.7 7.594 20.41 8.172 19.83Z",
        round: true,
      },
      { d: "M12 21H18", round: true },
      { d: "M14.5 5.5L18.5 9.5", round: true },
    ],
  },
];

const labelClassName = "font-medium leading-normal text-text-primary-normal";
const surfaceClassName =
  "rounded-xl bg-bg-light px-5 py-3 text-xs md:text-lg text-text-primary-normal placeholder:text-text-secondary-normal";

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden bg-bg-light">
      <div className="absolute inset-x-0 top-56 h-106">
        <Image
          src="/assets/GoldBackground.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <Image
        src="/assets/pattern.png"
        alt=""
        width={497}
        height={530}
        className="absolute right-0 top-0 w-22 md:w-42.75 xl:w-71.5 h-auto"
      />
      <div className="relative max-w-310 mx-auto px-4 md:px-0 pt-18.25 md:pt-9.5 xl:pt-21.75 pb-16.75 md:pb-16.5 xl:pb-35 flex flex-col xl:flex-row items-center gap-9.25 md:gap-8.25 xl:justify-between">
        <Introduction
          className="w-76.25 md:w-92.5 xl:text-start"
          labelClassName="xl:justify-start"
          label="تواصل معنا"
          title="هل لديك استفسار أو ملاحظة؟"
          description="نحن هنا للمساعدة فى اى استفسار اكتب رسالتك من خلال النموذج التالي."
        />
        <form className="w-full md:w-162.5 xl:w-197.5 flex flex-col gap-5 p-4 rounded-2xl border border-bg-light bg-secondary-light-hover shadow-[0_4px_12px_rgba(89,72,41,0.1),0_6px_20px_rgba(89,72,41,0.09)]">
          {fields.map(({ id, label, placeholder, paths }) => (
            <div key={id} className="flex flex-col gap-1.5 md:gap-2">
              <label
                htmlFor={id}
                className={`${labelClassName} ${id === "subject" ? "text-lg" : "text-sm md:text-lg"}`}
              >
                {label} <span className="text-error-normal">*</span>
              </label>
              <div className="h-13.5 md:h-14">
                <div
                  className={`flex items-center gap-2 h-14 ${surfaceClassName}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="size-5 md:size-6 shrink-0 text-text-secondary-normal"
                  >
                    {paths.map(({ d, round }) => (
                      <path
                        key={d}
                        d={d}
                        strokeLinecap={round ? "round" : "butt"}
                      />
                    ))}
                  </svg>
                  <input
                    id={id}
                    placeholder={placeholder}
                    className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-text-secondary-normal"
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className={`${labelClassName} text-sm md:text-lg`}
            >
              كيف يمكننا المساعدة؟ <span className="text-error-normal">*</span>
            </label>
            <textarea
              id="message"
              placeholder="اكتب رسالتك هنا......"
              className={`h-41 resize-none outline-none ${surfaceClassName}`}
            />
          </div>
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-60 h-12 md:h-13 p-4 rounded-2xl bg-primary-normal font-medium text-sm md:text-lg text-bg-light self-start md:self-end hover:bg-primary-normal-hover"
          >
            إرسال الرسالة
            <ArrowLeft className="size-5 md:size-6 [stroke-width:1.5]" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
