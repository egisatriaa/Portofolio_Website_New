import SectionHeading from '@/components/Helper/SectionHeading';
import { highlights, stats } from '@/data';
import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className="py-16 bg-gray-100 dark:bg-gray-900">
            {/* section heading */}
            <SectionHeading
                title_1="About"
                title_2="Me"
                description="Get to know the developer behind the code."
            />
            <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
                {/* image */}
                <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden p-2">
                        <Image
                            src={'/images/user.jpg'}
                            alt="profile image"
                            width={700}
                            height={700}
                            className="w-full h-full object-center rounded-xl"
                        />
                    </div>
                </div>
                {/* content */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Junior Full-Stack Web Developer
                    </h3>
                    <p className="text-gray-700 dark:text-muted-foreground leading-relaxed text-justify">
                        I&apos;m a Junior Web Developer with a strong interest
                        in full-stack development and modern web technologies. I
                        recently graduated with an Applied Bachelor&apos;s
                        Degree in Computer and Informatics Engineering from
                        Bandung State Polytechnic and have hands-on experience
                        building and deploying web applications through
                        internships and development projects.
                    </p>
                    <p className="text-gray-700 dark:text-muted-foreground leading-relaxed text-justify">
                        I enjoy working across the full development lifecycle,
                        from designing responsive user interfaces to developing
                        backend services and optimizing databases. I&apos;m also
                        interested in DevOps practices and continuously
                        improving my skills through projects, bootcamps, and
                        experimentation with modern tools and frameworks.
                    </p>
                    {/* Highlight */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                        {highlights.map((item) => {
                            return (
                                <div
                                    key={item.text}
                                    className="flex items-center gap-4 text-sm"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center ">
                                        <item.icon className="w-5 h-5 text-blue-500 mx-2" />
                                    </div>
                                    <span className="text-muted-foreground">
                                        {item.text}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
                {/* stats */}
                <div className='mt-16 w-[80%] mx-auto'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                        {stats.map((stat)=>{
                            return <div key={stat.label} className='bg-gray-300 dark:bg-gray-800 shadow rounded-xl p-6 text-center'>
                                <div className='text-3xl md:text-4xl font-bold text-blue-600 mb-2'>{stat.value}</div>
                                <div className='text-sm text-muted-foreground'>{stat.label}</div>
                            </div>
                        })}
                    </div>
                </div>
        </div>
    );
};

export default About;
