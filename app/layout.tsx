import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "800", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "Kouttab",
  description: "منصة تعليمية متخصصة فى تعليم أحكام التجويد بأسلوب واضح ومتدرج.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      dir="rtl"
      lang="ar"
      className={`${tajawal.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
