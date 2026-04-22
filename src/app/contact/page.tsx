"use client";

import { useState, FormEvent, Suspense } from "react";
import { siteConfig } from "@/config/site-content";
import { MapPin, Phone, Mail, Send, AlertCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const getProduct = searchParams?.get("product") || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: getProduct ? `مرحباً، أود الاستفسار عن المنتج: ${getProduct}` : "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    
    // Format message for WhatsApp
    const text = `*طلب تواصل من الموقع*%0a*الاسم:* ${formData.name}%0a*رقم الجوال:* ${formData.phone}%0a*الرسالة:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\+/g, "")}?text=${text}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-bold text-gray-700">الاسم الكريم <span className="text-red-500">*</span></label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-none transition-shadow bg-gray-50 focus:bg-white"
          placeholder="أدخل اسمك"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-bold text-gray-700">رقم الجوال <span className="text-red-500">*</span></label>
        <input
          id="phone"
          type="tel"
          required
          dir="ltr"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-none transition-shadow bg-gray-50 focus:bg-white text-left"
          placeholder="+966 5X XXX XXXX"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-bold text-gray-700">الرسالة أو الاستفسار <span className="text-red-500">*</span></label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] outline-none transition-shadow bg-gray-50 focus:bg-white resize-none"
          placeholder="اكتب استفسارك هنا..."
        ></textarea>
      </div>

      <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
        <p className="text-sm text-blue-800 leading-relaxed">
          عند الضغط على إرسال، سيتم تحويلك إلى تطبيق واتساب لإرسال رسالتك مباشرة إلى فريق الدعم الخاص بنا.
        </p>
      </div>

      <button
        type="submit"
        disabled={!formData.name || !formData.phone || !formData.message}
        className="w-full py-4 bg-[#D32F2F] text-white font-bold rounded-lg shadow-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 text-lg"
      >
        <Send className="w-5 h-5 rtl:rotate-180" />
        إرسال عبر الواتساب
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 inline-block relative">
            تواصل معنا
            <span className="absolute -bottom-3 left-1/4 w-1/2 h-1.5 bg-[#D32F2F] rounded-full"></span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            نحن هنا لخدمتكم والإجابة على كافة استفساراتكم. نسعد بتواصلكم معنا على مدار الساعة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Details & Map */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">معلومات الاتصال</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 text-[#D32F2F] rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">العنوان</h3>
                    <p className="text-gray-600">{siteConfig.address}، {siteConfig.city}</p>
                    <p className="text-gray-500 text-sm mt-1">{siteConfig.country}</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 text-[#D32F2F] rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">رقم الهاتف</h3>
                    <a href={`tel:${siteConfig.phone}`} className="text-gray-600 hover:text-[#D32F2F] transition-colors" dir="ltr block text-right">
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 text-[#D32F2F] rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">البريد الإلكتروني</h3>
                    <a href={`mailto:${siteConfig.email}`} className="text-gray-600 hover:text-[#D32F2F] transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Embedded Mock Google Map */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-64 relative">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 flex-col gap-2">
                <MapPin className="w-10 h-10 text-gray-400" />
                <span className="font-bold">Google Maps Placeholder</span>
                <span className="text-sm">Lat: {siteConfig.coordinates.lat}, Lng: {siteConfig.coordinates.lng}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 order-1 lg:order-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">أرسل رسالة</h2>
            <p className="text-gray-600 mb-8">قم بتعبئة النموذج التالي وسيقوم فريقنا بالتواصل معك في أقرب وقت.</p>
            <Suspense fallback={<div className="h-40 flex items-center justify-center text-gray-500">جاري التحميل...</div>}>
              <ContactFormContent />
            </Suspense>
          </div>

        </div>
      </div>
    </div>
  );
}
