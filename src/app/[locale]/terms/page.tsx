import { useTranslations } from 'next-intl';

export default function TermsPage() {
  const t = useTranslations('Terms');
  const contentKeys = ['0', '1', '2', '3', '4', '5', '6'] as const;

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* === البانر (نفس ستايل صفحة من نحن) === */}
      <div className="relative w-full pt-32 pb-32 lg:pt-40 lg:pb-48 overflow-hidden bg-gradient-to-r from-sky-600 to-sky-500 flex items-center justify-center">
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
            {t('title')}
          </h1>
        </div>
      </div>

      {/* === محتوى الصفحة === */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 -mt-20 mb-20">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">

          <ul className="space-y-6 text-gray-700 leading-relaxed text-lg">
            {contentKeys.map((key, index) => (
               // @ts-ignore
              <li key={index} className="flex gap-4 items-start group">
                <span className="font-bold text-sky-400 text-2xl -mt-2 group-hover:text-sky-600 transition-colors">
                  {index + 1}.
                </span>
                <span className="flex-1 border-b border-gray-50 pb-4 group-last:border-0">
                  {t(`content.${index}`)}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 pt-8 border-t border-gray-100 bg-sky-50/50 p-6 rounded-lg text-center">
            <p className="font-semibold text-sky-900">
              {t('contact')}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}