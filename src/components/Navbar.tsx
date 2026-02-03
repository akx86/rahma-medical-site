"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";
import { NAV_LINKS } from "@/constants/nav-links";
import LangSwitcher from "./LangSwitcher";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
        // التعديل 1: الخلفية أتقل (95%) والضل أوضح عشان يفصل الكلام عن محتوى الموقع
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-md py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        
        {/* --- Logo Section --- */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-40 h-10 md:w-48 md:h-12 overflow-hidden -ml-2 rtl:-mr-2 rtl:ml-0">
             <Image 
                src="/logo.svg" 
                alt="Rahma Medical Logo" 
                fill
                className={cn(
                  "object-contain object-left rtl:object-right scale-[2.8] origin-left rtl:origin-right transition-all duration-300",
                  // التعديل 2: اللوجو بيرجع طبيعي تماماً (بدون فلاتر) عند السكرول
                  isScrolled ? "filter-none" : "brightness-0 invert drop-shadow-md"
                )} 
             />
          </div>
        </Link>
        
        {/* --- Desktop Nav Links --- */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.key}
                href={link.href}
                className="relative group py-2"
              >
                <span
                  className={cn(
                    "text-base font-bold transition-colors duration-300 relative z-10",
                    // التعديل 3: غمقنا الألوان جداً (slate-900) عشان تقرأ بوضوح
                    isScrolled 
                      ? (isActive ? "text-[#0ea5e9]" : "text-slate-900 hover:text-[#0ea5e9]") 
                      : (isActive ? "text-white" : "text-white/90 hover:text-white")
                  )}
                  style={{ 
                    // شلنا الضل عند السكرول عشان الكلام يبقى شارب (Sharp)
                    textShadow: !isScrolled && isActive ? "0 0 20px rgba(255,255,255,0.6)" : "none" 
                  }}
                >
                  {t(link.key)}
                </span>

                {/* Glow Dot */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-glow"
                    className={cn(
                      "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full",
                      isScrolled ? "bg-[#0ea5e9] shadow-none" : "bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                    )}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* --- Lang Switcher --- */}
        <div className={cn(
           "hidden md:flex transition-colors duration-300 font-medium",
           // التعديل 4: اللغة بقت كحلي غامق (slate-900) عند السكرول
           isScrolled ? "text-slate-900" : "text-white"
        )}>
          <LangSwitcher />
        </div>

        {/* --- Mobile Trigger --- */}
        <div className="md:hidden flex items-center gap-3">
          <div className={isScrolled ? "text-slate-900" : "text-white"}>
             <LangSwitcher />
          </div>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "transition-colors",
                  isScrolled 
                    ? "text-slate-900 hover:bg-slate-100" 
                    : "text-white hover:bg-white/20"
                )}
              >
                <Menu size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={locale === "ar" ? "right" : "left"}
              className="w-[300px] border-l-sky-100"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-10">
                <nav className="flex flex-col gap-2">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.key}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center p-4 rounded-xl text-lg font-medium transition-all duration-300",
                          pathname === link.href
                            ? "bg-sky-50 text-[#0ea5e9]"
                            : "text-slate-600 hover:bg-slate-50 hover:text-[#0ea5e9]"
                        )}
                      >
                        {t(link.key)}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}