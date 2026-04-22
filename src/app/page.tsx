import Link from "next/link";
import { siteConfig, heroContent, aboutContent, productsList, certificates } from "@/config/site-content";
import { ShieldCheck, ShieldAlert, Clock, ArrowLeft } from "lucide-react";

export default function Home() {
  // Get top 3 products
  const featureProducts = productsList.slice(0, 3);

  // Map icons dynamically to about section
  const aboutIcons = [ShieldCheck, ShieldAlert, Clock];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-start gap-6 max-w-4xl pt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {heroContent.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            {heroContent.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link 
              href={heroContent.ctaPrimary.href}
              className="px-8 py-3 bg-[#D32F2F] text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg"
            >
              {heroContent.ctaPrimary.label}
            </Link>
            <Link 
              href={heroContent.ctaSecondary.href}
              className="px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              {heroContent.ctaSecondary.label}
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-[#D32F2F] blur-[120px]"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
              {aboutContent.title}
              <span className="absolute -bottom-2 right-1/4 w-1/2 h-1 bg-[#D32F2F] rounded-full"></span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutContent.points.map((point, idx) => {
              const Icon = aboutIcons[idx % aboutIcons.length];
              return (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-gray-50">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-[#D32F2F] mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
                أبرز منتجاتنا
                <span className="absolute -bottom-2 right-0 w-1/3 h-1 bg-[#D32F2F] rounded-full"></span>
              </h2>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 font-bold text-[#D32F2F] hover:text-red-800 transition-colors">
              عرض كل المنتجات
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 overflow-hidden flex flex-col group">
                <div className="w-full h-64 bg-gray-200 relative overflow-hidden flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                  {/* Pseudo Image Placeholder */}
                  <span className="font-semibold text-gray-500">{product.name} (Image)</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold bg-red-100 text-[#D32F2F] px-3 py-1 rounded-full w-max mb-3">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{product.description}</p>
                  <Link href={`/contact?product=${product.id}`} className="mt-auto w-full text-center py-2.5 bg-gray-900 text-white rounded-lg hover:bg-[#D32F2F] transition-colors font-bold">
                    طلب تسعير
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 md:hidden text-center">
            <Link href="/products" className="inline-flex items-center gap-2 font-bold text-[#D32F2F] hover:text-red-800 transition-colors">
              عرض كل المنتجات
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certificates & Partners */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              اعتمادات وشهادات
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            {certificates.map((cert) => (
              <div key={cert.id} className="flex flex-col items-center">
                <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                   <span className="font-bold text-gray-400">{cert.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
