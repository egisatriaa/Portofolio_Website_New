'use client';
import React from 'react';

import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';
import { Download, FolderPen } from 'lucide-react';
import './hero.css';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_700px_at_50%_30%,#e8f3f6_0%,#d6e6ec_40%,#c3d7df_100%)] dark:bg-[radial-gradient(circle_800px_at_50%_30%,#2c5364_0%,#203a43_45%,#0f2027_100%)]">
            {/* content */}
            <div className="relative z-10 text-center">
                {/* subtitle */}
                <div className="sm:mb-6">
                    <div className="snake-border inline-block mb-8 rounded-lg">
                        <div className="inner  rounded-lg">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200">
                                <span className="w-2 h-2 rounded-lg bg-green-500"></span>
                                <p>Available for work</p>
                            </span>
                        </div>
                    </div>
                    {/* title */}
                    <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Hi, I'm{' '}
                        <span className="text-yellow-500 dark:text-yellow-200">
                            Egi Satria
                        </span>
                    </h1>
                    {/* Typewriter effects */}
                    <div className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12">
                        <TypeAnimation
                            sequence={[
                                'Fullstack Developer',
                                2000,
                                'Backend Developer',
                                2000,
                                'Frontend Developer',
                                2000,
                            ]}
                            speed={50}
                            wrapper="span"
                            repeat={Infinity}
                            className="font-mono"
                        />
                    </div>

                    {/* description */}
                    <p className="text-lg  text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10">
                        I'm a{' '}
                        <span className="text-yellow-500 dark:text-yellow-200">
                            Web Developer
                        </span>{' '}
                        passionate about creating modern web applications that
                        are fast, intuitive, and reliable. I love solving
                        real-world problems through clean code and thoughtful
                        design.
                    </p>

                    {/* button */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size={'lg'}
                            className="px-8 py-5 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-500 transition-all duration-200 cursor-pointer"
                        >
                            <FolderPen className="w-5 h-5 mr-2" />
                            View Project
                        </Button>

                        <Button
                            size={'lg'}
                            className="px-8 py-5 bg-gray-400 text-gray-900 rounded-full border border-gray-200 hover:bg-gray-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download CV
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
