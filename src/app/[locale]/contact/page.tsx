"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl"; 
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Link } from "@/i18n/routing"; 

// ✅ 1. استيراد ملف السوشيال لينكس فقط
import { SOCIAL_LINKS } from "@/constants/contacts"; 

// ✅ 2. إضافة أيقونة ShoppingBag عشان المتجر
import { 
  MapPin, Phone, Mail, Clock, Send, 
  Facebook, Instagram, Twitter, ShoppingBag, 
  Loader2, ChevronLeft, ChevronRight, Home 
} from "lucide-react";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  user_name: z.string().min(2, { message: "الاسم يجب أن يكون حرفين على الأقل" }),
  user_phone: z.string().min(10, { message: "رقم الجوال غير صحيح" }),
  user_email: z.string().email({ message: "البريد الإلكتروني غير صحيح" }),
  subject: z.string().min(3, { message: "الموضوع مطلوب" }),
  message: z.string().min(10, { message: "الرسالة قصيرة جداً" }),
});

export default function ContactPage() {
  const t = useTranslations("Contact");
  const locale = useLocale(); 
  const isRtl = locale === "ar"; 
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      user_phone: "",
      user_email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const serviceID = "service_yuopeq4";
    const templateID = "template_dxtsnvn";
    const publicKey = "Pcl7E2oaj3qAMig7j";

    const templateParams = {
      from_name: values.user_name,
      from_email: values.user_email,
      phone: values.user_phone,
      subject: values.subject,
      message: values.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success(t("toast_success"), {
          description: t("toast_success_desc"),
          duration: 5000,
        });
        form.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error(t("toast_error"), {
          description: t("toast_error_desc"),
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <main className="w-full bg-slate-50 min-h-screen font-[family-name:var(--font-ibm)]">
      
      {/* ==================== 1. Hero Section ==================== */}
      <section className="relative pt-32 pb-48 lg:pt-40 lg:pb-64 overflow-hidden bg-gradient-to-r from-sky-600 to-sky-500">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container relative z-10 px-6 text-center text-white">
           <motion.div
             initial={{ opacity: 0, y: 20 }} 
             animate={{ opacity: 1, y: 0 }} 
             transition={{ duration: 0.6 }}
           >
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm text-sky-50 mb-6 mx-auto">
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                  <Home size={14} /> {t("breadcrumb_home")}
                </Link>
                {isRtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                <span className="text-white font-medium">{t("hero_title")}</span>
             </div>

             <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
               {t("hero_title")}
             </h1>
             <p className="text-sky-100 max-w-2xl mx-auto text-lg font-light leading-relaxed opacity-90">
               {t("hero_subtitle")}
             </p>
           </motion.div>
        </div>
      </section>

      {/* ==================== 2. Floating Contact Card ==================== */}
      <section className="container mx-auto px-6 -mt-32 relative z-20 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-[2rem] shadow-2xl shadow-sky-900/15 overflow-hidden flex flex-col lg:flex-row border border-slate-100"
        >
          {/* Left Column: Contact Info */}
          <div className="w-full lg:w-[40%] bg-slate-50 p-10 md:p-14 border-b lg:border-b-0 lg:border-l border-slate-200 rtl:border-r rtl:border-l-0 relative">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">{t("info_title")}</h2>
              <div className="w-12 h-1 bg-sky-500 rounded-full mb-4"></div>
              <p className="text-slate-500 text-sm">{t("info_subtitle")}</p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-white text-sky-600 shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-xs text-slate-400 uppercase mb-2 tracking-wider">{t("address_label")}</h4>
                  <p className="text-slate-700 font-medium leading-relaxed">{t("address_value")}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-white text-sky-600 shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-xs text-slate-400 uppercase mb-2 tracking-wider">{t("phone_label")}</h4>
                  <a href="tel:+966549131756" dir="ltr" className="text-slate-900 hover:text-sky-600 transition-colors block text-xl font-bold dir-ltr font-[family-name:var(--font-geist-mono)]">
                    +966 54 913 1756
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-white text-sky-600 shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-xs text-slate-400 uppercase mb-2 tracking-wider">{t("email_label")}</h4>
                  <a href="mailto:info@rahma-medical.com" className="text-slate-900 hover:text-sky-600 transition-colors text-lg font-medium break-all">
                    info@rahmamedical.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-white text-sky-600 shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-xs text-slate-400 uppercase mb-2 tracking-wider">{t("work_hours_label")}</h4>
                  <p className="text-slate-700 font-medium">{t("work_hours_value")}</p>
                  <p className="text-slate-700 font-medium">{t("work_hours_value2")}</p>
                </div>
              </div>
            </div>

            {/* ✅ 3. Social Media Section (Dynamic from SOCIAL_LINKS) */}
            <div className="mt-14 pt-8 border-t border-slate-200">
              <div className="flex gap-4 flex-wrap">
                {SOCIAL_LINKS.map((social, index) => {
                  // تحديد الأيقونة حسب نوع اللينك
                  let Icon = ShoppingBag; // الافتراضي للمتجر
                  if (social.key === 'facebook') Icon = Facebook;
                  else if (social.key === 'instagram') Icon = Instagram;
                  else if (social.key === 'twitter') Icon = Twitter;
                  
                  return (
                    <a 
                      key={index}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300 shadow-sm hover:-translate-y-1"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="w-full lg:w-[60%] bg-white p-10 md:p-16">
             <div className="mb-10">
               <h2 className="text-3xl font-bold text-slate-900 mb-2">{t("form_title")}</h2>
               <p className="text-slate-400 text-sm">{t("hero_cta")}</p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="user_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">{t("form_name_label")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("form_name_placeholder")} {...field} className="h-12 bg-slate-50 border-slate-200 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100 rounded-xl transition-all" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="user_phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">{t("form_phone_label")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("form_phone_placeholder")} {...field} className="h-12 bg-slate-50 border-slate-200 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100 rounded-xl transition-all" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <FormField
                    control={form.control}
                    name="user_email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">{t("form_email_label")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("form_email_placeholder")} {...field} className="h-12 bg-slate-50 border-slate-200 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100 rounded-xl transition-all" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">{t("form_subject_label")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("form_subject_placeholder")} {...field} className="h-12 bg-slate-50 border-slate-200 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100 rounded-xl transition-all" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-medium">{t("form_message_label")}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t("form_message_placeholder")} 
                          {...field} 
                          className="min-h-[150px] bg-slate-50 border-slate-200 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100 rounded-xl resize-none transition-all p-4" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg font-bold bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-600/20 rounded-xl transition-all duration-300 hover:-translate-y-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="animate-spin" /> {t("form_sending")}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        {t("form_submit_btn")} <Send size={20} className="rtl:rotate-180" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </motion.div>
      </section>

      {/* ==================== 3. Map Section (Al Malaz Exact) ==================== */}
      <section className="w-full h-[500px] bg-slate-50 relative border-t border-slate-100">
        <iframe 
          title="Rahma Medical Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.783177893666!2d46.7023393!3d24.689469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f031d020d6d0b%3A0x113a64f4556898f5!2z2YXYqtiu2KXYsdin2Kog2YTYmNmF2LPYqtmE2LLZhdin2Kog2KfZhNi32KjZitip!5e0!3m2!1sar!2sae!4v1700000000000!5m2!1sar!2sae"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
        ></iframe>
      </section>
    </main>
  );
}