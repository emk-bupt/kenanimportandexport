"use client";
import React, { useEffect, useRef, useState } from "react";

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [expandedService, setExpandedService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef({});

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observers = {};

    Object.keys(sectionRefs.current).forEach((key) => {
      observers[key] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.1 }
      );

      if (sectionRefs.current[key]) {
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.keys(observers).forEach((key) => {
        if (sectionRefs.current[key]) {
          observers[key].unobserve(sectionRefs.current[key]);
        }
      });
    };
  }, []);

  // Service Steps (now numbered visually)
  const serviceSteps = [
    {
      icon: "📞",
      title: "التواصل مع فريق الخدمات",
      description: "بعد حجز الخدمة، يتواصل معك فريقنا المتخصص لفهم احتياجاتك",
      color: "from-blue-500 to-blue-600",
      details: [
        "تواصل فوري عبر واتساب ",
        "فريق متخصص يتحدث العربية والصينية",
        "فهم دقيق لاحتياجاتك ومتطلباتك",
        "تقديم استشارة مجانية حول أفضل الخيارات",
      ],
    },
    {
      icon: "🔍",
      title: "البحث عن المنتجات",
      description: "نبحث عن أفضل الموردين ونقدم لك الأسعار التنافسية",
      color: "from-green-500 to-green-600",
      details: [
        "البحث في قاعدة بيانات تضم آلاف المصانع والموردين",
        "مقارنة الأسعار والجودة من مصادر متعددة",
        "التحقق من سمعة المورد وتقييماته",
        "تقديم تقرير مفصل بالخيارات المتاحة",
      ],
    },
    {
      icon: "📊",
      title: "متابعة الطلب",
      description: "نتابع طلبك خطوة بخطوة لضمان سير العملية بسلاسة",
      color: "from-purple-500 to-purple-600",
      details: [
        "تحديثات يومية عن حالة الطلب",
        "التنسيق المباشر مع المصانع",
        "حل أي مشاكل أو تأخيرات فوراً",
        "تصوير المنتجات قبل الشحن",
        "تقارير مرحلية عن تقدم الإنتاج",
      ],
    },
    {
      icon: "✅",
      title: "تأكيد الطلب وإصدار الفاتورة",
      description: "نؤكد الطلب معك ونصدر الفاتورة الشاملة",
      color: "from-amber-500 to-amber-600",
      details: [
        "مراجعة نهائية لكافة تفاصيل الطلب",
        "فاتورة واضحة بجميع التكاليف",
        "عقد تجاري محكم لحماية حقوقك",
        "ضمان الالتزام بالمواصفات المتفق عليها",
      ],
    },
    {
      icon: "🚢",
      title: "التجهيز والشحن",
      description: "نجهز طلبك ونشحنه بأفضل الطرق الملائمة لاحتياجاتك",
      color: "from-cyan-500 to-cyan-600",
      details: [
        "التغليف الاحترافي حسب معايير الشحن الدولي",
        "اختيار أفضل شركة شحن بأنسب الأسعار",
        "تتبع الشحنة لحظة بلحظة",
        "التأكد من وصول الشحنة بأمان",
      ],
    },
    {
      icon: "🔬",
      title: "فحص جودة المنتج",
      description: "خدمة فحص الجودة (برسوم إضافية حسب المنتج)",
      color: "from-red-500 to-red-600",
      badge: "برسوم إضافية",
      details: [
        "فحص شامل للمنتجات قبل الشحن",
        "التأكد من مطابقة المواصفات",
        "اختبار عينات عشوائية من الإنتاج",
        "تقرير مصور مفصل بنتائج الفحص",
      ],
    },
  ];

  // ✅ Updated: "الخدمات المميزة" with new services
  const additionalServices = [
    {
      icon: "📄",
      text: "ترجمة الوثائق والمستندات",
      color: "from-indigo-500 to-indigo-600",
      details: [
        "ترجمة احترافية من وإلى العربية والصينية والإنجليزية",
        "ترجمة العقود التجارية والفواتير",
        "ترجمة دليل المنتجات والكتالوجات",
        "ترجمة شهادات الجودة والمطابقة",
        "مراجعة دقيقة من مترجمين معتمدين",
      ],
    },
    {
      icon: "🤝",
      text: "مرافقة التجار",
      color: "from-pink-500 to-pink-600",
      details: [
        "مرافقة شخصية في زياراتك للمصانع والمعارض",
        "الترجمة الفورية أثناء الاجتماعات",
        "المساعدة في التفاوض والحصول على أفضل الأسعار",
        "تنظيم جدول الزيارات والمواعيد",
        "خدمات النقل والإقامة والتنسيق الكامل",
      ],
    },
    {
      icon: "🧳",
      text: "سياحة شمال الصين وبكين",
      color: "from-yellow-500 to-amber-600",
      details: [
        "خدمة سياحية في شمال الصين وبكين",
        "التفاوض على السعر حسب مدة الاتفاق (100$ يومياً)",
        "لا تشمل المواصلات أو الطعام أو الشراب",
        "يمكن دمجها مع خدمات تجارية أو علاجية",
      ],
    },
    {
      icon: "👨‍💼",
      text: "مرافقة في شمال الصين وبكين",
      color: "from-teal-500 to-cyan-600",
      details: [
        "مرافقة تجارية للمصانع والمعارض",
        "مرافقة مرضى للعلاج في المراكز الطبية",
        "مرافقة طلاب للتسجيل أو التنسيق الأكاديمي",
        "التفاوض على السعر حسب المدة والمهمة",
      ],
    },
    {
      icon: "📞",
      text: "ترجمة لغوية عبر الهاتف",
      color: "from-purple-500 to-fuchsia-600",
      details: [
        "ترجمة فورية عبر الهاتف (عربي ↔ صيني ↔ إنجليزي)",
        "مثالية للمكالمات العاجلة أو الاجتماعات السريعة",
        "التفاوض على السعر حسب مدة المكالمة أو الاشتراك الشهري",
        "متوفرة على مدار الساعة حسب الحجز المسبق",
      ],
    },
  ];

  const countries = [
    "🇸🇦 السعودية",
    "🇦🇪 الإمارات",
    "🇪🇬 مصر",
    "🇯🇴 الأردن",
    "🇰🇼 الكويت",
    "🇶🇦 قطر",
    "🇱🇧 لبنان",
    "🇲🇦 المغرب",
    "🇮🇶 العراق",
    "🇵🇸 فلسطين",
    "سوريا",
    "🇹🇳 تونس",
  ];

  const requirements = [
    {
      icon: "💰",
      title: "قيمة الطلب الإجمالية",
      value: "الحد الأدنى $1,500",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "🚢",
      title: "الشحن البحري",
      value: "الحد الأدنى 1CBM ",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "✈️",
      title: "الشحن الجوي",
      value: "الحد الأدنى 25kg ",
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  const commissionRates = [
    {
      range: "$1,500 - $6,000",
      rate: "10%",
      color: "from-red-500 to-orange-500",
    },
    {
      range: "$6,000 - $10,000",
      rate: "8%",
      color: "from-orange-500 to-amber-500",
    },
    {
      range: "أكثر من $10,000",
      rate: "5-7%",
      color: "from-amber-500 to-green-500",
    },
  ];

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-slate-600 via-blue-800 to-slate-700 overflow-hidden"
      style={{ fontFamily: "Cairo, Amiri, sans-serif" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 text-6xl animate-float1">
          ⚙️
        </div>
        <div className="absolute top-40 right-20 text-7xl animate-float2">
          📦
        </div>
        <div className="absolute bottom-32 left-1/4 text-6xl animate-float3">
          🚢
        </div>
        <div className="absolute bottom-20 right-1/3 text-7xl animate-float4">
          ✨
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mb-6 drop-shadow-2xl animate-fadeInUp">
            خدماتنا المتكاملة
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
            ماذا سنقدم لك بعد حجز الخدمة؟
          </p>
        </div>
      </section>

      {/* Service Steps */}
      <section
        ref={(el) => (sectionRefs.current.steps = el)}
        className="relative z-10 py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-black text-white text-center mb-12 transition-all duration-1000 ${
              isVisible.steps
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            مراحل <span className="text-amber-400">خدمتنا</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceSteps.map((step, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 border border-white/10 hover:border-white/30 ${
                  isVisible.steps
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {!isMobile ? (
                  <>
                    <div className="p-6 relative">
                      {step.badge && (
                        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold z-10">
                          {step.badge}
                        </div>
                      )}
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="text-4xl">{step.icon}</div>
                          <div className="absolute -top-2 -left-2 bg-amber-500 text-slate-900 font-black rounded-full w-7 h-7 flex items-center justify-center text-xs border-2 border-white shadow-lg">
                            {index + 1}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <div className="px-6 pb-6 border-t border-white/10">
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-amber-400 font-bold text-sm mb-3">
                          التفاصيل الكاملة:
                        </h4>
                        {step.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-gray-200 text-sm bg-white/5 rounded-lg p-2"
                          >
                            <span className="text-green-400 mt-0.5">✓</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      onClick={() =>
                        setExpandedService(
                          expandedService === `main-${index}`
                            ? null
                            : `main-${index}`
                        )
                      }
                      className="p-6 cursor-pointer hover:bg-white/5 transition-all duration-300 relative"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                      ></div>

                      {step.badge && (
                        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse z-10">
                          {step.badge}
                        </div>
                      )}

                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="text-4xl group-hover:scale-110 transition-all duration-300">
                              {step.icon}
                            </div>
                            <div className="absolute -top-2 -left-2 bg-amber-500 text-slate-900 font-black rounded-full w-7 h-7 flex items-center justify-center text-xs border-2 border-white shadow-lg">
                              {index + 1}
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                        <div
                          className={`transition-transform duration-300 text-amber-400 text-xl ${
                            expandedService === `main-${index}`
                              ? "rotate-180"
                              : ""
                          }`}
                        >
                          ▼
                        </div>
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expandedService === `main-${index}`
                          ? "max-h-[800px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 border-t border-white/10 overflow-y-auto">
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 mt-4">
                          {step.description}
                        </p>
                        <div className="space-y-2">
                          <h4 className="text-amber-400 font-bold text-sm mb-3">
                            التفاصيل الكاملة:
                          </h4>
                          {step.details.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-gray-200 text-sm bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors duration-200"
                            >
                              <span className="text-green-400 mt-0.5">✓</span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Services Section: Now "الخدمات المميزة" */}
      <section
        ref={(el) => (sectionRefs.current.additional = el)}
        className="relative z-10 py-16 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-black text-center mb-12 transition-all duration-1000 ${
              isVisible.additional
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              background:
                "linear-gradient(to right, #fbbf24, #f59e0b, #d97706)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 10px rgba(251, 191, 36, 0.4)",
              animation: "pulseGlow 2s infinite alternate",
            }}
          >
            خدمات <span className="underline decoration-yellow-400">مميزة</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 border border-white/10 hover:border-white/30 ${
                  isVisible.additional
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {!isMobile ? (
                  <>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        <p className="text-lg font-bold text-white">
                          {service.text}
                        </p>
                      </div>
                    </div>
                    <div className="px-6 pb-6 border-t border-white/10">
                      <div className="space-y-2">
                        <h4 className="text-amber-400 font-bold text-sm mb-3">
                          التفاصيل الكاملة:
                        </h4>
                        {service.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-gray-200 text-sm bg-white/5 rounded-lg p-2"
                          >
                            <span className="text-green-400 mt-0.5">✓</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      onClick={() =>
                        setExpandedService(
                          expandedService === `additional-${index}`
                            ? null
                            : `additional-${index}`
                        )
                      }
                      className="p-6 cursor-pointer hover:bg-white/5 transition-all duration-300 relative"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                      ></div>

                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                          </div>
                          <p className="text-lg font-bold text-white">
                            {service.text}
                          </p>
                        </div>
                        <div
                          className={`transition-transform duration-300 text-amber-400 text-xl ${
                            expandedService === `additional-${index}`
                              ? "rotate-180"
                              : ""
                          }`}
                        >
                          ▼
                        </div>
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expandedService === `additional-${index}`
                          ? "max-h-[700px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 border-t border-white/10 overflow-y-auto">
                        <div className="space-y-2 mt-4">
                          <h4 className="text-amber-400 font-bold text-sm mb-3">
                            التفاصيل الكاملة:
                          </h4>
                          {service.details.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-gray-200 text-sm bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors duration-200"
                            >
                              <span className="text-green-400 mt-0.5">✓</span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries We Serve */}
      <section
        ref={(el) => (sectionRefs.current.countries = el)}
        className="relative z-10 py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-black text-white text-center mb-12 transition-all duration-1000 ${
              isVisible.countries
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            الدول التي <span className="text-amber-400">نخدمها</span>
          </h2>

          <div
            className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 transition-all duration-1000 ${
              isVisible.countries
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-3xl font-bold text-center text-green-400 mb-8">
              🌍 جميع الدول العربية 🌍
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl p-4 text-center text-white font-bold text-lg hover:scale-105 hover:bg-gradient-to-br hover:from-green-600/20 hover:to-green-700/20 transition-all duration-300 border border-white/5 flex items-center justify-center gap-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {country === "سوريا" ? (
                    <>
                      <img
                        src="https://flagcdn.com/48x36/sy.png"
                        alt="Syria Flag"
                        className="w-8 h-6 object-cover rounded"
                      />
                      <span>سوريا</span>
                    </>
                  ) : (
                    country
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section
        ref={(el) => (sectionRefs.current.requirements = el)}
        className="relative z-10 py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-black text-white text-center mb-12 transition-all duration-1000 ${
              isVisible.requirements
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            متطلبات <span className="text-red-400">الشراء بالجملة</span>
          </h2>

          <p
            className={`text-xl text-white/90 text-center mb-8 transition-all duration-1000 delay-200 ${
              isVisible.requirements
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            يجب أن ينطبق الشروط الآتية{" "}
            <span className="text-amber-400 font-bold">(حسب طبيعة المنتج)</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 border border-white/10 hover:border-white/30 overflow-hidden ${
                  isVisible.requirements
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${req.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div className="text-7xl mb-4 group-hover:scale-125 transition-transform duration-500">
                    {req.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {req.title}
                  </h3>
                  <p className="text-3xl font-black text-amber-400">
                    {req.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Rates */}
      <section
        ref={(el) => (sectionRefs.current.commission = el)}
        className="relative z-10 py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-black text-white text-center mb-12 transition-all duration-1000 ${
              isVisible.commission
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            رسوم <span className="text-amber-400">الخدمة</span>
          </h2>

          <div
            className={`bg-gradient-to-br from-blue-900/80 to-blue-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 mb-12 border-2 border-blue-400/30 text-center transition-all duration-1000 delay-200 ${
              isVisible.commission
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-6xl mb-4">💵</div>
            <h3 className="text-3xl font-bold text-white mb-4">
              عربون مسبق: <span className="text-amber-400">99$</span>
            </h3>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              يخصم من قيمة الطلب النهائي • تدفع مسبقاً قبل البدء في الخدمة لضمان
              الجدية
              <br />
              <span className="text-green-300 font-semibold">
                يشمل: البحث عن موردين • التفاوض على الأسعار • تنسيق الشحن
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {commissionRates.map((rate, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 border-2 border-white/10 hover:border-amber-500/50 overflow-hidden ${
                  isVisible.commission
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${rate.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-300 mb-4">
                    نطاق قيمة الطلب
                  </h3>
                  <p className="text-2xl font-bold text-white mb-6">
                    {rate.range}
                  </p>
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                    {rate.rate}
                  </div>
                  <p className="text-sm text-gray-400 mt-4">نسبة العمولة</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-amber-500/30 text-center transition-all duration-1000 delay-1000 ${
              isVisible.commission
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg text-amber-300 font-semibold">
              💡 النسبة المئوية تحسب على سعر الطلب النهائي وتضاف إليه
            </p>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="relative z-10 py-16 px-4">
        <div className="text-center">
          <button
            onClick={() => window.open("https://wa.me/+962787557794", "_blank")}
            className="group relative inline-block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-slate-900 px-16 py-5 rounded-2xl text-2xl md:text-3xl font-black hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-4 border-white/20 backdrop-blur-sm overflow-hidden cursor-pointer shadow-2xl animate-fadeInScale"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>ابدأ الآن</span>
              <span className="text-3xl">🚀</span>
            </span>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-800 ease-out"></div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
          </button>
        </div>
      </section>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Amiri:wght@400;700&display=swap");

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

        @keyframes pulseGlow {
          0% {
            text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
          }
          100% {
            text-shadow: 0 0 25px rgba(251, 191, 36, 0.9),
              0 0 40px rgba(251, 191, 36, 0.6);
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

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-fadeInScale {
          animation: fadeInScale 1s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
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
        @keyframes floatSubtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-float-subtle {
          animation: floatSubtle 6s ease-in-out infinite;
        }
        .animate-float-subtle:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
