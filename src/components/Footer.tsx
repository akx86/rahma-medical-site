"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image"; 
import { NAV_LINKS, LEGAL_LINKS, CONTACT_INFO } from "@/constants/nav-links";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ShoppingBag } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants/contacts";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation");

  return (
    <footer className="relative mt-20">
      
      {/* التدرج العلوي */}
      <div className="absolute top-0 left-0 right-0 w-full h-20 -translate-y-full bg-gradient-to-b from-transparent to-[#082f49] backdrop-blur-[1px] pointer-events-none"></div>

      {/* جسم الفوتر */}
      <div className="bg-[#082f49] text-white pb-8 pt-6">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
            
            {/* --- Column 1: Logo & About (UPDATED FOR MOBILE CENTER) --- */}
            {/* التعديل 1: خلينا المحاذاة سنتر للموبايل، وبداية (start) للشاشات الأكبر */}
            <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-start">
              
              <Link href="/" className="inline-block">
                {/* التعديل 2: الهوامش السلبية خليناها للديسك توب بس (md:) عشان اللوجو يبقى في نص الموبايل بالظبط من غير ما يميل */}
                <div className="relative w-[260px] h-[90px] md:w-[300px] md:h-[100px] overflow-hidden md:-ml-6 md:rtl:-mr-6 mb-[-10px]">
                  <Image 
                    src="/logo.svg" 
                    alt="Rahma Medical Logo" 
                    fill
                    priority
                    className="object-contain object-start brightness-0 invert scale-[2.5]" 
                  />
                </div>
              </Link>
              
              <p className="text-blue-100/80 text-sm leading-relaxed max-w-xs mt-0">
                {t("about_description")}
              </p>
              
               <div className="mt-6 pt-3 border-t border-slate-600">
              <div className="flex gap-4 flex-wrap">
                {SOCIAL_LINKS.map((social, index) => {
                  
                  let Icon = ShoppingBag; 
                  if (social.key === 'facebook') Icon = Facebook;
                  else if (social.key === 'instagram') Icon = Instagram;
                  else if (social.key === 'twitter') Icon = Twitter;
                  
                  return (
                    <a 
                      key={index}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300 shadow-sm hover:-translate-y-1"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
            </div>

            {/* --- Column 2: Quick Links --- */}
            <div>
              <h3 className="text-base font-bold mb-4 text-white tracking-wide">
                {t("quick_links")}
              </h3>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.key}>
                    <Link 
                      href={link.href} 
                      className="text-blue-200/70 hover:text-white hover:translate-x-2 rtl:hover:-translate-x-2 transition-all duration-300 inline-block text-sm"
                    >
                      {tNav(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- Column 3: Legal --- */}
            <div>
              <h3 className="text-base font-bold mb-4 text-white tracking-wide">
                {t("legal")}
              </h3>
              <ul className="space-y-3">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.key}>
                    <Link 
                      href={link.href}
                      className="text-blue-200/70 hover:text-white hover:translate-x-2 rtl:hover:-translate-x-2 transition-all duration-300 inline-block text-sm"
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- Column 4: Contact Us --- */}
            <div>
              <h3 className="text-base font-bold mb-4 text-white tracking-wide">
                {t("contact_us")}
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 text-blue-100/80 hover:text-white group transition-colors">
                    <div className="bg-[#0c4a6e]/50 p-2 rounded-lg group-hover:bg-sky-500 transition-colors shadow-sm border border-white/5">
                      <Phone size={16} />
                    </div>
                    <span dir="ltr" className="text-sm font-medium">{CONTACT_INFO.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-blue-100/80 hover:text-white group transition-colors">
                    <div className="bg-[#0c4a6e]/50 p-2 rounded-lg group-hover:bg-sky-500 transition-colors shadow-sm border border-white/5">
                      <Mail size={16} />
                    </div>
                    <span className="text-sm font-medium">{CONTACT_INFO.email}</span>
                  </a>
                </li>
                <li>
                  <a href={CONTACT_INFO.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-blue-100/80 hover:text-white group transition-colors">
                     <div className="bg-[#0c4a6e]/50 p-2 rounded-lg group-hover:bg-sky-500 transition-colors shadow-sm mt-1 border border-white/5">
                      <MapPin size={16} />
                    </div>
                    <span className="text-sm font-medium leading-relaxed">{t(CONTACT_INFO.addressKey)}</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-sky-900/30 pt-6 mt-2 text-center md:text-start flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-blue-200/50 font-light">
              {t("copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}