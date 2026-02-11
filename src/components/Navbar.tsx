"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";
import { NAV_LINKS } from "@/constants/nav-links";
import LangSwitcher from "./LangSwitcher";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
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
        "fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-500 ease-in-out",
        
        
        "py-4 md:py-6",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-md"
          : "bg-transparent" 
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 relative h-full">
        
        {/* --- 1. Logo Section --- */}
        <Link href="/" className="flex items-center gap-2 shrink-0 z-20">
          <div className={cn(
            "relative overflow-hidden transition-none -ml-2 rtl:-mr-2 rtl:ml-0",
            
            
            
            
            
            
            "w-40 h-12 sm:w-48 sm:h-14 md:w-60 md:h-20 lg:w-96"
          )}>
             <Image 
                src="/logo.svg" 
                alt="Rahma Medical Logo" 
                fill
                priority
                className={cn(
                  "object-contain object-left rtl:object-right transition-all duration-500 ease-in-out",
                  
                  
                  "scale-[2.8] origin-left rtl:origin-right translate-y-1", 
                  
                  isScrolled ? "filter-none" : "brightness-0 invert drop-shadow-md"
                )} 
             />
          </div>
        </Link>
        
        {/* --- 2. Desktop Nav Links (FIXED CENTER) --- */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
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
                    "text-sm lg:text-lg font-bold transition-colors duration-300 relative z-10 whitespace-nowrap",
                    isScrolled 
                      ? (isActive ? "text-[#0ea5e9]" : "text-slate-900 hover:text-[#0ea5e9]") 
                      : (isActive ? "text-white" : "text-white/90 hover:text-white")
                  )}
                  style={{ 
                    textShadow: !isScrolled && isActive ? "0 0 20px rgba(255,255,255,0.6)" : "none" 
                  }}
                >
                  {t(link.key)}
                </span>

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

        {/* --- 3. Lang Switcher --- */}
        <div className={cn(
           "hidden md:flex transition-colors duration-300 font-medium shrink-0 z-20",
           isScrolled ? "text-slate-900" : "text-white"
        )}>
          <LangSwitcher />
        </div>

        {/* --- Mobile Trigger --- */}
        <div className="md:hidden flex items-center gap-3 z-20">
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