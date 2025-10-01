"use client";
import React, { useState, useEffect } from "react";

const BlogPage = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Main featured paragraph with image
  const featuredContent = {
    title: "تخصصات المدن الصناعية والتجارية في الصين",
    short:
      "الصين تتميز بتوزيع صناعي متنوع على مدنها، حيث لكل مدينة تخصصات صناعية وتجارية محددة، ما يجعلها مركزاً عالمياً للإنتاج والتصدير...",
    full: `الصين تتميز بتوزيع صناعي متنوع على مدنها، حيث لكل مدينة تخصصات صناعية وتجارية محددة، ما يجعلها مركزاً عالمياً للإنتاج والتصدير. إليك نظرة عامة على أبرز المناطق:

**1. دلتا نهر اللؤلؤ (Guangdong, Fujian)**  
هذه المنطقة محور صناعي رئيسي في جنوب الصين، وتشمل:  
- **شنجن (Shenzhen)**: تصنيع إلكترونيات، هواتف ذكية، وتقنيات متقدمة لشركات عالمية مثل Tencent وHuawei وDJI.  
- **دونغقوان (Dongguan)**: تصنيع إلكترونيات، أثاث، أحذية، ويعد مركز تصنيع عالمي.  
- **قوانغتشو (Guangzhou)**: تجارة الجملة للسيارات، الكيماويات، والملابس.  
- **شيامن وفوزهو (Xiamen/Fuzhou)**: إلكترونيات، أثاث، ومنتجات بحرية.

**2. دلتا نهر اليانغتسي (Jiangsu, Zhejiang, Shanghai)**  
مركز صناعي وتجاري متنوع يشمل:  
- **شانغهاي (Shanghai)**: مركز مالي وتكنولوجيا متقدمة، سيارات، وطيران.  
- **سوتشو (Suzhou)**: إلكترونيات، تكنولوجيا نظيفة، أدوات طبية.  
- **نينغبو (Ningbo)**: صناعة السفن، البتروكيماويات، والمنسوجات.  
- **ييوو (Yiwu)**: أشهر سوق جملة عالمي للهدايا والمستلزمات المنزلية.  
- **ونتشو (Wenzhou)**: منتجات جلدية، أحذية، مباني جاهزة.

**3. المنطقة الشمالية (بكين، تيانجين، شاندونغ)**  
- **بكين (Beijing)**: تكنولوجيا، برمجيات، خدمات مالية وثقافية.  
- **تيانجين (Tianjin)**: طائرات، سيارات، إلكترونيات.  
- **تشينغداو (Qingdao)**: أجهزة منزلية، مثل Haier.

**4. الجنوب الغربي والوسطى (تشونغتشينغ، تشنغدو، ووهان)**  
- **تشونغتشينغ (Chongqing)**: تصنيع سيارات، دراجات نارية، إلكترونيات.  
- **تشنغدو (Chengdu)**: إلكترونيات، برمجيات، طيران.  
- **ووهان (Wuhan)**: حديد وصلب، سيارات، بصريات.

**5. الشمال الشرقي (Dongbei: شنيانغ، داليان)**  
- **شنيانغ (Shenyang) وداليان (Dalian)**: معدات ثقيلة، آلات، بناء السفن.

تمثل هذه التوزيعات الصناعية والتجارية القوة الاقتصادية للصين، حيث يمكن للمستوردين والمستثمرين اختيار المدن حسب نوع المنتج والتخصص المطلوب، مما يسهل عمليات الشراء والتصدير بشكل كبير.`,
    image: "/images/citys.jpg", // Replace with your map/image
  };

  const blogPosts = [
    {
      id: 1,
      title: "فهم أسعار التجارة الدولية (EXW, FOB, CIF, DDP)",
      short:
        "إذا كنت تفكر بالاستيراد من الصين، فهم أسعار التجارة الدولية أمر أساسي لتحديد التكلفة الحقيقية للبضاعة...",
      full: `إذا كنت تفكر بالاستيراد من الصين، فهم أسعار التجارة الدولية أمر أساسي لتحديد التكلفة الحقيقية للبضاعة. هناك أربع شروط رئيسية يجب معرفتها:

**EXW (Ex Works)**: هذا السعر يشمل فقط تكلفة المنتج داخل المصنع. كل شيء بعد ذلك، من النقل المحلي إلى الشحن الدولي والجمارك، يقع على عاتقك كمستورد.

**FOB (Free on Board)**: السعر يشمل توصيل البضاعة إلى ميناء التصدير داخل الصين وتحميلها على السفينة. بعد التحميل، تتحمل أنت المخاطر والتكاليف الإضافية.

**CIF (Cost, Insurance, Freight)**: السعر يشمل تكلفة المنتج، الشحن البحري، والتأمين حتى وصول البضاعة إلى ميناء بلدك. بعد الوصول، تتحمل الرسوم المحلية والنقل الداخلي.

**DDP (Delivered Duty Paid)**: السعر الأعلى لكنه الأكثر راحة، حيث يقوم المورد بكل شيء من الشحن والتأمين وحتى دفع الرسوم الجمركية وتسليم البضاعة إلى مستودعك أو بيتك.

اختيار النوع المناسب يعتمد على خبرتك، حجم الطلب، ودرجة استعدادك للتعامل مع الشحن والجمارك. EXW يعطيك مرونة كاملة لكنه يتطلب خبرة أكبر، بينما DDP مثالي للمبتدئين الذين يريدون حلاً شاملًا بدون تعقيدات.

معرفة هذه الشروط تساعدك على المقارنة بين عروض الموردين بشكل صحيح، وتجنب المفاجآت في التكلفة الإجمالية. دائمًا اسأل المورد: “ما هو شرط السعر المطبق؟” لتتمكن من حساب جميع التكاليف بشكل دقيق قبل الشراء.`,
    },
    // ... (keep all other blog posts as before)
    {
      id: 2,
      title: "العوامل المؤثرة على السعر",
      short:
        "ليس كل مصنع يقدم نفس السعر حتى لو كان المنتج متشابهًا. هناك عوامل متعددة تؤثر بشكل كبير على السعر النهائي...",
      full: `ليس كل مصنع يقدم نفس السعر حتى لو كان المنتج متشابهًا. هناك عوامل متعددة تؤثر بشكل كبير على السعر النهائي للبضاعة.

**الجودة**: كلما كان المنتج أفضل من حيث المواد أو التصميم، زاد السعر. على سبيل المثال، الفولاذ المقاوم للصدأ 304 أغلى من 201.  
**الكمية (حجم الطلب)**: الطلبات الكبيرة عادة تحصل على سعر أقل لكل وحدة بسبب “اقتصادات الحجم”، حيث يتم توزيع تكاليف الإنتاج على عدد أكبر من القطع.  
**التغليف**: التغليف العادي أرخص من التغليف الفردي المخصص أو الذي يحمل علامتك التجارية.  
**سرعة التسليم**: طلبات عاجلة تتطلب دفع رسوم إضافية للإنتاج السريع أو الشحن السريع.  
**المفاوضة**: مهارتك في التفاوض تحدد السعر النهائي، حيث يمكن لمورد متمرس أن يمنحك خصومات إضافية إذا كنت مستعدًا للعقد بشكل احترافي.

لا تعتمد فقط على الرقم الظاهر في عرض السعر، بل قارن دائمًا التفاصيل. السعر المنخفض قد يخفي تكاليف إضافية مثل الشحن أو التأمين، بينما السعر المرتفع أحيانًا يشمل خدمات إضافية مثل التفتيش أو التغليف المخصص.`,
    },
    {
      id: 3,
      title: "شروط الدفع الشائعة",
      short:
        "طرق الدفع تلعب دورًا كبيرًا في بناء الثقة مع الموردين الصينيين. غالبًا ما يطلب المصنعون شروطًا مثل...",
      full: `طرق الدفع تلعب دورًا كبيرًا في بناء الثقة مع الموردين الصينيين. غالبًا ما يطلب المصنعون شروطًا مثل:

**30% عربون + 70% بعد الإنتاج**: الأكثر شيوعًا للطلبيات الصغيرة والمتوسطة.  
**اعتماد بنكي (LC)**: يستخدم للطلبيات الكبيرة والمعقدة، يوفر حماية لكل من المورد والمستورد.

الالتزام بشروط الدفع يزيد من مصداقيتك ويتيح لك الحصول على عروض أفضل أو خصومات إضافية. بعض الموردين يمنحون مرونة أكبر للعملاء الملتزمين ويقدمون خدمات إضافية مثل التفتيش أو ترتيب الشحن.

تأكد دائمًا من توثيق كل الدفعيات والمراسلات لتجنب أي سوء تفاهم. طرق الدفع تختلف حسب حجم الطلب ونوع البضاعة والمورد، لذا استفسر دائمًا قبل توقيع أي عقد.`,
    },
   
    {
      id: 4,
      title: "خدمات الوسيط التجاري",
      short:
        "الوسيط التجاري يمثلك في الصين ويقدم خدمات شاملة لتسهيل الاستيراد...",
      full: `الوسيط التجاري يمثلك في الصين ويقدم خدمات شاملة لتسهيل الاستيراد، بما في ذلك:

- البحث عن الموردين المناسبين.  
- التفاوض على أفضل الأسعار وشروط الدفع.  
- متابعة الجودة والإنتاج في المصانع.  
- ترتيب الشحن والتخليص الجمركي.  
- خدمات إضافية مثل الترجمة والمرافقة التجارية داخل الصين.

الوسيط يوفر لك وقتك وجهدك ويقلل المخاطر المحتملة من التعامل المباشر مع الموردين.`,
    },
    {
      id: 5,
      title: 'ما هي "الستوكات" في إيوو؟',
      short:
        "الستوكات هي البضائع الفائضة أو بواقي الإنتاج، مثل عينات المعارض وفائض المواسم...",
      full: `الستوكات هي البضائع الفائضة أو بواقي الإنتاج، مثل:

- عينات المعارض.  
- فائض المواسم.  
- منتجات تم إرجاعها لكنها صالحة للاستخدام.

ميزتها أنها رخيصة جدًا ويمكن شراؤها بكميات صغيرة، ما يجعلها مناسبة للأعمال الصغيرة أو لتجربة منتجات جديدة.  
لكن الفحص الشخصي ضروري جدًا لتجنب البضائع المعيبة أو المنتجات غير المطابقة للمواصفات.`,
    },
    {
      id: 6,
      title: "الشحن البحري من الصين: كل ما تحتاج معرفته",
      short:
        "الشحن البحري هو الخيار الأكثر شيوعًا عند استيراد البضائع من الصين، خصوصًا للشحنات الكبيرة...",
      full: `الشحن البحري هو الخيار الأكثر شيوعًا عند استيراد البضائع من الصين، خصوصًا للشحنات الكبيرة والثقيلة. البضائع عادة توضع داخل حاويات على ظهر السفينة، ويتم نقلها من الميناء الصيني إلى ميناء بلدك. فهم كيفية إدارة هذه العملية يضمن وصول البضاعة بأمان وبتكلفة مناسبة.

**أنواع الحاويات وأهميتها**  
- **FCL (Full Container Load)**: حاوية كاملة مملوءة بالبضاعة الخاصة بك فقط. هذا الخيار يوفر أمانًا أكبر، خصوصًا إذا كانت البضاعة ثمينة أو حساسة.  
- **LCL (Less than Container Load)**: حاوية مشتركة بين عدة تجار. التكلفة أقل، لكن عملية التحميل والتفريغ قد تطول.

**عملية الشحن على ظهر السفينة**  
1. **التحميل**: نقل الحاويات إلى الميناء وتحميلها على السفينة.  
2. **النقل**: الحفاظ على البضاعة داخل الحاوية المحمية.  
3. **التفريغ**: تفريغ الحاويات في ميناء الوصول.

**المزايا**: تكلفة منخفضة، مناسبة للشحنات الكبيرة.  
**العيوب**: بطيء (20–40 يومًا)، قد يتأثر بالطقس السيئ.

**نصائح مهمة**:  
- استخدم شركة شحن موثوقة أو وسيط.  
- تحقق من شروط الشحن (FOB أم CIF).  
- غلف البضاعة جيدًا لتجنب التلف.`,
    },
  ];

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-slate-600 via-blue-800 to-slate-700 overflow-hidden"
      style={{ fontFamily: "Cairo, Amiri, sans-serif" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 text-6xl animate-float1">
          🏭
        </div>
        <div className="absolute top-40 right-20 text-7xl animate-float2">
          🗺️
        </div>
        <div className="absolute bottom-32 left-1/4 text-6xl animate-float3">
          📦
        </div>
        <div className="absolute bottom-20 right-1/3 text-7xl animate-float4">
          💡
        </div>
      </div>

      {/* Hero */}
      <section className="relative z-10 pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mb-6 drop-shadow-2xl leading-tight">
            التجارة من الصين
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            دليلك الشامل للاستيراد من الصين — نصائح، شروط، وأسرار التجارة
            الدولية
          </p>
        </div>
      </section>

      {/* Featured Section with Image */}
      <section className="relative z-10 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {featuredContent.title}
              </h2>

              {/* Clickable Image */}
              <div
                onClick={() => setImageModalOpen(true)}
                className="mb-6 cursor-pointer group/image relative overflow-hidden rounded-xl shadow-lg transition-all duration-300"
              >
                <img
                  src="/images/citys.jpg" // ✅ Correct path
                  alt="خريطة المدن الصناعية في الصين"
                  className="w-auto h-auto object-contain rounded-xl transition-opacity group-hover/image:opacity-90"
                />
                <p className="text-center text-gray-400 text-sm mt-2">
                  اضغط لعرض الصورة بحجم كبير
                </p>
              </div>

              <div className="prose prose-invert max-w-none">
                <p
                  className="text-gray-300 text-lg leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{
                    __html:
                      expandedId === "featured"
                        ? featuredContent.full
                            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                            .replace(/\n/g, "<br/>")
                        : featuredContent.short,
                  }}
                />
              </div>

              <button
                onClick={() =>
                  setExpandedId(expandedId === "featured" ? null : "featured")
                }
                className="mt-4 text-amber-400 font-bold hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                {expandedId === "featured" ? "إخفاء" : "عرض المزيد"}
                <span>{expandedId === "featured" ? "▲" : "▼"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 px-4">
        <div className="max-w-6xl mx-auto border-t border-white/10"></div>
      </div>

      {/* Other Blog Posts */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500"
            >
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {post.title}
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p
                    className="text-gray-300 text-lg leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{
                      __html:
                        expandedId === post.id
                          ? post.full
                              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                              .replace(/\n/g, "<br/>")
                          : post.short,
                    }}
                  />
                </div>

                <button
                  onClick={() =>
                    setExpandedId(expandedId === post.id ? null : post.id)
                  }
                  className="mt-4 text-amber-400 font-bold hover:text-amber-300 flex items-center gap-1 transition-colors"
                >
                  {expandedId === post.id ? "إخفاء" : "عرض المزيد"}
                  <span>{expandedId === post.id ? "▲" : "▼"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal (Popup) */}
      {imageModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setImageModalOpen(false)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={featuredContent.image}
              alt="خريطة المدن الصناعية في الصين"
              className="w-full h-auto object-contain"
            />
            <button
              onClick={() => setImageModalOpen(false)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="relative z-10 py-16 px-4">
        <div className="text-center">
          <button
            onClick={() => window.open("https://wa.me/+962787557794", "_blank")}
            className="group relative inline-block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-slate-900 px-12 py-4 rounded-2xl text-xl md:text-2xl font-black hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-4 border-white/20 backdrop-blur-sm overflow-hidden cursor-pointer shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>استفسر الآن</span>
              <span className="text-2xl">💬</span>
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

        .prose strong {
          color: #fbbf24;
          font-weight: bold;
        }
        .prose br {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
