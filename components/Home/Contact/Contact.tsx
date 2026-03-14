'use client';

import React from 'react';
import { contactInfo, socialLinks } from '@/data';
import { Send } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div id="contact" className="pt-16 pb-16 bg-[linear-gradient(109.6deg,rgba(121,203,202,1)_11.2%,rgba(119,161,211,1)_91.1%)] dark:bg-none dark:bg-[#151622] overflow-hidden">
            {/* Using custom header matching the reference visual style */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="text-center mb-16"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Get In <span className="text-blue-600">Touch</span>
                </h1>
                <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-4">
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </p>
            </motion.div>

            <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Left Column: Contact Info */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="flex flex-col"
                >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Let's talk</h2>
                    <p className="text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>

                    <div className="space-y-4 mb-10">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <Link 
                                    href={info.href} 
                                    key={index} 
                                    className="flex items-center gap-6 p-5 bg-white/60 dark:bg-[#1a1c29] rounded-xl hover:bg-white/90 dark:hover:bg-[#25283b] transition-all duration-300 border border-transparent hover:border-gray-300 dark:hover:border-gray-700 shadow-sm dark:shadow-none"
                                >
                                    <div className="w-12 h-12 bg-white dark:bg-[#25283b] shadow-sm dark:shadow-none rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{info.label}</p>
                                        <p className="text-base font-semibold text-gray-900 dark:text-white">{info.value}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white/60 dark:bg-[#1a1c29] shadow-sm dark:shadow-none rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-300"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Contact Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="bg-white/80 backdrop-blur-sm dark:bg-[#1a1c29] shadow-xl dark:shadow-none p-8 rounded-2xl w-full"
                >
                    <form className="space-y-6 flex flex-col h-full" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 text-left">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="John Smith"
                                    className="bg-white/90 dark:bg-[#25283b] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors outline-none placeholder-gray-400 dark:placeholder-gray-500"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 text-left">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="bg-white/90 dark:bg-[#25283b] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors outline-none placeholder-gray-400 dark:placeholder-gray-500"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300 text-left">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Project Inquiry"
                                className="bg-white/90 dark:bg-[#25283b] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors outline-none placeholder-gray-400 dark:placeholder-gray-500"
                            />
                        </div>

                        <div className="flex flex-col gap-2 grow">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 text-left">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                placeholder="Tell me about your project...."
                                className="bg-white/90 dark:bg-[#25283b] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors outline-none resize-none grow placeholder-gray-400 dark:placeholder-gray-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mt-auto w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white dark:bg-gray-100 dark:hover:bg-white dark:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md dark:shadow-none"
                        >
                            <Send className="w-5 h-5 -ml-2" />
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
