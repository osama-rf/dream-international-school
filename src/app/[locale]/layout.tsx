import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope, Noto_Sans_Arabic } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from '@/data/siteDetails';
import { translations } from '@/data/translations';
import { locales, type Locale, getDirection } from '@/lib/i18n';

import "../globals.css";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });
const notoSansArabic = Noto_Sans_Arabic({ subsets: ['arabic'] });

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = translations[params.locale];
  
  return {
    title: t.metadata.title,
    description: t.metadata.description,
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: siteDetails.siteUrl,
      type: 'website',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 675,
          alt: t.siteName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.metadata.title,
      description: t.metadata.description,
      images: ['/images/twitter-image.jpg'],
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const direction = getDirection(params.locale);
  const isArabic = params.locale === 'ar';
  
  return (
    <html lang={params.locale} dir={direction}>
      <body
        className={`${isArabic ? notoSansArabic.className : `${manrope.className} ${sourceSans.className}`} antialiased`}
      >
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header locale={params.locale} />
        <main>
          {children}
        </main>
        <Footer locale={params.locale} />
      </body>
    </html>
  );
}