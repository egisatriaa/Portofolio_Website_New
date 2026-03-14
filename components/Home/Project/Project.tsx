'use client';
import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import { projects } from '@/data'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

const Project = () => {
  return (
    <div id="projects" className='py-16 bg-gray-100 dark:bg-gray-900 overflow-hidden'>
        <SectionHeading
            title_1="Featured"
            title_2="Projects"
            description="A selection of my recent work and side projects"
        />
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto'>
            {projects.map((project, index) => {
                return (
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        key={index}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                );
            })}
        </div>
    </div>
  )
}

export default Project