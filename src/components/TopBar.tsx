import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TopBar() {
  const t = useTranslations("TopBar");
  return (
    <div className="bg-brand-900 text-white py-2 text-xs md:text-sm hidden md:block">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* معلومات التواصل */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-brand-300" />
            <span dir="ltr">{t("emergency")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-brand-300" />
            <span>{t("email")}</span>
          </div>
        </div>

        {/* السوشيال ميديا (ممكن تزيد بعدين) */}
        <div className="flex items-center gap-4">
          <Facebook
            size={16}
            className="cursor-pointer hover:text-brand-300 transition"
          />
          <Instagram
            size={16}
            className="cursor-pointer hover:text-brand-300 transition"
          />
        </div>
      </div>
    </div>
  );
}
