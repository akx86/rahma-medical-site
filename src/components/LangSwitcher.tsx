"use client";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { Button } from "./ui/button";

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 hover:bg-transparent hover:text-primary"
    >
      <Globe size={18} />
      <span className="font-bold text-sm uppercase">
        {locale === "ar" ? "English" : "عربي"}
      </span>
    </Button>
  );
}
