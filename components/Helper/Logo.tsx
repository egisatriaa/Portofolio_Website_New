'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const Logo = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, systemTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const logoSrc =
        mounted && currentTheme === 'dark' ? '/egi-wh.svg' : '/egi-bl.svg';

    return (
        <div className="flex items-center space-x-2">
            <img
                src={logoSrc}
                alt="Logo"
                className="w-20 h-20"
                width={60}
                height={60}
            />

            <h1 className="sm:text-xl hidden sm:block md:text-2xl font-bold text-[#011f4b] dark:text-[#3789e8] whitespace-nowrap">
                {`<Dev/>`}
            </h1>
        </div>
    );
};

export default Logo;
