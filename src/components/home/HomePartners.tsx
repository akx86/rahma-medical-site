"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

export default function HomePartners() {
  const t = useTranslations("HomePartners");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const LOGOS = [
    "/partners/winsha.png",
    "/partners/kaiyang.png",
    "/partners/invacare.png",
    "/partners/innova.png",
    "/partners/orange.png",
    "/partners/kssh.png",
  ];

  return (

    <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden group">
      

      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-sweep opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>


      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            {t("title")}
          </h2>
          <p className="text-slate-500 text-lg">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {LOGOS.map((logo, index) => (
            <div 
              key={index} 

              className="flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-sky-100 transition-all duration-300"
            >
              <Image
                src={logo}
                alt="Partner"
                width={120}
                height={80}
                className="object-contain w-auto h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* زرار العرض */}
        <div className="text-center">
          <Link 
            href="/partners" 
            className="group/btn relative inline-flex items-center gap-2 px-8 py-3 bg-sky-500 hover:bg-sky-400 text-white rounded-full font-medium transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/50 hover:-translate-y-1"
          >
            <div className="absolute inset-0 rounded-full overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            </div>
            <Sparkles size={16} className="text-sky-100" />
            <span>{t("view_all")}</span>
            {isRtl ? 
              <ArrowLeft size={18} className="group-hover/btn:-translate-x-1 transition-transform" /> : 
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            }
          </Link>
        </div>

      </div>
    </section>
  );
}