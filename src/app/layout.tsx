import "./globals.css";
import type { Metadata } from "next";
import { Tajawal } from "next/font/google"; // خط عربي جميل
import Navbar from "../components/Header"; // نستدعي الـ Navbar
import Footer from "../components/Footer"; // نستدعي الـ Footer

// خط عربي/لاتيني يدعم AR/EN/FR
const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kenan import and export",
  description: "موقع الشركة الرسمي",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
