"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import Image from "next/image"; 
import { 
  Globe,          
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon,
  Handshake
} from "lucide-react";
import { Button } from "@/components/ui/button"; 

export default function PartnersPage() {
  const t = useTranslations("Partners");
  const locale = useLocale();
  const isRtl = locale === "ar";

  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  
  
  const CLIENTS = [
    { id: 1, name: "client_guard", logo: "/partners/ngha.png" },      
    { id: 2, name: "client_khalid", logo: "/partners/ksumc.png" },    
    { id: 3, name: "client_commission", logo: "/partners/scfhs.png" }, 
    { id: 4, name: "client_innova", logo: "/partners/innova.png" },   
    { id: 5, name: "client_orange", logo: "/partners/orange.png" },   
    { id: 6, name: "client_alzheimer", logo: "/partners/alzheimer.png" }, 
  ];

  return (
    <main className="w-full bg-slate-50 min-h-screen font-[family-name:var(--font-ibm)]">
      
      {/* ==================== 1. Standard Gradient Banner ==================== */}
      <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-48 overflow-hidden bg-gradient-to-r from-sky-600 to-sky-500">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container relative z-10 px-6 text-center text-white">
           <motion.div
             initial={{ opacity: 0, y: 20 }} 
             animate={{ opacity: 1, y: 0 }} 
             transition={{ duration: 0.6 }}
           >
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm text-sky-50 mb-8 mx-auto hover:bg-white/20 transition-colors cursor-default">
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                  <HomeIcon size={14} /> {t("breadcrumb_home")}
                </Link>
                {isRtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                <span className="text-white font-medium">{t("breadcrumb_current")}</span>
             </div>

             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-md">
               {t("hero_title")}
             </h1>
             
             <p className="text-sky-100 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed opacity-90">
               {t("hero_subtitle")}
             </p>
           </motion.div>
        </div>
      </section>

      {/* ==================== 2. Clients Section (Logos Grid) 🖼️ ==================== */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">{t("clients_title")}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">{t("clients_desc")}</p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {CLIENTS.map((client) => (
              <motion.div
                key={client.id}
                variants={item}
                
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-100/50 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center h-[200px] relative"
              >
                {/* Logo Container */}
                <div className="relative w-full h-24 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-4">
                  <Image 
                    src={client.logo} 
                    alt={t(client.name)}
                    fill 
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 scale-90 group-hover:scale-105"
                  />
                </div>

                {/* Name Label - ✅ التعديل هنا */}
                {/* شلنا absolute bottom-6 وخليناها جزء من الفلو الطبيعي */}
                <h3 className="text-sm font-bold  text-slate-500 group-hover:text-sky-600 transition-all duration-300 text-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 h-0 group-hover:h-auto group-hover:mb-4 overflow-hidden">
                   {t(client.name)}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== 3. Suppliers Section (Global Network Placeholder) ==================== */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/world-map.png')] opacity-10 bg-center bg-no-repeat bg-contain pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          
          <div className="mb-16">
            <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-sky-400">
               <Globe size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("suppliers_title")}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">{t("suppliers_desc")}</p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-30 blur-[1px] select-none pointer-events-none"
          >
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="h-28 rounded-xl border border-slate-700 bg-slate-800/50 flex items-center justify-center">
                 <span className="text-slate-600 font-bold text-lg">Partner {i}</span>
               </div>
             ))}
          </motion.div>

          <div className="mt-12">
            <span className="inline-block px-6 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium animate-pulse">
              {t("suppliers_soon")}
            </span>
          </div>

        </div>
      </section>

      {/* ==================== 4. CTA Section ==================== */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <Handshake size={48} className="text-sky-500 mx-auto mb-6 opacity-80" strokeWidth={1.5} />
            <h2 className="text-3xl font-bold text-slate-800 mb-4">{t("cta_title")}</h2>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">{t("cta_desc")}</p>
            <Button 
              asChild 
              size="lg" 
              className="bg-slate-900 hover:bg-sky-600 text-white rounded-full px-8 h-12 shadow-lg transition-all"
            >
              <Link href="/contact">
                {t("cta_btn")}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </main>
  );
}