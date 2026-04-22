import Link from "next/link";
import { siteConfig, navLinks, footerContent } from "@/config/site-content";
import { Flame, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t-4 border-[#D32F2F]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-[#D32F2F] flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">{siteConfig.shortName}</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href={siteConfig.social.twitter} className="hover:text-[#D32F2F] transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href={siteConfig.social.facebook} className="hover:text-[#D32F2F] transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href={siteConfig.social.instagram} className="hover:text-[#D32F2F] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 relative inline-block">
              {footerContent.quickLinksTitle}
              <span className="absolute -bottom-1 right-0 w-1/2 h-0.5 bg-[#D32F2F]"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#D32F2F] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 relative inline-block">
              {footerContent.contactTitle}
              <span className="absolute -bottom-1 right-0 w-1/2 h-0.5 bg-[#D32F2F]"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D32F2F] shrink-0" />
                <span>{siteConfig.address}، {siteConfig.city}، {siteConfig.country}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D32F2F] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors" dir="ltr">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D32F2F] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
