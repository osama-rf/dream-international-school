"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";
import { type Locale } from '@/lib/i18n';

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
    locale: Locale;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 50
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 0.6,
            delayChildren: 0.1,
            staggerChildren: 0.05,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -30,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 0.5,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight, locale }: Props) => {
    const { title, description, imageSrc, bullets } = benefit;
    const isRTL = locale === 'ar';

    return (
        <section className="benefit-section">
            <motion.div
                className="flex flex-wrap flex-col items-center justify-center gap-2 lg:flex-row lg:gap-20 lg:flex-nowrap mb-24"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div
                    className={clsx("flex flex-wrap items-center w-full max-w-lg", {
                        // Text content positioning
                        "justify-start": imageAtRight,
                        "justify-end": !imageAtRight,
                        // Text content order
                        "lg:order-1": !imageAtRight,
                        "lg:order-2": imageAtRight
                    })}
                >
                    <div className={clsx("w-full text-center", {
                        "lg:text-left": !isRTL,
                        "lg:text-right": isRTL
                    })}>
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants}
                        >
                            <SectionTitle>
                                <h3 className="lg:max-w-2xl">
                                    {title}
                                </h3>
                            </SectionTitle>

                            <div className={clsx("mt-1.5 mx-auto leading-normal text-foreground-accent", {
                                "lg:ml-0": !isRTL,
                                "lg:mr-0": isRTL
                            })}>
                                {description.split('\n').map((line, index) => (
                                    <p key={index} className={index > 0 ? 'mt-2' : ''}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </motion.div>

                        <div className={clsx("mx-auto w-full", {
                            "lg:ml-0": !isRTL,
                            "lg:mr-0": isRTL
                        })}>
                            {bullets.map((item, index) => (
                                <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} locale={locale} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={clsx("mt-5 lg:mt-0", {
                    "lg:order-1": imageAtRight,
                    "lg:order-2": !imageAtRight
                })}>
                    <div className={clsx("w-fit flex", {
                        "justify-start": imageAtRight,
                        "justify-end": !imageAtRight
                    })}>
                        <Image src={imageSrc} alt="title" width="384" height="762" quality={100} className="lg:ml-0" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection