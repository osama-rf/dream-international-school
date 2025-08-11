import { FiCreditCard, FiDollarSign, FiShield, FiClock, FiCheckCircle, FiFileText } from "react-icons/fi";
import { type Locale } from '@/lib/i18n';
import { translations } from './translations';

import { IBenefit } from "@/types"

export const getBenefits = (locale: Locale): IBenefit[] => {
    const t = translations[locale];

    return [
        {
            title: t.benefits.paymentMethods.title,
            description: `${t.benefits.paymentMethods.subtitle}\n${t.benefits.paymentMethods.description}`,
            bullets: [
                {
                    title: t.benefits.paymentMethods.bullets[0].title,
                    description: t.benefits.paymentMethods.bullets[0].description,
                    icon: <FiCreditCard size={26} />
                },
                {
                    title: t.benefits.paymentMethods.bullets[1].title,
                    description: t.benefits.paymentMethods.bullets[1].description,
                    icon: <FiShield size={26} />
                },
                {
                    title: t.benefits.paymentMethods.bullets[2].title,
                    description: t.benefits.paymentMethods.bullets[2].description,
                    icon: <FiCheckCircle size={26} />
                }
            ],
            imageSrc: "/benefits/payments-methods.svg"
        },
        {
            title: t.benefits.jeelpay.title,
            description: t.benefits.jeelpay.description,
            bullets: [
                {
                    title: t.benefits.jeelpay.bullets[0].title,
                    description: t.benefits.jeelpay.bullets[0].description,
                    icon: <FiClock size={26} />
                },
                {
                    title: t.benefits.jeelpay.bullets[1].title,
                    description: t.benefits.jeelpay.bullets[1].description,
                    icon: <FiDollarSign size={26} />
                },
                {
                    title: t.benefits.jeelpay.bullets[2].title,
                    description: t.benefits.jeelpay.bullets[2].description,
                    icon: <FiFileText size={26} />
                }
            ],
            imageSrc: "/benefits/jeelpay.png"
        }
    ];
};

// Legacy export for backward compatibility
export const benefits: IBenefit[] = getBenefits('en');