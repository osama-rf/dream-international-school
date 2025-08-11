import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Dream International School offers a distinctive model in education with world-class facilities and curriculum.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Pricing",
            url: "#pricing"
        },
        {
            text: "Testimonials",
            url: "#testimonials"
        }
    ],
    email: 'disregistrat@gmail.com',
    telephone: '966554116512',
    socials: {
        facebook: 'https://www.facebook.com/dischool.com.sa',
        twitter: 'https://twitter.com/DreamSchoolsKSA',
        instagram: 'https://www.instagram.com/dis.com.sa/',
        snapchat: 'https://www.snapchat.com/add/dreamschools?web_client_id=c47760c2-f3ed-4fac-acde-66843833491c',
        tiktok: 'https://www.tiktok.com/@dreamschoolksa',
        whatsapp: 'https://wa.me/966550297965'
    }
}