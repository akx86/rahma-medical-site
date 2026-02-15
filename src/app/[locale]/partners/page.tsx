"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion, Variants } from "framer-motion";
import Image from "next/image"; 
import { 
  Globe,          
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon,
  Handshake,
  Award,
  CheckCircle2,
  Truck, // أيقونة الشحن
  
} from "lucide-react";
import { Button } from "@/components/ui/button"; 

export default function PartnersPage() {
  const t = useTranslations("Partners");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // Animation Variants
  const container : Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item : Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.3 } }
  };

  // 1. Data: Clients
  const CLIENTS = [
    { id: 1, name: "client_guard", logo: "/partners/ngha.png" },      
    { id: 2, name: "client_khalid", logo: "/partners/ksumc.png" },    
    { id: 3, name: "client_commission", logo: "/partners/scfhs.png" }, 
    { id: 4, name: "client_innova", logo: "/partners/innova.png" },   
    { id: 5, name: "client_orange", logo: "/partners/orange.png" },   
    { id: 6, name: "client_alzheimer", logo: "/partners/alzheimer.png" }, 
    { id: 7, name: "client_security_forces", logo: "/partners/sfh.png" }, 
    { id: 8, name: "client_fahd_military", logo: "/partners/kfmmc.png" }, 
    { id: 9, name: "client_salman_spec", logo: "/partners/kssh.png" },    
  ];

  // 2. Data: Suppliers
  const SUPPLIERS = [
    { id: 1, name: "NH Kaiyang", logo: "/partners/kaiyang.png" },
    { id: 2, name: "Topmost Medical", logo: "/partners/topmost.png" },
    { id: 3, name: "ZYT TCM", logo: "/partners/zyt.png" },
    { id: 4, name: "Aria Wheels", logo: "/partners/aria.png" },
    { id: 5, name: "Invacare", logo: "/partners/invacare.png" },
    { id: 6, name: "Shanghai Winsha", logo: "/partners/winsha.png" }, 
    { id: 7, name: "photondust", logo: "/partners/photondust.png" }, 
  ];

  return (
    <main className="w-full bg-white min-h-screen font-[family-name:var(--font-ibm)]">
      
      {/* ==================== 1. Header Banner ==================== */}
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

      {/* ==================== 2. Clients Section ==================== */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t("clients_title")}</h2>
            <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full" />
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">{t("clients_desc")}</p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"
          >
            {CLIENTS.map((client) => (
              <motion.div
                key={client.id}
                variants={item}
                className="group flex items-center justify-center p-8 rounded-2xl border border-slate-100 bg-white hover:border-sky-100 hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-500 h-[180px] relative overflow-hidden"
              >
                <Image 
                  src={client.logo} 
                  alt={t(client.name)}
                  fill 
                  className="object-contain p-8 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== 3. Suppliers Section ==================== */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-sky-600 via-sky-500 to-sky-50">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center mb-20">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 text-white border border-white/20">
               <Globe size={32} />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-sm">{t("suppliers_title")}</h2>
            <p className="text-sky-50 max-w-2xl mx-auto text-lg leading-relaxed opacity-90">{t("suppliers_desc")}</p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
             {SUPPLIERS.map((supplier) => (
               <motion.div
                 key={supplier.id}
                 variants={item}
                 className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-sky-900/20 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
               >
                 <div className="absolute top-4 right-4 rtl:left-4 rtl:right-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Award className="text-sky-500 w-6 h-6" />
                 </div>
                 <div className="h-24 w-full flex items-center justify-center mb-6 relative">
                    <Image 
                      src={supplier.logo} 
                      alt={supplier.name} 
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
                 <div className="w-16 h-0.5 bg-slate-100 group-hover:bg-sky-500 transition-colors duration-500 mb-5" />
                 <h3 className="text-xl font-bold text-slate-800 group-hover:text-sky-700 transition-colors">{supplier.name}</h3>
                 <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                   <CheckCircle2 size={12} />
                   <span>{isRtl ? "شريك دولي" : "Global Partner"}</span>
                 </div>
                 <div className="absolute bottom-0 left-10 right-10 h-1.5 bg-sky-500 rounded-t-full translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" />
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== 💎 NEW SECTION: Istawdatk (Standard Style) ==================== */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          
          {/* Header - نفس ستايل الهيدر بتاع العملاء */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t("logistics_title")}</h2>
            <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full" />
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">{t("logistics_desc")}</p>
          </div>

          {/* Card - كارت واحد سنتر بنفس ستايل الموردين */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <div className="group relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl hover:shadow-sky-900/10 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center border border-slate-100">
              
              {/* Badge Icon */}
              <div className="absolute top-4 right-4 rtl:left-4 rtl:right-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <Truck className="text-sky-500 w-6 h-6" />
              </div>

              {/* Logo (Using img tag to avoid next/image issues) */}
              <div className="h-32 w-full flex items-center justify-center mb-6 relative">
                 <Image 
                   src="/partners/istawdatk.png" 
                   alt="Istawdatk"
                   width={120}
                   height={120} 
                   className="h-full w-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                 />
              </div>

              {/* Divider */}
              <div className="w-20 h-0.5 bg-slate-100 group-hover:bg-sky-500 transition-colors duration-500 mb-6" />

              {/* Name */}
              <h3 className="text-2xl font-bold text-slate-800 group-hover:text-sky-700 transition-colors">
                Istawdatk - استودع تك
              </h3>
              
              {/* Badge */}
              <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100">
                <CheckCircle2 size={14} />
                <span>{isRtl ? "الشريك اللوجستي" : "Logistics Partner"}</span>
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-10 right-10 h-1.5 bg-sky-500 rounded-t-full translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ==================== 5. CTA Section ==================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <Handshake size={48} className="text-sky-600 mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t("cta_title")}</h2>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">{t("cta_desc")}</p>
            
            {/* 👇👇👇 الزرار رجع للون الاستاندر هنا 👇👇👇 */}
            <Button 
              asChild 
              size="lg" 
              className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-8 h-12 shadow-xl shadow-sky-600/20 transition-all duration-300 hover:scale-105"
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