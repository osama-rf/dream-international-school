import React from 'react';
import { translations } from '@/data/translations';
import { type Locale } from '@/lib/i18n';

interface ClasseraButtonProps {
  dark?: boolean;
  locale: Locale;
}

const ClasseraButton: React.FC<ClasseraButtonProps> = ({ dark = false, locale }) => {
  const t = translations[locale];
  const isRTL = locale === 'ar';
  
  const classeraUrl = 'https://www.classlight.com';

  return (
    <a href={classeraUrl} target="_blank" rel="noopener noreferrer">
      <button className={`flex items-center justify-center w-[280px] sm:w-[240px] mt-0 px-8 sm:px-6 h-16 sm:h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg sm:text-base transition-colors`}>
        {t.buttons.classera}
      </button>
    </a>
  );
};

export default ClasseraButton;