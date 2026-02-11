"use client";

import { useTranslations } from "next-intl";
import { 
  Truck, 
  ShieldCheck, 
  Headset, 
  MapPin,
  Award 
} from "lucide-react"; 

const FEATURES = [
  { 
    id: 1, 
    icon: Truck, 
    titleKey: "fast_delivery_title", 
    descKey: "fast_delivery_desc" 
  },
  { 
    id: 2, 
    icon: ShieldCheck, 
    titleKey: "authentic_title", 
    descKey: "authentic_desc" 
  },
  { 
    id: 3, 
    icon: Headset, 
    titleKey: "support_title", 
    descKey: "support_desc" 
  },
  { 
    id: 4, 
    icon: MapPin, 
    titleKey: "coverage_title", 
    descKey: "coverage_desc" 
  },
];

export default function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  return (
    <section className="py-20 bg-[#289fc7] text-white relative overflow-hidden">
      
      {/* Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 shadow-sm mb-6 cursor-default backdrop-blur-sm">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#289fc7]">
              <Award size={14} fill="currentColor" />
            </span>
            <span className="text-white font-bold tracking-wide text-sm md:text-base font-[family-name:var(--font-inter)] uppercase">
              {t("subtitle")} 
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-ibm)]">
             {t("title")} 
          </h2>
          
          <p className="text-sky-100 text-lg opacity-90">
            {t("description")} 
          </p>
        </div>

        {/* === Features Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="flex flex-col items-center text-center group"
            >
              <div className="
                w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md
                flex items-center justify-center mb-6
                border border-white/20 shadow-lg
                group-hover:bg-white group-hover:text-[#289fc7] 
                group-hover:scale-110 group-hover:-rotate-3
                transition-all duration-300 ease-out
              ">
                <feature.icon size={36} />
              </div>

              <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-ibm)]">
                {t(feature.titleKey)}
              </h3>
              <p className="text-sky-50 text-sm leading-relaxed max-w-[220px] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                {t(feature.descKey)}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}