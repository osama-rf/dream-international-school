import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { type Locale } from '@/lib/i18n';
import { translations } from '@/data/translations';

const RegistrationButton = ({ dark, locale = 'en' }: { dark?: boolean; locale?: Locale }) => {
    const t = translations[locale];
    const registrationUrl = `/${locale}/registration`;
    
    return (
        <Link href={registrationUrl}>
            <button
                type="button"
                className="flex items-center justify-center w-[200px] sm:w-[220px] mt-0 px-4 sm:px-6 h-12 sm:h-14 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm sm:text-base transition-colors"
            >
                {t.buttons.registration}
            </button>
        </Link>
    )
}

export default RegistrationButton