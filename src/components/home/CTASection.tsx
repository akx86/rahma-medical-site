"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react"; 
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export default function CTASection() {
  const t = useTranslations("CTASection");

  return (
    // التغيير: رجعنا للخلفية البيضاء عشان النظافة والهدوء
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Pattern: دوائر فاتحة جداً تدي شكل جمالي من غير ما تزحم العين */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[50%] -left-[10%] w-[500px] h-[500px] rounded-full border-[40px] border-slate-50" />
        <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] rounded-full border-[20px] border-sky-50" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Title: لون غامق (slate-900) عشان يقرأ كويس على الخلفية البيضاء */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-[family-name:var(--font-ibm)] leading-snug md:leading-normal"
          >
            {t("title")}
          </motion.h2>

          {/* Description: لون رمادي متوسط */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-500 text-lg md:text-2xl mb-12 leading-loose md:leading-[1.7] max-w-2xl font-medium"
          >
            {t("description")}
          </motion.p>

          {/* Button: الزرار هنا هو "البطل" باللون الأزرق بتاع البراند */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              asChild 
              size="lg"
              className="bg-[#289fc7] hover:bg-[#2289ac] text-white text-lg md:text-xl font-bold px-12 py-8 rounded-full shadow-xl hover:shadow-[#289fc7]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <Link href="/contact">
                <PhoneCall className="mr-3 rtl:ml-3 h-6 w-6" />
                {t("btn_primary")}
              </Link>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}