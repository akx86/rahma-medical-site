import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google"; // استيراد الخطوط
import "../globals.css"; // تأكد ان المسار صح (ممكن يحتاج ../../globals.css حسب مكان الملف)
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// تعريف الخطوط
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rahma Medical",
  description: "Medical Supplies and Equipment",
};
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};
export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  // تحميل الرسائل الخاصة باللغة الحالية
  const messages = await getMessages();

  // تحديد اتجاه الصفحة
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body
        className={`${cairo.variable} ${inter.variable} ${
          locale === "ar" ? cairo.className : inter.className
        } antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="min-h-screen pt-4">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
