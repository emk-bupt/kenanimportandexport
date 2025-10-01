"use client";

import { useState, useEffect } from "react";
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
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import logoImg from "../../public/logo.png";

const navigationLinks = [
  { href: "/", label: "الرئيسية", icon: HouseIcon },
  { href: "/services", label: "الخدمات", icon: WrenchIcon },
  { href: "/products", label: "المنتجات", icon: PackageIcon },
  { href: "/chinainfo", label: "التجارة من الصين", icon: BriefcaseBusiness },
  { href: "/quiz", label: "الأسئلة الشائعة", icon: InfoIcon },
  { href: "/contact", label: "تواصل معنا", icon: PhoneIcon },
];

const languages = [
  { code: "ar", flag: "🇸🇦", name: "العربية" },
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "zh", flag: "🇨🇳", name: "中文" },
  { code: "fr", flag: "🇫🇷", name: "Français" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white backdrop-blur-lg shadow-xl border-b border-gray-200"
          : "bg-white backdrop-blur-md shadow-lg border-b border-gray-100"
      }`}
    >
      <div className="flex h-14 items-center px-4 md:px-8 max-w-8xl mx-auto">
        {/* Mobile/Tablet - Burger menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-blue-500 hover:text-blue-300 transition-all duration-300 transform hover:scale-110 p-1 rounded-lg hover:bg-blue-700/30"
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

        {/* Mobile/Tablet Logo Center */}
        <div className="flex-shrink-0 lg:hidden flex-1 flex justify-center">
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

        {/* Desktop Logo Left */}
        <div className="hidden lg:flex flex-shrink-0 lg:mr-8">
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

        {/* Desktop Navigation Links Center */}
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
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            );
          })}
        </div>

        {/* Desktop Right - WhatsApp + Language */}
        <div className="hidden lg:flex items-center gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+962787557794"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp size={18} className="animate-pulse" />
            <span className="font-medium">تواصل</span>
          </a>

          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-700/30 transition-all duration-300 group"
            >
              <GlobeIcon
                size={18}
                className="text-blue-200 group-hover:text-amber-300 transition-colors duration-300"
              />
              <span className="text-xl">{selectedLang.flag}</span>
              <ChevronDownIcon
                size={16}
                className={`text-blue-200 transition-all duration-300 ${
                  isLangOpen ? "rotate-180 text-amber-300" : "rotate-0"
                }`}
              />
            </button>

            {/* Language Dropdown Menu */}
            <div
              className={`absolute right-0 top-full mt-2 w-48 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-blue-600/30 overflow-hidden transition-all duration-300 origin-top-right ${
                isLangOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setSelectedLang(lang);
                    setIsLangOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-700/40 transition-all duration-200 text-right text-blue-100"
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="font-medium hover:text-amber-300">
                    {lang.name}
                  </span>
                  {selectedLang.code === lang.code && (
                    <div className="w-2 h-2 bg-amber-400 rounded-full ml-auto"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet WhatsApp */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="https://wa.me/+962787557794"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white p-2.5 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
            title="واتساب"
          >
            <FaWhatsapp size={20} className="animate-pulse" />
          </a>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      <div
        className={`lg:hidden bg-gradient-to-br from-slate-100/95 to-white/95 backdrop-blur-xl shadow-xl transition-all duration-500 ease-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
                <span>{link.label}</span>
                <div className="w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-6 ml-auto"></div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Backdrop for language dropdown */}
      {isLangOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLangOpen(false)}
        ></div>
      )}
    </header>
  );
}
