"use client";

import { useState, useEffect, Fragment } from "react";
import {
  HouseIcon,
  WrenchIcon,
  PackageIcon,
  PhoneIcon,
  InfoIcon,
  Menu,
  X,
  ChevronDownIcon,
  GlobeIcon,
  BriefcaseBusiness,
} from "lucide-react";
import {
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaTelegramPlane,
} from "react-icons/fa";
import Image from "next/image";
import logoImg from "../../public/logo.png";
import { useLanguage } from "../app/context/LanguageContext";

// الترجمات
const translations = {
  ar: {
    navigation: [
      "الرئيسية",
      "الخدمات",
      "المنتجات",
      "التجارة من الصين",
      "الأسئلة الشائعة",
      "تواصل معنا",
    ],
    social: ["تيك توك", "إنستغرام", "فيسبوك", "تليجرام"],
    contact: "تواصل",
  },
  en: {
    navigation: [
      "Home",
      "Services",
      "Products",
      "Trade from China",
      "FAQ",
      "Contact Us",
    ],
    social: ["TikTok", "Instagram", "Facebook", "Telegram"],
    contact: "Contact",
  },
  zh: {
    navigation: ["首页", "服务", "产品", "中国贸易", "常见问题", "联系我们"],
    social: ["抖音", "Instagram", "Facebook", "Telegram"],
    contact: "联系",
  },
  fr: {
    navigation: [
      "Accueil",
      "Services",
      "Produits",
      "Commerce depuis la Chine",
      "FAQ",
      "Contactez-nous",
    ],
    social: ["TikTok", "Instagram", "Facebook", "Telegram"],
    contact: "Contact",
  },
};

const navigationLinks = [
  { href: "/", icon: HouseIcon },
  { href: "/services", icon: WrenchIcon },
  { href: "/products", icon: PackageIcon },
  { href: "/chinainfo", icon: BriefcaseBusiness },
  { href: "/quiz", icon: InfoIcon },
  { href: "/contact", icon: PhoneIcon },
];

const socialLinks = [
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@kenanimpexpco",
    labelKey: 0,
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/kenanimpexp/",
    labelKey: 1,
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/profile.php?id=61581469569569",
    labelKey: 2,
  },
  {
    icon: FaTelegramPlane,
    href: "https://t.me/kenanimpexp",
    labelKey: 3,
  },
];

const languages = [
  { code: "ar", flag: "🇸🇦", name: "العربية" },
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "zh", flag: "🇨🇳", name: "中文" },
  { code: "fr", flag: "🇫🇷", name: "Français" },
];

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang] || translations.ar;
  const isRTL = lang === "ar";

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const selectedLang = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLangChange = (newLang) => {
    setLang(newLang.code);
    setIsLangOpen(false);
  };

  return (
    <header
      dir={isRTL ? "rtl" : "ltr"}
      lang={lang}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white backdrop-blur-lg shadow-xl border-b border-gray-200"
          : "bg-white backdrop-blur-md shadow-lg border-b border-gray-100"
      }`}
    >
      <div className="flex h-13 items-center px-4 md:px-9 max-w-8xl mx-auto relative">
        {/* زر القائمة (يسار على الموبايل) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-blue-500 hover:text-blue-300 transition-all duration-300 transform hover:scale-110 p-1 rounded-lg hover:bg-blue-700/30 z-10"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
              }`}
            />
            <X
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
              }`}
            />
          </div>
        </button>

        {/* شعار الجوال - مثبت في المنتصف الحقيقي */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:hidden z-10">
          <a href="/" className="block group">
            <Image
              src={logoImg}
              alt="Logo"
              width={120}
              height={40}
              className="h-55 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>
        </div>

        {/* شعار سطح المكتب */}
        <div
          className={`hidden lg:flex flex-shrink-0 ${
            isRTL ? "lg:ml-8" : "lg:mr-8"
          }`}
        >
          <a href="/" className="block group">
            <Image
              src={logoImg}
              alt="Logo"
              width={120}
              height={100}
              className="h-55 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>
        </div>

        {/* روابط التنقل - Desktop */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-1">
          {navigationLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <a
                key={i}
                href={link.href}
                className="relative flex items-center gap-2 text-blue-900 hover:text-blue-900 font-bold px-4 py-2 rounded-lg transition-all duration-300 group hover:bg-blue-50"
              >
                <Icon
                  size={16}
                  className="text-blue-600 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="relative whitespace-nowrap">
                  {t.navigation[i]}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            );
          })}
        </div>

        {/* الجانب الأيمن/الأيسر - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          {/* وسائل التواصل */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t.social[link.labelKey]}
                  className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:scale-110 shadow-md"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* واتساب */}
          <a
            href="https://wa.me/+8613681046887"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp size={18} className="animate-pulse" />
            <span className="font-medium whitespace-nowrap">{t.contact}</span>
          </a>

          {/* مبدّل اللغة */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-1 py-2 rounded-lg hover:bg-blue-700/30 transition-all duration-300 group"
              aria-label="Select language"
            >
              <GlobeIcon
                size={18}
                className="text-blue-700 group-hover:text-blue-900"
              />
              <span className="text-xl">{selectedLang.flag}</span>
              <ChevronDownIcon
                size={16}
                className={`text-blue-900 transition-all duration-300 ${
                  isLangOpen ? "rotate-180 text-blue-700" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`absolute ${
                isRTL ? "left-0" : "right-0"
              } top-full mt-2 w-35 bg-white backdrop-blur-xl rounded-xl shadow-2xl border border-blue-700/30 overflow-hidden transition-all duration-300 origin-top-right ${
                isLangOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLangChange(lang)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-700/40 transition-all duration-200 text-right text-black"
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="font-medium whitespace-nowrap">
                    {lang.name}
                  </span>
                  {selectedLang.code === lang.code && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full ml-auto"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* يمين الموبايل: اللغة + واتساب */}
        <div
          className={`flex lg:hidden items-center gap-3 ${
            isRTL ? "mr-auto" : "ml-auto"
          }`}
        >
          {/* Language & WhatsApp buttons — same as before */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center justify-center p-2.5 rounded-full hover:bg-blue-100 text-blue-700 transition-all duration-300"
              title="اختيار اللغة"
            >
              <span className="text-xl">{selectedLang.flag}</span>
            </button>
            <div
              className={`absolute ${
                isRTL ? "left-0" : "right-0"
              } top-full mt-2 w-32 bg-white backdrop-blur-xl rounded-xl shadow-2xl border border-blue-700/30 overflow-hidden transition-all duration-300 origin-top-right z-50 ${
                isLangOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-5 pointer-events-none"
              }`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLangChange(lang)}
                  className="w-full flex items-center gap-2 px-4 py-2.5 hover:bg-blue-50 transition-all duration-200 text-right"
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="font-medium text-black whitespace-nowrap">
                    {lang.name}
                  </span>
                  {selectedLang.code === lang.code && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full ml-auto"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <a
            href="https://wa.me/+8613681046887"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white p-2.5 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
            title="واتساب"
          >
            <FaWhatsapp size={20} className="animate-pulse" />
          </a>
        </div>
      </div>

      {/* القائمة الجانبية (موبايل) */}
      <div
        className={`lg:hidden bg-gradient-to-br from-slate-100/95 to-white/95 backdrop-blur-xl shadow-xl transition-all duration-500 ease-out overflow-hidden ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 space-y-2">
          {navigationLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <a
                key={i}
                href={link.href}
                className="flex items-center gap-3 py-3 px-4 text-lg font-medium text-blue-800 hover:text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2 group"
                onClick={() => setIsOpen(false)}
              >
                <Icon
                  size={20}
                  className="text-blue-600 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="whitespace-nowrap">{t.navigation[i]}</span>
                <div className="w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-6 ml-auto"></div>
              </a>
            );
          })}

          <div className="flex justify-center gap-4 pt-4">
            {socialLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t.social[link.labelKey]}
                  className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:scale-110 shadow"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* خلفية لإغلاق قائمة اللغة */}
      {isLangOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLangOpen(false)}
        ></div>
      )}
    </header>
  );
}
