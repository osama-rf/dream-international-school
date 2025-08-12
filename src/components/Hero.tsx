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
            className="relative flex items-center justify-center pb-0 pt-20 sm:pt-32 md:pt-40 px-4 sm:px-5 min-h-screen overflow-x-hidden max-w-full w-full"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="container mx-auto max-w-6xl text-center w-full max-w-full overflow-hidden">
                {/* Mobile logo - only show on small screens */}
                <div className="block sm:hidden mb-6">
                    <Image
                        src="/images/dis.png"
                        alt="Dream International School"
                        width={120}
                        height={120}
                        className="mx-auto bg-transparent"
                        priority
                        style={{ backgroundColor: 'transparent' }}
                    />
                </div>
                
                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight mx-auto px-2 w-full ${locale === 'ar' ? 'max-w-full' : 'max-w-full'} break-words overflow-wrap-anywhere`}>{t.hero.heading}</h1>

                <p className={`mt-6 sm:mt-8 md:mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground mx-auto px-2 leading-relaxed w-full max-w-4xl break-words overflow-wrap-anywhere`}>{t.hero.subheading}</p>
                <div className="mt-8 sm:mt-10 flex flex-col gap-4 sm:flex-row sm:gap-4 items-center justify-center w-full max-w-4xl mx-auto px-2">
                    <WhatsAppButton dark locale={locale} />
                    <RegistrationButton dark locale={locale} />
                    <ClasseraButton dark locale={locale} />
                </div>
                
                {/* Animated scroll down indicator */}
                <div className="mt-20 sm:mt-24 flex flex-col items-center justify-center">
                    <div className="animate-bounce">
                        <svg 
                            className="w-6 h-6 sm:w-8 sm:h-8 text-foreground opacity-70" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                            />
                        </svg>
                    </div>
                    {locale !== 'ar' && <p className="text-sm text-foreground opacity-60 mt-2">Scroll Down</p>}
                </div>

                {/* <div className="mt-5 sm:mt-20 md:mt-15">
                </div> */}
            </div>
        </section>
    );
};

export default Hero;
