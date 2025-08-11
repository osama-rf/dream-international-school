import BenefitSection from "./BenefitSection"

import { getBenefits } from "@/data/benefits"
import { translations } from '@/data/translations';
import { type Locale } from '@/lib/i18n';

const Benefits: React.FC<{ locale: Locale }> = ({ locale }) => {
    const t = translations[locale];
    const benefits = getBenefits(locale);
    
    return (
        <div id="features">
            <h2 className="sr-only">{t.accessibility.features}</h2>
            {benefits.map((item, index) => {
                return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} locale={locale} />
            })}
        </div>
    )
}

export default Benefits