"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

type Props = {
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
    type: string;
    index: number;
    isLeft?: boolean;
};

const ExperienceCard = ({
    title,
    company,
    period,
    description,
    technologies,
    type,
    index,
    isLeft,
}: Props) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Reset animation when scrolling away (as requested by user)
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.15, // Trigger when 15% of the card is visible
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    // Alternate animations based on index for a cascading effect
    const animationDelay = (index % 4) * 0.1;
    
    return (
        <div 
            ref={cardRef}
            className={`flex items-start gap-6 relative group w-full ml-12 md:ml-0 opacity-0 translate-y-12 transition-all duration-1000 ease-out ${isVisible ? '!opacity-100 !translate-y-0' : ''}`}
            style={{ transitionDelay: isVisible ? `${animationDelay}s` : '0s' }}
        >
            {/* Icon & Connection - Absolutely positioned to rest on the center line */}
            <div 
                className={`absolute top-0 md:top-6 -left-[48px] ${isLeft ? 'md:left-auto md:-right-[72px]' : 'md:-left-[72px]'} flex items-center justify-center w-12 h-12 rounded-full border-[3px] border-blue-500 bg-white dark:bg-gray-900 text-blue-500 shrink-0 shadow-sm z-20 transition-transform duration-500 delay-300 ${isVisible ? 'scale-100' : 'scale-0'}`}
            >
                {type === 'work' ? (
                    <Briefcase className="w-5 h-5" />
                ) : (
                    <GraduationCap className="w-5 h-5" />
                )}
            </div>

            {/* Content Box */}
            <div className="flex-1 bg-white dark:bg-[#111827] p-6 sm:p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:shadow-none border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 w-full group-hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 w-full">
                            <h3 className="text-xl sm:text-[18px] font-bold text-gray-900 dark:text-gray-100 leading-tight">
                                {title}
                            </h3>
                            {/* Date Badge */}
                            <div className="w-fit bg-blue-50 dark:bg-[#1e3a8a]/30 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-[10px] font-semibold border border-blue-100 dark:border-blue-800/40 whitespace-nowrap hidden sm:block">
                                {period}
                            </div>
                        </div>
                        <div className="text-base font-medium text-gray-500 dark:text-gray-400 mt-1 mb-2">
                            {company}
                        </div>
                         {/* Mobile Date Badge */}
                        <div className="w-fit bg-blue-50 dark:bg-[#1e3a8a]/30 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-[13px] font-semibold border border-blue-100 dark:border-blue-800/40 whitespace-nowrap sm:hidden mb-3">
                            {period}
                        </div>
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                    {description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
