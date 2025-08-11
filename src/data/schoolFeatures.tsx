import { FiUsers, FiBook, FiAward, FiSettings } from "react-icons/fi";
import { type Locale } from '@/lib/i18n';
import { translations } from './translations';

import { ISchoolFeature } from "@/types"

export const getSchoolFeatures = (locale: Locale): ISchoolFeature[] => {
    const t = translations[locale];
    
    return [
        {
            title: t.schoolFeatures.professionalTeaching.title,
            description: t.schoolFeatures.professionalTeaching.description,
            icon: <FiUsers size={48} className="text-yellow-500" />
        },
        {
            title: t.schoolFeatures.academicSupport.title,
            description: t.schoolFeatures.academicSupport.description,
            icon: <FiBook size={48} className="text-yellow-500" />
        },
        {
            title: t.schoolFeatures.approvedCurriculum.title,
            description: t.schoolFeatures.approvedCurriculum.description,
            icon: <FiAward size={48} className="text-yellow-500" />
        },
        {
            title: t.schoolFeatures.advancedFacilities.title,
            description: t.schoolFeatures.advancedFacilities.description,
            icon: <FiSettings size={48} className="text-yellow-500" />
        }
    ];
};

// Legacy export for backward compatibility
export const schoolFeatures: ISchoolFeature[] = getSchoolFeatures('en');