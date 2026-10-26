import Image from "next/image";
import type { ReactNode } from "react";

type AuthCardProps = {
  children: ReactNode;
  className?: string;
};

export default function AuthCard({ children, className = "" }: AuthCardProps) {
  return (
    <div
      className={`auth-notebook relative mx-auto w-full max-w-155.5 md:aspect-622/846 ${className}`}
    >
      {/* Layer 2 (back): Rectangle 1, 860px tall, #DDD8CA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-0.83%] left-[-1.13%] right-[-0.16%] top-[-0.83%] hidden rounded-[48px] bg-stroke-light md:block"
      />

      {/* Layer 1 (middle): Frame 2147230848, white 80%, shifted 3px down */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 top-0.75 -bottom-0.75 hidden rounded-[48px] bg-white/80 shadow-[0_1px_6px_0_rgba(0,0,0,0.05)] md:block"
      />

      {/* Main card */}
      <div className="relative overflow-hidden rounded-4xl bg-card-white shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] md:absolute md:inset-0 md:rounded-[48px] md:shadow-none">
        <Image
          src="/assets/pattern.png"
          alt=""
          width={496.19}
          height={529.15}
          className="auth-pattern pointer-events-none absolute left-[6.2%] top-0 z-10 h-auto w-[27.5%] object-contain md:hidden"
        />
        {/* Desktop: original full notebook image */}
        <Image
          src="/assets/note.png"
          alt=""
          fill
          priority
          sizes="622px"
          className="pointer-events-none absolute inset-0 hidden h-full w-full select-none object-cover md:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)] md:hidden"
        />
        <div className="auth-notebook-content relative z-20 pt-5 pb-3 pl-[4.5%] pr-[11.3%] text-right md:absolute md:inset-y-[1.4%] md:left-[5.15%] md:right-[13.6%] md:p-0">
          {children}
        </div>
      </div>
      {/* Mobile rings overhang the card edge; desktop rings remain in note.png. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-9.5 bottom-6.25 z-10 w-8.5 translate-x-[20%] bg-[url('/assets/ring.png')] bg-size-[34px_46px] bg-repeat-y bg-top-right md:hidden"
      />
    </div>
  );
}
