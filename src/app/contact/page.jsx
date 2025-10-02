"use client";
import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// ======================
// TRANSLATIONS
// ======================
const translations = {
  ar: {
    heroTitle: "تواصل معنا",
    heroSubtitle:
      "نحن هنا لمساعدتك في رحلتك التجارية بين الصين والعالم العربي.",
    whatsappBoxTitle: "الدردشة عبر واتساب",
    whatsappBoxDesc: "مسح الرمز للدردشة معنا مباشرة على واتساب",
    whatsappButton: "فتح واتساب",
    wechatBoxTitle: "الدردشة عبر الويشات",
    wechatBoxDesc: "مسح الرمز للدردشة معنا مباشرة على الويشات",
    wechatButton: "فتح الويشات",
    contactInfoTitle: "معلومات الاتصال",
    locationLabel: "الموقع",
    locationText: "الصين",
    emailLabel: "البريد الإلكتروني",
    hoursLabel: "ساعات العمل",
    hoursDays: "من الاثنين إلى الجمعة",
    hoursTime: "9:00 صباحًا – 6:00 مساءً (بتوقيت الصين)",
    servicesLabel: "الخدمات",
    servicesList: "استيراد من الصين • ترجمة • مرافقة تجارية • فحص جودة • شحن",
  },
  en: {
    heroTitle: "Contact Us",
    heroSubtitle:
      "We're here to help you on your business journey between China and the Arab world.",
    whatsappBoxTitle: "Chat via WhatsApp",
    whatsappBoxDesc: "Scan the QR code to chat with us directly on WhatsApp",
    whatsappButton: "Open WhatsApp",
    wechatBoxTitle: "Chat via WeChat",
    wechatBoxDesc: "Scan the QR code to chat with us directly on WeChat",
    wechatButton: "Open WeChat",
    contactInfoTitle: "Contact Information",
    locationLabel: "Location",
    locationText: "China",
    emailLabel: "Email",
    hoursLabel: "Working Hours",
    hoursDays: "Monday to Friday",
    hoursTime: "9:00 AM – 6:00 PM (China Time)",
    servicesLabel: "Services",
    servicesList:
      "Import from China • Translation • Business Accompaniment • Quality Inspection • Shipping",
  },
  zh: {
    heroTitle: "联系我们",
    heroSubtitle: "我们在这里帮助您完成从中国到阿拉伯世界的商业之旅。",
    whatsappBoxTitle: "通过 WhatsApp 聊天",
    whatsappBoxDesc: "扫描二维码直接在 WhatsApp 上与我们聊天",
    whatsappButton: "打开 WhatsApp",
    wechatBoxTitle: "通过微信聊天",
    wechatBoxDesc: "扫描二维码直接在微信上与我们聊天",
    wechatButton: "打开微信",
    contactInfoTitle: "联系方式",
    locationLabel: "地点",
    locationText: "中国",
    emailLabel: "邮箱",
    hoursLabel: "工作时间",
    hoursDays: "周一至周五",
    hoursTime: "上午9:00 – 下午6:00 (中国时间)",
    servicesLabel: "服务",
    servicesList: "从中国进口 • 翻译 • 商务陪同 • 质量检验 • 运输",
  },
  fr: {
    heroTitle: "Contactez-nous",
    heroSubtitle:
      "Nous sommes là pour vous aider dans votre parcours commercial entre la Chine et le monde arabe.",
    whatsappBoxTitle: "Discutez via WhatsApp",
    whatsappBoxDesc:
      "Scannez le code QR pour discuter directement avec nous sur WhatsApp",
    whatsappButton: "Ouvrir WhatsApp",
    wechatBoxTitle: "Discutez via WeChat",
    wechatBoxDesc:
      "Scannez le code QR pour discuter directement avec nous sur WeChat",
    wechatButton: "Ouvrir WeChat",
    contactInfoTitle: "Informations de Contact",
    locationLabel: "Emplacement",
    locationText: "Chine",
    emailLabel: "Email",
    hoursLabel: "Heures d'ouverture",
    hoursDays: "Lundi à Vendredi",
    hoursTime: "9:00 AM – 6:00 PM (Heure de Chine)",
    servicesLabel: "Services",
    servicesList:
      "Importation depuis la Chine • Traduction • Accompagnement commercial • Contrôle qualité • Expédition",
  },
};

// ======================
// MAIN COMPONENT
// ======================
const ContactUsPage = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.ar;

  // QR Code Images - Replace these with actual paths if hosted locally
  const whatsappQR = "/images/whatsapp.png"; // 👈 Replace with your actual WhatsApp QR image path
  const wechatQR = "/images/wechat.png"; // 👈 Replace with your actual WeChat QR image path

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 py-16 px-4"
      style={{ fontFamily: "Cairo, Amiri, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mb-6 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t.heroSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* WhatsApp Card */}
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-600/20 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30 text-center">
            <div className="text-5xl mb-4">💚</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {t.whatsappBoxTitle}
            </h3>
            <p className="text-emerald-200 mb-6">{t.whatsappBoxDesc}</p>

            {/* WhatsApp QR Code */}
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <img
                  src={whatsappQR}
                  alt="WhatsApp QR Code"
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={() =>
                window.open("https://wa.me/+8613681046887", "_blank")
              }
              className="w-full inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-xl transition transform hover:scale-105"
            >
              <span>📱</span>
              <span>{t.whatsappButton}</span>
            </button>
          </div>

          {/* WeChat Card */}
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30 text-center">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {t.wechatBoxTitle}
            </h3>
            <p className="text-green-200 mb-6">{t.wechatBoxDesc}</p>

            {/* WeChat QR Code */}
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <img
                  src={wechatQR}
                  alt="WeChat QR Code"
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">
              {t.contactInfoTitle}
            </h3>
            <div className="space-y-5 text-white/90">
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">📍</span>
                <div>
                  <h4 className="font-bold text-white">{t.locationLabel}</h4>
                  <p>{t.locationText}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">📧</span>
                <div>
                  <h4 className="font-bold text-white">{t.emailLabel}</h4>
                  <p className="font-mono">kenanimpexp@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">🕒</span>
                <div>
                  <h4 className="font-bold text-white">{t.hoursLabel}</h4>
                  <p>{t.hoursDays}</p>
                  <p>{t.hoursTime}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">🌐</span>
                <div>
                  <h4 className="font-bold text-white">{t.servicesLabel}</h4>
                  <p>{t.servicesList}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Amiri:wght@400;700&display=swap");
      `}</style>
    </div>
  );
};

export default ContactUsPage;
