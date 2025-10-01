import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";
import Image from "next/image";
import logoImg from "../../public/logo.png";

const Footer = () => {
  const footerLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "الخدمات", href: "/services" },
    { label: "المنتجات", href: "/products" },
    { label: "التجارة من الصين", href: "/chinainfo" },
    { label: "الأسئلة الشائعة", href: "/quiz" },
    { label: "تواصل معنا", href: "/contact" }
  ];

  const socialLinks = [
    { icon: FaTiktok, href: "#", label: "TikTok" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTelegramPlane, href: "#", label: "Telegram" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-700 to-blue-500 py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
            شو بتنتظر؟ أبدأ مشروعك الأن
          </h2>

          <a
            href="https://wa.me/+962787557794"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            <FaWhatsapp
              size={24}
              className="animate-pulse group-hover:animate-none"
            />
            <span>تواصل معنا</span>
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/30 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block group">
                <Image
                  src={logoImg}
                  alt="Logo"
                  width={140}
                  height={40}
                  className="h-auto w-auto transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center lg:justify-start gap-8">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-blue-100 hover:text-amber-300 font-medium transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center text-blue-200 hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-blue-700/30 gap-4">
            <p className="text-blue-200 text-sm">© جميع الحقوق محفوظة 2025</p>
            <div className="flex gap-6">
              <a
                href="#privacy"
                className="text-blue-200 hover:text-amber-300 text-sm transition-colors duration-300"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#terms"
                className="text-blue-200 hover:text-amber-300 text-sm transition-colors duration-300"
              >
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;