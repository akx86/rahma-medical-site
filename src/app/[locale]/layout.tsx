import type { Metadata } from "next";
import { Inter } from "next/font/google"; // استيراد الخطوط
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css"; 
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

// تعريف الخطوط
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});
const ibmPlexArabic = IBM_Plex_Sans_Arabic({ 
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // جبنا كل الأوزان
  variable: "--font-ibm", // هنسميه ibm
  display: "swap",
});

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
        className={`${ibmPlexArabic.variable} ${inter.variable} ${
          locale === "ar" ? ibmPlexArabic.className : inter.className
        } antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-grow">
            {children}
            <Toaster position="top-center" richColors theme="light" closeButton />
            </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
