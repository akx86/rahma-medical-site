"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck } from "lucide-react"; 
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function AboutSummary() {
  const t = useTranslations("AboutSummary");

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* === 1. النص (Text Column) === */}
          <motion.div 
            className="flex-1 text-center lg:text-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* عنوان فرعي صغير */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-sky-50 to-white border border-sky-100 shadow-sm mb-6 group hover:shadow-md transition-all duration-300 cursor-default">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sky-600 text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Star size={12} fill="currentColor" />
                </span>
                <span className="text-sky-700 font-bold tracking-wide text-sm md:text-xl font-[family-name:var(--font-inter)] uppercase">
                    {t("subtitle")}
                </span>
            </div>
            {/* العنوان الكبير - التعديل الأول (حل مشكلة السطور) */}
            <h2 className="
              text-3xl md:text-5xl 
              font-bold text-slate-900 
              mb-6 
              font-[family-name:var(--font-ibm)]
              
              /* هنا الحل السحري: وسعنا المسافة لـ 1.6 عشان النقاط تاخد راحتها */
              leading-[1.5] md:leading-[1.6]
            ">
              {t("title")}
            </h2>

            {/* الفقرة */}
            <p className="text-slate-600 text-base md:text-lg leading-loose mb-8 lg:max-w-xl font-medium">
              {t("description")}
            </p>

            {/* الزرار - التعديل الثاني (Premium Glow Effect) */}
            <Button 
              asChild 
              size="lg" 
              className="
                /* تدرج لوني يعطي عمقاً */
                bg-gradient-to-r from-sky-600 to-sky-500 
                text-white rounded-full px-10 py-7 text-base font-bold tracking-wide
                
                /* الظل المتوهج (Glow) بلون أزرق بدلاً من الأسود */
                shadow-[0_4px_20px_rgba(2,132,199,0.3)] 
                
                /* تأثيرات الهوفر: توهج أقوى + تكبير بسيط */
                hover:shadow-[0_6px_25px_rgba(2,132,199,0.6)] 
                hover:scale-105 hover:from-sky-500 hover:to-sky-400
                
                transition-all duration-300 ease-out
              "
            >
              <Link href="/about" className="flex items-center gap-3">
                {t("button")}
                <ArrowRight size={20} className="animate-pulse" /> {/* حركة بسيطة للسهم */}
              </Link>
            </Button>
          </motion.div>

          {/* === 2. الصورة (Image Column) === */}
          <motion.div 
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* إطار الصورة */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white group">
              {/* Aspect Ratio */}
              <div className="aspect-[4/3] lg:aspect-square relative bg-slate-100">
                <Image 
                  src="/about-image.jpg" 
                  alt="Modern Medical Supply Warehouse"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              
              {/* طبقة تدرج خفيف فوق الصورة */}
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent pointer-events-none" />
            </div>

            {/* زخرفة خلفية */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-100 rounded-full blur-xl -z-10 opacity-60" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-50 rounded-full blur-xl -z-10 opacity-60" />

            {/* الكارت العائم */}
            <div className="absolute bottom-6 left-6 lg:bottom-10 lg:-left-10 bg-white p-4 lg:p-5 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce-slow max-w-[200px] lg:max-w-xs z-20">
              <div className="bg-green-50 p-3 rounded-full text-green-600 shrink-0">
                <BadgeCheck size={28} />
              </div>
              <div className="text-start">
                <p className="text-slate-900 font-bold text-sm lg:text-base font-[family-name:var(--font-ibm)]">
                  {t("badge_text")}
                </p>
                <p className="text-slate-500 text-[10px] lg:text-xs font-medium">
                  {t("badge_sub")}
                </p>
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}