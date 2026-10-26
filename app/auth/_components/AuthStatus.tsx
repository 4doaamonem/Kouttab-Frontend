import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import AuthCard from "./AuthCard";

type Tone = "gold" | "warning";

const TONES: Record<Tone, { circle: string; icon: string }> = {
  gold: { circle: "bg-[#F8F5EC]", icon: "text-[#C9A24D]" },
  warning: { circle: "bg-[#FFF4E5]", icon: "text-[#FF9500]" },
};

type AuthStatusProps = {
  icon: LucideIcon;
  tone?: Tone;
  title: string;
  description: ReactNode;
  children: ReactNode; // button + links
};

export default function AuthStatus({
  icon: Icon,
  tone = "gold",
  title,
  description,
  children,
}: AuthStatusProps) {
  const t = TONES[tone];

  return (
    <AuthCard>
      <div className="flex flex-col items-center justify-center py-8 text-center md:min-h-full md:py-0 md:pb-[12%]">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full md:h-21 md:w-21 ${t.circle}`}
        >
          <Icon
            aria-hidden="true"
            className={`h-8 w-8 md:h-10 md:w-10 ${t.icon}`}
            strokeWidth={1.6}
          />
        </div>

        <h1 className="mt-6 text-[28px] font-bold leading-8.75 text-[#262626] md:mt-8">
          {title}
        </h1>
        <p className="mt-2 text-lg font-normal leading-6.75 text-[#66736F]">
          {description}
        </p>

        <div className="mt-10 flex w-full flex-col gap-5 md:mt-14">
          {children}
        </div>
      </div>
    </AuthCard>
  );
}