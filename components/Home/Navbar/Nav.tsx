'use client';
import Logo from '@/components/Helper/Logo';
import { Navlink } from '@/Constant/Constant';
import ThemeToggle from '@/components/Helper/ThemeToggle';
import Link from 'next/link';
import { Download, MenuIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

type Props = {
    openNavHandler: () => void;
}

const Nav = ({ openNavHandler }: Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            if (window.scrollY < 90) setNavBg(false);
        };
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <div
            className={`transition-all ${navBg ? 'dark:bg-gray-800 bg-white shadow-md ' : 'fixed'} duration-200 h-[12vh] z-100 w-full fixed`}
        >
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* Logo */}
                <div className="w-[10%]">
                    <Logo />
                </div>
                {/* Navlink */}
                <div className="hidden lg:flex items-center space-x-8">
                    {Navlink.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.getElementById(link.href.replace('#', ''));
                                if (target) {
                                    target.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-200 transition-all duration-200 font-semibold"
                        >
                            <p>{link.name}</p>
                        </Link>
                    ))}
                </div>
                {/* button CV & Theme Toggle */}
                <div className="flex items-center justify-center space-x-4">
                    <a
                        href="https://drive.google.com/file/d/1Faa8Ld3_B9O5hXQ3LxHYpxG9L2lvW_TM/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="box-border relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                    >
                        <span className="relative z-20 flex items-center space-x-2 text-sm">
                            <Download className="w-4 h-4" />
                            <p>Download CV</p>
                        </span>
                    </a>
                    <ThemeToggle />
                    {/* Burger menu */}
                    <MenuIcon onClick={openNavHandler} className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden" />
                </div>
            </div>
        </div>
    );
};

export default Nav;
