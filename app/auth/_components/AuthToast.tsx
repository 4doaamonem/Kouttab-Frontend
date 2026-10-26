"use client";

import { toast } from "sonner";
import { Check, CircleAlert, X, type LucideIcon } from "lucide-react";

type Variant = "success" | "error" | "warning";

const VARIANTS: Record<
  Variant,
  { icon: LucideIcon; circle: string; color: string }
> = {
  success: { icon: Check, circle: "bg-[#EAF7EC]", color: "text-[#2E9E3E]" },
  error: { icon: X, circle: "bg-[#FDECEE]", color: "text-[#C1121F]" },
  warning: {
    icon: CircleAlert,
    circle: "bg-[#FFF4E5]",
    color: "text-[#FF9500]",
  },
};

type AuthToastProps = {
  title: string;
  description?: string;
  variant?: Variant;
  onClick?: () => void;
};

export function AuthToast({
  title,
  description,
  variant = "success",
  onClick,
}: AuthToastProps) {
  const { icon: Icon, circle, color } = VARIANTS[variant];

  return (
    <div
      role="status"
      aria-live="polite"
      onClick={onClick}
      dir="rtl"
      className="flex min-h-24 w-full cursor-pointer flex-row items-center gap-3 rounded-[20px] bg-white p-4 shadow-[1px_1px_10px_rgba(69,56,32,0.1)] md:h-30.25 md:gap-4"
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full md:h-15 md:w-15 ${circle}`}
      >
        <Icon
          aria-hidden="true"
          className={`h-6 w-6 md:h-7 md:w-7 ${color}`}
          strokeWidth={2.4}
        />
      </div>

      <div className="min-w-0 flex-1 text-right">
        <p className="wrap-break-word text-base font-bold leading-6 text-[#262626] md:text-lg md:leading-6.75">
          {title}
        </p>
        {description && (
          <p className="mt-1 wrap-break-word text-sm font-normal leading-5 text-[#66736F] md:text-base md:leading-6">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
type ShowAuthToastOptions = AuthToastProps & {
  duration?: number;
  onClose?: () => void;
};

export function showAuthToast({
  duration = 2500,
  onClose,
  ...props
}: ShowAuthToastOptions) {
  // overlay appended to <body>, outside any stacking context
  const overlay = document.createElement("div");
  overlay.setAttribute("aria-hidden", "true");
  overlay.className =
    "fixed inset-0 z-[90] bg-black/10 transition-opacity duration-200";
  document.body.appendChild(overlay);

  const removeOverlay = () => overlay.remove();

  return toast.custom(
    (id) => <AuthToast {...props} onClick={() => toast.dismiss(id)} />,
    {
      duration,
      onAutoClose: () => {
        removeOverlay();
        onClose?.();
      },
      onDismiss: () => {
        removeOverlay();
        onClose?.();
      },
    },
  );
}
