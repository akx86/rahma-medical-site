"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { 
  Award, 
  Layers, 
  Smile, 
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  HeartHandshake,
  Star,
  Home 
} from "lucide-react";
import { Button } from "@/components/ui/button"; 

export default function AboutPageCorporate() {
  const t = useTranslations("AboutUs");
  const locale = useLocale();
  const isRtl = locale === "ar";

  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const GOALS = [
    { id: 1, icon: Award, titleKey: "goal_1_title", descKey: "goal_1_desc" },
    { id: 2, icon: Layers, titleKey: "goal_2_title", descKey: "goal_2_desc" },
    { id: 3, icon: Smile, titleKey: "goal_3_title", descKey: "goal_3_desc" },
    { id: 4, icon: Lightbulb, titleKey: "goal_4_title", descKey: "goal_4_desc" },
  ];

  const VALUES = [
    { icon: ShieldCheck, text: "value_1" },
    { icon: Star, text: "value_2" },
    { icon: HeartHandshake, text: "value_3" },
  ];

  return (
    <main className="w-full bg-white text-slate-800 font-[family-name:var(--font-ibm)] overflow-hidden">
      
      {/* ==================== 1. The Standard Banner (Gradient Blue) 💎 ==================== */}
      <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-48 overflow-hidden bg-gradient-to-r from-sky-600 to-sky-500">
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container relative z-10 px-6 text-center text-white">
           <motion.div
             initial={{ opacity: 0, y: 20 }} 
             animate={{ opacity: 1, y: 0 }} 
             transition={{ duration: 0.6 }}
           >
             {/* ✅ Breadcrumb Updated: يقرأ "من نحن" الآن */}
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm text-sky-50 mb-8 mx-auto hover:bg-white/20 transition-colors cursor-default">
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                  <Home size={14} /> {t("breadcrumb_home")}
                </Link>
                {isRtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                <span className="text-white font-medium">{t("breadcrumb_current")}</span>
             </div>

             {/* Title */}
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-md flex items-center justify-center gap-3">
               {t("story_title")}
             </h1>

             {/* ✅ Subtitle Added: الجملة الاحترافية الجديدة */}
             <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="text-sky-100 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed opacity-90"
             >
               {t("hero_subtitle")}
             </motion.p>
           </motion.div>
        </div>
      </section>

      {/* ==================== 2. The Story & Vision (Clean White) 📖 ==================== */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          
          {/* Story Text */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
            >
              <span className="text-sky-500 text-3xl mb-4 block">❖</span>
              <p className="text-lg md:text-xl text-slate-600 leading-9 text-center font-medium">
                {t("story_text_1")} <br className="hidden md:block" /> {t("story_text_2")}
              </p>
            </motion.div>
          </div>

          {/* Vision & Mission Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-5xl mx-auto border-t border-slate-100 pt-16">
            <motion.div 
              initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-sky-600 rotate-3">
                 <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{t("vision_title")}</h3>
              <p className="text-slate-500 leading-relaxed text-lg">{t("vision_desc")}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:border-r md:border-slate-100 rtl:md:border-r-0 rtl:md:border-l"
            >
               <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-sky-600 -rotate-3">
                 <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{t("mission_title")}</h3>
              <p className="text-slate-500 leading-relaxed text-lg">{t("mission_desc")}</p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ==================== 3. Our Values (Gray Background) ==================== */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-sky-700 mb-4">{t("values_title")}</h2>
            <p className="text-slate-500 text-lg">{t("values_desc")}</p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
            {VALUES.map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-20 h-20 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                   <val.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-sky-700 transition-colors">
                  {t(val.text)}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4. Our Goals (SKY BLUE SECTION) 🔷 ==================== */}
      <section className="py-24 bg-sky-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">{t("goals_title")}</h2>
            <div className="w-16 h-1 bg-white/40 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {GOALS.map((goal, index) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-[2rem] p-8 text-center shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-sky-500 bg-sky-50 group-hover:scale-110 transition-transform duration-300">
                  <goal.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-sky-500 transition-colors">
                  {t(goal.titleKey)}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {t(goal.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. CTA (WHITE SECTION) ⚪ ==================== */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-sky-700 mb-6"
          >
            {t("cta_title")}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light"
          >
            {t("cta_desc")}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-sky-600/20 transition-all duration-300"
            >
              <Link href="/contact">
                {t("cta_button")}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </main>
  );
}