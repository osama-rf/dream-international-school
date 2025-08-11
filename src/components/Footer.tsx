import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';
import { translations } from '@/data/translations';
import { type Locale } from '@/lib/i18n';

const Footer: React.FC<{ locale: Locale }> = ({ locale }) => {
    const t = translations[locale];
    const isRTL = locale === 'ar';
    
    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* School Info Section */}
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <Link href={`/${locale}`} className="flex items-center gap-3 mb-4">
                        <Image 
                            src="/images/dis.png" 
                            alt="Dream International School Logo" 
                            width={40} 
                            height={40} 
                            className="rounded-lg"
                        />
                        <h3 className="text-xl font-semibold cursor-pointer">
                            {t.siteName}
                        </h3>
                    </Link>
                    <p className="mt-3 text-foreground-accent leading-relaxed">
                        {t.footer.subheading}
                    </p>
                    
                    {/* Address Information */}
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-3">{t.footer.address}</h4>
                        <div className="text-foreground-accent space-y-1">
                            <p>{t.footer.addressLine1}</p>
                            <p>{t.footer.addressLine2}</p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <h4 className="text-lg font-semibold mb-4">{t.footer.contactUs}</h4>

                    <div className="space-y-3">
                        {footerDetails.email && (
                            <a href={`mailto:${footerDetails.email}`} className="block text-foreground-accent hover:text-foreground transition-colors">
                                <span className="font-medium">{t.footer.email}:</span> {footerDetails.email}
                            </a>
                        )}

                        {footerDetails.telephone && (
                            <a href={`tel:${footerDetails.telephone}`} className="block text-foreground-accent hover:text-foreground transition-colors">
                                <span className="font-medium">{t.footer.phone}:</span> {footerDetails.telephone}
                            </a>
                        )}
                    </div>

                    {/* Social Media Links */}
                    {footerDetails.socials && (
                        <div className="mt-6">
                            <h5 className="text-base font-medium mb-3">تابعونا</h5>
                            <div className="flex items-center gap-4 flex-wrap">
                                {Object.keys(footerDetails.socials).map(platformName => {
                                    if (platformName && footerDetails.socials[platformName]) {
                                        return (
                                            <Link
                                                href={footerDetails.socials[platformName]}
                                                key={platformName}
                                                aria-label={platformName}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:scale-110 transition-transform duration-200"
                                            >
                                                {getPlatformIconByName(platformName)}
                                            </Link>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700 text-center text-foreground-accent px-6">
                <p>Copyright &copy; {new Date().getFullYear()} {t.siteName}. {t.footer.copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;
