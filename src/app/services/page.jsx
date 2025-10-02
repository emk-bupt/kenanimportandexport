"use client";
import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext"; // ✅ تأكد من مسار الملف

// ✅ كائن الترجمة الكامل (تم تضمينه هنا لسهولة الاستخدام)
const translations = {
  ar: {
    heroTitle: "خدماتنا المتكاملة",
    heroSubtitle: "ماذا سنقدم لك بعد حجز الخدمة؟",
    phase1: "المرحلة الأولى:",
    phase2: "المرحلة الثانية:",
    phase2Desc:
      "في حال تم الاتفاق على عرض الأسعار المقدم نتقل الى المرحلة الثانية والتي تشمل الخدمات التالية:",
    wholesaleTitle: "متطلبات الشراء بالجملة",
    wholesaleDesc: "يجب توفر الشروط الآتية ",
    productNatureNote: "(حسب طبيعة المنتج)",
    feesTitle: "الأتعاب والتكاليف",
    feesDesc: "يتم الاتفاق عليها بشكل مخصص حسب",
    orderNatureNote: "حسب طبيعة كل طلبية",
    productType: "نوع المنتج",
    productTypeDesc: "طبيعة وتعقيد المنتج",
    orderSize: "حجم الطلبية",
    orderSizeDesc: "الكمية وقيمة الطلب",
    effort: "الجهد المطلوب",
    effortDesc: "مستوى الخدمة والمتابعة",
    timeline: "المدة الزمنية",
    timelineDesc: "وقت التنفيذ والتسليم",
    transparencyNote:
      "شفافية كاملة: يتم الاتفاق على جميع التفاصيل والتكاليف قبل البدء في تنفيذ الطلبية",
    retailTitle: "خدمة الشراء بالتجزئة",
    retailDesc: "للكميات الصغيرة والمتوسطة",
    yourNeedsNote: "حسب احتياجاتك الخاصة",
    retailQuantity: "الكمية المطلوبة",
    retailFlexibility: "مرونة كاملة في الكميات",
    retailShipping: "طريقة الشحن",
    retailLCL: "شحن بحري للكميات الصغيرة أو جوي حسب طلب العميل",
    retailFees: "الأتعاب والعمولة",
    retailAgreed: "يتم الاتفاق عليها مسبقاً",
    retailBenefits: "مميزات خدمة التجزئة",
    benefit1: "مرونة في الكميات",
    benefit1Desc: "اطلب الكمية التي تحتاجها",
    benefit2: "شحن LCL اقتصادي",
    benefit2Desc: "توفير في تكاليف الشحن",
    benefit3: "جودة مضمونة",
    benefit3Desc: "نفس معايير الجودة العالية",
    benefit4: "خدمة سريعة",
    benefit4Desc: "معالجة فورية للطلبات",
    retailImportantNote: "ملاحظة مهمة",
    retailNoteText:
      "تختلف الأتعاب والعمولة حسب نوع المنتج، الكمية، وطبيعة الطلبية. يتم الاتفاق على التفاصيل والتكاليف قبل البدء في تنفيذ الخدمة لضمان الشفافية الكاملة.",
    commissionTitle: "عربون مسبق",
    commissionAmount: "99$",
    commissionDeducted: "يُخصم من قيمة الطلب النهائي",
    commissionPaid: "يُدفع مسبقاً قبل البدء في الخدمة لضمان الجدية",
    commissionIncludes: "يشمل العربون:",
    searchSuppliers: "البحث عن موردين",
    negotiate: "التفاوض",
    initialQuote: "عرض سعر مبدئي",
    commissionNote: "ملاحظة هامة:",
    commissionNoteText:
      "يتم تقديم خدمات المرحلة الأولى فقط، ويتم استكمال باقي الخدمات في حال حجز الطلبية (Order)",
    totalOrderValue: "قيمة الطلب الإجمالية",
    seaShipping: "الشحن البحري",
    airShipping: "الشحن الجوي",
    minOrderValue: "الحد الأدنى $1,500",
    minSeaShipping: "الحد الأدنى 1CBM",
    minAirShipping: "الحد الأدنى 25kg",
    countriesTitle: "الدول التي نخدمها",
    allArabCountries: "جميع الدول العربية",
    countries: {
      ae: "الإمارات",
      bh: "البحرين",
      tn: "تونس",
      dz: "الجزائر",
      sa: "السعودية",
      sd: "السودان",
      iq: "العراق",
      kw: "الكويت",
      ma: "المغرب",
      ye: "اليمن",
      jo: "الأردن",
      lb: "لبنان",
      om: "عُمان",
      ps: "فلسطين",
      qa: "قطر",
      sy: "سوريا",
      ly: "ليبيا",
      mr: "موريتانيا",
      eg: "مصر",
    },
    additionalTitle: "خدمات أخرى مميزة",
    fullDetails: "التفاصيل الكاملة:",
    ctaButton: "ابدأ الآن",
    serviceSteps: [
      {
        icon: "📞",
        title: "التواصل مع فريق الخدمات",
        description: "بعد حجز الخدمة، يتواصل معك فريقنا المتخصص لفهم احتياجاتك",
        details: [
          "تواصل فوري عبر واتساب",
          "فريق متخصص يتحدث العربية والصينية",
          "فهم دقيق لاحتياجاتك ومتطلباتك",
          "تقديم استشارة حول أفضل الخيارات",
        ],
        color: "from-blue-500 to-blue-600",
      },
      {
        icon: "🔍",
        title: "البحث عن المنتجات",
        description: "نبحث عن أفضل الموردين ونقدم لك الأسعار التنافسية",
        details: [
          "البحث في قاعدة بيانات تضم آلاف المصانع والموردين",
          "مقارنة الأسعار والجودة من مصادر متعددة",
          "التحقق من سمعة المورد وتقييماته",
          "تقديم تقرير مفصل بالخيارات المتاحة",
        ],
        color: "from-purple-500 to-purple-600",
      },
      {
        icon: "📊",
        title: "متابعة الطلب",
        description: "نتابع طلبك خطوة بخطوة لضمان سير العملية بسلاسة",
        details: [
          "تحديثات يومية عن حالة الطلب",
          "التنسيق المباشر مع المصانع",
          "حل أي مشاكل أو تأخيرات فوراً",
          "تقديم عرض الأسعار (حسب رغبة العميل)",
        ],
        color: "from-green-500 to-green-600",
      },
      {
        icon: "✅",
        title: "تأكيد الطلب وإصدار الفاتورة",
        description: "نؤكد الطلب معك ونصدر الفاتورة النهائية",
        details: [
          "مراجعة نهائية لكافة تفاصيل الطلب",
          "فاتورة واضحة بجميع التكاليف",
          "عقد تجاري محكم لحماية حقوقك",
          "ضمان الالتزام بالمواصفات المتفق عليها",
        ],
        color: "from-teal-500 to-teal-600",
      },
      {
        icon: "🔬",
        title: "فحص جودة المنتج",
        description: "خدمة فحص الجودة (برسوم إضافية حسب المنتج)",
        details: [
          "فحص شامل للمنتجات قبل الشحن",
          "التأكد من مطابقة المواصفات",
          "اختبار عينات عشوائية من الإنتاج",
          "تقرير مصور مفصل بنتائج الفحص",
          "وفي حال طلب العميل فحص البضاعة من شركة مستقله يضاف عليه رسوم مستقله خاصه بشركة الفحص",
        ],
        color: "from-orange-500 to-orange-600",
      },
      {
        icon: "🚚",
        title: "التجهيز والشحن",
        description: "نجهز طلبك ونشحنه بأفضل الطرق الملائمة لاحتياجاتك",
        details: [
          "التغليف الاحترافي حسب معايير الشحن الدولي",
          "اختيار أفضل شركة شحن بأنسب الأسعار",
          "تتبع الشحنة لحظة بلحظة",
          "التأكد من وصول الشحنة بأمان",
        ],
        color: "from-red-500 to-red-600",
      },
    ],
    additionalServices: [
      {
        icon: "📄",
        text: "ترجمة الوثائق والمستندات",
        details: [
          "ترجمة احترافية من العربية إلى الصينية أو العكس",
          "ترجمة العقود التجارية والفواتير",
          "ترجمة دليل المنتجات والكتالوجات",
          "ترجمة شهادات الجودة والمطابقة",
          "مراجعة دقيقة من مترجمين معتمدين",
        ],
        color: "from-indigo-500 to-indigo-600",
      },
      {
        icon: "🤝",
        text: "مرافقة التجار",
        details: [
          "مرافقة شخصية في زياراتك للمصانع والمعارض",
          "الترجمة الفورية أثناء الاجتماعات",
          "المساعدة في التفاوض والحصول على أفضل الأسعار",
          "تنظيم جدول الزيارات والمواعيد",
          "خدمات النقل والإقامة والتنسيق الكامل",
        ],
        color: "from-purple-500 to-purple-600",
      },
      {
        icon: "🏯",
        text: "السياحة في بكين",
        details: [
          "خدمة سياحية في بكين",
          "التفاوض على السعر حسب مدة الاتفاق (100$ يومياً)",
          "لا تشمل المواصلات أو الطعام أو الشراب و السكن",
        ],
        color: "from-pink-500 to-pink-600",
      },
      {
        icon: "🏥",
        text: "مرافقة في الصين",
        details: [
          "مرافقة المرضى للعلاج في المراكز الطبية",
          "مرافقة الطلاب للتسجيل أو التنسيق الأكاديمي",
          "التفاوض على السعر حسب المدة والمهمة",
        ],
        color: "from-teal-500 to-teal-600",
      },
      {
        icon: "☎️",
        text: "الترجمة الفورية عبر الهاتف",
        details: [
          "ترجمة فورية عبر الهاتف (عربي ↔ صيني)",
          "مثالية للمكالمات العاجلة أو الاجتماعات السريعة",
          "التفاوض على السعر حسب مدة المكالمة أو الاشتراك الشهري",
          "متوفرة على مدار الساعة حسب الحجز المسبق",
        ],
        color: "from-cyan-500 to-cyan-600",
      },
      {
        icon: "✅",
        text: "مصادقة الوثائق والشهادات في بكين",
        details: [
          "مصادقة رسمية للشهادات الأكاديمية والمهنية",
          "مصادقة لدى السفارة أو القنصلية",
          "ارسال المستندات عند الانتهاء من المصادقة",
        ],
        color: "from-green-500 to-green-600",
      },
      {
        icon: "💻",
        text: "تصميم المواقع التجارية",
        details: [
          "تصميم عصري يحتوي على كافة معلومات شركتك",
          "يدعم جميع المنصات (متجاوب مع الهواتف، الأجهزة اللوحية، وأجهزة الكمبيوتر)",
          "استخدام أحدث تقنيات تصميم المواقع",
        ],
        color: "from-sky-500 to-blue-600",
      },
    ],
  },
  en: {
    heroTitle: "Our Integrated Services",
    heroSubtitle: "What will we provide after booking the service?",
    phase1: "Phase One:",
    phase2: "Phase Two:",
    phase2Desc:
      "If the initial quote is agreed upon, we proceed to Phase Two, which includes the following services:",
    wholesaleTitle: "Wholesale Purchase Requirements",
    wholesaleDesc: "The following conditions must be met",
    productNatureNote: "(based on product type)",
    feesTitle: "Fees & Costs",
    feesDesc: "Customized based on each",
    orderNatureNote: "order's nature",
    productType: "Product Type",
    productTypeDesc: "Nature and complexity of the product",
    orderSize: "Order Size",
    orderSizeDesc: "Quantity and order value",
    effort: "Required Effort",
    effortDesc: "Service level and follow-up",
    timeline: "Timeline",
    timelineDesc: "Execution and delivery time",
    transparencyNote:
      "Full transparency: All details and costs are agreed upon before order execution.",
    retailTitle: "Retail Purchase Service",
    retailDesc: "For small and medium quantities",
    yourNeedsNote: "according to your specific needs",
    retailQuantity: "Required Quantity",
    retailFlexibility: "Full flexibility in quantities",
    retailShipping: "Shipping Method",
    retailLCL: "LCL sea shipping or air freight based on your request",
    retailFees: "Fees & Commission",
    retailAgreed: "Agreed upon in advance",
    retailBenefits: "Retail Service Benefits",
    benefit1: "Quantity Flexibility",
    benefit1Desc: "Order the quantity you need",
    benefit2: "Economical LCL Shipping",
    benefit2Desc: "Save on shipping costs",
    benefit3: "Guaranteed Quality",
    benefit3Desc: "Same high-quality standards",
    benefit4: "Fast Service",
    benefit4Desc: "Immediate order processing",
    retailImportantNote: "Important Note",
    retailNoteText:
      "Fees vary based on product type, quantity, and order nature. All details and costs are agreed upon before service execution to ensure full transparency.",
    commissionTitle: "Advance Deposit",
    commissionAmount: "$99",
    commissionDeducted: "Deducted from final order value",
    commissionPaid: "Paid upfront to confirm your commitment",
    commissionIncludes: "Deposit includes:",
    searchSuppliers: "Supplier Search",
    negotiate: "Negotiation",
    initialQuote: "Initial Quote",
    commissionNote: "Important Note:",
    commissionNoteText:
      "Only Phase One services are provided. Remaining services are delivered upon full order confirmation.",
    totalOrderValue: "Total Order Value",
    seaShipping: "Sea Shipping",
    airShipping: "Air Shipping",
    minOrderValue: "Minimum $1,500",
    minSeaShipping: "Minimum 1CBM",
    minAirShipping: "Minimum 25kg",
    countriesTitle: "Countries We Serve",
    allArabCountries: "All Arab Countries",
    countries: {
      ae: "UAE",
      bh: "Bahrain",
      tn: "Tunisia",
      dz: "Algeria",
      sa: "Saudi Arabia",
      sd: "Sudan",
      iq: "Iraq",
      kw: "Kuwait",
      ma: "Morocco",
      ye: "Yemen",
      jo: "Jordan",
      lb: "Lebanon",
      om: "Oman",
      ps: "Palestine",
      qa: "Qatar",
      sy: "Syria",
      ly: "Libya",
      mr: "Mauritania",
      eg: "Egypt",
    },
    additionalTitle: "Additional Premium Services",
    fullDetails: "Full Details:",
    ctaButton: "Get Started",
    serviceSteps: [
      {
        icon: "📞",
        title: "Contact Our Service Team",
        description:
          "After booking the service, our specialized team contacts you to understand your needs.",
        details: [
          "Instant communication via WhatsApp",
          "Specialized team fluent in Arabic & Chinese",
          "Precise understanding of your needs and requirements",
          "Consultation on the best available options",
        ],
        color: "from-blue-500 to-blue-600",
      },
      {
        icon: "🔍",
        title: "Product Sourcing",
        description:
          "We search for the best suppliers and offer you competitive pricing.",
        details: [
          "Search through a database of thousands of factories and suppliers",
          "Compare prices and quality from multiple sources",
          "Verify supplier reputation and reviews",
          "Provide a detailed report of available options",
        ],
        color: "from-purple-500 to-purple-600",
      },
      {
        icon: "📊",
        title: "Order Tracking",
        description:
          "We track your order step-by-step to ensure smooth execution.",
        details: [
          "Daily updates on order status",
          "Direct coordination with factories",
          "Immediate resolution of any issues or delays",
          "Provide quotation (upon client request)",
        ],
        color: "from-green-500 to-green-600",
      },
      {
        icon: "✅",
        title: "Order Confirmation & Invoice",
        description:
          "We confirm your order with you and issue the final invoice.",
        details: [
          "Final review of all order details",
          "Clear invoice with all costs",
          "Solid commercial contract to protect your rights",
          "Guarantee compliance with agreed specifications",
        ],
        color: "from-teal-500 to-teal-600",
      },
      {
        icon: "🔬",
        title: "Product Quality Inspection",
        description:
          "Quality inspection service (additional fees apply based on product).",
        details: [
          "Comprehensive product inspection before shipping",
          "Ensure compliance with specifications",
          "Random sampling from production batch",
          "Detailed photo report of inspection results",
          "If client requests independent inspection, additional fees apply",
        ],
        color: "from-orange-500 to-orange-600",
      },
      {
        icon: "🚚",
        title: "Preparation & Shipping",
        description:
          "We prepare and ship your order via the best suitable method for your needs.",
        details: [
          "Professional packaging per international shipping standards",
          "Select the best shipping company at the most suitable rates",
          "Real-time shipment tracking",
          "Ensure safe and secure delivery",
        ],
        color: "from-red-500 to-red-600",
      },
    ],
    additionalServices: [
      {
        icon: "📄",
        text: "Document Translation",
        details: [
          "Professional Arabic ↔ Chinese translation",
          "Translation of commercial contracts and invoices",
          "Translation of product manuals and catalogs",
          "Translation of quality and compliance certificates",
          "Reviewed by certified translators",
        ],
        color: "from-indigo-500 to-indigo-600",
      },
      {
        icon: "🤝",
        text: "Business Companion",
        details: [
          "Personal accompaniment to factories and exhibitions",
          "On-site interpretation during meetings",
          "Assistance in negotiation for best prices",
          "Schedule and appointment coordination",
          "Full coordination including transport and accommodation",
        ],
        color: "from-purple-500 to-purple-600",
      },
      {
        icon: "🏯",
        text: "Beijing Tourism",
        details: [
          "Tourism service in Beijing",
          "Price negotiable based on duration ($100/day)",
          "Does not include transport, food, drinks, or accommodation",
        ],
        color: "from-pink-500 to-pink-600",
      },
      {
        icon: "🏥",
        text: "Companion Services in China",
        details: [
          "Medical accompaniment for treatment",
          "Student accompaniment for registration & academic coordination",
          "Price negotiable based on duration & task",
        ],
        color: "from-teal-500 to-teal-600",
      },
      {
        icon: "☎️",
        text: "Phone Interpretation",
        details: [
          "Phone interpretation (Arabic ↔ Chinese)",
          "Ideal for urgent calls or quick meetings",
          "Pricing based on call duration or monthly subscription",
          "Available 24/7 with prior booking",
        ],
        color: "from-cyan-500 to-cyan-600",
      },
      {
        icon: "✅",
        text: "Document Authentication in Beijing",
        details: [
          "Official authentication of academic & professional certificates",
          "Authentication at embassy or consulate",
          "Documents sent upon completion of authentication",
        ],
        color: "from-green-500 to-green-600",
      },
      {
        icon: "💻",
        text: "E-commerce Website Design",
        details: [
          "Modern design featuring all your company information",
          "Fully responsive across all platforms (mobile, tablet, and desktop)",
          "Built with the latest web design technologies"
        ],
        color: "from-sky-500 to-blue-600"
      }
    ],
  },
  zh: {
    heroTitle: "我们的综合服务",
    heroSubtitle: "预订服务后，我们将为您提供什么？",
    phase1: "第一阶段：",
    phase2: "第二阶段：",
    phase2Desc: "如果同意初步报价，我们将进入第二阶段，包括以下服务：",
    wholesaleTitle: "批发采购要求",
    wholesaleDesc: "必须满足以下条件",
    productNatureNote: "（根据产品性质）",
    feesTitle: "费用与成本",
    feesDesc: "根据每笔订单的",
    orderNatureNote: "性质定制",
    productType: "产品类型",
    productTypeDesc: "产品的性质和复杂性",
    orderSize: "订单规模",
    orderSizeDesc: "数量和订单价值",
    effort: "所需工作量",
    effortDesc: "服务水平和跟进",
    timeline: "时间安排",
    timelineDesc: "执行和交付时间",
    transparencyNote: "完全透明：所有细节和费用在订单执行前达成一致。",
    retailTitle: "零售采购服务",
    retailDesc: "适用于小批量和中等批量,",
    yourNeedsNote: "根据您的特定需求",
    retailQuantity: "所需数量",
    retailFlexibility: "数量完全灵活",
    retailShipping: "运输方式",
    retailLCL: "根据您的要求提供LCL海运或空运",
    retailFees: "费用与佣金",
    retailAgreed: "提前约定",
    retailBenefits: "零售服务优势",
    benefit1: "数量灵活",
    benefit1Desc: "订购您需要的数量",
    benefit2: "经济型LCL运输",
    benefit2Desc: "节省运费成本",
    benefit3: "质量保证",
    benefit3Desc: "同样的高质量标准",
    benefit4: "快速服务",
    benefit4Desc: "立即处理订单",
    retailImportantNote: "重要提示",
    retailNoteText:
      "费用根据产品类型、数量和订单性质而异。所有细节和费用在服务执行前达成一致，以确保完全透明。",
    commissionTitle: "预付定金",
    commissionAmount: "99美元",
    commissionDeducted: "从最终订单金额中扣除",
    commissionPaid: "预先支付以确认您的承诺",
    commissionIncludes: "定金包括：",
    searchSuppliers: "供应商搜索",
    negotiate: "谈判",
    initialQuote: "初步报价",
    commissionNote: "重要提示：",
    commissionNoteText: "仅提供第一阶段服务。其余服务需在确认完整订单后提供。",
    totalOrderValue: "订单总价值",
    seaShipping: "海运",
    airShipping: "空运",
    minOrderValue: "最低1,500美元",
    minSeaShipping: "最低1CBM",
    minAirShipping: "最低25公斤",
    countriesTitle: "我们服务的国家",
    allArabCountries: "所有阿拉伯国家",
    countries: {
      ae: "阿联酋",
      bh: "巴林",
      tn: "突尼斯",
      dz: "阿尔及利亚",
      sa: "沙特阿拉伯",
      sd: "苏丹",
      iq: "伊拉克",
      kw: "科威特",
      ma: "摩洛哥",
      ye: "也门",
      jo: "约旦",
      lb: "黎巴嫩",
      om: "阿曼",
      ps: "巴勒斯坦",
      qa: "卡塔尔",
      sy: "叙利亚",
      ly: "利比亚",
      mr: "毛里塔尼亚",
      eg: "埃及",
    },
    additionalTitle: "其他优质服务",
    fullDetails: "完整详情：",
    ctaButton: "立即开始",
    serviceSteps: [
      {
        icon: "📞",
        title: "联系我们的服务团队",
        description: "预订服务后，我们的专业团队将联系您以了解您的需求。",
        details: [
          "通过 WhatsApp 即时沟通",
          "精通阿拉伯语和中文的专业团队",
          "准确理解您的需求和要求",
          "提供最佳选择的咨询",
        ],
        color: "from-blue-500 to-blue-600",
      },
      {
        icon: "🔍",
        title: "产品采购",
        description: "我们寻找最佳供应商并提供有竞争力的价格。",
        details: [
          "在数千家工厂和供应商数据库中搜索",
          "从多个来源比较价格和质量",
          "核实供应商的声誉和评价",
          "提供可用选项的详细报告",
        ],
        color: "from-purple-500 to-purple-600",
      },
      {
        icon: "📊",
        title: "订单跟踪",
        description: "我们逐步跟踪您的订单，确保流程顺利进行。",
        details: [
          "每日订单状态更新",
          "与工厂直接协调",
          "立即解决任何问题或延误",
          "提供报价（根据客户要求）",
        ],
        color: "from-green-500 to-green-600",
      },
      {
        icon: "✅",
        title: "订单确认与发票",
        description: "我们与您确认订单并开具最终发票。",
        details: [
          "最终审核所有订单细节",
          "清晰列明所有费用的发票",
          "保护您权益的严谨商业合同",
          "保证符合约定规格",
        ],
        color: "from-teal-500 to-teal-600",
      },
      {
        icon: "🔬",
        title: "产品质量检验",
        description: "质量检验服务（根据产品收取额外费用）。",
        details: [
          "发货前全面产品检验",
          "确保符合规格",
          "从生产批次中随机抽样",
          "检验结果的详细图文报告",
          "如客户要求独立公司检验，将收取额外检验费",
        ],
        color: "from-orange-500 to-orange-600",
      },
      {
        icon: "🚚",
        title: "准备与发货",
        description: "我们按照最适合您需求的方式准备并发货您的订单。",
        details: [
          "按国际运输标准专业包装",
          "选择价格最优的货运公司",
          "实时追踪货物",
          "确保安全送达",
        ],
        color: "from-red-500 to-red-600",
      },
    ],
    additionalServices: [
      {
        icon: "📄",
        text: "文件翻译",
        details: [
          "专业阿拉伯语 ↔ 中文翻译",
          "商业合同和发票翻译",
          "产品手册和目录翻译",
          "质量与合规证书翻译",
          "由认证翻译人员审核",
        ],
        color: "from-indigo-500 to-indigo-600",
      },
      {
        icon: "🤝",
        text: "商务陪同",
        details: [
          "工厂和展会参观个人陪同",
          "会议期间现场口译",
          "协助谈判以获得最佳价格",
          "行程和预约安排",
          "包括交通和住宿的全程协调",
        ],
        color: "from-purple-500 to-purple-600",
      },
      {
        icon: "🏯",
        text: "北京旅游",
        details: [
          "北京旅游服务",
          "价格根据时长协商（100美元/天）",
          "不包括交通、餐饮和住宿",
        ],
        color: "from-pink-500 to-pink-600",
      },
      {
        icon: "🏥",
        text: "中国陪同服务",
        details: [
          "医疗陪同治疗",
          "学生注册和学术协调陪同",
          "价格根据时长和任务协商",
        ],
        color: "from-teal-500 to-teal-600",
      },
      {
        icon: "☎️",
        text: "电话口译",
        details: [
          "电话口译（阿拉伯语 ↔ 中文）",
          "适合紧急电话或快速会议",
          "按通话时长或月度订阅定价",
          "提前预约，24/7 可用",
        ],
        color: "from-cyan-500 to-cyan-600",
      },
      {
        icon: "✅",
        text: "北京文件认证",
        details: [
          "学术和专业证书官方认证",
          "使馆或领事馆认证",
          "认证完成后发送文件",
        ],
        color: "from-green-500 to-green-600",
      },
      {
        icon: "💻",
        text: "商务网站设计",
        details: [
          "现代设计，全面展示公司信息",
          "全平台兼容（适配手机、平板和电脑）",
          "采用最新网站设计技术"
        ],
        color: "from-sky-500 to-blue-600"
      }
    ],
  },
  fr: {
    heroTitle: "Nos Services Intégrés",
    heroSubtitle: "Que vous offrons-nous après la réservation du service ?",
    phase1: "Phase Une :",
    phase2: "Phase Deux :",
    phase2Desc:
      "Si le devis initial est accepté, nous passons à la Phase Deux, qui comprend les services suivants :",
    wholesaleTitle: "Conditions d'Achat en Gros",
    wholesaleDesc: "Les conditions suivantes doivent être remplies",
    productNatureNote: "(selon la nature du produit)",
    feesTitle: "Frais et Coûts",
    feesDesc: "Personnalisés",
    orderNatureNote: "selon la nature de chaque commande",
    productType: "Type de produit",
    productTypeDesc: "Nature et complexité du produit",
    orderSize: "Taille de la commande",
    orderSizeDesc: "Quantité et valeur de la commande",
    effort: "Effort requis",
    effortDesc: "Niveau de service et suivi",
    timeline: "Calendrier",
    timelineDesc: "Temps d'exécution et de livraison",
    transparencyNote:
      "Transparence totale : Tous les détails et coûts sont convenus avant l'exécution de la commande.",
    retailTitle: "Service d'Achat au Détail",
    retailDesc: "Pour les petites et moyennes quantités",
    yourNeedsNote: "selon vos besoins spécifiques",
    retailQuantity: "Quantité requise",
    retailFlexibility: "Flexibilité totale sur les quantités",
    retailShipping: "Méthode d'expédition",
    retailLCL: "Expédition maritime LCL ou fret aérien selon votre demande",
    retailFees: "Frais et commission",
    retailAgreed: "Convenu à l'avance",
    retailBenefits: "Avantages du service au détail",
    benefit1: "Flexibilité des quantités",
    benefit1Desc: "Commandez la quantité dont vous avez besoin",
    benefit2: "Expédition LCL économique",
    benefit2Desc: "Économisez sur les frais d'expédition",
    benefit3: "Qualité garantie",
    benefit3Desc: "Mêmes normes de haute qualité",
    benefit4: "Service rapide",
    benefit4Desc: "Traitement immédiat des commandes",
    retailImportantNote: "Note importante",
    retailNoteText:
      "Les frais varient selon le type de produit, la quantité et la nature de la commande. Tous les détails et coûts sont convenus avant l'exécution du service pour garantir une transparence totale.",
    commissionTitle: "Acompte",
    commissionAmount: "99 $",
    commissionDeducted: "Déduit de la valeur finale de la commande",
    commissionPaid: "Payé à l'avance pour confirmer votre engagement",
    commissionIncludes: "L'acompte inclut :",
    searchSuppliers: "Recherche de fournisseurs",
    negotiate: "Négociation",
    initialQuote: "Devis initial",
    commissionNote: "Note importante :",
    commissionNoteText:
      "Seuls les services de la Phase Une sont fournis. Les services restants sont livrés après confirmation complète de la commande.",
    totalOrderValue: "Valeur totale de la commande",
    seaShipping: "Expédition maritime",
    airShipping: "Expédition aérienne",
    minOrderValue: "Minimum 1 500 $",
    minSeaShipping: "Minimum 1 CBM",
    minAirShipping: "Minimum 25 kg",
    countriesTitle: "Pays que nous desservons",
    allArabCountries: "Tous les pays arabes",
    countries: {
      ae: "Émirats Arabes Unis",
      bh: "Bahreïn",
      tn: "Tunisie",
      dz: "Algérie",
      sa: "Arabie Saoudite",
      sd: "Soudan",
      iq: "Irak",
      kw: "Koweït",
      ma: "Maroc",
      ye: "Yémen",
      jo: "Jordanie",
      lb: "Liban",
      om: "Oman",
      ps: "Palestine",
      qa: "Qatar",
      sy: "Syrie",
      ly: "Libye",
      mr: "Mauritanie",
      eg: "Égypte",
    },
    additionalTitle: "Services Premium Supplémentaires",
    fullDetails: "Détails complets :",
    ctaButton: "Commencer",
    serviceSteps: [
      {
        icon: "📞",
        title: "Contacter notre équipe service",
        description:
          "Après réservation, notre équipe spécialisée vous contacte pour comprendre vos besoins.",
        details: [
          "Communication instantanée via WhatsApp",
          "Équipe spécialisée parlant arabe et chinois",
          "Compréhension précise de vos besoins et exigences",
          "Conseil sur les meilleures options disponibles",
        ],
        color: "from-blue-500 to-blue-600",
      },
      {
        icon: "🔍",
        title: "Sourcing de produits",
        description:
          "Nous trouvons les meilleurs fournisseurs et vous proposons des prix compétitifs.",
        details: [
          "Recherche dans une base de données de milliers d'usines et fournisseurs",
          "Comparaison des prix et de la qualité de sources multiples",
          "Vérification de la réputation et des avis du fournisseur",
          "Rapport détaillé des options disponibles",
        ],
        color: "from-purple-500 to-purple-600",
      },
      {
        icon: "📊",
        title: "Suivi de commande",
        description:
          "Nous suivons votre commande étape par étape pour assurer un déroulement fluide.",
        details: [
          "Mises à jour quotidiennes sur l'état de la commande",
          "Coordination directe avec les usines",
          "Résolution immédiate de tout problème ou retard",
          "Fournir un devis (à la demande du client)",
        ],
        color: "from-green-500 to-green-600",
      },
      {
        icon: "✅",
        title: "Confirmation & facture",
        description:
          "Nous confirmons votre commande et émettons la facture finale.",
        details: [
          "Révision finale de tous les détails de la commande",
          "Facture claire avec tous les coûts",
          "Contrat commercial solide pour protéger vos droits",
          "Garantie de conformité aux spécifications convenues",
        ],
        color: "from-teal-500 to-teal-600",
      },
      {
        icon: "🔬",
        title: "Inspection qualité",
        description:
          "Service d'inspection qualité (frais supplémentaires selon le produit).",
        details: [
          "Inspection complète des produits avant expédition",
          "Vérification de la conformité aux spécifications",
          "Échantillonnage aléatoire de la production",
          "Rapport photo détaillé des résultats d'inspection",
          "Si le client demande une inspection indépendante, des frais supplémentaires s'appliquent",
        ],
        color: "from-orange-500 to-orange-600",
      },
      {
        icon: "🚚",
        title: "Préparation & expédition",
        description:
          "Nous préparons et expédions votre commande via la meilleure méthode adaptée à vos besoins.",
        details: [
          "Emballage professionnel selon les normes internationales",
          "Choix de la meilleure société de transport aux meilleurs tarifs",
          "Suivi en temps réel de l'expédition",
          "Assurer une livraison sécurisée",
        ],
        color: "from-red-500 to-red-600",
      },
    ],
    additionalServices: [
      {
        icon: "📄",
        text: "Traduction de documents",
        details: [
          "Traduction professionnelle arabe ↔ chinois",
          "Traduction de contrats commerciaux et factures",
          "Traduction de manuels et catalogues produits",
          "Traduction de certificats de qualité et conformité",
          "Révisé par des traducteurs certifiés",
        ],
        color: "from-indigo-500 to-indigo-600",
      },
      {
        icon: "🤝",
        text: "Accompagnement commercial",
        details: [
          "Accompagnement personnel dans vos visites d'usines et salons",
          "Interprétation sur place pendant les réunions",
          "Aide à la négociation pour obtenir les meilleurs prix",
          "Coordination des rendez-vous et planning",
          "Coordination complète incluant transport et hébergement",
        ],
        color: "from-purple-500 to-purple-600",
      },
      {
        icon: "🏯",
        text: "Tourisme à Pékin",
        details: [
          "Service touristique à Pékin",
          "Prix négociable selon la durée (100 $/jour)",
          "Ne comprend pas le transport, la nourriture, les boissons ou l'hébergement",
        ],
        color: "from-pink-500 to-pink-600",
      },
      {
        icon: "🏥",
        text: "Services d'accompagnement en Chine",
        details: [
          "Accompagnement médical pour traitement",
          "Accompagnement étudiant pour inscription et coordination académique",
          "Prix négociable selon la durée et la mission",
        ],
        color: "from-teal-500 to-teal-600",
      },
      {
        icon: "☎️",
        text: "Interprétation téléphonique",
        details: [
          "Interprétation téléphonique (arabe ↔ chinois)",
          "Idéale pour les appels urgents ou réunions rapides",
          "Tarification selon la durée de l'appel ou abonnement mensuel",
          "Disponible 24/7 sur réservation préalable",
        ],
        color: "from-cyan-500 to-cyan-600",
      },
      {
        icon: "✅",
        text: "Authentification de documents à Pékin",
        details: [
          "Authentification officielle des certificats académiques et professionnels",
          "Authentification à l'ambassade ou au consulat",
          "Documents envoyés à la fin de l'authentification",
        ],
        color: "from-green-500 to-green-600",
      },
      {
        icon: "💻",
        text: "Conception de sites web commerciaux",
        details: [
          "Design moderne intégrant toutes les informations de votre entreprise",
          "Compatible avec toutes les plateformes (mobile, tablette et ordinateur)",
          "Réalisation avec les dernières technologies de conception web"
        ],
        color: "from-sky-500 to-blue-600"
      }
    ],
  },
};

const ServicesPage = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.ar;

  const [isVisible, setIsVisible] = useState({});
  const [expandedService, setExpandedService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef({});

  const StepCard = ({
    step,
    index,
    isVisible,
    isMobile,
    expandedService,
    setExpandedService,
  }) => {
    return (
      <div
        className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 border border-white/10 hover:border-white/30 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
              </div>
            </div>
            <div className="px-6 pb-6 border-t border-white/10">
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="space-y-2">
                <h4 className="text-amber-400 font-bold text-sm mb-3">
                  {t.fullDetails}
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
                  expandedService === `main-${index}` ? null : `main-${index}`
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
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                </div>
                <div
                  className={`transition-transform duration-300 text-amber-400 text-xl ${
                    expandedService === `main-${index}` ? "rotate-180" : ""
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
                    {t.fullDetails}
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
    );
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  // ✅ Use translated data
  const serviceSteps = t.serviceSteps;
  const additionalServices = t.additionalServices;
  const countries = Object.entries(t.countries).map(([code, name]) => ({
    code,
    name,
  }));

  const requirements = [
    {
      icon: "💰",
      title: t.totalOrderValue,
      value: lang === "ar" ? "الحد الأدنى $1,500" : t.minOrderValue,
      color: "from-green-500 to-green-600",
    },
    {
      icon: "🚢",
      title: t.seaShipping,
      value: lang === "ar" ? "الحد الأدنى 1CBM" : t.minSeaShipping,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "✈️",
      title: t.airShipping,
      value: lang === "ar" ? "الحد الأدنى 25kg" : t.minAirShipping,
      color: "from-cyan-500 to-cyan-600",
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

      {/* Hero */}
      <section className="relative z-10 pt-20 pb-2 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mb-6 drop-shadow-2xl animate-fadeInUp">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
            {t.heroSubtitle}
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
            {t.phase1}
            <span className="text-amber-400"> </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceSteps.slice(0, 3).map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                isVisible={isVisible.steps}
                isMobile={isMobile}
                expandedService={expandedService}
                setExpandedService={setExpandedService}
              />
            ))}
          </div>

          {/* Commission Card */}
          <div
            className={`mt-6 transition-all duration-1000 delay-200 ${
              isVisible.steps
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-amber-500/30 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="text-4xl md:text-5xl">💵</div>
                <div className="text-center md:text-right">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {t.commissionTitle}
                  </h3>
                  <div className="inline-block px-5 py-2 bg-emerald-600 rounded-full">
                    <span className="text-2xl md:text-3xl font-black text-white">
                      {t.commissionAmount}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 max-w-5xl mx-auto">
                <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/50">
                  <p className="text-lg md:text-xl text-white font-bold text-center">
                    {t.commissionDeducted}
                  </p>
                  <p className="text-base text-gray-300 text-center mt-2">
                    {t.commissionPaid}
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/50">
                  <h4 className="text-lg font-bold text-amber-400 mb-3 text-center">
                    ✨ {t.commissionIncludes}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-slate-600/50 rounded-lg p-3 text-center border border-slate-500/30 hover:border-amber-500/50 transition-all">
                      <div className="text-2xl mb-1">🔍</div>
                      <p className="text-white font-semibold text-sm">
                        {t.searchSuppliers}
                      </p>
                    </div>
                    <div className="bg-slate-600/50 rounded-lg p-3 text-center border border-slate-500/30 hover:border-amber-500/50 transition-all">
                      <div className="text-2xl mb-1">🤝</div>
                      <p className="text-white font-semibold text-sm">
                        {t.negotiate}
                      </p>
                    </div>
                    <div className="bg-slate-600/50 rounded-lg p-3 text-center border border-slate-500/30 hover:border-amber-500/50 transition-all">
                      <div className="text-2xl mb-1">📊</div>
                      <p className="text-white font-semibold text-sm">
                        {t.initialQuote}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-900/30 rounded-xl p-4 border-2 border-red-500/40">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl flex-shrink-0">⚠️</div>
                    <div>
                      <h4 className="text-base font-bold text-red-300 mb-2">
                        {t.commissionNote}
                      </h4>
                      <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                        {t.commissionNoteText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-black text-white text-center mb-12 transition-all duration-1000 mt-5 ${
              isVisible.steps
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {t.phase2}
            <span className="text-amber-400"> </span>
          </h2>
          <p
            className={`text-white font-bold text-2xl text-center mb-12 transition-all duration-1000 delay-200 ${
              isVisible.steps
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {t.phase2Desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {serviceSteps.slice(3).map((step, index) => (
              <StepCard
                key={index + 3}
                step={step}
                index={index + 3}
                isVisible={isVisible.steps}
                isMobile={isMobile}
                expandedService={expandedService}
                setExpandedService={setExpandedService}
              />
            ))}
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
            {t.wholesaleTitle}
            <span className="text-red-400"> </span>
          </h2>
          <p
            className={`text-xl text-white/90 text-center mb-8 transition-all duration-1000 delay-200 ${
              isVisible.requirements
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {t.wholesaleDesc}{" "}
            <span className="text-amber-400 font-bold">
              {t.productNatureNote}
            </span>
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

      {/* Fees */}
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
            {t.feesTitle}
            <span className="text-amber-400"> </span>
          </h2>
          <p
            className={`text-xl text-white/90 text-center mb-8 transition-all duration-1000 delay-200 ${
              isVisible.commission
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {t.feesDesc}{" "}
            <span className="text-amber-400 font-bold">
              {t.orderNatureNote}
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div
              className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 border border-white/10 hover:border-white/30 overflow-hidden ${
                isVisible.commission
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-4 group-hover:scale-125 transition-transform duration-500">
                  📦
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.productType}
                </h3>
                <p className="text-lg text-amber-400 font-semibold">
                  {t.productTypeDesc}
                </p>
              </div>
            </div>
            <div
              className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 border border-white/10 hover:border-white/30 overflow-hidden ${
                isVisible.commission
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-4 group-hover:scale-125 transition-transform duration-500">
                  📊
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.orderSize}
                </h3>
                <p className="text-lg text-amber-400 font-semibold">
                  {t.orderSizeDesc}
                </p>
              </div>
            </div>
            <div
              className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 border border-white/10 hover:border-white/30 overflow-hidden ${
                isVisible.commission
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-4 group-hover:scale-125 transition-transform duration-500">
                  🔍
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.effort}
                </h3>
                <p className="text-lg text-amber-400 font-semibold">
                  {t.effortDesc}
                </p>
              </div>
            </div>
            <div
              className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 border border-white/10 hover:border-white/30 overflow-hidden ${
                isVisible.commission
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-4 group-hover:scale-125 transition-transform duration-500">
                  ⏱️
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.timeline}
                </h3>
                <p className="text-lg text-amber-400 font-semibold">
                  {t.timelineDesc}
                </p>
              </div>
            </div>
          </div>
          <div
            className={`mt-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-amber-500/30 text-center transition-all duration-1000 delay-800 ${
              isVisible.commission
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg text-amber-300 font-semibold">
              💡 {t.transparencyNote}
            </p>
          </div>
        </div>
      </section>

      {/* Retail */}
      <section
        ref={(el) => (sectionRefs.current.retail = el)}
        className="relative z-10 py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-black text-white text-center mb-12 transition-all duration-1000 ${
              isVisible.retail
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {t.retailTitle}
            <span className="text-green-400"> </span>
          </h2>
          <p
            className={`text-xl text-white/90 text-center mb-8 transition-all duration-1000 delay-200 ${
              isVisible.retail
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {t.retailDesc}{" "}
            <span className="text-green-400 font-bold">{t.yourNeedsNote}</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div
              className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 border border-white/10 hover:border-green-400/30 overflow-hidden ${
                isVisible.retail
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-4 group-hover:scale-125 transition-transform duration-500">
                  🛒
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.retailQuantity}
                </h3>
                <p className="text-3xl font-black text-green-400">
                  {lang === "ar" ? "حسب الطلب" : "On Request"}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  {t.retailFlexibility}
                </p>
              </div>
            </div>
            <div
              className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 border border-white/10 hover:border-green-400/30 overflow-hidden ${
                isVisible.retail
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-4 group-hover:scale-125 transition-transform duration-500">
                  📦
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.retailShipping}
                </h3>
                <p className="text-3xl font-black text-green-400">LCL</p>
                <p className="text-sm text-gray-400 mt-2">{t.retailLCL}</p>
              </div>
            </div>
            <div
              className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 border border-white/10 hover:border-green-400/30 overflow-hidden ${
                isVisible.retail
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-4 group-hover:scale-125 transition-transform duration-500">
                  💰
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.retailFees}
                </h3>
                <p className="text-3xl font-black text-green-400">
                  {lang === "ar" ? "حسب الطلبية" : "Per Order"}
                </p>
                <p className="text-sm text-gray-400 mt-2">{t.retailAgreed}</p>
              </div>
            </div>
          </div>

          <div
            className={`bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-xl rounded-2xl p-8 border border-green-400/20 transition-all duration-1000 delay-600 ${
              isVisible.retail
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              ✨ {t.retailBenefits}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-2">🎯</div>
                <p className="text-white/90 font-semibold">{t.benefit1}</p>
                <p className="text-white/60 text-sm mt-1">{t.benefit1Desc}</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-2">🚢</div>
                <p className="text-white/90 font-semibold">{t.benefit2}</p>
                <p className="text-white/60 text-sm mt-1">{t.benefit2Desc}</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-2">💯</div>
                <p className="text-white/90 font-semibold">{t.benefit3}</p>
                <p className="text-white/60 text-sm mt-1">{t.benefit3Desc}</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-2">⚡</div>
                <p className="text-white/90 font-semibold">{t.benefit4}</p>
                <p className="text-white/60 text-sm mt-1">{t.benefit4Desc}</p>
              </div>
            </div>
          </div>

          <div
            className={`mt-6 bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-xl rounded-2xl p-6 border border-amber-500/30 transition-all duration-1000 delay-800 ${
              isVisible.retail
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="text-xl font-bold text-amber-400 mb-2">
                  {t.retailImportantNote}
                </h4>
                <p className="text-white/90 leading-relaxed">
                  {t.retailNoteText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries */}
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
            {t.countriesTitle}
            <span className="text-amber-400"> </span>
          </h2>
          <div
            className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 transition-all duration-1000 ${
              isVisible.countries
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl sm:text-xl font-bold text-center text-green-400 mb-8">
              🌍 {t.allArabCountries} 🌍
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl p-4 text-center text-white font-bold text-lg hover:scale-105 hover:bg-gradient-to-br hover:from-green-600/20 hover:to-green-700/20 transition-all duration-300 border border-white/5 flex items-center justify-center gap-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img
                    src={`https://flagcdn.com/w40/${country.code}.png`}
                    alt={`${country.name} Flag`}
                    className="w-10 h-6 object-cover rounded-sm"
                    loading="lazy"
                  />
                  <span>{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section
        ref={(el) => (sectionRefs.current.additional = el)}
        className="relative z-10 py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
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
            {t.additionalTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 border border-white/10 hover:border-white/30 ${
                  isVisible.additional
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {!isMobile ? (
                  <>
                    <div className="p-6 relative">
                      <div className="absolute top-3 left-3 bg-amber-500 text-slate-900 font-black rounded-full w-7 h-7 flex items-center justify-center text-xs border-2 border-white shadow-lg z-10">
                        {index + 1}
                      </div>
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
                          {t.fullDetails}
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
                      <div className="absolute top-3 left-3 bg-amber-500 text-slate-900 font-black rounded-full w-7 h-7 flex items-center justify-center text-xs border-2 border-white shadow-lg z-10">
                        {index + 1}
                      </div>
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
                            {t.fullDetails}
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

      {/* CTA */}
      <section className="relative z-10 py-16 px-4">
        <div className="text-center">
          <button
            onClick={() => window.open("https://wa.me/+8613681046887", "_blank")}
            className="group relative inline-block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-slate-900 px-16 py-5 rounded-2xl text-2xl md:text-3xl font-black hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-4 border-white/20 backdrop-blur-sm overflow-hidden cursor-pointer shadow-2xl animate-fadeInScale"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>{t.ctaButton}</span>
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
