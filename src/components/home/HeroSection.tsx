"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react"; 
import { motion } from "framer-motion";

const HERO_IMAGES = [
  "/hero-1.jpg",
  "/hero-2.jpg",
  "/hero-3.jpg"
];

export default function Hero() {
  const t = useTranslations("Hero");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // كل 6 ثواني نقلب
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[55dvh] min-h-[450px] md:min-h-0 md:h-screen flex items-center overflow-hidden bg-sky-900">
      
      {/* 1. منطقة الصور (Stacked Layers) */}
      <div className="absolute inset-0 w-full h-full z-0">
        {HERO_IMAGES.map((src, index) => {
          // هل الصورة دي هي اللي عليها الدور؟
          const isActive = index === currentIndex;
          
          return (
            <motion.div
              key={index}
              initial={false} // مهم جداً عشان أول ما الصفحة تفتح مايحصلش ومضة
              animate={{
                opacity: isActive ? 1 : 0,           // لو نشطة تظهر، غير كده تختفي
                scale: isActive ? 1.1 : 1,           // زوم بطيء للصورة النشطة (Cinematic Zoom)
                zIndex: isActive ? 10 : 0            // النشطة تطلع فوق الكل
              }}
              transition={{
                opacity: { duration: 2.5, ease: "easeInOut" }, // مدة التداخل (طويلة عشان النعومة)
                scale: { duration: 8, ease: "linear" }         // مدة الزوم
              }}
              // التريكاية: absolute inset-0 بتخليهم كلهم فوق بعض بالظبط
              className="absolute inset-0 w-full h-full"
            >
              <div className="absolute inset-0 w-full h-full [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
                <Image 
                  src={src}
                  alt={`Hero Slide ${index + 1}`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  className="object-cover" 
                  quality={90}
                  priority // بنحمل كل الصور فوراً عشان مفيش حاجة تقطع
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* === الطبقات (Overlays) === */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900/95 via-sky-800/60 to-transparent z-10 rtl:bg-gradient-to-l pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-sky-900/80 to-transparent z-10 pointer-events-none" />

      {/* 2. المحتوى (نفس الكود القديم) */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 h-full flex flex-col justify-center pt-20 md:pt-0"> 
        
        <div className="max-w-3xl">
          <motion.div
            key={currentIndex} // ضفت الـ Key هنا عشان النص كمان يتعمل له ريفرش بسيط (اختياري)
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 backdrop-blur-md mb-4 md:mb-6">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-100 text-[10px] md:text-xs font-bold tracking-wider uppercase font-[family-name:var(--font-inter)]">
                Premium Solutions
              </span>
            </div>

            {/* العنوان الرئيسي */}
            <h1 className="
                font-bold text-white drop-shadow-lg mb-3 md:mb-8
                text-2xl md:text-7xl
                leading-[1.3] md:leading-[1.4]
                tracking-wide py-2
            ">
              {t("title").split(" ")[0]} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white inline-block">
                {t("title").split(" ").slice(1).join(" ")}
              </span>
            </h1>

            {/* الوصف */}
            <p className="
                text-sm md:text-xl text-sky-100/90 mb-6 md:mb-10 max-w-xl 
                font-normal leading-relaxed
                border-l-2 md:border-l-4 border-sky-400 pl-3 md:pl-6 rtl:border-l-0 rtl:border-r-2 md:rtl:border-r-4 rtl:pl-0 rtl:pr-3 md:rtl:pr-6
            ">
              {t("subtitle")}
            </p>

            {/* الأزرار */}
            <div className="flex flex-row gap-3 md:gap-4 items-center w-full sm:w-auto">
              <Button 
                asChild 
                className="
                  flex-1 sm:flex-none h-11 md:h-16 bg-sky-600 text-white rounded-full text-xs md:text-lg px-4 md:px-8 font-semibold
                  transition-all duration-300
                  shadow-[0_4px_15px_rgba(2,132,199,0.4)] 
                  hover:shadow-[0_8px_25px_rgba(2,132,199,0.6)] 
                  hover:bg-sky-500 hover:scale-105 active:scale-95
                "
              >
                <Link href="/store" className="flex items-center justify-center gap-2">
                  {t("shop_now")}
                  <div className="bg-white/20 p-1 rounded-full hidden md:block">
                    <ShoppingBag size={18} />
                  </div>
                </Link>
              </Button>

              <Button 
                asChild 
                variant="ghost" 
                className="
                  flex-1 sm:flex-none h-11 md:h-16 text-white rounded-full text-xs md:text-lg px-4 md:px-8 border border-white/20 backdrop-blur-sm font-semibold
                  transition-all duration-300
                  hover:bg-white/10 hover:border-white/50 
                  hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                  hover:scale-105 active:scale-95
                "
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  {t("contact_us")}
                  <ArrowRight size={16} className="md:w-5 md:h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* مؤشر السكرول */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-sky-200/60 hidden md:flex"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)]">Scroll</span>
        <div className="w-[30px] h-[50px] rounded-full border-2 border-sky-200/40 flex justify-center p-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-sky-400 rounded-full"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

    </section>
  );
}