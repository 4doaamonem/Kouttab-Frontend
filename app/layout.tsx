import type { Metadata } from "next";
import "./globals.css";
import LocalFont from "next/font/local";

const tajawal = LocalFont({
  src: "./fonts/tajawal.woff2",
  variable: "--font-tajawal",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kouttab",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${tajawal.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
