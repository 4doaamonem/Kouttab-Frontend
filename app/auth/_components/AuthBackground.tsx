import Image from "next/image";

export default function AuthBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#f8f6f0]"
    >
      <Image
        src="/assets/bg.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <Image
        src="/assets/pattern.png"
        alt=""
        width={496.19}
        height={529.15}
        priority
        className="auth-pattern absolute left-0 top-0 hidden h-auto w-[min(34.5vw,496.19px)] object-contain md:block"
      />
    </div>
  );
}
