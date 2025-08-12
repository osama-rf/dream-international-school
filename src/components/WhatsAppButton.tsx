import React from 'react'
import clsx from 'clsx'

import { type Locale } from '@/lib/i18n';
import { translations } from '@/data/translations';

const WhatsAppButton = ({ dark, locale = 'en' }: { dark?: boolean; locale?: Locale }) => {
    const t = translations[locale];
    const whatsappNumber = "966554116512";
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    
    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <button
                type="button"
                className="flex items-center justify-center w-[280px] sm:w-[240px] mt-0 px-8 sm:px-6 h-16 sm:h-14 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg sm:text-base transition-colors"
            >
                {t.buttons.whatsapp}
            </button>
        </a>
    )
}

export default WhatsAppButton