"use client";
import React, { useEffect, useRef, useState } from "react";

const AboutUsSection = () => {
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

  const stats = [
    { number: "25+", label: "سنة خبرة", icon: "⏳", delay: "0s" },
    { number: "200+", label: "مصنع و مورد", icon: "🏭", delay: "0.2s" },
    { number: "300+", label: "عميل راضٍ", icon: "🤝", delay: "0.4s" },
    { number: "100%", label: "موثوقية", icon: "✅", delay: "0.6s" },
  ];

  const services = [
    { icon: "🤝", text: "مفاوضون محترفون", color: "from-blue-500 to-blue-600" },
    { icon: "✅", text: "تدقيق الجودة", color: "from-green-500 to-green-600" },
    { icon: "👁️", text: "الإشراف على الإنتاج", color: "from-purple-500 to-purple-600" },
    { icon: "🚢", text: "تنسيق الشحن", color: "from-cyan-500 to-cyan-600" },
    { icon: "💵", text: "أقل الاسعار الممكنة", color: "from-orange-500 to-orange-600" },
    { icon: "🌐", text: "الترجمة الاحترافية", color: "from-pink-500 to-pink-600" },
    { icon: "🎯", text: "المرافقة التجارية", color: "from-amber-500 to-amber-600" },
    { icon: "🏭", text: "وصل مباشر للمصانع والموردين", color: "from-indigo-500 to-indigo-600" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-600 via-blue-800 to-slate-700 py-20 px-4 overflow-hidden"
      style={{ fontFamily: "Cairo, Amiri, sans-serif" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Icons */}
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

        {/* Animated Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mb-4 drop-shadow-2xl">
            نبذة عنا
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full"></div>
        </div>

        {/* Main Content Card */}
        <div
          className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-12 shadow-2xl border border-white/10 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-500/20 to-transparent rounded-tr-full"></div>

          {/* Company Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 animate-pulse transition-opacity duration-500"></div>
              
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-2xl border-4 border-amber-400/30 animate-spin-slow"></div>
              
              {/* Logo container */}
              <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 p-6 rounded-2xl shadow-2xl border-4 border-amber-500/40 group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="logo.png" 
                  alt="شعار شركة كنان" 
                  className="w-32 h-32 object-contain drop-shadow-2xl group-hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.5)] transition-all duration-500"
                />
              </div>
              
              {/* Corner sparkles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping animation-delay-500"></div>
            </div>
          </div>

          {/* Company Name */}
          <h3 className="text-3xl md:text-4xl font-black text-center text-white mb-8">
            شركة <span className="text-amber-400">كنان</span> للاستيراد والتصدير
          </h3>

          {/* Description */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-200 text-center max-w-4xl mx-auto mb-8">
            نحن شركة <span className="text-amber-400 font-bold">كنان للاستيراد والتصدير</span>{" "}
            <span className="text-green-400 font-semibold">مسجَّلة ومرخَّصة في الصين</span>، بخبرة تمتد لأكثر من{" "}
            <span className="text-red-400 font-bold">25 عامًا</span> في السوق الصيني. 
            بنينا شبكة قوية من المصانع والمورّدين في الصين لنقدم لك خدمات متكاملة. 
            نهدف أن نكون <span className="text-amber-400 font-bold">الجسر الموثوق</span> بين السوق الصيني والعربي.
          </p>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-400 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 border border-white/10 hover:border-amber-500/50 cursor-pointer overflow-hidden"
              style={{ animationDelay: stat.delay }}
            >
              {/* Hover Glow Effect */}
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

        {/* Services Section */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-black text-center text-white mb-8">
            خدماتنا <span className="text-amber-400">المتكاملة</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 border border-white/10 hover:border-white/30 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {service.icon}
                  </div>
                  <p className="text-white font-bold text-lg">
                    {service.text}
                  </p>
                </div>

                {/* Corner Shine Effect */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full"></div>
              </div>
            ))}
          </div>
        </div>


      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap");

        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(-10px) rotate(-3deg); }
          50% { transform: translateY(-30px) rotate(3deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(5px) rotate(2deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(-5px) rotate(-1deg); }
          50% { transform: translateY(-25px) rotate(4deg); }
        }
        @keyframes float5 {
          0%, 100% { transform: translateY(0px) rotate(3deg); }
          50% { transform: translateY(-18px) rotate(-3deg); }
        }

        .animate-float1 { animation: float1 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 7s ease-in-out infinite; }
        .animate-float3 { animation: float3 6.5s ease-in-out infinite; }
        .animate-float4 { animation: float4 7.5s ease-in-out infinite; }
        .animate-float5 { animation: float5 6.8s ease-in-out infinite; }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection;