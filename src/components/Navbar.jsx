import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMobileMenu]);

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex items-center justify-between py-4 md:px-20 lg:px-32 bg-transparent'>

                <img src={assets.logo} alt="logo" />

                <ul className='hidden md:flex gap-7 text-white'>
                    <a onClick={() => setShowMobileMenu(false)} href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
                </ul>

                <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>

                {/* open menu */}
                <img onClick={() => setShowMobileMenu(true)}
                    src={assets.menu_icon}
                    alt="menu"
                    className='md:hidden w-7 cursor-pointer'
                    onClick={() => setShowMobileMenu(true)}
                />

            </div>

            {/* -----------mobile menu--- */}
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full h-full' : 'h-0 w-0'} right-0 top-0 overflow-hidden bg-white transition-all`}>

                <div className='flex justify-end p-6'>
                    {/* close menu */}
                    <img onClick={() => setShowMobileMenu(false)}
                        src={assets.cross_icon}
                        alt="close"
                        className='w-6 cursor-pointer'
                        onClick={() => setShowMobileMenu(false)}
                    />
                </div>

                <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium'>
                    <a href="#Header" onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>Home</a>
                    <a href="#About" onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>About</a>
                    <a href="#Projects" onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>Projects</a>
                    <a href="#Testimonials" onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
                </ul>
            </div>

        </div>
    )
}

export default Navbar