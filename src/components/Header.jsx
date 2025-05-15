'use client';

import { useState } from 'react';
import Image from 'next/image';
import phone from '../assets/phone.png';
import logo from '../assets/logo2.jpg';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarbarOpen);
  };

  return (
    <>
      {/* Desktop Sidebar - Shows on lg screens and up */}
      <div className="hidden lg:flex fixed left-0 top-0 h-full w-72 bg-[#00000042] z-50 flex-col p-4">
        {/* Logo */}
        <div className='flex items-center justify-center mb-8'>
          <Image
            src={logo}
            alt='CARCAS Logo'
            width={200}
            height={100}
            className='h-20 w-40'
          />
        </div>

        {/* Desktop Navigation */}
        <nav className='flex flex-col gap-6 text-lg font-medium flex-grow'>
          <a href='#' className='hover:text-gray-300 transition'>Home</a>
          <a href='#about' className='hover:text-gray-300 transition'>About Us</a>
          <a href='#service' className='hover:text-gray-300 transition'>Services</a>
          <a href='#faq' className='hover:text-gray-300 transition'>FAQ</a>
          <a href='#testimonials' className='hover:text-gray-300 transition'>Testimonial</a>
          <a href='#contact' className='hover:text-gray-300 transition'>Contact Us</a>
        </nav>

        {/* Phone Info at bottom */}
        <div className='flex items-center gap-2 mt-auto pb-4'>
          <Image
            src={phone}
            alt='Phone Icon'
            className='h-6 w-6'
          />
          <div>
            <p className='text-lg font-medium uppercase'>
              +971 55 181 8633
            </p>
            <p className='text-sm'>
              24-hour emergency assistance
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Header - Shows on screens smaller than lg */}
      <header id='Home' className='lg:hidden bg-[#00000042] relative z-50 text-white'>
        <div className='Mycontainer gap-2 max-sm:gap-6 flex sm:justify-between items-center'>
          {/* Logo */}
          <div className='flex items-center'>
            <Image
              src={logo}
              alt='CARCAS Logo'
              width={200}
              height={100}
              className='md:h-20 h-12 w-24 md:w-40'
            />
          </div>

          {/* Phone Info - Hidden on smallest screens */}
          <div className='hidden sm:flex items-center md:gap-2'>
            <Image
              src={phone}
              alt='Phone Icon'
              className='h-4 w-4 md:h-8 md:w-8 mr-2'
            />
            <div>
              <p className='text-[10px] sm:text-lg md:text-2xl font-medium uppercase'>
                +971 55 181 8633
              </p>
              <p className='text-[7px] sm:text-sm'>
                24-hour emergency assistance
              </p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='sm:hidden text-white text-xl absolute right-3 cursor-pointer'
            onClick={toggleSidebar}
          >
            <i className='fa-solid fa-bars'></i>
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden`}
        >
          {/* Close Button */}
          <div className='flex justify-end p-4'>
            <button
              onClick={toggleSidebar}
              className='text-black text-xl cursor-pointer'
            >
              <i className='fa-solid fa-xmark'></i>
            </button>
          </div>

          {/* Sidebar Links */}
          <nav className='flex flex-col items-start gap-4 px-6 text-black text-lg font-medium'>
            <a href='#' onClick={toggleSidebar}>Home</a>
            <a href='#about' onClick={toggleSidebar}>About Us</a>
            <a href='#service' onClick={toggleSidebar}>Services</a>
            <a href='#faq' onClick={toggleSidebar}>FAQ</a>
            <a href='#testimonials' onClick={toggleSidebar}>Testimonial</a>
            <a href='#contact' onClick={toggleSidebar}>Contact Us</a>
          </nav>
        </div>

        {/* Backdrop for mobile sidebar */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
      </header>
    </>
  );
};

export default Header;
