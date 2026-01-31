import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google"; // استيراد الخطوط
import "../globals.css"; // تأكد ان المسار صح (ممكن يحتاج ../../globals.css حسب مكان الملف)
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

// تعريف الخطوط
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rahma Medical",
  description: "Medical Supplies and Equipment",
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // تحميل الرسائل الخاصة باللغة الحالية
  const messages = await getMessages();

  // تحديد اتجاه الصفحة
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <body className={`${cairo.variable} ${inter.variable} ${locale === 'ar' ? cairo.className : inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}