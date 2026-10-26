import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Tajawal, Geist } from "next/font/google";
import MainLayout from "@/components/MainLayout";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
      className={cn(
        "h-full",
        "antialiased",
        tajawal.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <MainLayout>
          {" "}
          {children} <Toaster />{" "}
        </MainLayout>
      </body>
    </html>
  );
}
