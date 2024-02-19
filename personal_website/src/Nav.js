import React from 'react';

function Nav() {
    return (
        <nav className='flex justify-between items-center flex-nowrap bg-white h-[75px] font-lato border-b-2 border-gray-200 font-openSans font-semibold'>
            <div className='flex ml-10 text-gray-500 font-bold text-2xl'>
            <a href='.' className='hover:text-gray-800'>Theo Pedapolu</a>
            </div>
            <div className='flex space-x-10 mr-5 text-gray-500 text-xl'>
            <a href='#About' className='relative after:bg-amber-200 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer hover:text-gray-800'>About</a>
            <a href='#Coursework' className='relative after:bg-amber-200 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer hover:text-gray-800'>Coursework</a>
            <a href='#Projects' className='relative after:bg-amber-200 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer hover:text-gray-800'>Projects</a>
            <a href='#Blog' className='relative after:bg-amber-200 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer hover:text-gray-800'>Blog</a>
            </div>
        </nav>
    )
}

export default Nav;