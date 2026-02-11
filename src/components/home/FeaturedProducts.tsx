"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ShoppingBag } from "lucide-react"; 

const CATEGORIES = [
  { id: 1, image: "/Rehabilitation.jpg", translationKey: "cat1" },
  { id: 2, image: "/Mobility.jpg", translationKey: "cat2" },
  { id: 3, image: "/Home-Medical-Devices.jpg", translationKey: "cat3" },
  { id: 4, image: "/Clinics.jpg", translationKey: "cat4" },
  { id: 5, image: "/Emergency.jpg", translationKey: "cat5" },
  { id: 6, image: "/Elderly.jpg", translationKey: "cat6" },
];

export default function FeaturedProducts() {
  const t = useTranslations("FeaturedProducts");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        {/* === Header === */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 mb-6 cursor-default">
            <span className="w-2 h-2 rounded-full bg-[#289fc7] animate-pulse" />
            <span className="text-[#289fc7] font-bold tracking-wide text-2xl md:3xl font-[family-name:var(--font-inter)] uppercase">
              {t("subtitle")}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-[family-name:var(--font-ibm)]">
            {t("title")}
          </h2>
          <p className="text-slate-500 text-lg mb-8 leading-relaxed">
            {t("description")}
          </p>

          <Button 
            asChild 
            size="lg"
            className="rounded-full bg-[#289fc7] text-white hover:bg-[#2289ac] px-8 py-7 text-lg font-bold shadow-xl shadow-[#289fc7]/20 hover:scale-105 transition-all"
          >
            <a href="https://rahma.store" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <ShoppingBag size={20} />
              {t("cta")}
              <ArrowUpRight size={20} />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6 justify-center items-start">
          
          {CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="
                w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 relative rounded-full 
                border-4 border-slate-50 shadow-sm bg-white
                overflow-hidden 
                group-hover:border-[#289fc7] group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#289fc7]/20
                transition-all duration-300 ease-out
              ">
                <Image
                  src={cat.image}
                  alt={t(`items.${cat.translationKey}`)}
                  fill
                  className="object-cover"
                />
              </div>

              <span className="mt-4 text-slate-700 font-bold text-sm md:text-base font-[family-name:var(--font-ibm)] group-hover:text-[#289fc7] transition-colors">
                {t(`items.${cat.translationKey}`)}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}