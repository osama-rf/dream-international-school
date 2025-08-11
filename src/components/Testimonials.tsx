import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';
import { type Locale } from '@/lib/i18n';

const Testimonials: React.FC<{ locale: Locale }> = ({ locale }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="rounded-full mr-4"
                        />
                        <div>
                            <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                            <p className="text-foreground-accent text-sm">{testimonial.role}</p>
                        </div>
                    </div>
                    <p className="text-foreground-accent">{testimonial.message}</p>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;