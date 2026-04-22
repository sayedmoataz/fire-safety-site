"use client";

import { useState } from "react";
import Link from "next/link";
import { productsList, ProductCategory } from "@/config/site-content";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, CheckCircle2 } from "lucide-react";

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<ProductCategory>("All");
  
  const tabs: { label: string; value: ProductCategory }[] = [
    { label: "الكل", value: "All" },
    { label: "ثاني أكسيد الكربون", value: "CO2" },
    { label: "بودرة جافة", value: "Powder" },
    { label: "رغوة", value: "Foam" },
  ];

  const filteredProducts = activeTab === "All" 
    ? productsList 
    : productsList.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 inline-block relative">
            منتجاتنا
            <span className="absolute -bottom-3 left-1/4 w-1/2 h-1.5 bg-[#D32F2F] rounded-full"></span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            استكشف مجموعة واسعة من معدات السلامة ومكافحة الحرائق المعتمدة بأعلى معايير الجودة العالمية لحماية منشأتك.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-white p-2 rounded-xl shadow-sm border border-gray-100 max-w-fit mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-2.5 rounded-lg font-bold transition-all ${
                activeTab === tab.value 
                  ? "bg-[#D32F2F] text-white shadow-md" 
                  : "bg-transparent text-gray-600 hover:bg-red-50 hover:text-[#D32F2F]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="h-64 bg-gray-100 relative w-full flex items-center justify-center p-6">
                  <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center bg-gray-50 text-gray-400">
                    <span className="text-lg font-bold">{product.name} (Image)</span>
                  </div>
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#D32F2F] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {product.category}
                  </span>
                </div>
                
                {/* Product Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    {product.description}
                  </p>
                  
                  {/* Specs List */}
                  <div className="space-y-2 mb-6 bg-gray-50 p-4 rounded-xl">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3">
                      <FileText className="w-4 h-4 text-[#D32F2F]" />
                      المواصفات الفنية:
                    </h4>
                    <ul className="space-y-2">
                      {product.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action */}
                  <Link 
                    href={`/contact?product=${product.id}`}
                    className="w-full text-center py-3 bg-[#D32F2F] text-white font-bold rounded-xl shadow-md hover:bg-red-700 transition-colors"
                  >
                    اطلب الآن
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 font-semibold">لا توجد منتجات في هذا القسم حالياً.</p>
          </div>
        )}
      </div>
    </div>
  );
}
