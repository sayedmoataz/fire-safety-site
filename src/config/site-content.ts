export const siteConfig = {
  name: "درع الأمان لأنظمة الإطفاء", // Shield of Safety Fire Systems
  shortName: "درع الأمان", // Shield of Safety
  description: "الشركة الرائدة في تركيب وصيانة أنظمة إطفاء الحريق في المملكة العربية السعودية.", // Leading company in installation and maintenance of fire safety systems in KSA.
  phone: "+966500000000",
  whatsapp: "+966500000000",
  email: "info@amanshield.com",
  address: "شارع الملك فهد، حي العليا", // King Fahd St, Olaya District
  city: "الرياض", // Riyadh
  country: "المملكة العربية السعودية", // KSA
  coordinates: {
    lat: 24.7136,
    lng: 46.6753,
  },
  url: "https://www.amanshield.com", // Mock URL
  social: {
    twitter: "https://twitter.com/amanshield",
    facebook: "https://facebook.com/amanshield",
    instagram: "https://instagram.com/amanshield",
  },
  keywords: ["طفايات حريق", "صيانة طفايات الحريق", "مكافحة الحريق", "الدفاع المدني", "أنظمة إنذار مبكر", "السعودية", "الرياض"],
};

export const navLinks = [
  { name: "الرئيسية", href: "/" }, // Home
  { name: "منتجاتنا", href: "/products" }, // Products
  { name: "اتصل بنا", href: "/contact" }, // Contact Us
];

export const heroContent = {
  title: "حماية أرواحكم وممتلكاتكم هي أولويتنا", // Protecting your lives and properties is our priority
  subtitle: "معدات إطفاء وأنظمة سلامة معتمدة عالمياً بأعلى معايير الجودة.", // Globally certified fire equipment and safety systems with the highest quality standards.
  ctaPrimary: { label: "تصفح المنتجات", href: "/products" }, // Browse Products
  ctaSecondary: { label: "تواصل معنا", href: "/contact" }, // Contact Us
};

export const aboutContent = {
  title: "لماذا تختار درع الأمان؟", // Why choose Aman Shield?
  points: [
    {
      title: "اعتماد رسمي", // Official Certification
      description: "منتجات وخدمات معتمدة من الدفاع المدني والجهات المختصة.", // Products and services certified by Civil Defense and relevant authorities.
    },
    {
      title: "خبرة واسعة", // Extensive Experience
      description: "فريق هندسي متخصص ذو خبرة تفوق 15 عاماً في المجال.", // Specialized engineering team with over 15 years of field experience.
    },
    {
      title: "دعم على مدار الساعة", // 24/7 Support
      description: "خدمات الطوارئ والصيانة متاحة 24/7 لضمان سلامتكم.", // Emergency and maintenance services available 24/7 to ensure your safety.
    },
  ],
};

export type ProductCategory = "All" | "CO2" | "Powder" | "Foam";

export const productsList = [
  {
    id: "ext-co2-5kg",
    name: "طفاية حريق ثاني أكسيد الكربون (CO2) - 5 كجم", // CO2 Fire Extinguisher - 5kg
    category: "CO2" as ProductCategory,
    description: "مثالية لحرائق الكهرباء والسوائل المشتعلة، لا تترك أي بقايا بعد الاستخدام.", // Ideal for electrical and flammable liquid fires, leaves no residue.
    specs: ["السعة: 5 كجم", "مادة الإطفاء: غاز ثاني أكسيد الكربون", "التصنيف: Class B, C"],
    image: "/images/co2-ext.jpg", // Mock placeholder
  },
  {
    id: "ext-powder-6kg",
    name: "طفاية حريق بودرة جافة - 6 كجم", // Dry Powder Fire Extinguisher - 6kg
    category: "Powder" as ProductCategory,
    description: "طفاية متعددة الأغراض مناسبة لمعظم أنواع الحرائق (مواد صلبة، سوائل، غازات).", // Multi-purpose extinguisher suitable for most fire types.
    specs: ["السعة: 6 كجم", "مادة الإطفاء: بودرة كيميائية جافة", "التصنيف: Class A, B, C"],
    image: "/images/powder-ext.jpg",
  },
  {
    id: "ext-foam-9l",
    name: "طفاية حريق رغوة (Foam) - 9 لتر", // Foam Fire Extinguisher - 9L
    category: "Foam" as ProductCategory,
    description: "تستخدم بفعالية في إطفاء حرائق المواد الصلبة والسوائل القابلة للاشتعال.", // Effectively used on solid and flammable liquid fires.
    specs: ["السعة: 9 لتر", "مادة الإطفاء: رغوة مخففة", "التصنيف: Class A, B"],
    image: "/images/foam-ext.jpg",
  },
  {
    id: "ext-co2-2kg",
    name: "طفاية حريق ثاني أكسيد الكربون (CO2) - 2 كجم", // CO2 Fire Extinguisher - 2kg
    category: "CO2" as ProductCategory,
    description: "حجم صغير ومناسب للمكاتب وغرف التحكم الكهربائية.", // Compact size, suitable for offices and electrical control rooms.
    specs: ["السعة: 2 كجم", "مادة الإطفاء: غاز ثاني أكسيد الكربون", "التصنيف: Class B, C"],
    image: "/images/co2-ext-small.jpg",
  },
  {
    id: "ext-powder-12kg",
    name: "طفاية حريق بودرة جافة - 12 كجم", // Dry Powder Fire Extinguisher - 12kg
    category: "Powder" as ProductCategory,
    description: "طفاية صناعية عالية السعة للمستودعات والمصانع.", // High-capacity industrial extinguisher for warehouses and factories.
    specs: ["السعة: 12 كجم", "مادة الإطفاء: بودرة كيميائية جافة", "التصنيف: Class A, B, C"],
    image: "/images/powder-ext-large.jpg",
  },
];

export const certificates = [
  { id: "nfpa", name: "NFPA Member", image: "/images/cert-nfpa.png" },
  { id: "civil-defense", name: "الدفاع المدني", image: "/images/cert-civil.png" },
  { id: "iso-9001", name: "ISO 9001", image: "/images/cert-iso.png" },
];

export const footerContent = {
  copyright: `© ${new Date().getFullYear()} ${siteConfig.shortName}. جميع الحقوق محفوظة.`, // All rights reserved.
  quickLinksTitle: "روابط سريعة", // Quick Links
  contactTitle: "معلومات التواصل", // Contact Info
};

// SEO Metadata Default values
export const defaultMetadata = {
  title: {
    default: `${siteConfig.name} | أنظمة مكافحة الحرائق`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "طفايات حريق",
    "صيانة طفايات الحريق",
    "مكافحة الحريق",
    "الدفاع المدني",
    "أنظمة إنذار مبكر",
    "السعودية",
    "الرياض",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};
