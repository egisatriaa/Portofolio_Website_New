import React from 'react';
import Logo from '@/components/Helper/Logo';
import { socialLinks } from '@/data';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-[#0a0a0a] pt-16 pb-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pb-12 border-b border-gray-200 dark:border-gray-800">
                    
                    {/* Column 1: Logo & Description */}
                    <div className="flex flex-col gap-6 w-full md:w-1/2">
                        <Logo />
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
                            Crafting digital experiences with modern web technologies. Specializing in frontend development and user-centric interfaces.
                        </p>
                    </div>

                    {/* Column 2: Social Links */}
                    <div className="flex flex-col gap-6 md:items-end w-full md:w-1/2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Connect</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <Link 
                                        key={index} 
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white dark:bg-[#1a1c29] border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:border-transparent transition-all duration-300"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} Egi Satria. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        Built with <span className="text-blue-600 font-semibold">Next.js</span> & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
