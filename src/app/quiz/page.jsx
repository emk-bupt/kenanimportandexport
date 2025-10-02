"use client";
import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// ======================
// TRANSLATIONS
// ======================
const translations = {
  ar: {
    heroTitle: "الأسئلة الشائعة",
    heroSubtitle: "إجابات على أكثر الأسئلة شيوعاً حول خدماتنا",
    contactCTA: "لم تجد إجابة لسؤالك؟",
    contactDesc: "تواصل معنا وسنكون سعداء لمساعدتك",
    contactButton: "تواصل معنا",
  },
  en: {
    heroTitle: "Frequently Asked Questions",
    heroSubtitle: "Answers to the most common questions about our services",
    contactCTA: "Didn’t find your answer?",
    contactDesc: "Contact us and we’ll be happy to help",
    contactButton: "Contact Us",
  },
  zh: {
    heroTitle: "常见问题",
    heroSubtitle: "关于我们服务的最常见问题解答",
    contactCTA: "没找到您的答案？",
    contactDesc: "联系我们，我们将很乐意为您提供帮助",
    contactButton: "联系我们",
  },
  fr: {
    heroTitle: "Questions Fréquentes",
    heroSubtitle: "Réponses aux questions les plus courantes sur nos services",
    contactCTA: "Vous n’avez pas trouvé de réponse ?",
    contactDesc: "Contactez-nous, nous serons ravis de vous aider",
    contactButton: "Nous contacter",
  },
};

// ======================
// FAQ CATEGORIES (TRANSLATED)
// ======================
const getFAQCategories = (lang) => {
  const t = translations[lang] || translations.ar;

  return [
    {
      category:
        lang === "ar"
          ? "الخدمات ونطاق العمل"
          : lang === "en"
          ? "Services & Scope of Work"
          : lang === "zh"
          ? "服务与业务范围"
          : "Services et périmètre d’intervention",
      icon: "⚙️",
      color: "from-blue-500 to-blue-600",
      questions:
        lang === "ar"
          ? [
              {
                q: "ما هي الخدمات الأساسية التي تقدمونها؟",
                a: "نقدم خدمة شراء وشحن من الصين تشمل: التواصل الفوري عبر واتساب، البحث عن أفضل الموردين، مقارنة الأسعار والجودة، متابعة الطلب خطوة بخطوة، إصدار فاتورة نهائية مع عقد تجاري، فحص جودة المنتج ، والتغليف والشحن عبر شركات موثوقة مع تتبع لحظي. كما نزوّدك بصور وفيديوهات للبضاعة عند الحاجة.",
              },
              {
                q: "ما الخدمات الإضافية المتاحة لديكم؟",
                a: "إلى جانب خدمة الشراء والشحن، نقدّم خدمات متنوعة تشمل: الترجمة الاحترافية (وثائق، عقود، كتالوجات)، المرافقة التجارية في المصانع والمعارض، المرافقة الطبية والطلابية في الصين، السياحة في بكين، الترجمة الفورية عبر الهاتف، ومصادقة الوثائق الرسمية لدى الجهات المختصة في الصين.",
              },
              {
                q: "هل تقدمون خدمات سياحية؟",
                a: "نعم، نقدّم خدمة سياحية في بكين بسعر 100 دولار أمريكي يوميًا (لا يشمل السكن، المواصلات، أو الطعام). كما نوفر مرافقة تجارية متكاملة تشمل التنسيق، الترجمة، والمساعدة في التنقّل.",
              },
              {
                q: "هل يمكنكم تصميم منتجات مخصصة بالكامل من الصفر؟",
                a: "حاليًا، لا نتولى تصميم منتجات جديدة من الصفر (مثل تصميم عبايات أو ملابس مخصصة بالكامل). لكننا نسعد بتقديم خدمات التخصيص البسيط على موديلات جاهزة، مثل تغيير اللون أو القماش، أو إضافة شعار أو ليبل خاص بعلامتك التجارية.",
              },
              {
                q: "ما هي الدول التي تدعمون الشحن إليها؟",
                a: "نقدم خدمات الشراء والشحن حاليًا إلى: السعودية، الإمارات، قطر، البحرين، الكويت، عُمان، الأردن، فلسطين، لبنان، سوريا، العراق، اليمن، ليبيا، تونس، الجزائر، والمغرب مورتانيا. إذا لم تكن دولتك ضمن هذه القائمة، نعتذر عن عدم القدرة على الخدمة حاليًا، ونأمل التعاون معك في المستقبل.",
              },
              {
                q: "هل تقدمون استشارات أو مقترحات لاختيار منتجات؟",
                a: "نحن لا نقدم مقترحات محددة للمنتجات، لأن اختيار المنتج يعتمد على عوامل عدة منها ذوق التاجر، طبيعة السوق المستهدف، والميزانية. ننصح دائماً بعمل دراسة وبحث مسبق، والاطلاع على المنصات العالمية للحصول على فكرة أوضح حول المنتجات المطلوبة.",
              },
            ]
          : lang === "en"
          ? [
              {
                q: "What are your core services?",
                a: "We offer China sourcing and shipping services including: instant WhatsApp communication, supplier research, price & quality comparison, step-by-step order tracking, final invoice with commercial contract, product quality inspection, and packaging & shipping via trusted carriers with real-time tracking. We also provide photos and videos of your goods when needed.",
              },
              {
                q: "What additional services do you offer?",
                a: "Beyond sourcing and shipping, we offer: professional translation (documents, contracts, catalogs), factory & trade show accompaniment, medical & student support in China, Beijing tourism, phone-based live interpretation, and official document authentication with Chinese authorities.",
              },
              {
                q: "Do you offer tourism services?",
                a: "Yes, we provide Beijing tourism at $100 USD per day (excluding accommodation, transport, or meals). We also offer full business accompaniment including coordination, translation, and logistics support.",
              },
              {
                q: "Can you design fully custom products from scratch?",
                a: "Currently, we don’t design new products from scratch (e.g., custom abayas or fully bespoke clothing). However, we’re happy to offer simple customization on ready-made models—such as changing color, fabric, or adding your brand logo/label.",
              },
              {
                q: "Which countries do you ship to?",
                a: "We currently serve: Saudi Arabia, UAE, Qatar, Bahrain, Kuwait, Oman, Jordan, Palestine, Lebanon, Syria, Iraq, Yemen, Libya, Tunisia, Algeria, Morocco, and Mauritania. If your country isn’t listed, we apologize for the current limitation and hope to collaborate in the future.",
              },
              {
                q: "Do you provide product recommendations?",
                a: "We don’t suggest specific products, as selection depends on your market taste, target audience, and budget. We always recommend conducting prior research and reviewing global platforms to better understand in-demand products.",
              },
            ]
          : lang === "zh"
          ? [
              {
                q: "你们的核心服务是什么？",
                a: "我们提供从中国采购和运输服务，包括：通过 WhatsApp 即时沟通、寻找优质供应商、比价比质、全程订单跟踪、提供带商业合同的最终发票、产品质量检验，以及通过可靠承运商进行包装和运输（含实时追踪）。如有需要，我们还可提供货物照片和视频。",
              },
              {
                q: "你们还提供哪些附加服务？",
                a: "除采购和运输外，我们还提供：专业翻译（文件、合同、目录）、工厂和展会陪同、在华医疗与学生支持、北京旅游、电话实时口译，以及协助在中国官方机构认证文件。",
              },
              {
                q: "你们提供旅游服务吗？",
                a: "是的，我们提供北京旅游服务，价格为每天 100 美元（不含住宿、交通或餐饮）。我们还提供完整的商务陪同服务，包括协调、翻译和出行协助。",
              },
              {
                q: "你们能从零开始设计完全定制的产品吗？",
                a: "目前，我们不提供从零开始的全新产品设计（例如定制长袍或完全专属服装）。但我们很乐意在现有款式基础上进行简单定制，如更换颜色、面料，或添加您的品牌标志/标签。",
              },
              {
                q: "你们支持哪些国家的运输？",
                a: "目前服务国家包括：沙特、阿联酋、卡塔尔、巴林、科威特、阿曼、约旦、巴勒斯坦、黎巴嫩、叙利亚、伊拉克、也门、利比亚、突尼斯、阿尔及利亚、摩洛哥和毛里塔尼亚。若您的国家未在列表中，敬请谅解，我们期待未来合作。",
              },
              {
                q: "你们会推荐具体产品吗？",
                a: "我们不提供具体产品推荐，因为选品取决于您的市场偏好、目标客户和预算。我们建议您提前调研，并参考全球平台以更好地了解市场需求。",
              },
            ]
          : [
              {
                q: "Quels sont vos services principaux ?",
                a: "Nous proposons des services d’approvisionnement et d’expédition depuis la Chine, incluant : communication instantanée via WhatsApp, recherche de fournisseurs, comparaison prix/qualité, suivi étape par étape, facture finale avec contrat commercial, inspection qualité, emballage et expédition via transporteurs fiables avec suivi en temps réel. Nous fournissons aussi photos et vidéos si nécessaire.",
              },
              {
                q: "Quels services supplémentaires proposez-vous ?",
                a: "Au-delà de l’approvisionnement, nous offrons : traduction professionnelle (documents, contrats, catalogues), accompagnement en usine/salons, assistance médicale/étudiante en Chine, tourisme à Pékin, interprétation téléphonique, et authentification de documents officiels auprès des autorités chinoises.",
              },
              {
                q: "Proposez-vous des services touristiques ?",
                a: "Oui, tourisme à Pékin à 100 USD/jour (hors hébergement, transport, repas). Nous proposons aussi un accompagnement commercial complet : coordination, traduction, logistique.",
              },
              {
                q: "Pouvez-vous concevoir des produits entièrement sur mesure ?",
                a: "Actuellement, nous ne concevons pas de produits ex nihilo (ex. : abayas ou vêtements entièrement personnalisés). Mais nous proposons des personnalisations simples sur modèles existants : couleur, tissu, logo ou étiquette de votre marque.",
              },
              {
                q: "Vers quels pays expédiez-vous ?",
                a: "Actuellement : Arabie Saoudite, Émirats, Qatar, Bahreïn, Koweït, Oman, Jordanie, Palestine, Liban, Syrie, Irak, Yémen, Libye, Tunisie, Algérie, Maroc, Mauritanie. Si votre pays n’est pas listé, nous espérons collaborer à l’avenir.",
              },
              {
                q: "Proposez-vous des recommandations de produits ?",
                a: "Non, le choix dépend de votre marché, public cible et budget. Nous conseillons toujours de faire des recherches préalables et d’étudier les plateformes mondiales pour identifier les produits demandés.",
              },
            ],
    },
    {
      category:
        lang === "ar"
          ? "الأسعار والطلبات"
          : lang === "en"
          ? "Pricing & Orders"
          : lang === "zh"
          ? "价格与订单"
          : "Tarifs & Commandes",
      icon: "💰",
      color: "from-green-500 to-green-600",
      questions:
        lang === "ar"
          ? [
              {
                q: "هل يمكن الاستيراد بكميات صغيرة أو بالقطعة؟",
                a: "نعم، ندعم الشراء بالتجزئة والجملة على حد سواء. للطلبات الصغيرة (التجزئة)، لا يُشترط الحد الأدنى للقيمة ($1,500) أو الحجم (1 CBM)، بل نتعامل مع الكميات الصغيرة حسب احتياجاتك، سواء كانت شخصية أو تجارية، بشرط أن تكون مناسبة للشحن عبر الطرق المتاحة: شحن بحري جزئي (LCL) أو شحن جوي (يُفضّل من 25 كغ فما فوق). أما طلبات الجملة، فتخضع للشروط التالية: الحد الأدنى $1,500 و1 متر مكعب للشحن البحري أو 25 كغ للجوي.",
              },
              {
                q: "هل لديكم قائمة أسعار أو كتالوج جاهز؟",
                a: "لا، ليس لدينا كتالوج أو أسعار جاهزة. كل طلب يُعامل بشكل فردي حسب نوع المنتج، الكمية، المواصفات، وطبيعة المورد. نحن نبحث لك عن أفضل المصانع ونقدّم عرض سعر مخصص بعد فهم متطلباتك بدقة.",
              },
              {
                q: "لماذا يجب أن أزوّدكم بالكمية والميزانية قبل الحصول على سعر؟",
                a: "لأن السعر في الصين يعتمد بشكل كبير على الكمية: كلما زادت الكمية، انخفض سعر الوحدة. معرفة ميزانيتك والكمية المطلوبة تساعدنا في تحديد ما إذا كان طلبك واقعيًا، واختيار الموردين المناسبين، وتقديم عرض سعر دقيق وقابل للتنفيذ.",
              },
            ]
          : lang === "en"
          ? [
              {
                q: "Can I import in small quantities or per piece?",
                a: "Yes, we support both retail and wholesale orders. For small (retail) orders, there’s no minimum value ($1,500) or volume (1 CBM) requirement—we handle small quantities based on your personal or commercial needs, as long as they’re suitable for available shipping methods: LCL sea freight or air freight (recommended for 25 kg+). Bulk orders require: minimum $1,500 and 1 CBM for sea or 25 kg for air.",
              },
              {
                q: "Do you have a ready-made price list or catalog?",
                a: "No, we don’t offer pre-made catalogs or fixed prices. Each order is handled individually based on product type, quantity, specifications, and supplier. We research the best factories and provide a custom quote after fully understanding your requirements.",
              },
              {
                q: "Why must I provide quantity and budget before getting a quote?",
                a: "Because pricing in China heavily depends on quantity: the more you order, the lower the unit price. Knowing your budget and required quantity helps us assess feasibility, select suitable suppliers, and provide an accurate, actionable quote.",
              },
            ]
          : lang === "zh"
          ? [
              {
                q: "可以小批量或单件进口吗？",
                a: "可以，我们支持零售和批发订单。小批量（零售）订单无最低金额（1500美元）或体积（1立方米）要求——我们会根据您的个人或商业需求处理小批量货物，只要适合可用运输方式：拼箱海运（LCL）或空运（建议25公斤以上）。大宗订单需满足：海运最低1500美元和1立方米，或空运25公斤。",
              },
              {
                q: "你们有现成的价格表或目录吗？",
                a: "没有。我们不提供现成目录或固定价格。每个订单都根据产品类型、数量、规格和供应商单独处理。我们会为您寻找最佳工厂，并在充分了解需求后提供定制报价。",
              },
              {
                q: "为什么报价前必须提供数量和预算？",
                a: "因为中国价格高度依赖数量：订单越多，单价越低。了解您的预算和数量有助于我们评估可行性、选择合适供应商，并提供准确可行的报价。",
              },
            ]
          : [
              {
                q: "Peut-on importer en petites quantités ou à l’unité ?",
                a: "Oui, nous traitons commandes au détail et en gros. Pour les petites commandes, pas de minimum ($1 500 ou 1 m³). Nous gérons les petites quantités selon vos besoins (personnels ou commerciaux), à condition qu’elles soient adaptées aux modes d’expédition : groupage maritime (LCL) ou fret aérien (recommandé à partir de 25 kg). Les commandes en gros exigent : min. $1 500 et 1 m³ (mer) ou 25 kg (air).",
              },
              {
                q: "Avez-vous une liste de prix ou un catalogue prêt ?",
                a: "Non. Chaque commande est traitée individuellement selon le produit, la quantité, les spécifications et le fournisseur. Nous recherchons les meilleures usines et fournissons un devis personnalisé après analyse précise de vos besoins.",
              },
              {
                q: "Pourquoi fournir quantité et budget avant un devis ?",
                a: "Car le prix en Chine dépend fortement de la quantité : plus vous commandez, moins le prix unitaire est élevé. Cela nous permet d’évaluer la faisabilité, choisir les bons fournisseurs, et vous proposer un devis précis et réalisable.",
              },
            ],
    },
    {
      category:
        lang === "ar"
          ? "آلية الدفع والعربون"
          : lang === "en"
          ? "Payment & Deposit Process"
          : lang === "zh"
          ? "付款与定金流程"
          : "Paiement & Acompte",
      icon: "💳",
      color: "from-amber-500 to-amber-600",
      questions:
        lang === "ar"
          ? [
              {
                q: "لماذا تطلبون عربونًا مسبقًا؟ وماذا يغطي؟",
                a: "العربون المسبق (99$) يُثبت جدية العميل ويُخصم من قيمة الطلب النهائي. يغطي هذا المبلغ جهود المرحلة الأولى: البحث عن الموردين، التفاوض، وتقديم عرض سعر مبدئي. نعتمد عليه لضمان تخصيص وقت الفريق لكل طلب بجدية.",
              },
              {
                q: "ما هي مراحل الدفع في عملية الشراء؟",
                a: "الدفع يتم على مراحل: (1) عربون مبدئي (99$)، (2) دفع قيمة العينات إن طُلبت، (3) دفع كامل قيمة الطلب عند التأكيد، (4) دفع تكلفة الشحن عند التسليم أو حسب شروط شركة الشحن. يتم الاتفاق على كل تفصيل قبل البدء.",
              },
            ]
          : lang === "en"
          ? [
              {
                q: "Why do you require an upfront deposit? What does it cover?",
                a: "The $99 deposit confirms your seriousness and is deducted from your final order total. It covers initial efforts: supplier research, negotiation, and preliminary quote preparation. We rely on it to ensure our team dedicates time to each request seriously.",
              },
              {
                q: "What are the payment stages in the purchasing process?",
                a: "Payment occurs in stages: (1) $99 initial deposit, (2) sample payment if requested, (3) full order payment upon confirmation, (4) shipping cost at delivery or per carrier terms. All details are agreed upon before starting.",
              },
            ]
          : lang === "zh"
          ? [
              {
                q: "为什么需要预付定金？它包含什么？",
                a: "99美元定金用于确认您的诚意，并从最终订单总额中扣除。它涵盖初期工作：供应商搜寻、谈判和初步报价准备。我们依靠它确保团队认真对待每个订单。",
              },
              {
                q: "采购流程的付款阶段有哪些？",
                a: "付款分阶段进行：(1) 99美元初始定金，(2) 如需样品则支付样品费，(3) 确认订单后支付全款，(4) 交货时或按承运商条款支付运费。所有细节均在开始前确认。",
              },
            ]
          : [
              {
                q: "Pourquoi un acompte initial ? Que couvre-t-il ?",
                a: "L’acompte de 99 $ confirme votre sérieux et est déduit du total final. Il couvre les premiers efforts : recherche de fournisseurs, négociation, devis préliminaire. Cela nous permet de consacrer du temps à chaque demande.",
              },
              {
                q: "Quelles sont les étapes de paiement ?",
                a: "Paiement en étapes : (1) acompte de 99 $, (2) paiement des échantillons si demandés, (3) paiement total à la confirmation, (4) frais d’expédition à la livraison ou selon les conditions du transporteur. Tous les détails sont convenus avant de commencer.",
              },
            ],
    },
    {
      category:
        lang === "ar"
          ? "الشحن والتوصيل"
          : lang === "en"
          ? "Shipping & Delivery"
          : lang === "zh"
          ? "运输与交付"
          : "Expédition & Livraison",
      icon: "🚢",
      color: "from-cyan-500 to-cyan-600",
      questions:
        lang === "ar"
          ? [
              {
                q: "هل أنتم شركة شحن؟ وما هو دوركم في الشحن؟",
                a: "نحن لسنا شركة شحن. دورنا هو تنسيق عملية الشحن نيابة عنك عبر شركات شحن موثوقة. نختار أفضل خيار من حيث السعر والموثوقية، ونتابع الشحنة حتى وصولها، لكن التنفيذ الفعلي يكون عبر شركائنا في الشحن.",
              },
              {
                q: "كيف تُحسب تكاليف الشحن؟",
                a: "تكاليف الشحن تعتمد على نوع البضاعة، الحجم (CBM)، الوزن، وطريقة الشحن (بحري/جوي). لا يمكن تحديد السعر دون معرفة تفاصيل الطلب. نقدم لك عروض مقارنة من شركات شحن موثوقة لاختيار الأنسب.",
              },
              {
                q: "هل تشمل خدماتكم تكاليف الشحن والجمارك؟",
                a: "لا، تكاليف الشحن والتخليص الجمركي لا تدخل ضمن أتعابنا. نحن ننسّق مع شركات الشحن ونزودك بتكلفة دقيقة مقدمة منهم، لكن الدفع يتم مباشرة لهم أو عبرنا كطرف وسيط حسب الاتفاق.",
              },
              {
                q: "هل تضمنون وصول البضاعة في وقت محدد؟",
                a: "لا يمكننا ضمان مدة وصول محددة، لأنها تعتمد على عوامل خارجة عن إرادتنا مثل: إجراءات الموانئ، التخليص الجمركي، الظروف الجوية، تأخيرات شركات الشحن، وكذلك **الإجازات الرسمية في الصين أو في بلدك** (مثل عيد الفطر، عيد الأضحى، رأس السنة الصينية، إلخ). لذلك، ننصحك بمراعاة هذه الفترات عند حجز طلبيتك لتجنب التأخير غير المتوقع. ومع ذلك، نتابع الشحنة لحظة بلحظة ونُبلغك فورًا بأي تغيير طارئ.",
              },
            ]
          : lang === "en"
          ? [
              {
                q: "Are you a shipping company? What is your role in shipping?",
                a: "We are not a shipping company. Our role is to coordinate shipping on your behalf through trusted carriers. We select the best option by price and reliability, track the shipment until delivery, but actual execution is handled by our shipping partners.",
              },
              {
                q: "How are shipping costs calculated?",
                a: "Shipping costs depend on cargo type, volume (CBM), weight, and method (sea/air). Pricing cannot be determined without order details. We provide comparative quotes from reliable carriers for you to choose the best option.",
              },
              {
                q: "Do your services include shipping and customs costs?",
                a: "No, shipping and customs clearance fees are not included in our service fees. We coordinate with carriers and provide you accurate costs from them, but payment is made directly to them or through us as an intermediary per agreement.",
              },
              {
                q: "Do you guarantee a specific delivery time?",
                a: "We cannot guarantee exact delivery times, as they depend on factors beyond our control: port procedures, customs clearance, weather, carrier delays, and **official holidays in China or your country** (e.g., Eid al-Fitr, Eid al-Adha, Chinese New Year, etc.). We recommend accounting for these periods when placing orders to avoid unexpected delays. However, we monitor your shipment in real-time and notify you immediately of any changes.",
              },
            ]
          : lang === "zh"
          ? [
              {
                q: "你们是货运公司吗？在运输中扮演什么角色？",
                a: "我们不是货运公司。我们的角色是代表您通过可靠承运商协调运输。我们根据价格和可靠性选择最佳方案，全程跟踪货物直至送达，但实际操作由我们的货运合作伙伴执行。",
              },
              {
                q: "运费如何计算？",
                a: "运费取决于货物类型、体积（CBM）、重量和运输方式（海运/空运）。没有订单详情无法确定价格。我们会提供多家可靠承运商的对比报价供您选择。",
              },
              {
                q: "你们的服务包含运费和清关费吗？",
                a: "不包含。运费和清关费不属于我们的服务费用。我们与承运商协调并提供准确报价，但付款需直接支付给他们，或通过我们作为中介（按协议）。",
              },
              {
                q: "你们能保证具体送达时间吗？",
                a: "无法保证确切送达时间，因为这取决于我们无法控制的因素：港口流程、清关、天气、承运商延误，以及**中国或您国家的法定假日**（如开斋节、宰牲节、春节等）。建议下单时考虑这些时段以避免意外延误。我们会实时监控货物，并在出现变动时立即通知您。",
              },
            ]
          : [
              {
                q: "Êtes-vous une société de transport ? Quel est votre rôle ?",
                a: "Non. Notre rôle est de coordonner l’expédition via des transporteurs fiables. Nous choisissons la meilleure option (prix/fiabilité), suivons jusqu’à livraison, mais l’exécution est assurée par nos partenaires logistiques.",
              },
              {
                q: "Comment calculez-vous les frais d’expédition ?",
                a: "Les coûts dépendent du type de marchandise, volume (m³), poids et mode (mer/air). Impossible de tarifer sans détails. Nous fournissons des devis comparatifs de transporteurs fiables.",
              },
              {
                q: "Vos services incluent-ils les frais d’expédition et de douane ?",
                a: "Non. Ces frais ne font pas partie de nos honoraires. Nous coordonnons avec les transporteurs et vous transmettons leurs tarifs précis, mais le paiement se fait directement ou via nous comme intermédiaire.",
              },
              {
                q: "Garantissez-vous un délai de livraison précis ?",
                a: "Non, car cela dépend de facteurs externes : procédures portuaires, douane, météo, retards logistiques, et **jours fériés en Chine ou dans votre pays** (Aïd, Nouvel An chinois, etc.). Nous vous conseillons d’en tenir compte lors de votre commande. Nous suivons cependant votre colis en temps réel et vous alertons en cas de changement.",
              },
            ],
    },
  ];
};

// ======================
// MAIN COMPONENT
// ======================
const FAQPage = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.ar;
  const faqCategories = getFAQCategories(lang);

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
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
            {t.heroSubtitle}
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
            {t.contactCTA}
          </h2>
          <p className="text-xl text-gray-300 mb-8">{t.contactDesc}</p>
          <button
            onClick={() =>
              window.open("https://wa.me/+8613681046887", "_blank")
            }
            className="group relative inline-block bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white px-12 py-4 rounded-2xl text-xl md:text-2xl font-black hover:from-green-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-4 border-white/20 backdrop-blur-sm overflow-hidden cursor-pointer shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>{t.contactButton}</span>
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