import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Tajawal } from "next/font/google";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import { LanguageProvider } from "../app/context/LanguageContext";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kenan Import and Export",
  description: "موقع الشركة الرسمي",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} min-h-screen flex flex-col`}>
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}