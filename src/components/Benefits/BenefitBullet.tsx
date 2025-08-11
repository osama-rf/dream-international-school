import { motion } from "framer-motion"
import clsx from "clsx"

import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"
import { type Locale } from '@/lib/i18n';

interface Props extends IBenefitBullet {
    locale: Locale;
}

const BenefitBullet: React.FC<Props> = ({ title, description, icon, locale }: Props) => {
    const isRTL = locale === 'ar';
    return (
        <motion.div
            className={clsx("flex mt-8 gap-3 lg:gap-5", {
                "flex-col items-center lg:flex-row lg:items-start": !isRTL,
                "flex-col items-center lg:flex-row-reverse lg:items-start": isRTL
            })}
            variants={childVariants}
        >
            <div className={clsx("flex justify-center flex-shrink-0 mt-3 w-fit", {
                "mx-auto lg:mx-0 lg:ml-0": !isRTL,
                "mx-auto lg:mx-0 lg:mr-0": isRTL
            })}>
                {icon}
            </div>
            <div className={clsx("w-full", {
                "text-center lg:text-left": !isRTL,
                "text-center lg:text-right": isRTL
            })}>
                <h4 className="text-lg font-semibold">
                    {title}
                </h4>
                <p className="text-base text-foreground-accent leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet