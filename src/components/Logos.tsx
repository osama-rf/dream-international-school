import Image from 'next/image';
import { translations } from '@/data/translations';
import { type Locale } from '@/lib/i18n';

const Logos: React.FC<{ locale?: Locale }> = ({ locale = 'en' }) => {
    const t = translations[locale];

    return (
        <section id="logos" className="py-16 px-5 bg-background">
            <p className="text-lg font-medium text-center">{t.logos.trustedBy}</p>
            <div className="mt-8 w-full flex flex-wrap flex-row items-center justify-center gap-6 sm:gap-8 md:gap-75 logos-container">
                <div className="flex items-center justify-center h-20 sm:h-24 md:h-28 lg:h-32 w-20 sm:w-24 md:w-28 lg:w-32 opacity-80 hover:opacity-750 transition-opacity">
                    <Image
                        src="/partners/classera.jpeg"
                        alt="Classera"
                        width={750}
                        height={750}
                        className="w-full h-full object-contain rounded-[75%] hover:scale-755 transition-all duration-300"
                    />
                </div>

                <div className="flex items-center justify-center h-20 sm:h-24 md:h-28 lg:h-32 w-20 sm:w-24 md:w-28 lg:w-32 opacity-80 hover:opacity-750 transition-opacity">
                    <Image
                        src="/partners/eqleed.jpeg"
                        alt="Eqleed"
                        width={750}
                        height={750}
                        className="w-full h-full object-contain rounded-[75%] hover:scale-755 transition-all duration-300"
                    />
                </div>

                <div className="flex items-center justify-center h-20 sm:h-24 md:h-28 lg:h-32 w-20 sm:w-24 md:w-28 lg:w-32 opacity-80 hover:opacity-750 transition-opacity">
                    <Image
                        src="/partners/gaca.jpeg"
                        alt="GACA"
                        width={750}
                        height={750}
                        className="w-full h-full object-contain rounded-[75%] hover:scale-755 transition-all duration-300"
                    />
                </div>

                <div className="flex items-center justify-center h-20 sm:h-24 md:h-28 lg:h-32 w-20 sm:w-24 md:w-28 lg:w-32 opacity-80 hover:opacity-750 transition-opacity">
                    <Image
                        src="/partners/google.jpg"
                        alt="Google"
                        width={750}
                        height={750}
                        className="w-full h-full object-contain rounded-[75%] hover:scale-755 transition-all duration-300"
                    />
                </div>

                <div className="flex items-center justify-center h-20 sm:h-24 md:h-28 lg:h-32 w-20 sm:w-24 md:w-28 lg:w-32 opacity-80 hover:opacity-750 transition-opacity">
                    <Image
                        src="/partners/sabic.jpeg"
                        alt="SABIC"
                        width={750}
                        height={750}
                        className="w-full h-full object-contain rounded-[75%] hover:scale-755 transition-all duration-300"
                    />
                </div>

                <div className="flex items-center justify-center h-20 sm:h-24 md:h-28 lg:h-32 w-20 sm:w-24 md:w-28 lg:w-32 opacity-80 hover:opacity-750 transition-opacity">
                    <Image
                        src="/partners/stc.jpeg"
                        alt="STC"
                        width={750}
                        height={750}
                        className="w-full h-full object-contain rounded-[75%] hover:scale-755 transition-all duration-300"
                    />
                </div>

                <div className="flex items-center justify-center h-20 sm:h-24 md:h-28 lg:h-32 w-20 sm:w-24 md:w-28 lg:w-32 opacity-80 hover:opacity-750 transition-opacity">
                    <Image
                        src="/partners/wafir.jpeg"
                        alt="Wafir"
                        width={750}
                        height={750}
                        className="w-full h-full object-contain rounded-[75%] hover:scale-755 transition-all duration-300"
                    />
                </div>
            </div>
        </section>
    )
}

export default Logos