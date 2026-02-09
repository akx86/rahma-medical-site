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

import { SOCIAL_LINKS } from "@/constants/contacts"; 

import { 
  MapPin, Phone, Mail, 
  Facebook, Instagram, Twitter, ShoppingBag, 
  Loader2, ChevronLeft, ChevronRight, Home,
  User, Building2, MessageCircle, ShieldAlert,
  MessageSquare, FileText
} from "lucide-react";

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const generalFormSchema = z.object({
  user_name: z.string().min(2, { message: "الاسم مطلوب" }),
  user_phone: z.string().min(10, { message: "رقم الجوال غير صحيح" }),
  user_email: z.string().email({ message: "البريد الإلكتروني غير صحيح" }),
  subject: z.string().min(3, { message: "الموضوع مطلوب" }),
  message: z.string().min(10, { message: "الرسالة قصيرة جداً" }),
});

const complaintFormSchema = z.object({
  user_name: z.string().min(2, { message: "الاسم مطلوب" }),
  user_phone: z.string().min(10, { message: "رقم الجوال مطلوب" }),
  type: z.string().min(1, { message: "يرجى اختيار نوع الرسالة" }),
  message: z.string().min(20, { message: "يرجى كتابة التفاصيل بوضوح (20 حرف على الأقل)" }),
});

export default function ContactPage() {
  const t = useTranslations("Contact");
  const locale = useLocale(); 
  const isRtl = locale === "ar"; 
  
  const [isGeneralSubmitting, setIsGeneralSubmitting] = useState(false);
  const [isComplaintSubmitting, setIsComplaintSubmitting] = useState(false);

  const generalForm = useForm<z.infer<typeof generalFormSchema>>({
    resolver: zodResolver(generalFormSchema),
    defaultValues: { user_name: "", user_phone: "", user_email: "", subject: "", message: "" },
  });

  const complaintForm = useForm<z.infer<typeof complaintFormSchema>>({
    resolver: zodResolver(complaintFormSchema),
    defaultValues: { user_name: "", user_phone: "", type: "", message: "" },
  });

  function onGeneralSubmit(values: z.infer<typeof generalFormSchema>) {
    setIsGeneralSubmitting(true);
    const serviceID = "service_yuopeq4";
    const templateID = "template_dxtsnvn";
    const publicKey = "Pcl7E2oaj3qAMig7j";

    emailjs.send(serviceID, templateID, {
      from_name: values.user_name,
      from_email: values.user_email,
      phone: values.user_phone,
      subject: `General: ${values.subject}`,
      message: values.message,
    }, publicKey)
    .then(() => {
      toast.success(t("toast_success"));
      generalForm.reset();
    })
    .catch(() => toast.error(t("toast_error")))
    .finally(() => setIsGeneralSubmitting(false));
  }

  function onComplaintSubmit(values: z.infer<typeof complaintFormSchema>) {
    setIsComplaintSubmitting(true);
    const serviceID = "service_yuopeq4";
    const templateID = "template_dxtsnvn";
    const publicKey = "Pcl7E2oaj3qAMig7j";

    emailjs.send(serviceID, templateID, {
      from_name: values.user_name,
      from_email: "complaints@system.com",
      phone: values.user_phone,
      subject: `🔴 ${values.type}: من ${values.user_name}`,
      message: values.message,
    }, publicKey)
    .then(() => {
      toast.success(t("toast_complaint_success"));
      complaintForm.reset();
    })
    .catch(() => toast.error(t("toast_error")))
    .finally(() => setIsComplaintSubmitting(false));
  }

  const openWhatsApp = (phone: string) => {
    window.open(`https://wa.me/${phone}`, '_blank');
  };

  return (
    <main className="w-full bg-slate-50 min-h-screen font-[family-name:var(--font-ibm)]">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-48 lg:pt-40 lg:pb-64 overflow-hidden bg-gradient-to-r from-sky-600 to-sky-500">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="container relative z-10 px-6 text-center text-white">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm text-sky-50 mb-6 mx-auto">
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                  <Home size={14} /> {t("breadcrumb_home")}
                </Link>
                {isRtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                <span className="text-white font-medium">{t("hero_title")}</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">{t("hero_title")}</h1>
             <p className="text-sky-100 max-w-2xl mx-auto text-lg font-light opacity-90">{t("hero_subtitle")}</p>
           </motion.div>
        </div>
      </section>

      {/* General Contact Form */}
      <section className="container mx-auto px-6 -mt-32 relative z-20 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-[2rem] shadow-2xl shadow-sky-900/15 overflow-hidden flex flex-col lg:flex-row border border-slate-100"
        >
          <div className="w-full lg:w-[40%] bg-slate-50 p-10 md:p-14 border-r rtl:border-l border-slate-200">
            
            {/* Contact Details */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">{t("info_title")}</h2>
              <div className="w-12 h-1 bg-sky-500 rounded-full mb-4"></div>
              <p className="text-slate-500 text-sm">{t("info_subtitle")}</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white text-sky-600 shadow-sm flex items-center justify-center shrink-0 border border-slate-100"><MapPin size={20} /></div>
                <div><h4 className="font-bold text-xs text-slate-400 uppercase mb-1">{t("address_label")}</h4><p className="text-slate-700 text-sm">{t("address_value")}</p></div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white text-sky-600 shadow-sm flex items-center justify-center shrink-0 border border-slate-100"><Phone size={20} /></div>
                <div><h4 className="font-bold text-xs text-slate-400 uppercase mb-1">{t("phone_label")}</h4><p className="text-slate-900 text-lg font-bold font-[family-name:var(--font-geist-mono)]" dir="ltr">+966 54 913 1756</p></div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white text-sky-600 shadow-sm flex items-center justify-center shrink-0 border border-slate-100"><Mail size={20} /></div>
                <div><h4 className="font-bold text-xs text-slate-400 uppercase mb-1">{t("email_label")}</h4><p className="text-slate-900 text-sm">info@rahmamedical.com</p></div>
              </div>
            </div>

            {/* Social Links (Fixed Position: Just below info) */}
            <div className="mt-12 pt-8 border-t border-slate-200">
               <p className="text-xs text-slate-400 mb-4 font-bold uppercase">{t("follow_us")}</p>
               <div className="flex gap-3 flex-wrap">
                  {SOCIAL_LINKS.map((social, index) => {
                    let Icon = ShoppingBag;
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
          
          {/* Form Column (Placeholders Fixed) */}
          <div className="w-full lg:w-[60%] bg-white p-10 md:p-16">
            <div className="mb-8">
               <h2 className="text-2xl font-bold text-slate-900 mb-2">{t("form_title")}</h2>
               <p className="text-slate-400 text-sm">{t("hero_cta")}</p>
            </div>
            <Form {...generalForm}>
              <form onSubmit={generalForm.handleSubmit(onGeneralSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField 
                    control={generalForm.control} 
                    name="user_name" 
                    render={({ field }) => ( 
                      <FormItem>
                        <FormLabel>{t("form_name_label")}</FormLabel>
                        <FormControl>
                          {/* ✅ Added placeholder */}
                          <Input placeholder={t("form_name_placeholder")} {...field} className="bg-slate-50 border-slate-200 h-12 rounded-xl focus:border-sky-500" />
                        </FormControl>
                        <FormMessage />
                      </FormItem> 
                    )} 
                  />
                  <FormField 
                    control={generalForm.control} 
                    name="user_phone" 
                    render={({ field }) => ( 
                      <FormItem>
                        <FormLabel>{t("form_phone_label")}</FormLabel>
                        <FormControl>
                          {/* ✅ Added placeholder */}
                          <Input placeholder={t("form_phone_placeholder")} {...field} className="bg-slate-50 border-slate-200 h-12 rounded-xl focus:border-sky-500" />
                        </FormControl>
                        <FormMessage />
                      </FormItem> 
                    )} 
                  />
                </div>
                <FormField 
                  control={generalForm.control} 
                  name="user_email" 
                  render={({ field }) => ( 
                    <FormItem>
                      <FormLabel>{t("form_email_label")}</FormLabel>
                      <FormControl>
                        {/* ✅ Added placeholder */}
                        <Input placeholder={t("form_email_placeholder")} {...field} className="bg-slate-50 border-slate-200 h-12 rounded-xl focus:border-sky-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem> 
                  )} 
                />
                <FormField 
                  control={generalForm.control} 
                  name="subject" 
                  render={({ field }) => ( 
                    <FormItem>
                      <FormLabel>{t("form_subject_label")}</FormLabel>
                      <FormControl>
                        {/* ✅ Added placeholder */}
                        <Input placeholder={t("form_subject_placeholder")} {...field} className="bg-slate-50 border-slate-200 h-12 rounded-xl focus:border-sky-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem> 
                  )} 
                />
                <FormField 
                  control={generalForm.control} 
                  name="message" 
                  render={({ field }) => ( 
                    <FormItem>
                      <FormLabel>{t("form_message_label")}</FormLabel>
                      <FormControl>
                        {/* ✅ Added placeholder */}
                        <Textarea placeholder={t("form_message_placeholder")} {...field} className="bg-slate-50 border-slate-200 min-h-[120px] rounded-xl focus:border-sky-500 resize-none p-4" />
                      </FormControl>
                      <FormMessage />
                    </FormItem> 
                  )} 
                />
                <Button type="submit" className="w-full h-12 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl shadow-lg shadow-sky-600/20" disabled={isGeneralSubmitting}>
                  {isGeneralSubmitting ? <Loader2 className="animate-spin" /> : t("form_submit_btn")}
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </section>

      {/* WhatsApp Departments */}
      <section className="container mx-auto px-6 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{t("dept_section_title")}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm">{t("dept_section_desc")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -5 }} onClick={() => openWhatsApp("966500074979")} className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 text-center cursor-pointer group hover:border-sky-200">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><User size={32} /></div>
            <h3 className="font-bold text-lg mb-1 text-slate-900">{t("dept_wholesale_title")}</h3>
            <p className="text-xs text-slate-500 mb-6">{t("dept_wholesale_desc")}</p>
            <Button variant="outline" className="w-full border-green-500 text-green-600 bg-green-50 hover:bg-green-100 gap-2 font-bold"><MessageCircle size={18} /> {t("btn_whatsapp")}</Button>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} onClick={() => openWhatsApp("966549131756")} className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 text-center cursor-pointer group hover:border-sky-200">
            <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><ShoppingBag size={32} /></div>
            <h3 className="font-bold text-lg mb-1 text-slate-900">{t("dept_online_title")}</h3>
            <p className="text-xs text-slate-500 mb-6">{t("dept_online_desc")}</p>
            <Button variant="outline" className="w-full border-green-500 text-green-600 bg-green-50 hover:bg-green-100 gap-2 font-bold"><MessageCircle size={18} /> {t("btn_whatsapp")}</Button>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} onClick={() => openWhatsApp("966114655570")} className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 text-center cursor-pointer group hover:border-sky-200">
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><Building2 size={32} /></div>
            <h3 className="font-bold text-lg mb-1 text-slate-900">{t("dept_showroom_title")}</h3>
            <p className="text-xs text-slate-500 mb-6">{t("dept_showroom_desc")}</p>
            <Button variant="outline" className="w-full border-green-500 text-green-600 bg-green-50 hover:bg-green-100 gap-2 font-bold"><MessageCircle size={18} /> {t("btn_whatsapp")}</Button>
          </motion.div>
        </div>
      </section>

      {/* Premium Complaints Section */}
      {/* ✅ Increased margin-bottom to mb-40 to prevent overlapping with Map */}
      <section className="w-full py-24 bg-gradient-to-br from-sky-600 to-sky-500 relative overflow-hidden mb-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-sky-300/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-white text-center lg:text-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-sm font-medium mb-6">
                 <ShieldAlert size={16} className="text-yellow-300" /> 
                 <span>{t("management_badge")}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {t("complaint_hero_title")} <br/> <span className="text-sky-200">{t("complaint_hero_subtitle")}</span>
              </h2>
              <p className="text-sky-100 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 opacity-90">
                {t("complaint_hero_desc")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20"><MessageSquare size={20} /></div>
                   <div className="text-start"><p className="text-xs text-sky-200">{t("complaint_response_time")}</p><p className="font-bold">{t("complaint_24_hours")}</p></div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20"><FileText size={20} /></div>
                   <div className="text-start"><p className="text-xs text-sky-200">{t("complaint_follow_up")}</p><p className="font-bold">{t("complaint_ticket_no")}</p></div>
                </div>
              </div>
            </div>

            {/* Premium Form */}
            <motion.div 
              initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-[2rem] shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">{t("form_complaints_title")}</h3>
                
                <Form {...complaintForm}>
                  <form onSubmit={complaintForm.handleSubmit(onComplaintSubmit)} className="space-y-4">
                    <FormField
                      control={complaintForm.control}
                      name="user_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder={t("complaint_name_placeholder")} {...field} className="h-12 bg-white/10 border-white/20 text-white placeholder:text-sky-200 focus:bg-white/20 focus:border-white rounded-xl" />
                          </FormControl>
                          <FormMessage className="text-red-200" />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={complaintForm.control}
                        name="user_phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="05xxxxxxxx" {...field} className="h-12 bg-white/10 border-white/20 text-white placeholder:text-sky-200 focus:bg-white/20 focus:border-white rounded-xl" />
                            </FormControl>
                            <FormMessage className="text-red-200" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={complaintForm.control}
                        name="type"
                        render={({ field }) => (
                          <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white focus:bg-white/20 focus:border-white rounded-xl">
                                  <SelectValue placeholder={t("complaint_type_label")} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-white text-slate-900">
                                <SelectItem value="complaint">{t("complaint_type_complaint")}</SelectItem>
                                <SelectItem value="suggestion">{t("complaint_type_suggestion")}</SelectItem>
                                <SelectItem value="urgent">{t("complaint_type_urgent")}</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-200" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={complaintForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea 
                              placeholder={t("complaint_message_placeholder")} 
                              {...field} 
                              className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-sky-200 focus:bg-white/20 focus:border-white rounded-xl resize-none p-4" 
                            />
                          </FormControl>
                          <FormMessage className="text-red-200" />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-white text-sky-600 hover:bg-sky-50 font-bold rounded-xl shadow-lg mt-2"
                      disabled={isComplaintSubmitting}
                    >
                      {isComplaintSubmitting ? <Loader2 className="animate-spin" /> : t("complaint_submit_btn")}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px] bg-slate-50 relative border-t border-slate-100">
        <iframe 
          title="Rahma Medical Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.783177893666!2d46.7023393!3d24.689469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f031d020d6d0b%3A0x113a64f4556898f5!2z2YXYqtiu2KXYsdin2Kog2YTYmNmF2LPYqtmE2LLZhdin2Kog2KfZhNi32KjZitip!5e0!3m2!1sar!2sae!4v1700000000000!5m2!1sar!2sae"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
        ></iframe>
      </section>
    </main>
  );
}