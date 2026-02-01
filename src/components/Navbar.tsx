"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { NAV_LINKS } from "@/constants/nav-links";
import LangSwitcher from "./LangSwitcher";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Logic: تغيير الحالة عند السكرول
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.header
      // 1. انميشن الدخول: يهبط من السماء بنعومة
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500",
        // 2. تأثير الزجاج العائم (Premium Glassmorphism)
        isScrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-100 to-white shadow-inner group-hover:shadow-brand-500/20 transition-all duration-300">
            <span className="text-brand-600 font-black text-xl">R</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-brand-900 leading-none tracking-tight group-hover:text-brand-600 transition-colors">
              Rahma
            </span>
            <span className="text-[10px] font-bold text-brand-400 tracking-[0.2em] uppercase">
              Medical
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links (The Floating Capsule) */}
        <nav className="hidden md:flex items-center gap-1 bg-white/40 p-1.5 rounded-full border border-white/40 shadow-sm backdrop-blur-md transition-all hover:bg-white/60 hover:shadow-md hover:border-white/60">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.key}
                href={link.href}
                className="relative px-5 py-2 text-sm font-medium transition-colors rounded-full group"
              >
                {/* النص */}
                <span
                  className={cn(
                    "relative z-10 transition-colors duration-300",
                    isActive
                      ? "text-brand-700"
                      : "text-gray-600 group-hover:text-brand-600"
                  )}
                >
                  {t(link.key)}
                </span>

                {/* 3. Glowing Background for Active State */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-full bg-white shadow-[0_0_20px_rgba(14,165,233,0.15)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Hover Glow Effect */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-full bg-white/0 transition-all duration-300 group-hover:bg-white/80 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.1)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions & Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <LangSwitcher />

          {/* 4. The Glowing CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="relative overflow-hidden rounded-full bg-brand-600 text-white px-8 py-6 group shadow-[0_4px_14px_0_rgba(14,165,233,0.39)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.23)] hover:bg-brand-500 transition-all duration-300">
              {/* لمعة بتتحرك جوه الزرار */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

              <div className="flex items-center gap-2 relative z-10">
                <Sparkles size={18} className="text-brand-100" />
                <span className="font-bold tracking-wide">{t("store")}</span>
              </div>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Trigger */}
        <div className="md:hidden flex items-center gap-2">
          <LangSwitcher />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:bg-brand-50 hover:text-brand-600"
              >
                <Menu size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={locale === "ar" ? "right" : "left"}
              className="w-[300px] border-l-brand-100"
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
                          "flex items-center p-4 rounded-2xl text-lg font-medium transition-all duration-300",
                          pathname === link.href
                            ? "bg-brand-50 text-brand-700 shadow-sm shadow-brand-100"
                            : "text-gray-500 hover:bg-gray-50 hover:text-brand-600"
                        )}
                      >
                        {t(link.key)}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <Button className="w-full bg-brand-600 rounded-2xl py-6 text-lg shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all">
                  {t("store")}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
