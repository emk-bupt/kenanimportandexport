"use client";
import React from "react";
import { useLanguage } from "../app/context/LanguageContext";

const translations = {
  ar: {
    titleLine1: "مشروعك من",
    titleLine2: "الصين",
    titleLine3: "صار أسهل!",
    titleLine4: "مع حلولنا السريعة والموثوقة",
    cta: "ابدأ الآن",
    chinaLabel: "الصين",
    arabLabel: "البلدان العربية",
    cities: {
      guangzhou: "قوانجو",
      shenzhen: "شنجن",
      shanghai: "شنغهاي",
      beijing: "بكين",
      yiwu: "إيوو",
      hangzhou: "هانغجو",
      ningbo: "نينغبو",
      tianjin: "تيانجين",
    },
  },
  en: {
    titleLine1: "Your business from",
    titleLine2: "China",
    titleLine3: "Just got easier!",
    titleLine4: "With our fast & reliable solutions",
    cta: "Get Started",
    chinaLabel: "China",
    arabLabel: "Arab Countries",
    cities: {
      guangzhou: "Guangzhou",
      shenzhen: "Shenzhen",
      shanghai: "Shanghai",
      beijing: "Beijing",
      yiwu: "Yiwu",
      hangzhou: "Hangzhou",
      ningbo: "Ningbo",
      tianjin: "Tianjin",
    },
  },
  zh: {
    titleLine1: "您的业务从",
    titleLine2: "中国",
    titleLine3: "变得更简单了！",
    titleLine4: "借助我们快速可靠的解决方案",
    cta: "立即开始",
    chinaLabel: "中国",
    arabLabel: "阿拉伯国家",
    cities: {
      guangzhou: "广州",
      shenzhen: "深圳",
      shanghai: "上海",
      beijing: "北京",
      yiwu: "义乌",
      hangzhou: "杭州",
      ningbo: "宁波",
      tianjin: "天津",
    },
  },
  fr: {
    titleLine1: "Votre projet depuis",
    titleLine2: "la Chine",
    titleLine3: "est devenu plus facile !",
    titleLine4: "Avec nos solutions rapides et fiables",
    cta: "Commencer",
    chinaLabel: "Chine",
    arabLabel: "Pays arabes",
    cities: {
      guangzhou: "Guangzhou",
      shenzhen: "Shenzhen",
      shanghai: "Shanghai",
      beijing: "Pékin",
      yiwu: "Yiwu",
      hangzhou: "Hangzhou",
      ningbo: "Ningbo",
      tianjin: "Tianjin",
    },
  },
};

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.ar;

  const mapClasses =
    "w-[230px] sm:w-[280px] md:w-[340px] h-auto drop-shadow-lg rounded-lg ";
  const arabMapClasses =
    "w-[260px] sm:w-[310px] md:w-[420px] h-auto drop-shadow-lg rounded-lg";

  const arabCountries = [
    { code: "sa", top: "50%", left: "2.5rem", anim: "animate-float1" },
    { code: "ae", top: "5rem", right: "5rem", anim: "animate-float2" },
    { code: "eg", top: "8rem", left: "25%", anim: "animate-float3" },
    { code: "jo", top: "10rem", right: "33.33%", anim: "animate-float4" },
    { code: "kw", top: "13rem", left: "33.33%", anim: "animate-float5" },
    { code: "qa", top: "16rem", right: "25%", anim: "animate-float6" },
    { code: "lb", bottom: "5rem", left: "2.5rem", anim: "animate-float7" },
    { code: "ma", bottom: "8rem", right: "4rem", anim: "animate-float8" },
    { code: "iq", bottom: "11rem", left: "25%", anim: "animate-float9" },
    { code: "ps", top: "15.5rem", left: "50%", anim: "animate-float11" },
  ];

  // City positions (same for all languages)
  const cities = [
    { id: "guangzhou", top: "44", left: "1/5", chinese: "广州" },
    { id: "shenzhen", top: "56", right: "1/5", chinese: "深圳" },
    { id: "shanghai", bottom: "36", left: "1/6", chinese: "上海" },
    { id: "beijing", top: "72", left: "2/5", chinese: "北京" },
    { id: "yiwu", bottom: "24", right: "1/4", chinese: "义乌" },
    { id: "hangzhou", top: "44", right: "1/3", chinese: "杭州" },
    { id: "ningbo", bottom: "48", left: "1/3", chinese: "宁波" },
    { id: "tianjin", top: "36", left: "2/3", chinese: "天津" },
  ];

  return (
    <section
      // REMOVED: dir={isRTL ? "rtl" : "ltr"} - This was causing the layout changes
      lang={lang}
      className="relative min-h-screen bg-gradient-to-br from-slate-600 via-blue-800 to-slate-700 flex flex-col md:flex-row items-center justify-center overflow-hidden"
      style={{ fontFamily: "Cairo, Amiri, sans-serif" }}
    >
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-5 overflow-hidden">
        {arabCountries.map((country, idx) => (
          <div
            key={idx}
            className={`absolute ${country.anim} opacity-40`}
            style={{
              top: country.top,
              bottom: country.bottom,
              left: country.left,
              right: country.right,
              width: "48px",
              height: "25px",
              opacity: 0.4,
              zIndex: -1,
            }}
          >
            <img
              src={`https://flagcdn.com/w40/${country.code}.png`}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}

        <div className="absolute top-18 right-12 w-16 h-12 animate-spin-slow opacity-30">
          <img
            src="https://flagcdn.com/w40/cn.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated icons */}
        <div className="absolute top-1/2 left-0 text-4xl animate-ship1 opacity-50">
          🚢
        </div>
        <div className="absolute top-1/3 right-0 text-5xl animate-ship2 opacity-45">
          ⛴️
        </div>
        <div className="absolute bottom-1/3 left-0 text-4xl animate-ship3 opacity-50">
          🛳️
        </div>
        <div className="absolute top-1/4 left-1/2 text-3xl animate-box1 opacity-60">
          📦
        </div>
        <div className="absolute top-2/3 right-1/4 text-4xl animate-box2 opacity-55">
          📦
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-3xl animate-box3 opacity-60">
          📦
        </div>
        <div className="absolute top-3/4 right-1/2 text-4xl animate-box4 opacity-55">
          📦
        </div>
        <div className="absolute top-1/6 right-2/3 text-3xl animate-box5 opacity-60">
          📦
        </div>
        <div className="absolute bottom-10 right-10 text-4xl animate-truck opacity-50">
          🚚
        </div>
        <div className="absolute top-1/5 left-2/3 text-4xl animate-plane opacity-45">
          ✈️
        </div>

        {/* City names */}
        {cities.map((city, i) => (
          <div
            key={city.id}
            className={`absolute top-${city.top} ${
              city.left ? `left-${city.left}` : `right-${city.right}`
            } text-lg sm:text-xl md:text-2xl font-bold text-white/30 animate-float${
              i + 1
            }`}
          >
            <div className="text-center">{city.chinese}</div>
            <div className="text-sm text-amber-300/40">{t.cities[city.id]}</div>
          </div>
        ))}
      </div>

      {/* Mobile Background */}
      <div className="md:hidden absolute inset-0 pointer-events-none z-5 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/30 to-transparent animate-wave-slow"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-500/30 to-transparent animate-wave-slow-reverse"></div>
        </div>
        <div className="absolute top-10 left-5 text-4xl animate-mobile-float1 opacity-40">
          🚢
        </div>
        <div className="absolute top-1/4 right-8 text-3xl animate-mobile-float2 opacity-35">
          📦
        </div>
        <div className="absolute top-1/2 left-10 text-3xl animate-mobile-float3 opacity-40">
          ✈️
        </div>
        <div className="absolute bottom-1/4 right-5 text-4xl animate-mobile-float4 opacity-35">
          🚚
        </div>
        <div className="absolute top-1/3 left-1/4 text-2xl animate-mobile-float5 opacity-30">
          🌍
        </div>
        <div className="absolute bottom-1/3 right-1/3 text-2xl animate-mobile-float6 opacity-30">
          🏭
        </div>

        <div className="absolute top-20 right-12 w-12 h-8 animate-mobile-diagonal1 opacity-30">
          <img
            src="https://flagcdn.com/w40/sa.png"
            alt=""
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
        <div className="absolute top-1/3 left-12 w-12 h-8 animate-mobile-diagonal2 opacity-30">
          <img
            src="https://flagcdn.com/w40/cn.png"
            alt=""
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
        <div className="absolute bottom-1/3 right-16 w-12 h-8 animate-mobile-diagonal3 opacity-30">
          <img
            src="https://flagcdn.com/w40/jo.png"
            alt=""
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
        <div className="absolute top-2/3 left-8 w-12 h-9 animate-mobile-diagonal4 opacity-30">
          <img
            src="https://flagcdn.com/w40/iq.png"
            alt=""
            className="w-full h-full object-cover rounded-sm"
          />
        </div>

        <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-amber-400/20 rounded-full animate-pulse-ring"></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border-2 border-green-400/20 rounded-full animate-pulse-ring-delayed"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 border-2 border-blue-400/15 rounded-full animate-pulse-ring-slow"></div>
        <div className="absolute top-16 left-1/3 text-xl animate-sparkle1 opacity-40">
          ✨
        </div>
        <div className="absolute bottom-20 right-1/4 text-xl animate-sparkle2 opacity-40">
          ✨
        </div>
        <div className="absolute top-1/2 left-1/5 text-lg animate-sparkle3 opacity-35">
          💫
        </div>
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent animate-line-move"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-line-move-reverse"></div>
      </div>

      {/* FIXED: Maps and main content - removed RTL reordering */}
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full h-full px-4 md:px-8 gap-8 md:gap-16">
        {/* China Map - ALWAYS on the LEFT */}
        <div className="relative transition-all duration-1000 animate-fadeInScale order-1 md:order-1 z-10 -translate-y-[10px] md:-translate-y-[80px]">
          <img
            src="/images/china_map.png"
            alt={t.chinaLabel}
            className={mapClasses}
          />
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
            {t.chinaLabel}
          </div>
        </div>

        {/* Title and CTA Button - ALWAYS in the CENTER */}
        <div className="relative z-30 text-center max-w-3xl mx-auto order-3 md:order-2 pt-z md:pt-70">
          <h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight transition-all duration-1000 animate-fadeInUp"
            style={{
              fontFamily: "Cairo, sans-serif",
              textShadow: "0 4px 20px rgba(0,0,0,0.9)",
            }}
          >
            <span className="block text-white drop-shadow-2xl mb-2 text-4xl sm:text-4xl md:text-5xl lg:text-7xl">
              {t.titleLine1}{" "}
              <span className="text-red-600 drop-shadow-2xl mb-2">
                {t.titleLine2}
              </span>
            </span>
            <span className="block text-green-600 drop-shadow-2xl mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
              {t.titleLine3}
            </span>
            <span className="block text-yellow-400 drop-shadow-2xl text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              {t.titleLine4}
            </span>
          </h1>

          <div className="relative inline-block mt-2 z-50 pointer-events-auto">
            <a
              href="/services"
              className="group relative block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-slate-900 px-10 sm:px-14 py-3 sm:py-4 rounded-2xl text-xl sm:text-2xl font-black hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fadeInScale animation-delay-500 border-3 border-white/20 backdrop-blur-sm overflow-hidden cursor-pointer"
              style={{
                fontFamily: "Cairo, sans-serif",
                textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                boxShadow:
                  "0 10px 25px rgba(245, 158, 11, 0.4), 0 3px 10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              <span className="relative z-10">{t.cta}</span>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-800 ease-out"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-sm -z-10"></div>
            </a>
            <div className="absolute inset-0 rounded-2xl border border-amber-400/30 animate-pulse scale-105 pointer-events-none"></div>
          </div>
        </div>

        {/* Middle East Map - ALWAYS on the RIGHT */}
        <div className="relative transition-all duration-1000 animate-fadeInScale order-2 md:order-3 z-10 -translate-y-[10px] md:-translate-y-[80px]">
          <img
            src="/images/middle_east_map.png"
            alt={t.arabLabel}
            className={`${arabMapClasses} brightness-200 contrast-50 saturate-150`}
          />
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
            {t.arabLabel}
          </div>
        </div>
      </div>
      {/* Flight path - FIXED: This will now work consistently */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block"
        viewBox="0 0 1200 600"
      >
        <defs>
          <linearGradient id="flightGradient" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
        </defs>
        <path
          id="flightPathPC"
          d="M999,220 Q700,170 550,220 Q400,270 270,220"
          fill="none"
          stroke="url(#flightGradient)"
          strokeWidth="4"
          strokeDasharray="20,8"
          className="stroke-current text-green-600"
        />
        <g>
          <text fontSize="39" fill="#fff" transform="scale(1, 1)">
            🚢
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
            >
              <mpath href="#flightPathPC" />
            </animateMotion>
          </text>
        </g>
      </svg>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap");

        /* Desktop Animations */
        @keyframes flightDash {
          to {
            stroke-dashoffset: 25;
          }
        }
        #flightPathPC {
          animation: flightDash 6s linear infinite;
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInScale {
          animation: fadeInScale 1s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }

        /* Mobile-Specific Animations */
        @keyframes wave-slow {
          0%,
          100% {
            transform: translateY(0) scaleX(1);
          }
          50% {
            transform: translateY(-10px) scaleX(1.05);
          }
        }

        @keyframes wave-slow-reverse {
          0%,
          100% {
            transform: translateY(0) scaleX(1);
          }
          50% {
            transform: translateY(10px) scaleX(1.05);
          }
        }

        @keyframes mobile-float1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(15px, -20px) rotate(5deg);
          }
          50% {
            transform: translate(30px, 0) rotate(0deg);
          }
          75% {
            transform: translate(15px, 20px) rotate(-5deg);
          }
        }

        @keyframes mobile-float2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(-20px, 15px) rotate(-5deg) scale(1.1);
          }
          66% {
            transform: translate(-10px, -15px) rotate(5deg) scale(0.9);
          }
        }

        @keyframes mobile-float3 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(20px, -25px) rotate(10deg);
          }
        }

        @keyframes mobile-float4 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-15px, -15px) scale(1.05);
          }
          75% {
            transform: translate(15px, 15px) scale(0.95);
          }
        }

        @keyframes mobile-diagonal1 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-30px, 40px);
          }
        }

        @keyframes mobile-diagonal2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(40px, -30px);
          }
        }

        @keyframes mobile-diagonal3 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-25px, -35px);
          }
        }

        @keyframes mobile-diagonal4 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(35px, 25px);
          }
        }

        @keyframes mobile-float5 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-20px, 30px) rotate(180deg);
          }
        }

        @keyframes mobile-float6 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(25px, -20px) scale(1.2);
          }
        }

        @keyframes sparkle1 {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.3) rotate(180deg);
          }
        }

        @keyframes sparkle2 {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.8) rotate(0deg);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2) rotate(-180deg);
          }
        }

        @keyframes sparkle3 {
          0%,
          100% {
            opacity: 0.35;
            transform: translateY(0) rotate(0deg);
          }
          50% {
            opacity: 0.75;
            transform: translateY(-15px) rotate(360deg);
          }
        }

        @keyframes line-move {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes line-move-reverse {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes pulse-ring-slow {
          0% {
            transform: scale(0.9);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.1;
          }
          100% {
            transform: scale(0.9);
            opacity: 0.5;
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.8;
          }
        }

        @keyframes pulse-ring-delayed {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.2;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }

        .animate-wave-slow {
          animation: wave-slow 6s ease-in-out infinite;
        }

        .animate-wave-slow-reverse {
          animation: wave-slow-reverse 7s ease-in-out infinite;
        }

        .animate-mobile-float1 {
          animation: mobile-float1 8s ease-in-out infinite;
        }

        .animate-mobile-float2 {
          animation: mobile-float2 6s ease-in-out infinite;
        }

        .animate-mobile-float3 {
          animation: mobile-float3 7s ease-in-out infinite;
        }

        .animate-mobile-float4 {
          animation: mobile-float4 9s ease-in-out infinite;
        }

        .animate-mobile-diagonal1 {
          animation: mobile-diagonal1 10s ease-in-out infinite;
        }

        .animate-mobile-diagonal2 {
          animation: mobile-diagonal2 12s ease-in-out infinite 1s;
        }

        .animate-mobile-diagonal3 {
          animation: mobile-diagonal3 11s ease-in-out infinite 2s;
        }

        .animate-mobile-diagonal4 {
          animation: mobile-diagonal4 13s ease-in-out infinite 3s;
        }

        .animate-mobile-float5 {
          animation: mobile-float5 10s ease-in-out infinite;
        }

        .animate-mobile-float6 {
          animation: mobile-float6 8s ease-in-out infinite 2s;
        }

        .animate-sparkle1 {
          animation: sparkle1 4s ease-in-out infinite;
        }

        .animate-sparkle2 {
          animation: sparkle2 5s ease-in-out infinite 1s;
        }

        .animate-sparkle3 {
          animation: sparkle3 6s ease-in-out infinite 2s;
        }

        .animate-line-move {
          animation: line-move 8s linear infinite;
        }

        .animate-line-move-reverse {
          animation: line-move-reverse 10s linear infinite;
        }

        .animate-pulse-ring-slow {
          animation: pulse-ring-slow 4s ease-in-out infinite 2s;
        }

        .animate-pulse-ring {
          animation: pulse-ring 3s ease-in-out infinite;
        }

        .animate-pulse-ring-delayed {
          animation: pulse-ring-delayed 3s ease-in-out infinite 1.5s;
        }

        /* Standard Desktop Animations */
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
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
            transform: translateY(0px) rotate(3deg);
          }
          50% {
            transform: translateY(-18px) rotate(-3deg);
          }
        }
        @keyframes float6 {
          0%,
          100% {
            transform: translateY(-8px) rotate(-2deg);
          }
          50% {
            transform: translateY(-28px) rotate(2deg);
          }
        }
        @keyframes float7 {
          0%,
          100% {
            transform: translateY(3px) rotate(1deg);
          }
          50% {
            transform: translateY(-17px) rotate(-4deg);
          }
        }
        @keyframes float8 {
          0%,
          100% {
            transform: translateY(-3px) rotate(-1deg);
          }
          50% {
            transform: translateY(-23px) rotate(3deg);
          }
        }
        @keyframes float9 {
          0%,
          100% {
            transform: translateY(8px) rotate(2deg);
          }
          50% {
            transform: translateY(-12px) rotate(-2deg);
          }
        }
        @keyframes float10 {
          0%,
          100% {
            transform: translateY(-2px) rotate(-3deg);
          }
          50% {
            transform: translateY(-22px) rotate(1deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(-15px);
          }
          50% {
            transform: translateY(5px);
          }
        }

        .animate-float1 {
          animation: float1 4s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 5s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 4.5s ease-in-out infinite;
        }
        .animate-float4 {
          animation: float4 5.5s ease-in-out infinite;
        }
        .animate-float5 {
          animation: float5 4.2s ease-in-out infinite;
        }
        .animate-float6 {
          animation: float6 5.3s ease-in-out infinite;
        }
        .animate-float7 {
          animation: float7 4.8s ease-in-out infinite;
        }
        .animate-float8 {
          animation: float8 5.1s ease-in-out infinite;
        }
        .animate-float9 {
          animation: float9 4.7s ease-in-out infinite;
        }
        .animate-float10 {
          animation: float10 5.4s ease-in-out infinite;
        }
        .animate-float11 {
          animation: float1 4.3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }

        @keyframes ship1 {
          0% {
            transform: translateX(-100px) translateY(0px);
          }
          50% {
            transform: translateX(50vw) translateY(-10px);
          }
          100% {
            transform: translateX(100vw) translateY(0px);
          }
        }

        @keyframes ship2 {
          0% {
            transform: translateX(100px) translateY(0px) scaleX(-1);
          }
          50% {
            transform: translateX(-50vw) translateY(-15px) scaleX(-1);
          }
          100% {
            transform: translateX(-100vw) translateY(0px) scaleX(-1);
          }
        }

        @keyframes ship3 {
          0% {
            transform: translateX(-80px) translateY(5px);
          }
          50% {
            transform: translateX(60vw) translateY(-5px);
          }
          100% {
            transform: translateX(120vw) translateY(5px);
          }
        }

        @keyframes box1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
          }
        }

        @keyframes box2 {
          0%,
          100% {
            transform: translateY(-5px) rotate(-5deg);
          }
          50% {
            transform: translateY(-35px) rotate(5deg);
          }
        }

        @keyframes box3 {
          0%,
          100% {
            transform: translateY(5px) rotate(3deg);
          }
          50% {
            transform: translateY(-25px) rotate(-3deg);
          }
        }

        @keyframes box4 {
          0%,
          100% {
            transform: translateY(-8px) rotate(-2deg);
          }
          50% {
            transform: translateY(-38px) rotate(8deg);
          }
        }

        @keyframes box5 {
          0%,
          100% {
            transform: translateY(3px) rotate(4deg);
          }
          50% {
            transform: translateY(-27px) rotate(-4deg);
          }
        }

        @keyframes truck {
          0%,
          100% {
            transform: translateX(0px) translateY(0px);
          }
          50% {
            transform: translateX(-20px) translateY(-5px);
          }
        }

        @keyframes plane {
          0% {
            transform: translateX(-50px) translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateX(20vw) translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateX(50vw) translateY(-10px) rotate(-2deg);
          }
          75% {
            transform: translateX(80vw) translateY(-25px) rotate(3deg);
          }
          100% {
            transform: translateX(110vw) translateY(0px) rotate(0deg);
          }
        }

        .animate-ship1 {
          animation: ship1 25s ease-in-out infinite;
        }
        .animate-ship2 {
          animation: ship2 30s ease-in-out infinite 5s;
        }
        .animate-ship3 {
          animation: ship3 28s ease-in-out infinite 10s;
        }

        .animate-box1 {
          animation: box1 3s ease-in-out infinite;
        }
        .animate-box2 {
          animation: box2 3.5s ease-in-out infinite 0.5s;
        }
        .animate-box3 {
          animation: box3 3.2s ease-in-out infinite 1s;
        }
        .animate-box4 {
          animation: box4 3.8s ease-in-out infinite 1.5s;
        }
        .animate-box5 {
          animation: box5 3.3s ease-in-out infinite 2s;
        }

        .animate-truck {
          animation: truck 4s ease-in-out infinite;
        }
        .animate-plane {
          animation: plane 20s ease-in-out infinite 3s;
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .hero-section-container {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
