import { buttonVariants } from '@/components/ui/button-variants';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { FaGithub } from 'react-icons/fa6';

type Props = {
    title: string;
    description: string;
    image: string;
    techStack: string[];
    demoUrl: string;
    githubUrl: string;
};

const ProjectCard = ({ title, description, image, techStack, demoUrl, githubUrl }: Props) => {
  return (
    <div className='group relative bg-gray-300 dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden'>
        {/* image container */}
        <div className='relative h-48 overflow-hidden'>
            <Image
                src={image}
                alt={title}
                fill
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
            />
        </div>
        {/* content container */}
        <div className='p-6'>
            <h3 className='text-xl text-black dark:text-white font-semibold mb-2 group-hover:text-blue-500 transition-colors'>{title}</h3>
            <p className='text-gray-600 dark:text-gray-400 mb-4 line-clamp-2'>{description}</p>
            
            {/* tech stack */}
            <div className='flex flex-wrap gap-2 mb-6'>
                {techStack.map((tech, index) => {
                    return <span key={index} className='px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm'>{tech}</span>;
                })}
            </div>
            {/* buttons */}
            <div className='flex gap-3'>
                {demoUrl && (
                    <a 
                        href={demoUrl} 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className={cn(buttonVariants({ size: 'sm' }), 'flex-1')}
                    >
                        <ExternalLink  className='w-4 h-4 mr-2'/>
                        Live Demo
                    </a>
                )}
                {githubUrl && (
                    <a 
                        href={githubUrl} 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
                    >
                        <FaGithub  className='w-4 h-4 mr-2'/>
                        GitHub
                    </a>
                )}
            </div>
        </div>
    </div>
  );
};

export default ProjectCard;