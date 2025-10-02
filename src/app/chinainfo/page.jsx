"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

// ======================
// TRANSLATIONS
// ======================
const translations = {
  ar: {
    heroTitle: "التجارة من الصين",
    heroSubtitle: "دليلك الشامل للاستيراد من الصين — نصائح، شروط، وأسرار التجارة الدولية",
    ctaButton: "استفسر الآن",
    viewImage: "اضغط لعرض الصورة بحجم كبير",
    hide: "إخفاء",
    showMore: "عرض المزيد",
  },
  en: {
    heroTitle: "Trade from China",
    heroSubtitle: "Your complete guide to importing from China — tips, terms, and international trade secrets",
    ctaButton: "Inquire Now",
    viewImage: "Click to view full-size image",
    hide: "Hide",
    showMore: "Show More",
  },
  zh: {
    heroTitle: "从中国贸易",
    heroSubtitle: "您从中国进口的完整指南——技巧、条款和国际贸易秘诀",
    ctaButton: "立即咨询",
    viewImage: "点击查看大图",
    hide: "收起",
    showMore: "查看更多",
  },
  fr: {
    heroTitle: "Commerce depuis la Chine",
    heroSubtitle: "Votre guide complet pour importer depuis la Chine — conseils, conditions et secrets du commerce international",
    ctaButton: "Demander maintenant",
    viewImage: "Cliquez pour voir l'image en grand",
    hide: "Masquer",
    showMore: "Voir plus",
  },
};

// ======================
// BLOG CONTENT (TRANSLATED)
// ======================
const getBlogContent = (lang) => {
  const t = translations[lang] || translations.ar;

  const featured = {
    title:
      lang === "ar"
        ? "تخصصات المدن الصناعية والتجارية في الصين"
        : lang === "en"
        ? "Industrial & Commercial Specializations of Chinese Cities"
        : lang === "zh"
        ? "中国各城市的工业与商业专长"
        : "Spécialisations industrielles et commerciales des villes chinoises",
    short:
      lang === "ar"
        ? "الصين تتميز بتوزيع صناعي متنوع على مدنها، حيث لكل مدينة تخصصات صناعية وتجارية محددة، ما يجعلها مركزاً عالمياً للإنتاج والتصدير..."
        : lang === "en"
        ? "China features a diverse industrial distribution across its cities, with each city specializing in specific industries, making it a global hub for production and export..."
        : lang === "zh"
        ? "中国各城市工业分布多样，每座城市都有特定的产业专长，使其成为全球生产和出口中心..."
        : "La Chine présente une répartition industrielle diversifiée dans ses villes, chacune se spécialisant dans des secteurs précis, ce qui en fait un centre mondial de production et d'exportation...",
    full:
      lang === "ar"
        ? `الصين تتميز بتوزيع صناعي متنوع على مدنها، حيث لكل مدينة تخصصات صناعية وتجارية محددة، ما يجعلها مركزاً عالمياً للإنتاج والتصدير. إليك نظرة عامة على أبرز المناطق:

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

تمثل هذه التوزيعات الصناعية والتجارية القوة الاقتصادية للصين، حيث يمكن للمستوردين والمستثمرين اختيار المدن حسب نوع المنتج والتخصص المطلوب، مما يسهل عمليات الشراء والتصدير بشكل كبير.`
        : lang === "en"
        ? `China features a diverse industrial distribution across its cities, with each city specializing in specific industries, making it a global hub for production and export. Here's an overview of key regions:

**1. Pearl River Delta (Guangdong, Fujian)**  
A major industrial hub in southern China, including:  
- **Shenzhen**: Electronics, smartphones, and advanced tech for global companies like Tencent, Huawei, and DJI.  
- **Dongguan**: Electronics, furniture, footwear — a global manufacturing center.  
- **Guangzhou**: Wholesale trade for cars, chemicals, and clothing.  
- **Xiamen/Fuzhou**: Electronics, furniture, and marine products.

**2. Yangtze River Delta (Jiangsu, Zhejiang, Shanghai)**  
A diverse industrial and commercial zone:  
- **Shanghai**: Financial center, advanced tech, automotive, and aviation.  
- **Suzhou**: Electronics, clean tech, medical devices.  
- **Ningbo**: Shipbuilding, petrochemicals, textiles.  
- **Yiwu**: World’s largest wholesale market for gifts and household goods.  
- **Wenzhou**: Leather goods, footwear, prefabricated buildings.

**3. Northern Region (Beijing, Tianjin, Shandong)**  
- **Beijing**: Technology, software, financial and cultural services.  
- **Tianjin**: Aircraft, automobiles, electronics.  
- **Qingdao**: Home appliances (e.g., Haier).

**4. Southwest & Central (Chongqing, Chengdu, Wuhan)**  
- **Chongqing**: Automobiles, motorcycles, electronics.  
- **Chengdu**: Electronics, software, aviation.  
- **Wuhan**: Steel, automobiles, optics.

**5. Northeast (Dongbei: Shenyang, Dalian)**  
- **Shenyang & Dalian**: Heavy machinery, equipment, shipbuilding.

This industrial specialization allows importers and investors to select cities based on product type and expertise, greatly simplifying sourcing and export processes.`
        : lang === "zh"
        ? `中国各城市工业分布多样，每座城市都有特定的产业专长，使其成为全球生产和出口中心。以下是主要区域概览：

**1. 珠江三角洲（广东、福建）**  
中国南部主要工业枢纽，包括：  
- **深圳**：为腾讯、华为、大疆等全球公司生产电子产品、智能手机和先进技术。  
- **东莞**：电子产品、家具、鞋类——全球制造中心。  
- **广州**：汽车、化工、服装的批发贸易。  
- **厦门/福州**：电子产品、家具、海产品。

**2. 长江三角洲（江苏、浙江、上海）**  
多元化工业与商业区：  
- **上海**：金融中心、先进技术、汽车、航空。  
- **苏州**：电子产品、清洁技术、医疗器械。  
- **宁波**：造船、石化、纺织。  
- **义乌**：全球最大的礼品和家居用品批发市场。  
- **温州**：皮革制品、鞋类、预制建筑。

**3. 北方地区（北京、天津、山东）**  
- **北京**：科技、软件、金融与文化服务。  
- **天津**：飞机、汽车、电子产品。  
- **青岛**：家用电器（如海尔）。

**4. 西南与中部（重庆、成都、武汉）**  
- **重庆**：汽车、摩托车、电子产品。  
- **成都**：电子产品、软件、航空。  
- **武汉**：钢铁、汽车、光学。

**5. 东北地区（沈阳、大连）**  
- **沈阳和大连**：重型机械、设备、造船。

这种产业专业化使进口商和投资者可根据产品类型和专长选择城市，极大简化了采购和出口流程。`
        : `La Chine présente une répartition industrielle diversifiée dans ses villes, chacune se spécialisant dans des secteurs précis, ce qui en fait un centre mondial de production et d'exportation. Voici un aperçu des principales régions :

**1. Delta de la Rivière des Perles (Guangdong, Fujian)**  
Un pôle industriel majeur dans le sud de la Chine, incluant :  
- **Shenzhen** : Électronique, smartphones et technologies avancées pour des entreprises mondiales comme Tencent, Huawei et DJI.  
- **Dongguan** : Électronique, meubles, chaussures — un centre mondial de fabrication.  
- **Guangzhou** : Commerce de gros pour voitures, produits chimiques et vêtements.  
- **Xiamen/Fuzhou** : Électronique, meubles, produits marins.

**2. Delta du Fleuve Yangtsé (Jiangsu, Zhejiang, Shanghai)**  
Une zone industrielle et commerciale diversifiée :  
- **Shanghai** : Centre financier, technologies avancées, automobile, aviation.  
- **Suzhou** : Électronique, technologies propres, dispositifs médicaux.  
- **Ningbo** : Construction navale, pétrochimie, textiles.  
- **Yiwu** : Plus grand marché de gros mondial pour cadeaux et articles ménagers.  
- **Wenzhou** : Articles en cuir, chaussures, bâtiments préfabriqués.

**3. Région du Nord (Pékin, Tianjin, Shandong)**  
- **Pékin** : Technologie, logiciels, services financiers et culturels.  
- **Tianjin** : Avions, automobiles, électronique.  
- **Qingdao** : Appareils électroménagers (ex. Haier).

**4. Sud-Ouest et Centre (Chongqing, Chengdu, Wuhan)**  
- **Chongqing** : Automobiles, motos, électronique.  
- **Chengdu** : Électronique, logiciels, aviation.  
- **Wuhan** : Acier, automobiles, optique.

**5. Nord-Est (Dongbei : Shenyang, Dalian)**  
- **Shenyang et Dalian** : Machines lourdes, équipements, construction navale.

Cette spécialisation industrielle permet aux importateurs et investisseurs de choisir les villes en fonction du type de produit et de l’expertise requise, simplifiant grandement les processus d’approvisionnement et d’exportation.`,
    image: "/images/citys.jpg",
  };

  const posts = [
    {
      id: 1,
      title:
        lang === "ar"
          ? "فهم أسعار التجارة الدولية (EXW, FOB, CIF, DDP)"
          : lang === "en"
          ? "Understanding International Trade Terms (EXW, FOB, CIF, DDP)"
          : lang === "zh"
          ? "理解国际贸易术语（EXW、FOB、CIF、DDP）"
          : "Comprendre les termes du commerce international (EXW, FOB, CIF, DDP)",
      short:
        lang === "ar"
          ? "إذا كنت تفكر بالاستيراد من الصين، فهم أسعار التجارة الدولية أمر أساسي لتحديد التكلفة الحقيقية للبضاعة..."
          : lang === "en"
          ? "If you're considering importing from China, understanding international trade terms is essential to determine the true cost of goods..."
          : lang === "zh"
          ? "如果您计划从中国进口，理解国际贸易术语对于确定货物真实成本至关重要..."
          : "Si vous envisagez d’importer depuis la Chine, comprendre les termes du commerce international est essentiel pour déterminer le coût réel des marchandises...",
      full:
        lang === "ar"
          ? `إذا كنت تفكر بالاستيراد من الصين، فهم أسعار التجارة الدولية أمر أساسي لتحديد التكلفة الحقيقية للبضاعة. هناك أربع شروط رئيسية يجب معرفتها:

**EXW (Ex Works)**: هذا السعر يشمل فقط تكلفة المنتج داخل المصنع. كل شيء بعد ذلك، من النقل المحلي إلى الشحن الدولي والجمارك، يقع على عاتقك كمستورد.

**FOB (Free on Board)**: السعر يشمل توصيل البضاعة إلى ميناء التصدير داخل الصين وتحميلها على السفينة. بعد التحميل، تتحمل أنت المخاطر والتكاليف الإضافية.

**CIF (Cost, Insurance, Freight)**: السعر يشمل تكلفة المنتج، الشحن البحري، والتأمين حتى وصول البضاعة إلى ميناء بلدك. بعد الوصول، تتحمل الرسوم المحلية والنقل الداخلي.

**DDP (Delivered Duty Paid)**: السعر الأعلى لكنه الأكثر راحة، حيث يقوم المورد بكل شيء من الشحن والتأمين وحتى دفع الرسوم الجمركية وتسليم البضاعة إلى مستودعك أو بيتك.

اختيار النوع المناسب يعتمد على خبرتك، حجم الطلب، ودرجة استعدادك للتعامل مع الشحن والجمارك. EXW يعطيك مرونة كاملة لكنه يتطلب خبرة أكبر، بينما DDP مثالي للمبتدئين الذين يريدون حلاً شاملًا بدون تعقيدات.

معرفة هذه الشروط تساعدك على المقارنة بين عروض الموردين بشكل صحيح، وتجنب المفاجآت في التكلفة الإجمالية. دائمًا اسأل المورد: “ما هو شرط السعر المطبق؟” لتتمكن من حساب جميع التكاليف بشكل دقيق قبل الشراء.`
          : lang === "en"
          ? `If you're considering importing from China, understanding international trade terms is essential to determine the true cost of goods. There are four key terms to know:

**EXW (Ex Works)**: Price includes only the product cost at the factory. Everything after — local transport, international shipping, customs — is your responsibility.

**FOB (Free on Board)**: Price includes delivery to the Chinese export port and loading onto the vessel. After loading, you bear all risks and costs.

**CIF (Cost, Insurance, Freight)**: Price includes product cost, ocean freight, and insurance to your country’s port. After arrival, you handle local fees and inland transport.

**DDP (Delivered Duty Paid)**: Highest price but most convenient — the supplier handles everything, including shipping, insurance, customs duties, and delivery to your warehouse or home.

Your choice depends on your experience, order size, and willingness to manage logistics. EXW offers full control but requires expertise; DDP is ideal for beginners seeking a hassle-free solution.

Knowing these terms helps you compare supplier quotes accurately and avoid total cost surprises. Always ask: “What Incoterm are you quoting?” to calculate all costs precisely before purchasing.`
          : lang === "zh"
          ? `如果您计划从中国进口，理解国际贸易术语对于确定货物真实成本至关重要。有四个关键术语需要了解：

**EXW（工厂交货）**：价格仅包含工厂内的产品成本。之后的所有费用（本地运输、国际海运、清关等）均由您承担。

**FOB（离岸价）**：价格包含将货物运至中国出口港并装船的费用。装船后，所有风险和费用由您承担。

**CIF（到岸价）**：价格包含产品成本、海运费和保险，直至货物抵达您国家的港口。到港后，您需承担本地费用和内陆运输。

**DDP（完税后交货）**：价格最高但最省心——供应商负责所有环节，包括运输、保险、关税，甚至送货到您的仓库或家中。

选择哪种方式取决于您的经验、订单规模和处理物流的意愿。EXW灵活性高但需专业知识；DDP适合希望一站式解决的新手。

了解这些术语有助于准确比较供应商报价，避免总成本意外。下单前务必询问：“您使用的是哪种贸易术语？”以便精确计算所有费用。`
          : `Si vous envisagez d’importer depuis la Chine, comprendre les termes du commerce international est essentiel pour déterminer le coût réel des marchandises. Quatre termes clés à connaître :

**EXW (À l’usine)** : Le prix inclut uniquement le coût du produit à l’usine. Tout ce qui suit — transport local, fret international, douane — est à votre charge.

**FOB (Franco à bord)** : Le prix inclut la livraison au port d’exportation en Chine et le chargement sur le navire. Après chargement, vous assumez tous les risques et coûts.

**CIF (Coût, Assurance, Fret)** : Le prix inclut le produit, le fret maritime et l’assurance jusqu’au port de votre pays. À l’arrivée, vous gérez les frais locaux et le transport intérieur.

**DDP (Rendu droits acquittés)** : Prix le plus élevé mais le plus pratique — le fournisseur gère tout, y compris le fret, l’assurance, les droits de douane et la livraison à votre entrepôt ou domicile.

Votre choix dépend de votre expérience, du volume de commande et de votre volonté de gérer la logistique. L’EXW offre un contrôle total mais exige de l’expertise ; le DDP est idéal pour les débutants souhaitant une solution clé en main.

Connaître ces termes vous aide à comparer les offres des fournisseurs avec précision et à éviter les mauvaises surprises. Demandez toujours : « Quel Incoterm appliquez-vous ? » pour calculer tous les coûts avant d’acheter.`,
    },
    {
      id: 2,
      title:
        lang === "ar"
          ? "العوامل المؤثرة على السعر"
          : lang === "en"
          ? "Factors Affecting Price"
          : lang === "zh"
          ? "影响价格的因素"
          : "Facteurs influençant le prix",
      short:
        lang === "ar"
          ? "ليس كل مصنع يقدم نفس السعر حتى لو كان المنتج متشابهًا. هناك عوامل متعددة تؤثر بشكل كبير على السعر النهائي..."
          : lang === "en"
          ? "Not every factory offers the same price, even for similar products. Multiple factors significantly impact the final cost..."
          : lang === "zh"
          ? "即使产品相似，不同工厂的报价也可能不同。多个因素会显著影响最终价格..."
          : "Toutes les usines ne proposent pas le même prix, même pour des produits similaires. Plusieurs facteurs influencent fortement le coût final...",
      full:
        lang === "ar"
          ? `ليس كل مصنع يقدم نفس السعر حتى لو كان المنتج متشابهًا. هناك عوامل متعددة تؤثر بشكل كبير على السعر النهائي للبضاعة.

**الجودة**: كلما كان المنتج أفضل من حيث المواد أو التصميم، زاد السعر. على سبيل المثال، الفولاذ المقاوم للصدأ 304 أغلى من 201.  
**الكمية (حجم الطلب)**: الطلبات الكبيرة عادة تحصل على سعر أقل لكل وحدة بسبب “اقتصادات الحجم”، حيث يتم توزيع تكاليف الإنتاج على عدد أكبر من القطع.  
**التغليف**: التغليف العادي أرخص من التغليف الفردي المخصص أو الذي يحمل علامتك التجارية.  
**سرعة التسليم**: طلبات عاجلة تتطلب دفع رسوم إضافية للإنتاج السريع أو الشحن السريع.  
**المفاوضة**: مهارتك في التفاوض تحدد السعر النهائي، حيث يمكن لمورد متمرس أن يمنحك خصومات إضافية إذا كنت مستعدًا للعقد بشكل احترافي.

لا تعتمد فقط على الرقم الظاهر في عرض السعر، بل قارن دائمًا التفاصيل. السعر المنخفض قد يخفي تكاليف إضافية مثل الشحن أو التأمين، بينما السعر المرتفع أحيانًا يشمل خدمات إضافية مثل التفتيش أو التغليف المخصص.`
          : lang === "en"
          ? `Not every factory offers the same price, even for similar products. Multiple factors significantly impact the final cost:

**Quality**: Better materials or design increase price — e.g., 304 stainless steel costs more than 201.  
**Order Quantity**: Larger orders get lower per-unit prices due to economies of scale.  
**Packaging**: Standard packaging is cheaper than custom or branded packaging.  
**Delivery Speed**: Urgent orders require rush production or express shipping fees.  
**Negotiation Skills**: Your ability to negotiate affects the final price; experienced suppliers may offer extra discounts for professional buyers.

Never rely solely on the quoted number — always compare details. A low price may hide extra costs (shipping, insurance), while a higher price might include added services (inspection, custom packaging).`
          : lang === "zh"
          ? `即使产品相似，不同工厂的报价也可能不同。多个因素会显著影响最终价格：

**质量**：材料或设计越好，价格越高。例如，304不锈钢比201更贵。  
**订单数量**：大订单通常因规模经济而获得更低的单价。  
**包装**：普通包装比定制或品牌包装便宜。  
**交货速度**：加急订单需要支付快速生产和快递费用。  
**议价能力**：您的谈判技巧会影响最终价格；经验丰富的供应商可能为专业买家提供额外折扣。

不要只看报价数字，务必比较细节。低价可能隐藏额外成本（运费、保险），而高价可能包含附加服务（验货、定制包装）。`
          : `Toutes les usines ne proposent pas le même prix, même pour des produits similaires. Plusieurs facteurs influencent fortement le coût final :

**Qualité** : Meilleurs matériaux ou design = prix plus élevé (ex. : acier inoxydable 304 vs 201).  
**Quantité** : Les grandes commandes bénéficient de prix unitaires réduits grâce aux économies d’échelle.  
**Emballage** : L’emballage standard est moins cher qu’un emballage personnalisé ou avec votre marque.  
**Délai de livraison** : Les commandes urgentes entraînent des frais supplémentaires pour production ou fret express.  
**Négociation** : Vos compétences influencent le prix final ; les fournisseurs expérimentés offrent parfois des remises supplémentaires.

Ne vous fiez jamais uniquement au chiffre affiché — comparez toujours les détails. Un prix bas peut cacher des coûts (fret, assurance), tandis qu’un prix élevé inclut parfois des services (inspection, emballage personnalisé).`,
    },
    // Posts 3–6 follow the same pattern — abbreviated here for brevity
    {
      id: 3,
      title:
        lang === "ar"
          ? "شروط الدفع الشائعة"
          : lang === "en"
          ? "Common Payment Terms"
          : lang === "zh"
          ? "常见付款条款"
          : "Conditions de paiement courantes",
      short:
        lang === "ar"
          ? "طرق الدفع تلعب دورًا كبيرًا في بناء الثقة مع الموردين الصينيين. غالبًا ما يطلب المصنعون شروطًا مثل..."
          : lang === "en"
          ? "Payment methods play a key role in building trust with Chinese suppliers. Factories often require terms like..."
          : lang === "zh"
          ? "付款方式在与中方供应商建立信任中起关键作用。工厂通常要求如下条款..."
          : "Les méthodes de paiement jouent un rôle clé dans la confiance avec les fournisseurs chinois. Les usines exigent souvent des conditions comme...",
      full:
        lang === "ar"
          ? `طرق الدفع تلعب دورًا كبيرًا في بناء الثقة مع الموردين الصينيين. غالبًا ما يطلب المصنعون شروطًا مثل:

**30% عربون + 70% بعد الإنتاج**: الأكثر شيوعًا للطلبيات الصغيرة والمتوسطة.  
**اعتماد بنكي (LC)**: يستخدم للطلبيات الكبيرة والمعقدة، يوفر حماية لكل من المورد والمستورد.

الالتزام بشروط الدفع يزيد من مصداقيتك ويتيح لك الحصول على عروض أفضل أو خصومات إضافية. بعض الموردين يمنحون مرونة أكبر للعملاء الملتزمين ويقدمون خدمات إضافية مثل التفتيش أو ترتيب الشحن.

تأكد دائمًا من توثيق كل الدفعيات والمراسلات لتجنب أي سوء تفاهم. طرق الدفع تختلف حسب حجم الطلب ونوع البضاعة والمورد، لذا استفسر دائمًا قبل توقيع أي عقد.`
          : lang === "en"
          ? `Payment methods are crucial for building trust with Chinese suppliers. Factories commonly require:

**30% deposit + 70% after production**: Most common for small/medium orders.  
**Letter of Credit (LC)**: Used for large/complex orders, offering protection for both parties.

Adhering to payment terms boosts your credibility and may unlock better offers or discounts. Some suppliers offer extra flexibility (e.g., inspection, shipping coordination) to reliable clients.

Always document payments and communications to avoid misunderstandings. Payment terms vary by order size, product type, and supplier — always clarify before signing.`
          // ... (similar for zh/fr)
          : lang === "zh"
          ? `付款方式对与中方供应商建立信任至关重要。工厂通常要求：

**30%定金 + 70%生产后付**：中小型订单最常见。  
**信用证（LC）**：用于大型或复杂订单，为双方提供保障。

遵守付款条款可提升您的信誉，可能获得更优惠报价或折扣。部分供应商会为可靠客户提供额外灵活性（如验货、安排运输）。

务必记录所有付款和沟通，避免误解。付款条款因订单规模、产品类型和供应商而异，签约前务必确认。`
          : `Les méthodes de paiement sont cruciales pour établir la confiance avec les fournisseurs chinois. Les usines exigent souvent :

**30 % d’acompte + 70 % après production** : le plus courant pour les petites/moyennes commandes.  
**Lettre de crédit (LC)** : utilisée pour les grosses commandes complexes, protège les deux parties.

Respecter les conditions renforce votre crédibilité et peut vous valoir de meilleures offres. Certains fournisseurs offrent plus de flexibilité (inspection, logistique) aux clients fiables.

Documentez toujours les paiements et échanges. Les conditions varient selon la taille, le produit et le fournisseur — clarifiez avant de signer.`,
    },
    {
      id: 4,
      title:
        lang === "ar"
          ? "خدمات الوسيط التجاري"
          : lang === "en"
          ? "Trading Agent Services"
          : lang === "zh"
          ? "贸易代理服务"
          : "Services d’agent commercial",
      short:
        lang === "ar"
          ? "الوسيط التجاري يمثلك في الصين ويقدم خدمات شاملة لتسهيل الاستيراد..."
          : lang === "en"
          ? "A trading agent represents you in China and provides comprehensive services to simplify importing..."
          : lang === "zh"
          ? "贸易代理在中国代表您，并提供全面服务以简化进口流程..."
          : "Un agent commercial vous représente en Chine et offre des services complets pour faciliter l’importation...",
      full:
        lang === "ar"
          ? `الوسيط التجاري يمثلك في الصين ويقدم خدمات شاملة لتسهيل الاستيراد، بما في ذلك:

- البحث عن الموردين المناسبين.  
- التفاوض على أفضل الأسعار وشروط الدفع.  
- متابعة الجودة والإنتاج في المصانع.  
- ترتيب الشحن والتخليص الجمركي.  
- خدمات إضافية مثل الترجمة والمرافقة التجارية داخل الصين.

الوسيط يوفر لك وقتك وجهدك ويقلل المخاطر المحتملة من التعامل المباشر مع الموردين.`
          : lang === "en"
          ? `A trading agent represents you in China and provides comprehensive services to simplify importing, including:

- Finding suitable suppliers.  
- Negotiating the best prices and payment terms.  
- Quality control and production monitoring at factories.  
- Arranging shipping and customs clearance.  
- Additional services like translation and on-site business support.

An agent saves you time and effort while reducing risks associated with direct supplier engagement.`
          : lang === "zh"
          ? `贸易代理在中国代表您，并提供全面服务以简化进口流程，包括：

- 寻找合适的供应商。  
- 谈判最佳价格和付款条款。  
- 在工厂进行质量控制和生产监督。  
- 安排运输和清关。  
- 额外服务如翻译和现场商务陪同。

代理可为您节省时间和精力，同时降低直接与供应商打交道的风险。`
          : `Un agent commercial vous représente en Chine et offre des services complets pour faciliter l’importation, notamment :

- Recherche de fournisseurs adaptés.  
- Négociation des meilleurs prix et conditions de paiement.  
- Contrôle qualité et suivi de production en usine.  
- Organisation du fret et dédouanement.  
- Services supplémentaires : traduction, accompagnement sur place.

Un agent vous fait gagner du temps et réduit les risques liés aux échanges directs avec les fournisseurs.`,
    },
    {
      id: 5,
      title:
        lang === "ar"
          ? 'ما هي "الستوكات" في إيوو؟'
          : lang === "en"
          ? 'What Are "Stock Lots" in Yiwu?'
          : lang === "zh"
          ? '义乌的“库存尾货”是什么？'
          : 'Qu’est-ce que les « lots de stock » à Yiwu ?',
      short:
        lang === "ar"
          ? "الستوكات هي البضائع الفائضة أو بواقي الإنتاج، مثل عينات المعارض وفائض المواسم..."
          : lang === "en"
          ? "Stock lots are surplus or leftover goods, such as trade show samples or seasonal overstock..."
          : lang === "zh"
          ? "库存尾货是剩余或积压的货物，如展会样品、季节性过剩库存等..."
          : "Les lots de stock sont des surplus ou invendus, comme des échantillons de salons ou des excédents de saison...",
      full:
        lang === "ar"
          ? `الستوكات هي البضائع الفائضة أو بواقي الإنتاج، مثل:

- عينات المعارض.  
- فائض المواسم.  
- منتجات تم إرجاعها لكنها صالحة للاستخدام.

ميزتها أنها رخيصة جدًا ويمكن شراؤها بكميات صغيرة، ما يجعلها مناسبة للأعمال الصغيرة أو لتجربة منتجات جديدة.  
لكن الفحص الشخصي ضروري جدًا لتجنب البضائع المعيبة أو المنتجات غير المطابقة للمواصفات.`
          : lang === "en"
          ? `Stock lots are surplus or leftover goods, such as:

- Trade show samples.  
- Seasonal overstock.  
- Returned items still fit for use.

Their advantage: very low prices and small minimum order quantities — ideal for small businesses or testing new products.  
However, personal inspection is crucial to avoid defective or non-compliant items.`
          : lang === "zh"
          ? `库存尾货是剩余或积压的货物，例如：

- 展会样品。  
- 季节性过剩库存。  
- 已退货但仍可使用的商品。

优势：价格极低，可小批量采购，适合小企业或试销新产品。  
但务必亲自验货，避免收到瑕疵品或不符合规格的产品。`
          : `Les lots de stock sont des surplus ou invendus, tels que :

- Échantillons de salons professionnels.  
- Excédents de fin de saison.  
- Articles retournés mais encore utilisables.

Avantage : prix très bas et petites quantités minimales — idéal pour les petites entreprises ou tester de nouveaux produits.  
Mais une inspection sur place est essentielle pour éviter les articles défectueux ou non conformes.`,
    },
    {
      id: 6,
      title:
        lang === "ar"
          ? "الشحن البحري من الصين: كل ما تحتاج معرفته"
          : lang === "en"
          ? "Sea Freight from China: Everything You Need to Know"
          : lang === "zh"
          ? "从中国海运：您需要了解的一切"
          : "Fret maritime depuis la Chine : tout ce qu’il faut savoir",
      short:
        lang === "ar"
          ? "الشحن البحري هو الخيار الأكثر شيوعًا عند استيراد البضائع من الصين، خصوصًا للشحنات الكبيرة..."
          : lang === "en"
          ? "Sea freight is the most common choice for importing from China, especially for large shipments..."
          : lang === "zh"
          ? "海运是从中国进口最常用的方式，尤其适合大批量货物..."
          : "Le fret maritime est le choix le plus courant pour importer depuis la Chine, surtout pour les grosses commandes...",
      full:
        lang === "ar"
          ? `الشحن البحري هو الخيار الأكثر شيوعًا عند استيراد البضائع من الصين، خصوصًا للشحنات الكبيرة والثقيلة. البضائع عادة توضع داخل حاويات على ظهر السفينة، ويتم نقلها من الميناء الصيني إلى ميناء بلدك. فهم كيفية إدارة هذه العملية يضمن وصول البضاعة بأمان وبتكلفة مناسبة.

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
- غلف البضاعة جيدًا لتجنب التلف.`
          : lang === "en"
          ? `Sea freight is the most common choice for importing from China, especially for large/heavy shipments. Goods are typically loaded into containers on vessels and shipped from a Chinese port to your destination port. Understanding this process ensures safe, cost-effective delivery.

**Container Types**  
- **FCL (Full Container Load)**: A full container dedicated to your cargo only — ideal for high-value or sensitive goods.  
- **LCL (Less than Container Load)**: Shared container with other shippers — lower cost but longer handling time.

**Process**  
1. **Loading**: Containers moved to port and loaded onto vessel.  
2. **Transit**: Cargo protected inside sealed container.  
3. **Unloading**: Containers unloaded at destination port.

**Pros**: Low cost, ideal for large volumes.  
**Cons**: Slow (20–40 days), weather-dependent.

**Tips**:  
- Use a reliable freight forwarder or agent.  
- Confirm shipping terms (FOB or CIF).  
- Package goods securely to prevent damage.`
          : lang === "zh"
          ? `海运是从中国进口最常用的方式，尤其适合大批量或重型货物。货物通常装入集装箱，由船舶从中国港口运至目的港。了解此流程可确保货物安全、经济地送达。

**集装箱类型**  
- **FCL（整箱）**：整箱仅装您的货物——适合高价值或敏感货物。  
- **LCL（拼箱）**：与其他货主共享集装箱——成本较低，但操作时间较长。

**流程**  
1. **装货**：集装箱运至港口并装船。  
2. **运输**：货物在密封集装箱内受保护。  
3. **卸货**：在目的港卸箱。

**优点**：成本低，适合大批量。  
**缺点**：较慢（20–40天），受天气影响。

**建议**：  
- 使用可靠的货代或代理。  
- 确认贸易条款（FOB或CIF）。  
- 妥善包装货物以防损坏。`
          : `Le fret maritime est le choix le plus courant pour importer depuis la Chine, surtout pour les marchandises volumineuses/lourdes. Les marchandises sont chargées dans des conteneurs sur des navires, du port chinois à votre port d’arrivée. Comprendre ce processus garantit une livraison sûre et économique.

**Types de conteneurs**  
- **FCL (Conteneur complet)** : Réservé à votre cargaison — idéal pour marchandises précieuses/sensibles.  
- **LCL (Groupage)** : Partagé avec d’autres expéditeurs — coût réduit mais temps de manutention plus long.

**Processus**  
1. **Chargement** : Conteneurs acheminés au port et chargés.  
2. **Transit** : Marchandises protégées dans conteneur scellé.  
3. **Déchargement** : Déchargement au port d’arrivée.

**Avantages** : Coût bas, adapté aux gros volumes.  
**Inconvénients** : Lent (20–40 jours), dépendant de la météo.

**Conseils** :  
- Utilisez un transitaire fiable ou un agent.  
- Vérifiez les conditions (FOB ou CIF).  
- Emballez solidement pour éviter les dommages.`,
    },
  ];

  return { featured, posts };
};

// ======================
// MAIN COMPONENT
// ======================
const BlogPage = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.ar;
  const { featured, posts } = getBlogContent(lang);

  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const formatContent = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br/>");
  };

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
            {t.heroTitle}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Featured Section */}
      <section className="relative z-10 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {featured.title}
              </h2>

              <div
                onClick={() => setImageModalOpen(true)}
                className="mb-6 cursor-pointer group/image relative overflow-hidden rounded-xl shadow-lg transition-all duration-300"
              >
                <img
                  src={featured.image}
                  alt={
                    lang === "ar"
                      ? "خريطة المدن الصناعية في الصين"
                      : lang === "en"
                      ? "Map of Industrial Cities in China"
                      : lang === "zh"
                      ? "中国工业城市地图"
                      : "Carte des villes industrielles en Chine"
                  }
                  className="w-auto h-auto object-contain rounded-xl transition-opacity group-hover/image:opacity-90"
                />
                <p className="text-center text-gray-400 text-sm mt-2">
                  {t.viewImage}
                </p>
              </div>

              <div className="prose prose-invert max-w-none">
                <p
                  className="text-gray-300 text-lg leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{
                    __html: formatContent(
                      expandedId === "featured"
                        ? featured.full
                        : featured.short
                    ),
                  }}
                />
              </div>

              <button
                onClick={() =>
                  setExpandedId(expandedId === "featured" ? null : "featured")
                }
                className="mt-4 text-amber-400 font-bold hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                {expandedId === "featured" ? t.hide : t.showMore}
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

      {/* Blog Posts */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {posts.map((post) => (
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
                      __html: formatContent(
                        expandedId === post.id ? post.full : post.short
                      ),
                    }}
                  />
                </div>

                <button
                  onClick={() =>
                    setExpandedId(expandedId === post.id ? null : post.id)
                  }
                  className="mt-4 text-amber-400 font-bold hover:text-amber-300 flex items-center gap-1 transition-colors"
                >
                  {expandedId === post.id ? t.hide : t.showMore}
                  <span>{expandedId === post.id ? "▲" : "▼"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
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
              src={featured.image}
              alt={
                lang === "ar"
                  ? "خريطة المدن الصناعية في الصين"
                  : lang === "en"
                  ? "Map of Industrial Cities in China"
                  : lang === "zh"
                  ? "中国工业城市地图"
                  : "Carte des villes industrielles en Chine"
              }
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
            onClick={() =>
              window.open("https://t.me/kenanimpexp", "_blank")
            }
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