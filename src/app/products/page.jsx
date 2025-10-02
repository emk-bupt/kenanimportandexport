"use client";
import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// ======================
// TRANSLATIONS
// ======================
const translations = {
  ar: {
    heroTitle: "المنتجات التي نعمل معها",
    heroSubtitle: "اكتشف نطاق المنتجات التي نتعامل معها والتي لا نتعامل معها",
    tabWorkWith: "✅ المنتجات التي نعمل بها",
    tabDontWorkWith: "❌ المنتجات التي لا نتعامل معها",
    workWithIntro: "نقدم خدمات الاستيراد لمجموعة واسعة من المنتجات عالية الجودة من الصين منها ما يلي:",
    dontWorkWithIntro: "لأسباب تتعلق باللوائح والقوانين، لا نتعامل مع المنتجات التالية",
    ctaTitle: "هل لديك استفسار حول منتج معين؟",
    ctaSubtitle: "تواصل معنا لمعرفة ما إذا كان بإمكاننا مساعدتك في استيراد منتجك المطلوب",
    ctaButton: "تواصل معنا الآن",
    noteLabel: "ملاحظة:",
    reasonLabel: "السبب:",
  },
  en: {
    heroTitle: "Products We Work With",
    heroSubtitle: "Discover the range of products we handle and those we don't",
    tabWorkWith: "✅ Products We Handle",
    tabDontWorkWith: "❌ Products We Don't Handle",
    workWithIntro: "We offer import services for a wide range of high-quality products from China, including:",
    dontWorkWithIntro: "Due to regulations and legal restrictions, we do not handle the following products:",
    ctaTitle: "Have a question about a specific product?",
    ctaSubtitle: "Contact us to find out if we can help you import your requested item",
    ctaButton: "Contact Us Now",
    noteLabel: "Note:",
    reasonLabel: "Reason:",
  },
  zh: {
    heroTitle: "我们合作的产品",
    heroSubtitle: "了解我们处理和不处理的产品范围",
    tabWorkWith: "✅ 我们处理的产品",
    tabDontWorkWith: "❌ 我们不处理的产品",
    workWithIntro: "我们提供从中国进口各类高质量产品的服务，包括：",
    dontWorkWithIntro: "由于法规和法律限制，我们不处理以下产品：",
    ctaTitle: "对某个产品有疑问？",
    ctaSubtitle: "联系我们，了解我们是否能帮您进口所需商品",
    ctaButton: "立即联系我们",
    noteLabel: "备注：",
    reasonLabel: "原因：",
  },
  fr: {
    heroTitle: "Produits avec lesquels nous travaillons",
    heroSubtitle: "Découvrez les produits que nous gérons et ceux que nous n'acceptons pas",
    tabWorkWith: "✅ Produits que nous gérons",
    tabDontWorkWith: "❌ Produits que nous n'acceptons pas",
    workWithIntro: "Nous proposons des services d'importation pour une large gamme de produits de haute qualité en provenance de Chine, notamment :",
    dontWorkWithIntro: "En raison de réglementations et de restrictions légales, nous ne gérons pas les produits suivants :",
    ctaTitle: "Une question sur un produit spécifique ?",
    ctaSubtitle: "Contactez-nous pour savoir si nous pouvons vous aider à importer votre article souhaité",
    ctaButton: "Contactez-nous maintenant",
    noteLabel: "Remarque :",
    reasonLabel: "Raison :",
  },
};

// ======================
// PRODUCT DATA (TRANSLATED)
// ======================
const getProductData = (lang) => {
  const t = translations[lang] || translations.ar;

  const workWith = [
    {
      title: lang === "ar" ? "قطع غيار السيارات" :
             lang === "en" ? "Auto Parts" :
             lang === "zh" ? "汽车配件" : "Pièces automobiles",
      description: lang === "ar" ? "قطع غيار سيارات من عدة ماركات" :
                   lang === "en" ? "Car parts from multiple brands" :
                   lang === "zh" ? "多个品牌的汽车配件" : "Pièces pour voitures de plusieurs marques",
      items: lang === "ar" ? ["كفرات", "قطع غيار بودي", "اكسسوارات السيارات", "قطع غيار السيارات الكهربائية"] :
             lang === "en" ? ["Tires", "Body parts", "Car accessories", "Electrical car parts"] :
             lang === "zh" ? ["轮胎", "车身零件", "汽车配件", "汽车电子零件"] :
             ["Pneus", "Pièces de carrosserie", "Accessoires automobiles", "Pièces électriques"],
      note: lang === "ar" ? "وفق شروط كل دولة" :
            lang === "en" ? "Subject to each country's regulations" :
            lang === "zh" ? "视各国规定而定" : "Selon la réglementation de chaque pays",
      color: "from-blue-500 to-blue-600",
      icon: "⚙️"
    },
    {
      title: lang === "ar" ? "أجهزة وإلكترونيات" :
             lang === "en" ? "Electronics & Devices" :
             lang === "zh" ? "电子产品" : "Électronique & Appareils",
      description: lang === "ar" ? "أجهزة إلكترونية متنوعة وفق شروط كل دولة" :
                   lang === "en" ? "Various electronics, compliant with local regulations" :
                   lang === "zh" ? "符合各国规定的各类电子产品" : "Électronique variée conforme aux réglementations locales",
      items: lang === "ar" ? ["الأجهزة المنزلية", "أدوات القياس", "معدات الإضاءة", "أجهزة الأمان", "الأجهزة الطبية"] :
             lang === "en" ? ["Home appliances", "Measuring tools", "Lighting equipment", "Security devices", "Medical devices"] :
             lang === "zh" ? ["家用电器", "测量工具", "照明设备", "安防设备", "医疗设备"] :
             ["Appareils ménagers", "Outils de mesure", "Équipements d'éclairage", "Dispositifs de sécurité", "Appareils médicaux"],
      note: lang === "ar" ? "وفق شروط كل دولة" :
            lang === "en" ? "Subject to each country's regulations" :
            lang === "zh" ? "视各国规定而定" : "Selon la réglementation de chaque pays",
      color: "from-green-500 to-green-600",
      icon: "💻"
    },
    {
      title: lang === "ar" ? "ملابس بأنواعها" :
             lang === "en" ? "Clothing" :
             lang === "zh" ? "各类服装" : "Vêtements",
      description: lang === "ar" ? "ملابس عالية الجودة لجميع الفئات والأعمار" :
                   lang === "en" ? "High-quality clothing for all ages and genders" :
                   lang === "zh" ? "适合各年龄段的高品质服装" : "Vêtements de haute qualité pour tous les âges",
      items: lang === "ar" ? ["ملابس رجالية", "ملابس نسائية", "ملابس أطفال", "ملابس رياضية", "ملابس عمل", "أزياء تقليدية"] :
             lang === "en" ? ["Men's wear", "Women's wear", "Children's clothing", "Sportswear", "Workwear", "Traditional attire"] :
             lang === "zh" ? ["男装", "女装", "童装", "运动服", "工作服", "传统服饰"] :
             ["Vêtements homme", "Vêtements femme", "Vêtements enfants", "Vêtements de sport", "Tenues de travail", "Tenues traditionnelles"],
      color: "from-purple-500 to-purple-600",
      icon: "👔"
    },
    {
      title: lang === "ar" ? "حقائب وإكسسوارات و الأحذية" :
             lang === "en" ? "Bags, Accessories & Footwear" :
             lang === "zh" ? "箱包、配饰与鞋类" : "Sacs, Accessoires & Chaussures",
      description: lang === "ar" ? "حقائب وإكسسوارات أنيقة وعملية" :
                   lang === "en" ? "Elegant and practical bags & accessories" :
                   lang === "zh" ? "时尚实用的箱包与配饰" : "Sacs et accessoires élégants et pratiques",
      items: lang === "ar" ? ["حقائب يد", "حقائب سفر", "محافظ", "أحزمة", "نظارات", "ساعات", "الأحذية المختلفة"] :
             lang === "en" ? ["Handbags", "Travel bags", "Wallets", "Belts", "Eyewear", "Watches", "Footwear"] :
             lang === "zh" ? ["手提包", "旅行包", "钱包", "皮带", "眼镜", "手表", "各类鞋履"] :
             ["Sacs à main", "Sacs de voyage", "Portefeuilles", "Ceintures", "Lunettes", "Montres", "Chaussures"],
      color: "from-amber-500 to-amber-600",
      icon: "👜"
    },
    {
      title: lang === "ar" ? "مفروشات وأثاث" :
             lang === "en" ? "Furniture & Home Decor" :
             lang === "zh" ? "家具与家居装饰" : "Meubles & Décoration",
      description: lang === "ar" ? "أثاث منزلي ومكتبي عالي الجودة" :
                   lang === "en" ? "High-quality home and office furniture" :
                   lang === "zh" ? "高品质家居与办公家具" : "Meubles domestiques et de bureau de haute qualité",
      items: lang === "ar" ? ["أثاث غرف النوم", "أثاث الصالون", "طاولات الطعام", "مكتبات", "أثاث مكتبي", "ديكورات"] :
             lang === "en" ? ["Bedroom furniture", "Living room sets", "Dining tables", "Bookshelves", "Office furniture", "Decor items"] :
             lang === "zh" ? ["卧室家具", "客厅家具", "餐桌", "书架", "办公家具", "装饰品"] :
             ["Meubles de chambre", "Salons", "Tables à manger", "Bibliothèques", "Meubles de bureau", "Articles de décoration"],
      color: "from-cyan-500 to-cyan-600",
      icon: "🛋️"
    },
    {
      title: lang === "ar" ? "منتجات منزلية وتنظيمية" :
             lang === "en" ? "Home & Organization Products" :
             lang === "zh" ? "家居与收纳用品" : "Produits ménagers & Organisation",
      description: lang === "ar" ? "منتجات لتنظيم وتجميل المنزل" :
                   lang === "en" ? "Products to organize and beautify your home" :
                   lang === "zh" ? "用于整理和美化家居的产品" : "Produits pour organiser et embellir votre maison",
      items: lang === "ar" ? ["أدوات المطبخ", "أدوات التنظيف", "ديكورات الحائط", "الإضاءة", "السجاد"] :
             lang === "en" ? ["Kitchen tools", "Cleaning supplies", "Wall decor", "Lighting", "Rugs"] :
             lang === "zh" ? ["厨房用具", "清洁用品", "墙面装饰", "灯具", "地毯"] :
             ["Ustensiles de cuisine", "Produits d'entretien", "Décor mural", "Éclairage", "Tapis"],
      color: "from-indigo-500 to-indigo-600",
      icon: "🏠"
    },
    {
      title: lang === "ar" ? "الأدوات المكتبية و الدعائية" :
             lang === "en" ? "Stationery & Promotional Items" :
             lang === "zh" ? "文具与宣传品" : "Papeterie & Articles promotionnels",
      description: lang === "ar" ? "قرطاسية و أدوات مكتبية" :
                   lang === "en" ? "Office supplies and stationery" :
                   lang === "zh" ? "办公用品与文具" : "Fournitures de bureau et papeterie",
      items: lang === "ar" ? ["بلاستيك", "ورق", "أحبار", "أدوات مكتبية", "قرطاسية"] :
             lang === "en" ? ["Plastic items", "Paper", "Inks", "Office tools", "Stationery"] :
             lang === "zh" ? ["塑料制品", "纸张", "墨水", "办公工具", "文具"] :
             ["Articles en plastique", "Papier", "Encres", "Outils de bureau", "Papeterie"],
      color: "from-pink-500 to-pink-600",
      icon: "📦"
    },
    {
      title: lang === "ar" ? "ألعاب" :
             lang === "en" ? "Toys" :
             lang === "zh" ? "玩具" : "Jouets",
      description: lang === "ar" ? "ألعاب آمنة ومتنوعة للأطفال" :
                   lang === "en" ? "Safe and diverse toys for children" :
                   lang === "zh" ? "安全多样的儿童玩具" : "Jouets sûrs et variés pour enfants",
      items: lang === "ar" ? ["ألعاب تعليمية", "ألعاب إلكترونية", "دمى", "ألعاب خارجية", "ألعاب تركيب", "ألعاب رياضية"] :
             lang === "en" ? ["Educational toys", "Electronic toys", "Dolls", "Outdoor toys", "Building sets", "Sports toys"] :
             lang === "zh" ? ["益智玩具", "电子玩具", "玩偶", "户外玩具", "拼装玩具", "体育玩具"] :
             ["Jouets éducatifs", "Jouets électroniques", "Poupées", "Jouets d'extérieur", "Jeux de construction", "Jouets sportifs"],
      note: lang === "ar" ? "وفق شروط كل دولة" :
            lang === "en" ? "Subject to each country's regulations" :
            lang === "zh" ? "视各国规定而定" : "Selon la réglementation de chaque pays",
      color: "from-red-500 to-red-600",
      icon: "🎮"
    },
    {
      title: lang === "ar" ? "منتجات الكوبي" :
             lang === "en" ? "Coby Products" :
             lang === "zh" ? "Coby品牌产品" : "Produits Coby",
      description: lang === "ar" ? "منتجات عالية الجودة" :
                   lang === "en" ? "High-quality branded products" :
                   lang === "zh" ? "高品质品牌产品" : "Produits de marque de haute qualité",
      items: lang === "ar" ? ["إكسسوارات", "ملابس", "حقائب", "أحذية", "ساعات", "نظارات"] :
             lang === "en" ? ["Accessories", "Clothing", "Bags", "Footwear", "Watches", "Eyewear"] :
             lang === "zh" ? ["配饰", "服装", "箱包", "鞋履", "手表", "眼镜"] :
             ["Accessoires", "Vêtements", "Sacs", "Chaussures", "Montres", "Lunettes"],
      note: lang === "ar" ? "فقط في بعض الدول" :
            lang === "en" ? "Available only in select countries" :
            lang === "zh" ? "仅限部分国家" : "Disponible uniquement dans certains pays",
      color: "from-yellow-500 to-amber-500",
      icon: "✨"
    },
    {
      title: lang === "ar" ? "مواد البناء" :
             lang === "en" ? "Construction Materials" :
             lang === "zh" ? "建筑材料" : "Matériaux de construction",
      description: lang === "ar" ? "معدات وأدوات أساسية لمختلف أعمال البناء" :
                   lang === "en" ? "Essential tools and equipment for construction" :
                   lang === "zh" ? "各类建筑所需的必备工具与设备" : "Outils et équipements essentiels pour la construction",
      items: lang === "ar" ? ["المطرقة", "أدوات السباكة", "أدوات النجارة", "أدوات الحدادة", "الأدوات الكهربائية"] :
             lang === "en" ? ["Hammers", "Plumbing tools", "Carpentry tools", "Metalworking tools", "Electrical tools"] :
             lang === "zh" ? ["锤子", "管道工具", "木工工具", "金属加工工具", "电工工具"] :
             ["Marteaux", "Outils de plomberie", "Outils de menuiserie", "Outils de métallerie", "Outils électriques"],
      color: "from-gray-500 to-gray-700",
      icon: "🛠️"
    },
    {
      title: lang === "ar" ? "الإكسسوارات النسائية" :
             lang === "en" ? "Women's Accessories" :
             lang === "zh" ? "女士配饰" : "Accessoires féminins",
      description: lang === "ar" ? "إكسسوارات أنيقة تضيف لمسة جمالية يومية" :
                   lang === "en" ? "Elegant accessories for everyday beauty" :
                   lang === "zh" ? "为日常增添美感的优雅配饰" : "Accessoires élégants pour une touche de beauté quotidienne",
      items: lang === "ar" ? ["إكسسوارات الشعر", "القلائد والأساور والأقراط", "البكل والأمشاط", "إكسسوارات مختلفة"] :
             lang === "en" ? ["Hair accessories", "Necklaces, bracelets & earrings", "Barrettes & combs", "Various accessories"] :
             lang === "zh" ? ["发饰", "项链、手链与耳环", "发夹与梳子", "各类配饰"] :
             ["Accessoires pour cheveux", "Colliers, bracelets & boucles d'oreilles", "Barrettes & peignes", "Divers accessoires"],
      color: "from-pink-500 to-pink-600",
      icon: "💍"
    },
    {
      title: lang === "ar" ? "إكسسوارات الجوالات" :
             lang === "en" ? "Mobile Phone Accessories" :
             lang === "zh" ? "手机配件" : "Accessoires pour téléphones",
      description: lang === "ar" ? "ملحقات عملية وأنيقة لحماية واستخدام أفضل للجوالات" :
                   lang === "en" ? "Practical and stylish accessories for phone protection & use" :
                   lang === "zh" ? "实用时尚的手机保护与使用配件" : "Accessoires pratiques et élégants pour protéger et utiliser votre téléphone",
      items: lang === "ar" ? ["كفرات الجوالات", "شواحن الجوالات", "مماسك الجوالات", "حماية الشاشة", "إكسسوارات مختلفة"] :
             lang === "en" ? ["Phone cases", "Chargers", "Phone holders", "Screen protectors", "Various accessories"] :
             lang === "zh" ? ["手机壳", "充电器", "手机支架", "屏幕保护膜", "各类配件"] :
             ["Coques", "Chargeurs", "Supports", "Protecteurs d'écran", "Divers accessoires"],
      color: "from-blue-500 to-blue-600",
      icon: "📱"
    }
  ];

  const dontWorkWith = [
    {
      title: lang === "ar" ? "أغذية ومشروبات" :
             lang === "en" ? "Food & Beverages" :
             lang === "zh" ? "食品与饮料" : "Aliments & Boissons",
      description: lang === "ar" ? "جميع أنواع الطعام والشراب" :
                   lang === "en" ? "All types of food and drinks" :
                   lang === "zh" ? "各类食品与饮料" : "Tous les types d'aliments et boissons",
      items: lang === "ar" ? ["الأطعمة المعلبة", "المشروبات", "الحلويات", "التوابل", "المكسرات", "الشاي والقهوة"] :
             lang === "en" ? ["Canned food", "Beverages", "Sweets", "Spices", "Nuts", "Tea & coffee"] :
             lang === "zh" ? ["罐头食品", "饮料", "糖果", "香料", "坚果", "茶与咖啡"] :
             ["Aliments en conserve", "Boissons", "Bonbons", "Épices", "Fruits secs", "Thé & café"],
      reason: lang === "ar" ? "متطلبات صحية صارمة وشهادات معقدة" :
              lang === "en" ? "Strict health requirements and complex certifications" :
              lang === "zh" ? "严格的卫生要求和复杂的认证" : "Exigences sanitaires strictes et certifications complexes",
      color: "from-red-500 to-red-600",
      icon: "🍔"
    },
    {
      title: lang === "ar" ? "أدوية ومكملات غذائية" :
             lang === "en" ? "Medicines & Supplements" :
             lang === "zh" ? "药品与营养补充剂" : "Médicaments & Compléments",
      description: lang === "ar" ? "الأدوية والمكملات الغذائية" :
                   lang === "en" ? "Medicines and dietary supplements" :
                   lang === "zh" ? "药品与膳食补充剂" : "Médicaments et compléments alimentaires",
      items: lang === "ar" ? ["الأدوية الطبية", "المكملات الغذائية", "الفيتامينات", "الأعشاب الطبية", "منتجات التجميل الطبية"] :
             lang === "en" ? ["Prescription drugs", "Dietary supplements", "Vitamins", "Medicinal herbs", "Medical-grade cosmetics"] :
             lang === "zh" ? ["处方药", "膳食补充剂", "维生素", "药用草本", "医用化妆品"] :
             ["Médicaments sur ordonnance", "Compléments alimentaires", "Vitamines", "Herbes médicinales", "Cosmétiques médicaux"],
      reason: lang === "ar" ? "تتطلب تراخيص طبية خاصة وموافقات حكومية" :
              lang === "en" ? "Require special medical licenses and government approvals" :
              lang === "zh" ? "需要特殊医疗许可和政府批准" : "Nécessitent des licences médicales spéciales et des autorisations gouvernementales",
      color: "from-orange-500 to-red-500",
      icon: "💊"
    },
    {
      title: lang === "ar" ? "مكياج وعناية شخصية" :
             lang === "en" ? "Cosmetics & Personal Care" :
             lang === "zh" ? "化妆品与个人护理" : "Cosmétiques & Soins personnels",
      description: lang === "ar" ? "منتجات التجميل والعناية الشخصية" :
                   lang === "en" ? "Beauty and personal care products" :
                   lang === "zh" ? "美容与个人护理产品" : "Produits de beauté et de soins personnels",
      items: lang === "ar" ? ["مستحضرات التجميل", "كريمات البشرة", "الشامبو", "معجون الأسنان", "العطور", "منتجات العناية"] :
             lang === "en" ? ["Makeup", "Skincare creams", "Shampoo", "Toothpaste", "Perfumes", "Care products"] :
             lang === "zh" ? ["化妆品", "护肤霜", "洗发水", "牙膏", "香水", "护理产品"] :
             ["Maquillage", "Crèmes pour la peau", "Shampooing", "Dentifrice", "Parfums", "Produits de soin"],
      reason: lang === "ar" ? "تتطلب شهادات صحية وموافقات خاصة" :
              lang === "en" ? "Require health certifications and special approvals" :
              lang === "zh" ? "需要卫生认证和特殊批准" : "Nécessitent des certifications sanitaires et des approbations spéciales",
      color: "from-pink-500 to-rose-600",
      icon: "💄"
    },
    {
      title: lang === "ar" ? "مواد كيميائية أو قابلة للاشتعال" :
             lang === "en" ? "Chemicals & Flammable Materials" :
             lang === "zh" ? "化学品与易燃物" : "Produits chimiques & Matières inflammables",
      description: lang === "ar" ? "المواد الكيميائية والخطرة" :
                   lang === "en" ? "Hazardous and chemical substances" :
                   lang === "zh" ? "危险化学品" : "Substances chimiques et dangereuses",
      items: lang === "ar" ? ["المواد الكيميائية", "الوقود", "الدهانات", "المذيبات", "المواد المتفجرة", "الغازات المضغوطة"] :
             lang === "en" ? ["Chemicals", "Fuels", "Paints", "Solvents", "Explosives", "Compressed gases"] :
             lang === "zh" ? ["化学品", "燃料", "油漆", "溶剂", "爆炸物", "压缩气体"] :
             ["Produits chimiques", "Carburants", "Peintures", "Solvants", "Explosifs", "Gaz comprimés"],
      reason: lang === "ar" ? "مواد خطرة تتطلب تراخيص خاصة وموافقات أمنية" :
              lang === "en" ? "Hazardous materials requiring special licenses and security approvals" :
              lang === "zh" ? "危险品，需特殊许可和安全审批" : "Matières dangereuses nécessitant des licences spéciales et des autorisations de sécurité",
      color: "from-gray-700 to-gray-900",
      icon: "⚠️"
    },
    {
      title: lang === "ar" ? "بطاريات ليثيوم غير آمنة" :
             lang === "en" ? "Unsafe Lithium Batteries" :
             lang === "zh" ? "不安全的锂电池" : "Piles au lithium non sécurisées",
      description: lang === "ar" ? "البطاريات غير الآمنة أو بدون موافقات" :
                   lang === "en" ? "Non-certified or unsafe lithium batteries" :
                   lang === "zh" ? "未经认证或不安全的锂电池" : "Piles au lithium non certifiées ou non sécurisées",
      items: lang === "ar" ? ["بطاريات ليثيوم غير معتمدة", "البطاريات المستعملة", "البطاريات التالفة", "البطاريات بدون شهادات"] :
             lang === "en" ? ["Non-certified lithium batteries", "Used batteries", "Damaged batteries", "Batteries without certification"] :
             lang === "zh" ? ["未认证锂电池", "二手电池", "损坏电池", "无认证电池"] :
             ["Piles au lithium non certifiées", "Piles usagées", "Piles endommagées", "Piles sans certification"],
      reason: lang === "ar" ? "خطر الحريق والانفجار أثناء النقل" :
              lang === "en" ? "Fire and explosion risk during transport" :
              lang === "zh" ? "运输过程中有起火和爆炸风险" : "Risque d'incendie et d'explosion pendant le transport",
      color: "from-gray-800 to-black",
      icon: "🔋"
    },
    {
      title: lang === "ar" ? "إلكترونيات مقيدة" :
             lang === "en" ? "Restricted Electronics" :
             lang === "zh" ? "受限电子产品" : "Électronique restreinte",
      description: lang === "ar" ? "أجهزة إلكترونية محددة" :
                   lang === "en" ? "Specific electronic devices" :
                   lang === "zh" ? "特定电子设备" : "Appareils électroniques spécifiques",
      items: lang === "ar" ? ["الهواتف المحمولة", "الباور بانك", "السماعات اللاسلكية", "أجهزة الإرسال", "أجهزة الراديو"] :
             lang === "en" ? ["Mobile phones", "Power banks", "Wireless earphones", "Transmitters", "Radios"] :
             lang === "zh" ? ["手机", "充电宝", "无线耳机", "发射器", "收音机"] :
             ["Téléphones portables", "Batteries externes", "Écouteurs sans fil", "Émetteurs", "Radios"],
      reason: lang === "ar" ? "تتطلب موافقات خاصة وتراخيص تقنية" :
              lang === "en" ? "Require special approvals and technical licenses" :
              lang === "zh" ? "需要特殊审批和技术许可" : "Nécessitent des approbations spéciales et des licences techniques",
      color: "from-blue-800 to-indigo-900",
      icon: "📱"
    },
    {
      title: lang === "ar" ? "بضائع خطرة" :
             lang === "en" ? "Dangerous Goods" :
             lang === "zh" ? "危险货物" : "Marchandises dangereuses",
      description: lang === "ar" ? "أي بضاعة تصنف خطرة" :
                   lang === "en" ? "Any item classified as hazardous" :
                   lang === "zh" ? "任何被归类为危险的货物" : "Tout article classé comme dangereux",
      items: lang === "ar" ? ["المواد المشعة", "المواد السامة", "المواد المتفجرة", "المواد القابلة للاشتعال", "المواد المسببة للتآكل"] :
             lang === "en" ? ["Radioactive materials", "Toxic substances", "Explosives", "Flammable materials", "Corrosive substances"] :
             lang === "zh" ? ["放射性物质", "有毒物质", "爆炸物", "易燃物", "腐蚀性物质"] :
             ["Matières radioactives", "Substances toxiques", "Explosifs", "Matières inflammables", "Substances corrosives"],
      reason: lang === "ar" ? "مخاطر أمنية وصحية عالية" :
              lang === "en" ? "High security and health risks" :
              lang === "zh" ? "高安全与健康风险" : "Risques élevés pour la sécurité et la santé",
      color: "from-black to-gray-900",
      icon: "☢️"
    }
  ];

  return { workWith, dontWorkWith };
};

// ======================
// MAIN COMPONENT
// ======================
const ProductsPage = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.ar;
  const { workWith, dontWorkWith } = getProductData(lang);

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
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t.heroSubtitle}
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
              {t.tabWorkWith}
            </button>
            <button
              onClick={() => setActiveTab("dontWorkWith")}
              className={`px-8 py-4 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === "dontWorkWith"
                  ? "bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-2xl scale-105"
                  : "bg-slate-800/60 text-gray-300 hover:bg-slate-700/80 shadow-lg"
              }`}
            >
              {t.tabDontWorkWith}
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
                {t.workWithIntro}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workWith.map((product, index) => (
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
                {t.dontWorkWithIntro}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dontWorkWith.map((product, index) => (
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
              {t.ctaTitle}
            </h3>
            <p className="text-base md:text-xl text-white/90 mb-8">
              {t.ctaSubtitle}
            </p>
            <button
              onClick={() => window.open("https://wa.me/963950882277", "_blank")} // 👈 Add your WhatsApp
              className="group relative inline-block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-slate-900 px-12 py-4 rounded-2xl text-xl md:text-2xl font-black hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-4 border-white/20 backdrop-blur-sm overflow-hidden cursor-pointer shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>{t.ctaButton}</span>
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