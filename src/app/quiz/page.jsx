"use client";
import React, { useEffect, useRef, useState } from "react";

const FAQPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const sectionRefs = useRef({});

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

  const faqCategories = [
    {
      category: "الخدمات ونطاق العمل",
      icon: "⚙️",
      color: "from-blue-500 to-blue-600",
      questions: [
        {
          q: "ما هي الخدمات التي تقدمونها؟",
          a: "نقدم لك: عروض أسعار تنافسية، مقارنة الأسعار والتفاوض، تأكيد السعر وإصدار فاتورة رسمية، متابعة الطلب خطوة بخطوة، فحص الجودة، تجهيز وشحن الطلب عبر شركات موثوقة مع تزويدك بالصور والفيديوهات عند الحاجة."
        },
        {
          q: "ما هي الخدمات الإضافية التي تقدمونها؟",
          a: "نقدّم خدمات تجارية بالجملة فقط. الطلبات الشخصية/السياحية، الترجمة، المرافقة التجارية والطلابية وأيضاً المرضية مع الترجمة اللغوية الفورية."
        },
        {
          q: "هل لديكم خدمات سياحية؟",
          a: "نقدّم خدمات السياحة في شمال الصين وأيضاً خدمات مرافقة تجارية وسياحية ومرضية وأيضاً مرافقة الطلاب."
        },
        {
          q: "هل تقومون بتصميم منتجات مخصصة بالكامل من الصفر؟",
          a: "بالنسبة لطلبات تصميم الملابس من الصفر مثل العبايات أو الملابس بتصاميم مخصصة بالكامل، نعتذر حالياً عن تلبية هذا النوع من الطلبات. أما بالنسبة لطلبات التخصيص البسيطة على موديلات جاهزة (مثل إضافة شعار أو ليبل، أو تغيير لون أو قماش)، فيسعدنا العمل على مثل هذه الطلبات."
        },
        {
          q: "ما هي الدول التي تشحنون إليها؟",
          a: "خدمات الشراء والشحن من الصين متاحة حالياً للدول التالية: السعودية، الإمارات، قطر، البحرين، الكويت، عمان، الأردن، فلسطين، لبنان، سوريا، العراق، اليمن، ليبيا، تونس، الجزائر، المغرب. إذا لم تكن دولتكم ضمن القائمة، فنحن نعتذر عن عدم قدرتنا على خدمتكم في الوقت الحالي ونتمنى أن تتاح لنا الفرصة للتعاون معكم مستقبلاً."
        },
        {
          q: "هل تقدمون استشارات أو مقترحات لاختيار منتجات؟",
          a: "نحن لا نقدم مقترحات محددة للمنتجات، لأن اختيار المنتج يعتمد على عوامل عدة منها ذوق التاجر، طبيعة السوق المستهدف، والميزانية. ننصح دائماً بعمل دراسة وبحث مسبق، والاطلاع على المنصات العالمية مثل أمازون، علي إكسبرس، وعلي بابا للحصول على فكرة أوضح حول المنتجات المطلوبة."
        }
      ]
    },
    {
      category: "الأسعار والطلبات",
      icon: "💰",
      color: "from-green-500 to-green-600",
      questions: [
        {
          q: "هل يمكن الاستيراد بالقطعة / كمية قليلة؟",
          a: "فقط إذا كانت تستوفي شروط الاستيراد الموضحة (الحد الأدنى 1500$ و1 متر مكعب). أما إذا كانت أقل من ذلك نعتذر، نحن متخصصون بطلبات الجملة فقط."
        },
        {
          q: "هل لديكم قائمة أسعار أو كتالوج جاهز للمنتجات؟",
          a: "لا، لا توجد لدينا عروض أسعار جاهزة أو مواصفات محددة مسبقاً. نتلقى يومياً العديد من الطلبات المختلفة، وكل طلب يتم تخصيص الخدمة والوقت له بشكل منفصل. السعر يعتمد بشكل أساسي على الكمية المطلوبة والمواصفات."
        },
        {
          q: "لماذا أحتاج لتحديد الكمية والميزانية قبل الحصول على سعر؟",
          a: "خبرتنا وعلاقاتنا مع المصانع تساعدنا في الحصول على أفضل الأسعار، لكن السعر يعتمد أولاً وأخيراً على كمية الطلب؛ فكلما زادت الكمية، قل السعر. تزويدنا بالكمية والميزانية والسعر المتوقع يساعدنا في توفير طلبك بأفضل شكل ممكن وإعلامك إذا كان السعر المطلوب منطقياً ومتوفراً في الصين."
        }
      ]
    },
    {
      category: "آلية الدفع والعربون",
      icon: "💳",
      color: "from-amber-500 to-amber-600",
      questions: [
        {
          q: "لماذا تطلبون عربوناً قبل البدء؟ وما هو الضمان؟",
          a: "نعتمد نظام العربون المسبق لإثبات الجدية والالتزام من الطرفين نظراً لكثرة الطلبات، ولتخصيص الخدمة والجهد لكل طلب. العربون يتم خصمه من قيمة الطلب النهائية عند إتمام الشراء. هذا العربون هو إثبات جدية، ونحن نحرص على تقديم خدمة احترافية وواضحة في كل الخطوات."
        },
        {
          q: "ما هي آلية الدفع المعتمدة للطلبات؟",
          a: "الدفع يتم على عدة مراحل: أولاً دفع عربون رمزي لبدء التعاون، ثم دفع قيمة العينات (إن وجدت)، وبعدها دفع كامل قيمة الطلب بالجملة مقدماً، وأخيراً دفع تكلفة الشحن عند وصول البضاعة أو حسب سياسة شركة الشحن."
        }
      ]
    },
    {
      category: "الشحن والتوصيل",
      icon: "🚢",
      color: "from-cyan-500 to-cyan-600",
      questions: [
        {
          q: "ما هو دوركم في عملية الشحن؟ وهل أنتم شركة شحن؟",
          a: "نحن لسنا شركة شحن. دورنا كشركة استيراد هو الشراء والفحص وتنسيق عملية الشحن نيابة عن العميل عبر شركات شحن موثوقة. مكتبنا الرئيسي في قوانزو، ونتعامل مع شركات شحن في معظم الدول العربية لتنسيق الإجراءات."
        },
        {
          q: "كيف يتم تحديد تكاليف الشحن؟",
          a: "تعتمد تكاليف الشحن بشكل أساسي على نوع البضاعة، حجمها، ووزنها. لا يمكن تحديد السعر النهائي بدون معرفة تفاصيل الطلب. نحن نسعى لمقارنة عروض الأسعار بين أكثر من شركة شحن لاختيار أفضل سعر مناسب. بشكل عام، الحد الأدنى للشحن البحري هو 1 متر مكعب."
        },
        {
          q: "هل تكاليف الشحن والجمارك ضمن مسؤوليتكم؟",
          a: "لا، تكاليف الشحن والجمارك خارجة عن مسؤوليتنا لأننا بطبيعة الحال لسنا شركة شحن، نحن نزودك بتكلفة الشحن والتخليص الجمركي التي تقدمها شركات الشحن المعتمدة."
        },
        {
          q: "هل سرعة وصول البضاعة مضمونة من طرفكم؟",
          a: "سرعة وصول البضاعة ليست ضمن مسؤوليتنا، إذ تعتمد على عوامل متغيرة لا يمكن التحكم فيها مثل: الإجراءات في الموانئ، التخليص الجمركي، والعوامل الجوية والبحرية. دورنا هو التنسيق مع شركة الشحن فقط."
        }
      ]
    }
  ];

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-slate-600 via-blue-800 to-slate-700 overflow-hidden"
      style={{ fontFamily: "Cairo, Amiri, sans-serif" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 text-6xl animate-float1">❓</div>
        <div className="absolute top-40 right-20 text-7xl animate-float2">💡</div>
        <div className="absolute bottom-32 left-1/4 text-6xl animate-float3">📋</div>
        <div className="absolute bottom-20 right-1/3 text-7xl animate-float4">✨</div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mb-6 drop-shadow-2xl animate-fadeInUp">
            الأسئلة الشائعة
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
            إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      {faqCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          ref={(el) => (sectionRefs.current[`category-${categoryIndex}`] = el)}
          className="relative z-10 py-12 px-4"
        >
          <div className="max-w-5xl mx-auto">
            {/* Category Title */}
            <div
              className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${
                isVisible[`category-${categoryIndex}`]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-5xl">{category.icon}</div>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                {category.category}
              </h2>
            </div>

            {/* Questions */}
            <div className="space-y-4">
              {category.questions.map((faq, qIndex) => {
                const faqId = `faq-${categoryIndex}-${qIndex}`;
                return (
                  <div
                    key={qIndex}
                    className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 border border-white/10 hover:border-white/30 ${
                      isVisible[`category-${categoryIndex}`]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${qIndex * 100}ms` }}
                  >
                    {/* Question Header - Clickable */}
                    <div
                      onClick={() => {
                        setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
                      }}
                      className="p-6 cursor-pointer hover:bg-white/5 transition-all duration-300"
                    >
                      {/* Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                      ></div>

                      <div className="relative z-10 flex items-center justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          {/* Question Icon */}
                          <div className="text-2xl mt-1 flex-shrink-0">❓</div>

                          {/* Question Text */}
                          <h3 className="text-lg md:text-xl font-bold text-white">
                            {faq.q}
                          </h3>
                        </div>

                        {/* Arrow Icon */}
                        <div
                          className={`transition-transform duration-300 text-amber-400 text-xl flex-shrink-0 ${
                            expandedFAQ === faqId ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Answer - Expandable */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        expandedFAQ === faqId
                          ? "max-h-[800px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 border-t border-white/10">
                        <div className="mt-4 flex items-start gap-3">
                          <div className="text-2xl flex-shrink-0">✅</div>
                          <p className="text-gray-200 leading-relaxed text-base md:text-lg">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full pointer-events-none"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Contact CTA */}
      <section className="relative z-10 py-16 px-4">
        <div
          className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-amber-500/30 text-center"
        >
          <div className="text-6xl mb-6">🤔</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            لم تجد إجابة لسؤالك؟
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            تواصل معنا وسنكون سعداء لمساعدتك
          </p>
          <button
            onClick={() => window.open("", "_blank")}
            className="group relative inline-block bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white px-12 py-4 rounded-2xl text-xl md:text-2xl font-black hover:from-green-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-4 border-white/20 backdrop-blur-sm overflow-hidden cursor-pointer shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>تواصل معنا</span>
              <span className="text-2xl">📱</span>
            </span>

            {/* Animated shine effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-800 ease-out"></div>

            {/* Glowing border on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
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

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default FAQPage;