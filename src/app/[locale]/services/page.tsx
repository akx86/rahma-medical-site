"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { 
  Building2,      
  Activity,       
  Stethoscope,    
  BriefcaseMedical, 
  Home,           
  Globe,          
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon
} from "lucide-react";
import { Button } from "@/components/ui/button"; 

export default function ServicesPage() {
  const t = useTranslations("Services2"); // ✅ استخدام الاسم الجديد
  const locale = useLocale();
  const isRtl = locale === "ar";

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const SERVICES = [
    { id: 1, icon: Building2, title: "service_1_title", desc: "service_1_desc", color: "text-blue-600", bg: "bg-blue-50" },
    { id: 2, icon: Activity, title: "service_2_title", desc: "service_2_desc", color: "text-emerald-600", bg: "bg-emerald-50" },
    { id: 3, icon: Stethoscope, title: "service_3_title", desc: "service_3_desc", color: "text-sky-600", bg: "bg-sky-50" },
    { id: 4, icon: BriefcaseMedical, title: "service_4_title", desc: "service_4_desc", color: "text-indigo-600", bg: "bg-indigo-50" },
    { id: 5, icon: Home, title: "service_5_title", desc: "service_5_desc", color: "text-rose-600", bg: "bg-rose-50" },
    { id: 6, icon: Globe, title: "service_6_title", desc: "service_6_desc", color: "text-amber-600", bg: "bg-amber-50" },
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
             {/* ✅ Breadcrumb Updated: "خدماتنا" */}
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


      {/* ==================== 2. Services Grid (Clean - No Arrows) 💠 ==================== */}
      <section className="py-20 -mt-20 relative z-20 px-6">
        <div className="container mx-auto">
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                variants={item}
                className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-sky-900/10 hover:-translate-y-2 transition-all duration-300 border border-slate-100 group flex flex-col items-start h-full"
              >
                {/* Icon Box */}
                <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">
                  {t(service.title)}
                </h3>
                
                {/* ✅ Removed the Arrow & Border - Just pure content */}
                <p className="text-slate-500 leading-relaxed text-base flex-grow">
                  {t(service.desc)}
                </p>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>


      {/* ==================== 3. CTA Section (Soft & Professional) 🚀 ==================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            // ✅ التغيير هنا: الخلفية بقت Gradient Blue مريح بدلاً من الأسود الغشيم
            className="max-w-4xl mx-auto bg-gradient-to-br from-sky-600 to-sky-500 rounded-[2.5rem] p-12 md:p-16 text-white shadow-2xl shadow-sky-500/20 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay" />
            
            {/* Soft Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("cta_title")}
              </h2>
              <p className="text-sky-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
                {t("cta_desc")}
              </p>
              
              <Button 
                asChild 
                size="lg" 
                // ✅ زرار أبيض عشان يتباين مع الخلفية الزرقاء
                className="bg-white text-sky-600 hover:bg-sky-50 hover:text-sky-700 rounded-full px-12 h-14 text-lg font-bold shadow-lg transition-all hover:scale-105"
              >
                <Link href="/contact">
                  {t("cta_btn")}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}