import clsx from 'clsx';
import { translations } from '@/data/translations';
import { type Locale } from '@/lib/i18n';

const CTA: React.FC<{ locale: Locale }> = ({ locale }) => {
    const t = translations[locale];
    const isRTL = locale === 'ar';

    // Google Maps embed URL for the location
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.8965!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2s!4v1234567890";

    const whatsappNumber = "966554116512";
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-blue-900 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1e40af,transparent)]"></div>
                    </div>

                    <div className={clsx("h-full flex flex-col items-center justify-center gap-8 lg:gap-12 py-12 sm:py-20 px-5", {
                        "lg:flex-row-reverse": isRTL,
                        "lg:flex-row": !isRTL
                    })}>



                        {/* Map Section */}
                        <div className="flex-1 w-full max-w-lg lg:max-w-none">
                            <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                                <iframe
                                    src={mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-2xl"
                                    title="Dream International School Location"
                                />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 flex flex-col items-center justify-center text-white text-center lg:text-right">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                {t.cta.heading}
                            </h2>

                            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
                                {t.cta.subheading}
                            </p>

                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    {t.cta.contactButton}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA