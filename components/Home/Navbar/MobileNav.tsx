import React from 'react';
import { Navlink } from '@/Constant/Constant';
import Link from 'next/link';
import { X } from 'lucide-react';

type Props = {
    showNav: boolean;
    closeNavHandler: () => void;
}
const MobileNav = ({ showNav, closeNavHandler }: Props) => {

    const sidebarOpenClose = showNav ? 'translate-x-0' : '-translate-x-full';
    const overlayOpenClose = showNav ? 'block' : 'hidden';

    return (
        <div>
            {/* overlay */}
            <div 
                onClick={closeNavHandler}
                className={`fixed ${overlayOpenClose} inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen`}
            ></div>
            {/* nav link */}
            <div className={`text-white ${sidebarOpenClose} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-gray-200 space-y-6 z-1050 `}>
                {Navlink.map((link, index) => (
                    <Link key={index} href={link.href}>
                        <p className="w-fit text-[20px] sm:text-[30px] ml-12 border-b-[1.5px] pb-1 border-black text-black hover:text-yellow-500 dark:hover:text-yellow-200 transition-all duration-200 font-semibold">
                            {link.name}
                        </p>
                    </Link>
                ))}

                {/* close icon */}
                <X onClick={closeNavHandler} className="absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8 cursor-pointer text-black border-2 border-black rounded-full" />
            </div>
        </div>
    );
};

export default MobileNav;
