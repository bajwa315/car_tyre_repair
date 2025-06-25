'use client';
import { useState } from 'react';
import Image from 'next/image';
import phone from '../assets/phone.png';
import logo from '../assets/logo3.jpg';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleServices = (e) => {
    e.preventDefault();
    setShowServices(!showServices);
  };

  const toggleContactOptions = (e) => {
    e.preventDefault();
    setShowContactOptions(!showContactOptions);
  };

  const services = [
    { id: 1, title: '24/7 Emergency Tyre Change' },
    { id: 2, title: 'New Tyre Replacement' },
    { id: 3, title: 'Emergency Spare Tyre Service' },
    { id: 4, title: 'Alloy Rim Repair Service' },
    { id: 5, title: 'Flat Tyre Repair Service' },
    { id: 6, title: 'Tyre Air Pressure Service' },
  ];

  const navigateToSection = (hash) => {
    // Close all menus
    setShowServices(false);
    setShowContactOptions(false);
    setSidebarOpen(false);
    
    // Update URL first
    window.location.hash = hash;
    
    // Then scroll to element
    setTimeout(() => {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10);
  };

  return (
    <header id='Home' className='bg-[#00000042] relative z-50 text-white'>
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

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className='hidden sm:flex gap-6 text-lg font-medium relative'>
          <a href='#'>Home</a>
          <div className='relative'>
            <a 
              href='#about' 
              onClick={toggleServices}
              className='flex items-center gap-1'
            >
              About Us
              <span className={`transition-transform ${showServices ? 'rotate-180' : ''}`}>
                <i className='fa-solid fa-chevron-down text-sm'></i>
              </span>
            </a>
            {showServices && (
              <div className='absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg py-2 z-50'>
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={`#service-${service.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToSection(`service-${service.id}`);
                    }}
                    className='block px-4 py-2 hover:bg-gray-100 text-sm'
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href='#service'>Services</a>
          <a href='#faq'>FAQ</a>
          <a href='#testimonials'>Testimonial</a>
          <div className='relative'>
            <a 
              href='#contact' 
              onClick={toggleContactOptions}
              className='flex items-center gap-1'
            >
              Contact Us
              <span className={`transition-transform ${showContactOptions ? 'rotate-180' : ''}`}>
                <i className='fa-solid fa-chevron-down text-sm'></i>
              </span>
            </a>
            {showContactOptions && (
              <div className='absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg py-2 z-50'>
                <a
                  href='#contact'
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection('contact');
                  }}
                  className='block px-4 py-2 hover:bg-gray-100 text-sm'
                >
                  Contact
                </a>
                <a
                  href='#need-help'
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection('need-help');
                  }}
                  className='block px-4 py-2 hover:bg-gray-100 text-sm'
                >
                  Need Help
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Phone Info */}
        <div className='flex items-center md:gap-2'>
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

        {/* Mobile Menu Button - Only shows on mobile */}
        <button
          className='sm:hidden text-white text-xl absolute right-3 cursor-pointer'
          onClick={toggleSidebar}
        >
          <i className='fa-solid fa-bars'></i>
        </button>
      </div>

      {/* Mobile Sidebar - Shows on mobile only */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } sm:hidden`}
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
          <a href='#' onClick={toggleSidebar}>
            Home
          </a>
          <div className='w-full'>
            <a 
              href='#about' 
              onClick={(e) => {
                e.preventDefault();
                setShowServices(!showServices);
              }}
              className='flex items-center justify-between w-full'
            >
              About Us
              <span className={`transition-transform ${showServices ? 'rotate-180' : ''}`}>
                <i className='fa-solid fa-chevron-down text-sm'></i>
              </span>
            </a>
            {showServices && (
              <div className='ml-4 mt-2 space-y-2'>
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={`#service-${service.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToSection(`service-${service.id}`);
                      toggleSidebar();
                    }}
                    className='block w-full text-left text-sm py-1'
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href='#service' onClick={toggleSidebar}>
            Services
          </a>
          <a href='#faq' onClick={toggleSidebar}>
            FAQ
          </a>
          <a href='#testimonials' onClick={toggleSidebar}>
            Testimonial
          </a>
          <div className='w-full'>
            <a 
              href='#contact' 
              onClick={(e) => {
                e.preventDefault();
                setShowContactOptions(!showContactOptions);
              }}
              className='flex items-center justify-between w-full'
            >
              Contact Us
              <span className={`transition-transform ${showContactOptions ? 'rotate-180' : ''}`}>
                <i className='fa-solid fa-chevron-down text-sm'></i>
              </span>
            </a>
            {showContactOptions && (
              <div className='ml-4 mt-2 space-y-2'>
                <a
                  href='#contact'
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection('contact');
                    toggleSidebar();
                  }}
                  className='block w-full text-left text-sm py-1'
                >
                  Contact
                </a>
                <a
                  href='#need-help'
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection('need-help');
                    toggleSidebar();
                  }}
                  className='block w-full text-left text-sm py-1'
                >
                  Need Help
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={toggleSidebar}
        />
      )}
    </header>
  );
};

export default Header;
