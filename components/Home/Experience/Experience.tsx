import React from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import { experiences } from '@/data';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-950 relative overflow-hidden" id="experience">
            <div className="container px-4 mx-auto w-[90%] lg:w-[80%] relative z-10">
                <SectionHeading
                    title_1="Experience &"
                    title_2="Education"
                    description="My professional journey and academic background"
                />

                <div className="mt-16 sm:mt-20 relative max-w-4xl mx-auto">
                    {/* Main Timeline Line (Background) */}
                    <div className="absolute left-[24px] md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-gray-500 dark:bg-gray-800" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => {
                            // Determine row placement (left or right) based on index for md screens
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center w-full justify-center`}
                                >
                                    {/* Content Wrapper */}
                                    <div className={`w-full md:w-1/2 flex ${isLeft ? 'md:justify-end md:pr-12 md:order-1' : 'md:justify-start md:pl-12 md:order-2'} relative z-10`}>
                                        <ExperienceCard {...exp} index={index} isLeft={isLeft} />
                                    </div>
                                    
                                    {/* Spacer for opposite side */}
                                    <div className={`hidden md:block md:w-1/2 ${isLeft ? 'md:order-2' : 'md:order-1'}`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
