"use client";

import { useTranslations } from "next-intl";
import { 
  Activity,       
  Stethoscope,    
  Monitor,        
  Syringe,        
  Home,           
  Truck,          
  Sparkles 
} from "lucide-react"; 
import { motion } from "framer-motion";


const SERVICES_DATA = [
  
  { id: "medical_centers", icon: Activity, translationKey: "medical_centers" },
  
  
  { id: "clinics", icon: Stethoscope, translationKey: "clinics" },
  
  
  { id: "equipment", icon: Monitor, translationKey: "equipment" },
  
  
  { id: "supplies", icon: Syringe, translationKey: "supplies" },
  
  
  { id: "homecare", icon: Home, translationKey: "homecare" },
  
  
  { id: "logistics", icon: Truck, translationKey: "logistics" }
];

export default function Services() {
  const t = useTranslations("Services");

  return (
    
    <section className="py-24 bg-gradient-to-b from-[#289fc7] via-[#289fc7]/10 to-white relative">
      
      <div className="container mx-auto px-6 md:px-12">
        
        {/* === Header Section === */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-white/20 shadow-sm mb-6 group hover:shadow-md transition-all duration-300 cursor-default">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#289fc7] text-white group-hover:scale-110 transition-transform duration-300">
              <Sparkles size={12} fill="currentColor" />
            </span>
            <span className="text-[#289fc7] font-bold tracking-wide text-sm md:text-base font-[family-name:var(--font-inter)] uppercase">
              {t("subtitle")}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-ibm)] drop-shadow-sm">
            {t("title")}
          </h2>
          <p className="text-white/90 text-lg leading-relaxed font-medium">
            {t("description")}
          </p>
        </div>

        {/* === Grid System (Now perfectly balanced with 6 items) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              
              className="
                group relative
                bg-gradient-to-br from-white to-[#289fc7]/10 
                rounded-2xl p-8 
                border border-white/60 shadow-sm backdrop-blur-sm
                hover:shadow-xl hover:shadow-[#289fc7]/20 
                hover:-translate-y-2 
                transition-all duration-300 ease-out
                cursor-default
              "
            >
              {/* ديكور بسيط: لمعة بيضاء فوق */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/50 to-transparent rounded-t-2xl pointer-events-none" />

              {/* Icon Container */}
              <div className="
                w-14 h-14 rounded-xl bg-white 
                flex items-center justify-center 
                mb-6 shadow-sm border border-[#289fc7]/10
                group-hover:bg-[#289fc7] group-hover:scale-110 
                transition-all duration-300
              ">
                <service.icon 
                  size={28} 
                  className="text-[#289fc7] group-hover:text-white transition-colors duration-300" 
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-[family-name:var(--font-ibm)] group-hover:text-[#289fc7] transition-colors">
                {t(`items.${service.translationKey}_title`)}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {t(`items.${service.translationKey}_desc`)}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}