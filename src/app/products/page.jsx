"use client";
import React, { useEffect, useRef, useState } from "react";

const ProductsPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("workWith");
  const sectionRefs = useRef({});

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observers = {};
    ["hero", "tabs", "content", "cta"].forEach((key) => {
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

  const productsWeWorkWith = [
    {
      title: "قطع غيار السيارات",
      description: "قطع غيار سيارات من عدة ماركات",
      items: ["كفرات",  "قطع غيار بودي", "اكسسوارات السيارات", "قطع غيار السيارات الكهربائية "],
      note: "وفق شروط كل دولة",
      color: "from-blue-500 to-blue-600",
      icon: "⚙️"
    },
    {
      title: "أجهزة وإلكترونيات",
      description: "أجهزة إلكترونية متنوعة وفق شروط كل دولة",
      items: ["الأجهزة المنزلية", "أدوات القياس", "معدات الإضاءة", "أجهزة الأمان", "الأجهزة الطبية"],
      note: "وفق شروط كل دولة",
      color: "from-green-500 to-green-600",
      icon: "💻"
    },
    {
      title: "ملابس بأنواعها",
      description: "ملابس عالية الجودة لجميع الفئات والأعمار",
      items: ["ملابس رجالية", "ملابس نسائية", "ملابس أطفال", "ملابس رياضية", "ملابس عمل", "أزياء تقليدية"],
      color: "from-purple-500 to-purple-600",
      icon: "👔"
    },
    {
      title: "حقائب وإكسسوارات و الأحذية",
      description: "حقائب وإكسسوارات أنيقة وعملية",
      items: ["حقائب يد", "حقائب سفر", "محافظ", "أحزمة", "نظارات", "ساعات" ,"الأحذية المختلفة"],
      color: "from-amber-500 to-amber-600",
      icon: "👜"
    },
    {
      title: "مفروشات وأثاث",
      description: "أثاث منزلي ومكتبي عالي الجودة",
      items: ["أثاث غرف النوم", "أثاث الصالون", "طاولات الطعام", "مكتبات", "أثاث مكتبي", "ديكورات"],
      color: "from-cyan-500 to-cyan-600",
      icon: "🛋️"
    },
    {
      title: "منتجات منزلية وتنظيمية",
      description: "منتجات لتنظيم وتجميل المنزل",
      items: ["أدوات المطبخ", "أدوات التنظيف", "ديكورات الحائط", "الإضاءة", "السجاد"],
      color: "from-indigo-500 to-indigo-600",
      icon: "🏠"
    },
    {
      title: "الأدوات المكتبية و الدعائية",
      description: "قرطاسية و أدوات مكتبية",
      items: [ "بلاستيك", "ورق", "أحبار", "أدوات مكتبية", "قرطاسية"],
      color: "from-pink-500 to-pink-600",
      icon: "📦"
    },
    {
      title: "ألعاب",
      description: "ألعاب آمنة ومتنوعة للأطفال",
      items: ["ألعاب تعليمية", "ألعاب إلكترونية", "دمى", "ألعاب خارجية", "ألعاب تركيب", "ألعاب رياضية"],
      note: "وفق شروط كل دولة",
      color: "from-red-500 to-red-600",
      icon: "🎮"
    },
    {
      title: "منتجات الكوبي",
      description: "منتجات عالية الجودة",
      items: ["إكسسوارات", "ملابس", "حقائب", "أحذية", "ساعات", "نظارات"],
      note: "فقط في بعض الدول",
      color: "from-yellow-500 to-amber-500",
      icon: "✨"
    },
    {
      title: "مواد البناء",
      description: "معدات وأدوات أساسية لمختلف أعمال البناء",
      items: ["المطرقة", "أدوات السباكة", "أدوات النجارة", "أدوات الحدادة", "الأدوات الكهربائية"],
      color: "from-gray-500 to-gray-700",
      icon: "🛠️"
    },
    {
      title: "الإكسسوارات النسائية",
      description: "إكسسوارات أنيقة تضيف لمسة جمالية يومية",
      items: ["إكسسوارات الشعر", "القلائد والأساور والأقراط", "البكل والأمشاط", "إكسسوارات مختلفة"],
      color: "from-pink-500 to-pink-600",
      icon: "💍"
    },
    {
      title: "إكسسوارات الجوالات",
      description: "ملحقات عملية وأنيقة لحماية واستخدام أفضل للجوالات",
      items: ["كفرات الجوالات", "شواحن الجوالات", "مماسك الجوالات", "حماية الشاشة", "إكسسوارات مختلفة"],
      color: "from-blue-500 to-blue-600",
      icon: "📱"
    },
    
  ];

  const productsWeDontWorkWith = [
    {
      title: "أغذية ومشروبات",
      description: "جميع أنواع الطعام والشراب",
      items: ["الأطعمة المعلبة", "المشروبات", "الحلويات", "التوابل", "المكسرات", "الشاي والقهوة"],
      reason: "متطلبات صحية صارمة وشهادات معقدة",
      color: "from-red-500 to-red-600",
      icon: "🍔"
    },
    {
      title: "أدوية ومكملات غذائية",
      description: "الأدوية والمكملات الغذائية",
      items: ["الأدوية الطبية", "المكملات الغذائية", "الفيتامينات", "الأعشاب الطبية", "منتجات التجميل الطبية"],
      reason: "تتطلب تراخيص طبية خاصة وموافقات حكومية",
      color: "from-orange-500 to-red-500",
      icon: "💊"
    },
    {
      title: "مكياج وعناية شخصية",
      description: "منتجات التجميل والعناية الشخصية",
      items: ["مستحضرات التجميل", "كريمات البشرة", "الشامبو", "معجون الأسنان", "العطور", "منتجات العناية"],
      reason: "تتطلب شهادات صحية وموافقات خاصة",
      color: "from-pink-500 to-rose-600",
      icon: "💄"
    },
    {
      title: "مواد كيميائية أو قابلة للاشتعال",
      description: "المواد الكيميائية والخطرة",
      items: ["المواد الكيميائية", "الوقود", "الدهانات", "المذيبات", "المواد المتفجرة", "الغازات المضغوطة"],
      reason: "مواد خطرة تتطلب تراخيص خاصة وموافقات أمنية",
      color: "from-gray-700 to-gray-900",
      icon: "⚠️"
    },
    {
      title: "بطاريات ليثيوم غير آمنة",
      description: "البطاريات غير الآمنة أو بدون موافقات",
      items: ["بطاريات ليثيوم غير معتمدة", "البطاريات المستعملة", "البطاريات التالفة", "البطاريات بدون شهادات"],
      reason: "خطر الحريق والانفجار أثناء النقل",
      color: "from-gray-800 to-black",
      icon: "🔋"
    },
    {
      title: "إلكترونيات مقيدة",
      description: "أجهزة إلكترونية محددة",
      items: ["الهواتف المحمولة", "الباور بانك", "السماعات اللاسلكية", "أجهزة الإرسال", "أجهزة الراديو"],
      reason: "تتطلب موافقات خاصة وتراخيص تقنية",
      color: "from-blue-800 to-indigo-900",
      icon: "📱"
    },
    {
      title: "بضائع خطرة",
      description: "أي بضاعة تصنف خطرة",
      items: ["المواد المشعة", "المواد السامة", "المواد المتفجرة", "المواد القابلة للاشتعال", "المواد المسببة للتآكل"],
      reason: "مخاطر أمنية وصحية عالية",
      color: "from-black to-gray-900",
      icon: "☢️"
    },
  ];

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-slate-600 via-blue-800 to-slate-700 overflow-hidden"
      style={{ fontFamily: "Cairo, Amiri, sans-serif" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 text-6xl animate-float1">📦</div>
        <div className="absolute top-40 right-20 text-7xl animate-float2">✨</div>
        <div className="absolute bottom-32 left-1/4 text-6xl animate-float3">🏭</div>
        <div className="absolute bottom-20 right-1/3 text-7xl animate-float4">🚢</div>
        <div className="absolute top-1/2 left-1/5 text-5xl animate-float5">🎯</div>
        <div className="absolute top-1/3 right-1/4 text-6xl animate-float6">💼</div>
      </div>

      {/* Hero Section */}
      <section
        ref={(el) => (sectionRefs.current.hero = el)}
        className="relative z-10 pt-20 pb-12 px-4"
      >
        <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${
          isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h1 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mb-6 drop-shadow-2xl leading-tight">
            المنتجات التي نعمل معها
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            اكتشف نطاق المنتجات التي نتعامل معها والتي لا نتعامل معها
          </p>
        </div>
      </section>

      {/* Toggle Tabs */}
      <section
        ref={(el) => (sectionRefs.current.tabs = el)}
        className="relative z-10 px-4 mb-12"
      >
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible.tabs ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-2">
            <button
              onClick={() => setActiveTab("workWith")}
              className={`px-8 py-4 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === "workWith"
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl scale-105"
                  : "bg-slate-800/60 text-gray-300 hover:bg-slate-700/80 shadow-lg"
              }`}
            >
              ✅ المنتجات التي نعمل بها
            </button>
            <button
              onClick={() => setActiveTab("dontWorkWith")}
              className={`px-8 py-4 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === "dontWorkWith"
                  ? "bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-2xl scale-105"
                  : "bg-slate-800/60 text-gray-300 hover:bg-slate-700/80 shadow-lg"
              }`}
            >
              ❌ المنتجات التي لا نتعامل معها
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section
        ref={(el) => (sectionRefs.current.content = el)}
        className="relative z-10 px-4 pb-16"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-400 ${
          isVisible.content ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {activeTab === "workWith" ? (
            <>
              <p className="text-lg md:text-2xl text-white/90 text-center mb-12 font-semibold">
                نقدم خدمات الاستيراد لمجموعة واسعة من المنتجات عالية الجودة من الصين منها ما يلي:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsWeWorkWith.map((product, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 border border-white/10 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {!isMobile ? (
                      <div className="p-6 h-full flex flex-col">
                        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                        
                        <div className="relative z-10 flex items-center gap-3 mb-4">
                          <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{product.icon}</div>
                          <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">{product.title}</h3>
                        </div>
                        
                        <p className="text-gray-300 text-base mb-4 relative z-10">{product.description}</p>
                        
                        <div className="space-y-2 mb-4 flex-grow relative z-10">
                          {product.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-gray-200 text-sm group/item hover:text-green-300 transition-colors duration-200">
                              <span className="text-green-400 mt-0.5 text-base">•</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                        
                        {product.note && (
                          <div className="mt-auto pt-3 border-t border-white/10 relative z-10">
                            <p className="text-amber-400 text-xs font-semibold italic flex items-center gap-2">
                              <span className="text-base">⚠️</span>
                              {product.note}
                            </p>
                          </div>
                        )}
                        
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
                      </div>
                    ) : (
                      <>
                        <div
                          onClick={() => {
                            const newId = `work-${index}`;
                            setExpandedCategory(expandedCategory === newId ? null : newId);
                          }}
                          className="p-6 cursor-pointer hover:bg-white/5 transition-all duration-300"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
                          
                          <div className="relative z-10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="text-3xl">{product.icon}</div>
                              <h3 className="text-lg font-bold text-white">{product.title}</h3>
                            </div>
                            <div
                              className={`transition-transform duration-300 text-green-400 text-xl ${
                                expandedCategory === `work-${index}` ? "rotate-180" : ""
                              }`}
                            >
                              ▼
                            </div>
                          </div>
                        </div>
                        
                        <div
                          className={`overflow-hidden transition-all duration-500 ${
                            expandedCategory === `work-${index}`
                              ? "max-h-[700px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-6 border-t border-white/10">
                            <p className="text-gray-300 text-sm mb-4 mt-4">{product.description}</p>
                            <div className="space-y-2 mb-4">
                              {product.items.map((item, i) => (
                                <div key={i} className="flex items-start gap-2 text-gray-200 text-sm bg-white/5 rounded-lg p-2">
                                  <span className="text-green-400 mt-0.5">•</span>
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                            {product.note && (
                              <p className="text-amber-400 text-xs font-semibold italic bg-amber-500/10 p-3 rounded-lg">
                                ⚠️ {product.note}
                              </p>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="text-lg md:text-2xl text-white/90 text-center mb-12 font-semibold">
                لأسباب تتعلق باللوائح والقوانين، لا نتعامل مع المنتجات التالية
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {productsWeDontWorkWith.map((product, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 border border-white/10 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {!isMobile ? (
                      <div className="p-6 h-full flex flex-col">
                        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                        
                        <div className="relative z-10 flex items-center gap-3 mb-4">
                          <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{product.icon}</div>
                          <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors duration-300">{product.title}</h3>
                        </div>
                        
                        <p className="text-gray-300 text-base mb-4 relative z-10">{product.description}</p>
                        
                        <div className="space-y-2 mb-4 flex-grow relative z-10">
                          {product.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-gray-200 text-sm hover:text-red-300 transition-colors duration-200">
                              <span className="text-red-400 mt-0.5 text-base">•</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-auto pt-3 border-t border-red-500/20 relative z-10">
                          <p className="text-red-300 text-xs italic flex items-start gap-2 bg-red-500/10 p-3 rounded-lg">
                            <span className="text-base flex-shrink-0">⛔</span>
                            <span>{product.reason}</span>
                          </p>
                        </div>
                        
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
                      </div>
                    ) : (
                      <>
                        <div
                          onClick={() => {
                            const newId = `restrict-${index}`;
                            setExpandedCategory(expandedCategory === newId ? null : newId);
                          }}
                          className="p-6 cursor-pointer hover:bg-white/5 transition-all duration-300"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
                          
                          <div className="relative z-10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="text-3xl">{product.icon}</div>
                              <h3 className="text-lg font-bold text-white">{product.title}</h3>
                            </div>
                            <div
                              className={`transition-transform duration-300 text-red-400 text-xl ${
                                expandedCategory === `restrict-${index}` ? "rotate-180" : ""
                              }`}
                            >
                              ▼
                            </div>
                          </div>
                        </div>
                        
                        <div
                          className={`overflow-hidden transition-all duration-500 ${
                            expandedCategory === `restrict-${index}`
                              ? "max-h-[600px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-6 border-t border-white/10">
                            <p className="text-gray-300 text-sm mb-4 mt-4">{product.description}</p>
                            <div className="space-y-2 mb-4">
                              {product.items.map((item, i) => (
                                <div key={i} className="flex items-start gap-2 text-gray-200 text-sm bg-white/5 rounded-lg p-2">
                                  <span className="text-red-400 mt-0.5">•</span>
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                            <p className="text-red-300 text-xs italic bg-red-500/10 p-3 rounded-lg">
                              ⛔ {product.reason}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={(el) => (sectionRefs.current.cta = el)}
        className="relative z-10 py-16 px-4"
      >
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-600 ${
          isVisible.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-amber-500/30">
            <div className="text-6xl mb-6">🤔</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              هل لديك استفسار حول منتج معين؟
            </h3>
            <p className="text-base md:text-xl text-white/90 mb-8">
              تواصل معنا لمعرفة ما إذا كان بإمكاننا مساعدتك في استيراد منتجك المطلوب
            </p>
            <button
              onClick={() => window.open("", "_blank")}
              className="group relative inline-block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-slate-900 px-12 py-4 rounded-2xl text-xl md:text-2xl font-black hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-4 border-white/20 backdrop-blur-sm overflow-hidden cursor-pointer shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>تواصل معنا الآن</span>
                <span className="text-2xl">💬</span>
              </span>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-800 ease-out"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Amiri:wght@400;700&display=swap");

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

        .animate-float1 { animation: float1 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 7s ease-in-out infinite; }
        .animate-float3 { animation: float3 6.5s ease-in-out infinite; }
        .animate-float4 { animation: float4 7.5s ease-in-out infinite; }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
        .animate-fadeInScale { animation: fadeInScale 1s ease-out forwards; }
        .animation-delay-200 { animation-delay: 0.2s; opacity: 0; }
      `}</style>
    </div>
  );
};

export default ProductsPage;