"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ShieldCheck, Package, Users, Headset } from "lucide-react";

export default function Stats() {
  const t = useTranslations("Stats");

  const stats = [
    {
      id: 1,
      number: "8",
      label: t("years"),
      icon: ShieldCheck,
    },
    {
      id: 2,
      number: "+5000",
      label: t("products"),
      icon: Package,
    },
    {
      id: 3,
      number: "+10000",
      label: t("clients"),
      icon: Users,
    },
    {
      id: 4,
      number: "24/7",
      label: t("support"),
      icon: Headset,
    },
  ];

  return (
    
    <section className="py-16 bg-gradient-to-b from-slate-50 via-white to-white relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100/50 rtl:divide-x-reverse bg-white/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              
              className="flex flex-col items-center text-center group cursor-default p-4 md:p-0"
            >
              <div className="mb-5 relative">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_4px_12px_rgba(2,132,199,0.08)] ring-1 ring-sky-100/50 group-hover:scale-105 group-hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_8px_16px_rgba(2,132,199,0.15)] transition-all duration-300">
                  <stat.icon size={32} strokeWidth={1.5} className="text-sky-600/90 drop-shadow-sm" />
                </div>
                
                <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full blur-[1px] opacity-70"></div>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-900 to-sky-700 mb-2 font-[family-name:var(--font-inter)] drop-shadow-sm">
                {stat.number}
              </h3>

              <p className="text-sm md:text-base text-slate-500 font-medium tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}