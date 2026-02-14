"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react"; 
import { motion } from "framer-motion";

const HERO_IMAGES = [
  "/hero-1.png",
  "/hero-2.png",
  "/hero-3.png",
  "/hero-4.png"
];

const SLIDE_DURATION = 6000; 

export default function Hero() {
  const t = useTranslations("Hero");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_DURATION); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-sky-900">
      
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full z-0">
        {HERO_IMAGES.map((src, index) => {
          const isActive = index === currentIndex;
          
          return (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ 
                opacity: index === 0 ? 1 : 0, 
                scale: 1 
              }}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1.15 : 1, 
                zIndex: isActive ? 10 : 0
              }}
              transition={{
                opacity: { duration: 2, ease: "easeInOut" },
                scale: { duration: SLIDE_DURATION / 1000 + 2, ease: "linear" } 
              }}
            >
              <div className="absolute inset-0 w-full h-full [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
                <Image 
                  src={src}
                  alt={`Hero Slide ${index + 1}`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  className="object-cover" 
                  quality={90}
                  priority={true} 
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-sky-900/50 to-transparent z-10 rtl:bg-gradient-to-l pointer-events-none" />

      {/* Main Content Container - Added pt-32 to prevent overlap with navbar on laptops */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 h-full flex flex-col justify-center pt-32 pb-20"> 
        
        <div className="max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 backdrop-blur-md mb-4">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-100 text-[10px] md:text-xs font-bold tracking-wider uppercase font-[family-name:var(--font-inter)]">
                Premium Solutions
              </span>
            </div>

            {/* Title - Optimized Sizes for Laptop (lg) vs Desktop (2xl) */}
            <h1 className="
                font-bold text-white drop-shadow-lg mb-4 md:mb-6
                text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl
                leading-[1.3] md:leading-[1.2]
                tracking-wide py-2
            ">
              {t("title").split(" ")[0]} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white inline-block">
                {t("title").split(" ").slice(1).join(" ")}
              </span>
            </h1>

            {/* Subtitle - Reduced max-width to prevent stretching */}
            <p className="
                text-sm md:text-base lg:text-lg xl:text-xl text-sky-100/90 mb-8 max-w-xl 
                font-normal leading-relaxed
                border-l-2 md:border-l-4 border-sky-400 pl-3 md:pl-6 rtl:border-l-0 rtl:border-r-2 md:rtl:border-r-4 rtl:pl-0 rtl:pr-3 md:rtl:pr-6
            ">
              {t("subtitle")}
            </p>

            {/* Buttons - Adjusted heights for laptops */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 items-center w-full sm:w-auto">
              
              <Button 
                asChild 
                className="
                  flex-1 sm:flex-none
                  md:min-w-[160px] lg:min-w-[200px]      
                  h-11 md:h-12 lg:h-14 xl:h-16 
                  bg-sky-600 text-white rounded-full 
                  text-sm md:text-base lg:text-lg px-6 font-semibold
                  transition-all duration-300
                  shadow-[0_4px_15px_rgba(2,132,199,0.4)] 
                  hover:shadow-[0_8px_25px_rgba(2,132,199,0.6)] 
                  hover:bg-sky-500 hover:scale-105 active:scale-95
                  w-full sm:w-auto
                "
              >
                <Link href="https://rahma.store/ar-eg/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  {t("shop_now")}
                  <div className="bg-white/20 p-1 rounded-full hidden lg:block">
                    <ShoppingBag size={18} />
                  </div>
                </Link>
              </Button>

              <Button 
                asChild 
                variant="ghost" 
                className="
                  flex-1 sm:flex-none
                  md:min-w-[160px] lg:min-w-[200px]      
                  h-11 md:h-12 lg:h-14 xl:h-16 
                  text-white rounded-full 
                  text-sm md:text-base lg:text-lg px-6 
                  border border-white/20 backdrop-blur-sm font-semibold
                  transition-all duration-300
                  hover:bg-white/10 hover:border-white/50 
                  hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                  hover:scale-105 active:scale-95
                  w-full sm:w-auto
                "
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  {t("contact_us")}
                  <ArrowRight size={16} className="lg:w-5 lg:h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Only visible on tall screens (xl) to avoid clutter on laptops */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 text-sky-200/60 hidden xl:flex"
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