"use client";
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
import { useLanguage } from "../app/context/LanguageContext";

// Translations
const translations = {
  ar: {
    ctaTitle: "شو بتنتظر؟ ابدأ مشروعك الأن",
    ctaButton: "تواصل معنا",
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      products: "المنتجات",
      chinaInfo: "التجارة من الصين",
      faq: "الأسئلة الشائعة",
      contact: "تواصل معنا",
    },
    copyright: "© جميع الحقوق محفوظة 2025",
    privacy: "سياسة الخصوصية",
    terms: "الشروط والأحكام",
  },
  en: {
    ctaTitle: "What are you waiting for? Start your business now",
    ctaButton: "Contact Us",
    nav: {
      home: "Home",
      services: "Services",
      products: "Products",
      chinaInfo: "Trade from China",
      faq: "FAQ",
      contact: "Contact Us",
    },
    copyright: "© All rights reserved 2025",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },
  zh: {
    ctaTitle: "还在等什么？现在就开启您的业务！",
    ctaButton: "联系我们",
    nav: {
      home: "首页",
      services: "服务",
      products: "产品",
      chinaInfo: "从中国贸易",
      faq: "常见问题",
      contact: "联系我们",
    },
    copyright: "© 版权所有 2025",
    privacy: "隐私政策",
    terms: "条款与条件",
  },
  fr: {
    ctaTitle: "Qu'attendez-vous ? Lancez votre projet dès maintenant !",
    ctaButton: "Contactez-nous",
    nav: {
      home: "Accueil",
      services: "Services",
      products: "Produits",
      chinaInfo: "Commerce depuis la Chine",
      faq: "FAQ",
      contact: "Contactez-nous",
    },
    copyright: "© Tous droits réservés 2025",
    privacy: "Politique de confidentialité",
    terms: "Conditions générales",
  },
};

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.ar;

  const footerLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.products, href: "/products" },
    { label: t.nav.chinaInfo, href: "/chinainfo" },
    { label: t.nav.faq, href: "/quiz" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const socialLinks = [
    { icon: FaTiktok, href: "https://www.tiktok.com/@kenanimpexpco", label: "TikTok" },
    { icon: FaInstagram, href: "https://www.instagram.com/kenanimpexp/", label: "Instagram" },
    { icon: FaFacebook, href: "https://www.facebook.com/share/15SryBtkR7/", label: "Facebook" },
    { icon: FaTelegramPlane, href: "https://t.me/kenanimpexp", label: "Telegram" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-700 to-blue-500 py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
            {t.ctaTitle}
          </h2>

          <a
            href="https://wa.me/+8613681046887" // 👈 Add your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            <FaWhatsapp
              size={24}
              className="animate-pulse group-hover:animate-none"
            />
            <span>{t.ctaButton}</span>
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
                  alt="Kenan Import & Export Logo"
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
                  className="text-blue-100 hover:text-blue-300 font-medium transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center text-blue-200 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-blue-700/30 gap-4">
            <p className="text-blue-200 text-sm">{t.copyright}</p>
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="text-blue-200 hover:text-blue-300 text-sm transition-colors duration-300"
              >
                {t.privacy}
              </a>
              <a
                href="/terms"
                className="text-blue-200 hover:text-blue-300 text-sm transition-colors duration-300"
              >
                {t.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;