'use client';
import SectionHeading from '@/components/Helper/SectionHeading';
import { skillCategories } from '@/data';
import React from 'react';
import SkillCard from './SkillCard';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <div id="skills" className="py-16 bg-gray-100 dark:bg-gray-950 overflow-hidden">
            <SectionHeading
                title_1="Technical"
                title_2="Skills"
                description="Technologies I've been working with recently"
            />
            <div className="space-y-12 w-[80%] mx-auto">
                {skillCategories.map((category) => {
                    return (
                        <div key={category.title}>
                            <motion.h3 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="text-xl font-semibold mb-6 flex items-center gap-3"
                            >
                                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                {category.title}
                            </motion.h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {category.skills.map((skill, index) => {
                                    return (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            key={index}
                                        >
                                            <SkillCard name={skill.name} icon={skill.icon} />
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
