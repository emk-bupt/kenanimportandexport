"use client";
import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../app/context/LanguageContext";

const translations = {
  ar: {
    aboutTitle: "نبذة عنا",
    companyName: "شركة كنان للاستيراد والتصدير",
    companyDesc:
      "نحن شركة <0>كنان للاستيراد والتصدير</0> <1>مسجَّلة ومرخَّصة في الصين</1>، بخبرة تمتد لأكثر من <2>25 عامًا</2> في السوق الصيني. بنينا شبكة قوية من المصانع والمورّدين في الصين لنقدم لك خدمات متكاملة. نهدف أن نكون <3>الجسر الموثوق</3> بين السوق الصيني والعربي.",
    stats: [
      { number: "25+", label: "سنة خبرة", icon: "⏳" },
      { number: "200+", label: "مصنع و مورد", icon: "🏭" },
      { number: "300+", label: "عميل راضٍ", icon: "🤝" },
      { number: "100%", label: "موثوقية", icon: "✅" },
    ],
    services: [
      { icon: "🤝", text: "مفاوضون محترفون" },
      { icon: "✅", text: "تدقيق الجودة" },
      { icon: "👁️", text: "الإشراف على الإنتاج" },
      { icon: "🚢", text: "تنسيق الشحن" },
      { icon: "💵", text: "أقل الأسعار الممكنة" },
      { icon: "🌐", text: "الترجمة الاحترافية" },
      { icon: "🎯", text: "المرافقة التجارية" },
      { icon: "🏭", text: "وصول مباشر للمصانع والموردين" },
    ],
    integratedServices: "خدماتنا المتكاملة",
  },
  en: {
    aboutTitle: "About Us",
    companyName: "Kenan Import & Export Company",
    companyDesc:
      "We are <0>Kenan Import & Export Company</0>, <1>officially registered and licensed in China</1>, with over <2>25 years of experience</2> in the Chinese market. We've built a strong network of factories and suppliers in China to offer you integrated services. Our goal is to be your <3>trusted bridge</3> between the Chinese and Arab markets.",
    stats: [
      { number: "25+", label: "Years of Experience", icon: "⏳" },
      { number: "200+", label: "Factories & Suppliers", icon: "🏭" },
      { number: "300+", label: "Satisfied Clients", icon: "🤝" },
      { number: "100%", label: "Reliability", icon: "✅" },
    ],
    services: [
      { icon: "🤝", text: "Professional Negotiators" },
      { icon: "✅", text: "Quality Auditing" },
      { icon: "👁️", text: "Production Supervision" },
      { icon: "🚢", text: "Shipping Coordination" },
      { icon: "💵", text: "Most Competitive Pricing" },
      { icon: "🌐", text: "Professional Translation" },
      { icon: "🎯", text: "Business Companion Services" },
      { icon: "🏭", text: "Direct Access to Factories & Suppliers" },
    ],
    integratedServices: "Our Integrated Services",
  },
  zh: {
    aboutTitle: "关于我们",
    companyName: "肯南进出口公司",
    companyDesc:
      "我们是<0>肯南进出口公司</0>，<1>在中国正式注册并持牌</1>，拥有超过<2>25年</2>的中国市场经验。我们在华建立了强大的工厂与供应商网络，为您提供一站式服务。我们的目标是成为连接<3>中国与阿拉伯市场之间的可靠桥梁</3>。",
    stats: [
      { number: "25+", label: "年经验", icon: "⏳" },
      { number: "200+", label: "家工厂与供应商", icon: "🏭" },
      { number: "300+", label: "位满意客户", icon: "🤝" },
      { number: "100%", label: "可靠性", icon: "✅" },
    ],
    services: [
      { icon: "🤝", text: "专业谈判人员" },
      { icon: "✅", text: "质量审核" },
      { icon: "👁️", text: "生产监督" },
      { icon: "🚢", text: "物流协调" },
      { icon: "💵", text: "最具竞争力的价格" },
      { icon: "🌐", text: "专业翻译服务" },
      { icon: "🎯", text: "商务陪同服务" },
      { icon: "🏭", text: "直接对接工厂与供应商" },
    ],
    integratedServices: "我们的综合服务",
  },
  fr: {
    aboutTitle: "À Propos de Nous",
    companyName: "Société Kenan d'Import-Export",
    companyDesc:
      "Nous sommes la <0>Société Kenan d'Import-Export</0>, <1>enregistrée et agréée officiellement en Chine</1>, avec plus de <2>25 ans d'expérience</2> sur le marché chinois. Nous avons construit un solide réseau d'usines et de fournisseurs en Chine pour vous offrir des services intégrés. Notre objectif est d'être votre <3>pont de confiance</3> entre les marchés chinois et arabes.",
    stats: [
      { number: "25+", label: "Ans d'expérience", icon: "⏳" },
      { number: "200+", label: "Usines & Fournisseurs", icon: "🏭" },
      { number: "300+", label: "Clients satisfaits", icon: "🤝" },
      { number: "100%", label: "Fiabilité", icon: "✅" },
    ],
    services: [
      { icon: "🤝", text: "Négociateurs professionnels" },
      { icon: "✅", text: "Audit qualité" },
      { icon: "👁️", text: "Supervision de la production" },
      { icon: "🚢", text: "Coordination de l'expédition" },
      { icon: "💵", text: "Prix les plus compétitifs" },
      { icon: "🌐", text: "Traduction professionnelle" },
      { icon: "🎯", text: "Accompagnement commercial" },
      { icon: "🏭", text: "Accès direct aux usines et fournisseurs" },
    ],
    integratedServices: "Nos Services Intégrés",
  },
};

const AboutUsSection = () => {
  const { lang } = useLanguage();

  // Safe access with fallback to Arabic
  const t = translations[lang] || translations.ar;

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Helper to safely render HTML-like strings with spans
  const renderCompanyDesc = () => {
    if (!t?.companyDesc) return "";

    const parts = t.companyDesc.split(/(<\d+>|<\/\d+>)/g);
    let openTag = null;
    const result = [];

    parts.forEach((part, i) => {
      if (part === "<0>") {
        openTag = "amber";
      } else if (part === "<1>") {
        openTag = "green";
      } else if (part === "<2>") {
        openTag = "red";
      } else if (part === "<3>") {
        openTag = "amber-bold";
      } else if (part.startsWith("</")) {
        openTag = null;
      } else if (openTag && part.trim()) {
        result.push(
          <span
            key={i}
            className={
              openTag === "amber"
                ? "text-amber-400 font-bold"
                : openTag === "green"
                ? "text-green-400 font-semibold"
                : openTag === "red"
                ? "text-red-400 font-bold"
                : "text-amber-400 font-bold"
            }
          >
            {part}
          </span>
        );
      } else if (!openTag && part.trim()) {
        result.push(part);
      }
    });

    return result;
  };

  // Safety check
  if (!t) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-slate-600 via-blue-800 to-slate-700 py-20 px-4 overflow-hidden flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-600 via-blue-800 to-slate-700 py-20 px-4 overflow-hidden"
      style={{
        fontFamily: lang === "ar" ? "Cairo, Amiri, sans-serif" : "sans-serif",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float1">
          🏢
        </div>
        <div className="absolute top-40 right-20 text-7xl opacity-10 animate-float2">
          🇨🇳
        </div>
        <div className="absolute bottom-32 left-1/4 text-6xl opacity-10 animate-float3">
          📦
        </div>
        <div className="absolute bottom-20 right-1/3 text-7xl opacity-10 animate-float4">
          🌍
        </div>
        <div className="absolute top-1/2 right-10 text-6xl opacity-10 animate-float5">
          🤝
        </div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mb-4 drop-shadow-2xl">
            {t.aboutTitle}
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full"></div>
        </div>

        {/* Main Content Card */}
        <div
          className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-12 shadow-2xl border border-white/10 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-500/20 to-transparent rounded-tr-full"></div>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 animate-pulse"></div>
              <div className="absolute inset-0 rounded-2xl border-4 border-amber-400/30 animate-spin-slow"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-2xl border-4 border-amber-500/40 group-hover:scale-105 transition-transform duration-500">
                <div className="w-48 h-48 flex items-center justify-center rounded-full overflow-hidden">
                  <img
                    src="logo.png"
                    alt={t.companyName}
                    className="w-full h-full object-contain p-1" // Minimal padding for maximum logo size
                  />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping animation-delay-500"></div>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-center text-white mb-8">
            {t.companyName}
          </h3>

          <p className="text-lg md:text-xl leading-relaxed text-gray-200 text-center max-w-4xl mx-auto mb-8">
            {renderCompanyDesc()}
          </p>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {t.stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 border border-white/10 hover:border-amber-500/50 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-yellow-500/10 transition-all duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-semibold text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-black text-center text-white mb-8">
            {t.integratedServices}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 border border-white/10 hover:border-white/30 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    [
                      "from-blue-500 to-blue-600",
                      "from-green-500 to-green-600",
                      "from-purple-500 to-purple-600",
                      "from-cyan-500 to-cyan-600",
                      "from-orange-500 to-orange-600",
                      "from-pink-500 to-pink-600",
                      "from-amber-500 to-amber-600",
                      "from-indigo-500 to-indigo-600",
                    ][index % 8]
                  } opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {service.icon}
                  </div>
                  <p className="text-white font-bold text-lg">{service.text}</p>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap");

        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translateY(-10px) rotate(-3deg);
          }
          50% {
            transform: translateY(-30px) rotate(3deg);
          }
        }

        @keyframes float3 {
          0%,
          100% {
            transform: translateY(5px) rotate(2deg);
          }
          50% {
            transform: translateY(-15px) rotate(-2deg);
          }
        }

        @keyframes float4 {
          0%,
          100% {
            transform: translateY(-5px) rotate(-1deg);
          }
          50% {
            transform: translateY(-25px) rotate(4deg);
          }
        }

        @keyframes float5 {
          0%,
          100% {
            transform: translateY(0) rotate(3deg);
          }
          50% {
            transform: translateY(-18px) rotate(-3deg);
          }
        }

        .animate-float1 {
          animation: float1 6s ease-in-out infinite;
        }

        .animate-float2 {
          animation: float2 7s ease-in-out infinite;
        }

        .animate-float3 {
          animation: float3 6.5s ease-in-out infinite;
        }

        .animate-float4 {
          animation: float4 7.5s ease-in-out infinite;
        }

        .animate-float5 {
          animation: float5 6.8s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection;
