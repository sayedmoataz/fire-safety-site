export const siteConfig = {
  name: "التوفيق للأمن الصناعي ومعدات الإطفاء",
  shortName: "التوفيق للأمن الصناعي",
  description: "الشركة الرائدة في حلول وتوريدات الأمن الصناعي ومعدات مكافحة الحرائق في مصر. نوفر طفايات الحريق، صناديق وخراطيم الإطفاء، كواسر الحريق، ومعدات السلامة المهنية بأعلى مواصفات الجودة المعتمدة.",
  phone: "01024431610",
  whatsapp: "+201024431610",
  email: "",
  address: "١٥ مايو، مجاورة ٣، حلوان",
  city: "القاهرة",
  country: "جمهورية مصر العربية",
  coordinates: {
    lat: 29.8369105,
    lng: 31.3461708,
  },
  mapUrl: "https://www.google.com/maps/place/El+Tawfik+For+Industrial+Safty/@29.8369105,31.3461708,17z/data=!4m6!3m5!1s0x1458340265da1497:0x709e535643ff5072!8m2!3d29.8369105!4d31.3461708!16s%2Fg%2F1hc223y58",
  url: "https://www.eltawfeeq-safety.com",
  social: {
    twitter: "",
    facebook: "",
    instagram: "",
  },
  keywords: ["طفايات حريق مصر", "الأمن الصناعي حلوان", "معدات مكافحة الحريق بالقاهرة", "صناديق حريق", "خراطيم حريق", "كواسر إنذار الحريق", "أدوات السلامة المهنية", "شركة التوفيق للأمن الصناعي"],
};

export const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "منتجاتنا", href: "/products" },
  { name: "اتصل بنا", href: "/contact" },
];

export const heroContent = {
  title: "أمان منشأتك وسلامة فريقك.. في أيدي أمينة",
  subtitle: "التوفيق للأمن الصناعي: رائدون في توريد وتجهيز كافة معدات الإطفاء والسلامة المهنية المعتمدة محلياً وعالمياً لضمان أعلى درجات الوقاية.",
  ctaPrimary: { label: "استكشف منتجاتنا", href: "/products" },
  ctaSecondary: { label: "تواصل معنا", href: "/contact" },
};

export const aboutContent = {
  title: "لماذا يثق بنا عملاؤنا؟",
  points: [
    {
      title: "معايير معتمدة",
      description: "جميع معداتنا وطفاياتنا مطابقة للمواصفات القياسية المصرية وتوجيهات الدفاع المدني لضمان الأمان الكامل.",
    },
    {
      title: "تجهيز وتوريد شامل",
      description: "نوفر تشكيلة متكاملة تبدأ من طفايات الحريق وصناديق الإطفاء إلى كواسر الإنذار وخوذ السلامة وكافة مستلزمات الأمن الصناعي.",
    },
    {
      title: "خبرة وسرعة استجابة",
      description: "فريق متخصص في خدمتكم لتلبية احتياجات المصانع والشركات والمباني التجارية بأسرع وقت وأفضل سعر في السوق المصري.",
    },
  ],
};

export type ProductCategory = "All" | "Extinguishers" | "Cabinets" | "Gear";

export const productsList = [
  {
    id: "ext-powder-6kg",
    name: "طفاية حريق بودرة كيميائية جافة - 6 كجم",
    category: "Extinguishers" as ProductCategory,
    description: "الطفاية الأكثر كفاءة وتعدداً في الاستخدام لحرائق المواد الصلبة، السوائل، والكهرباء. مطابقة للمواصفات المصرية ومعتمدة من الدفاع المدني.",
    specs: ["السعة: 6 كجم", "مادة الإطفاء: بودرة كيميائية جافة (ABC)", "تأتي مع حامل جداري ومؤشر ضغط للتحقق الدائم", "تصنيف الفئة: Class A, B, C"],
    image: "/images/post-9.jpeg",
  },
  {
    id: "ext-co2-multi",
    name: "طفاية حريق ثاني أكسيد الكربون (CO2) - أحجام مختلفة",
    category: "Extinguishers" as ProductCategory,
    description: "مثالية لحماية التوصيلات الكهربائية والمولدات والأجهزة الإلكترونية الحساسة دون ترك أي مخلفات، متوفرة بأحجام وسعات متنوعة تناسب كافة المتطلبات.",
    specs: ["السعة: متوفرة بأحجام مختلفة (2 كجم، 5 كجم، إلخ)", "مادة الإطفاء: غاز ثاني أكسيد الكربون المسال", "مثالية لحرائق الكهرباء الفئة C والسوائل الفئة B", "جسم فولاذي سميك مقاوم للضغط المرتفع"],
    image: "/images/co2-extinguishers.webp",
  },
  {
    id: "fire-cabinet-hose",
    name: "صندوق حريق مجهز بالكامل مع خرطوم ومحبس",
    category: "Cabinets" as ProductCategory,
    description: "صندوق حريق خارجي أو غاطس مصنوع من الصاج المقاوم للصدأ ومطلي إلكتروستاتيك لحمايته من العوامل الجوية، مزود بخرطوم إطفاء وبكرة مرنة.",
    specs: ["الخامة: صاج مجلفن بسماكة معتمدة ومقاوم للصدأ", "المحتويات: بكرة خرطوم حريق بطول 30 متر مع محبس نحاسي 1 بوصة", "تصميم عملي للاستخدام السريع والطارئ", "الصورة: المنتج الفعلي المتوفر بالمخازن"],
    image: "/images/fire-cabinet.webp",
  },
  {
    id: "manual-call-point",
    name: "كاسر زجاج إنذار الحريق اليدوي",
    category: "Gear" as ProductCategory,
    description: "كواسر زجاجية يدوية ممتازة للاستخدام في الممرات والمصانع لإطلاق صافرات الإنذار يدوياً فور حدوث طوارئ.",
    specs: ["النوع: كاسر زجاجي يدوي (Manual Call Point)", "اللون: أحمر تحذيري مع غطاء حماية شفاف لمنع العبث", "سهل التوصيل والربط مع مختلف لوحات الإنذار المركزية", "الصورة: المنتج الفعلي المتوفر بالمخازن"],
    image: "/images/break-glass.webp",
  },
  {
    id: "safety-gear-set",
    name: "معدات الوقاية الشخصية والسلامة المهنية",
    category: "Gear" as ProductCategory,
    description: "خوذ حماية صلبة، أحذية سلامة (سيفتي) بمقدمة حديدية، نظارات واقية، وقفازات عازلة لحماية العمال في المواقع الصناعية والإنشائية.",
    specs: ["المكونات: خوذة رأس، نظارة حماية، قفازات عمل، أحذية سيفتي عالية التحمل", "مطابقة للمواصفات القياسية للصحة والسلامة المهنية بمصر", "مقاومة ممتازة للصدمات، الحرارة، والانزلاق"],
    image: "/images/image-4.jpg",
  },
  {
    id: "brass-fire-valve",
    name: "محبس حريق نحاسي عالي الكفاءة",
    category: "Cabinets" as ProductCategory,
    description: "محابس نحاسية معتمدة مخصصة لشبكات إطفاء الحرائق وصناديق الخراطيم لضمان تدفق سريع وآمن للمياه عند الضغوط العالية.",
    specs: ["المادة: نحاس نقي مطروق مضاد للأكسدة والتآكل", "المقاس: متوفر بمقاسات 1.5 و 2.5 بوصة لتناسب خراطيم الدفاع المدني", "يتحمل ضغوط التشغيل المرتفعة ومقاوم للتكلس", "الصورة: المنتج الفعلي المتوفر بالمخازن"],
    image: "/images/fire-valve.jpeg",
  },
];

export const certificates = [
  { id: "egyptian-standard", name: "المواصفات القياسية المصرية", image: "/images/cert-egypt.png" },
  { id: "civil-defense", name: "الدفاع المدني المصري", image: "/images/cert-civil.png" },
  { id: "iso-9001", name: "ISO 9001", image: "/images/cert-iso.png" },
];

export const footerContent = {
  copyright: `© ${new Date().getFullYear()} ${siteConfig.shortName}. جميع الحقوق محفوظة.`,
  quickLinksTitle: "روابط سريعة",
  contactTitle: "معلومات التواصل",
};

// SEO Metadata Default values
export const defaultMetadata = {
  title: {
    default: `${siteConfig.name} | أنظمة مكافحة الحرائق والسلامة المهنية`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};
