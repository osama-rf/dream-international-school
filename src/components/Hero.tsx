import React from 'react';
import Image from 'next/image';

import WhatsAppButton from './WhatsAppButton';
import RegistrationButton from './RegistrationButton';
import ClasseraButton from './ClasseraButton';

import { heroDetails } from '@/data/hero';
import { translations } from '@/data/translations';
import { type Locale } from '@/lib/i18n';

const Hero: React.FC<{ locale: Locale }> = ({ locale }) => {
    const t = translations[locale];
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-20 sm:pt-32 md:pt-40 px-4 sm:px-5 min-h-screen"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="container mx-auto max-w-6xl text-center">
                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight sm:leading-tight md:leading-tight mx-auto px-2 ${locale === 'ar' ? 'max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl' : 'max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl'} break-words hyphens-auto`}>{t.hero.heading}</h1>

                <p className={`mt-8 sm:mt-10 md:mt-12 text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground mx-auto px-2 leading-relaxed ${locale === 'ar' ? 'max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl' : 'max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl'} break-words hyphens-auto`}>{t.hero.subheading}</p>
                <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 items-center justify-center w-full sm:w-fit mx-auto px-2 sm:px-0">
                    <WhatsAppButton dark locale={locale} />
                    <RegistrationButton dark locale={locale} />
                    <ClasseraButton dark locale={locale} />
                </div>

                {/* <div className="mt-5 sm:mt-20 md:mt-15">
                </div> */}
            </div>
        </section>
    );
};

export default Hero;
