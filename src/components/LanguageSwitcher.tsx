'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { translations } from '@/data/translations';

interface LanguageSwitcherProps {
  locale: Locale;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ locale }) => {
  const pathname = usePathname();
  const otherLocale: Locale = locale === 'en' ? 'ar' : 'en';
  const t = translations[locale];
  
  // Remove current locale from pathname to get the base path
  const basePath = pathname.replace(`/${locale}`, '') || '/';
  const newPath = `/${otherLocale}${basePath}`;
  
  return (
    <Link
      href={newPath}
      className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
    >
      {otherLocale === 'ar' ? t.language.switchToArabic : t.language.switchToEnglish}
    </Link>
  );
};

export default LanguageSwitcher;