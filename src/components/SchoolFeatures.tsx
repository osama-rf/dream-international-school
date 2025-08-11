"use client"
import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { getSchoolFeatures } from '@/data/schoolFeatures';
import { translations } from '@/data/translations';
import { type Locale } from '@/lib/i18n';

const containerVariants = {
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
            staggerChildren: 0.1,
        }
    }
};

const cardVariants = {
    offscreen: {
        opacity: 0,
        y: 30,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 0.5,
        }
    },
};

const SchoolFeatures: React.FC<{ locale: Locale }> = ({ locale }) => {
    const t = translations[locale];
    const schoolFeatures = getSchoolFeatures(locale);
    const isRTL = locale === 'ar';

    return (
        <motion.div 
            className="w-full"
            variants={containerVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
                    {t.sections.schoolFeatures}
                </h2>
                <p className={clsx("text-lg text-foreground-accent max-w-4xl mx-auto leading-relaxed px-4", {
                    "text-right": isRTL,
                    "text-left": !isRTL
                })}>
                    {t.sections.schoolFeaturesDescription}
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {schoolFeatures.map((feature, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                        variants={cardVariants}
                    >
                        <div className={clsx("flex flex-col items-center", {
                            "text-center": !isRTL,
                            "text-center": isRTL
                        })}>
                            <div className="mb-6 p-4 bg-yellow-50 rounded-2xl">
                                {feature.icon}
                            </div>
                            <h4 className={clsx("text-xl font-bold text-foreground mb-4", {
                                "text-center": !isRTL,
                                "text-center": isRTL
                            })}>
                                {feature.title}
                            </h4>
                            <p className={clsx("text-foreground-accent leading-relaxed", {
                                "text-center": !isRTL,
                                "text-center": isRTL
                            })}>
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default SchoolFeatures;