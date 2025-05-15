'use client';
import { useState } from 'react';
import Image from 'next/image';
import phone from '../assets/phone.png';
import logo from '../assets/logo2.jpg';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const services = [
    { id: 1, slug: 'emergency-tyre-change', title: '24/7 Emergency Tyre Change' },
    { id: 2, slug: 'new-tyre-replacement', title: 'New Tyre Replacement' },
    { id: 3, slug: 'emergency-spare-tyre', title: 'Emergency Spare Tyre Service' },
    { id: 4, slug: 'alloy-rim-repair', title: 'Alloy Rim Repair Service' },
    { id: 5, slug: 'flat-tyre-repair', title: 'Flat Tyre Repair Service' },
    { id: 6, slug: 'tyre-pressure-service', title: 'Tyre Air Pressure Service' },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setShowServices(false);
  };

  const toggleServices = (e) => {
    e.preventDefault();
    setShowServices(!showServices);
  };

  const navigateToService = (slug) => {
    setShowServices(false);
    setSidebarOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(`service-${slug}`);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <header id='home' className='bg-[#00000042] text-white sticky top-0 z-50'>
      <div className='Mycontainer flex justify-between items-center py-3'>
        {/* Logo */}
        <div className='flex items-center'>
          <Image
            src={logo}
            alt='CARCAS Logo'
            width={160}
            height={80}
            className='h-12 w-24 md:h-16 md:w-32'
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-6'>
          <a href='#home' className='nav-link hover:text-red-400'>Home</a>
          
          <div className='relative group'>
            <button 
              onClick={toggleServices}
              className='nav-link hover:text-red-400 flex items-center gap-1'
            >
              About Us
              <i className={`fas fa-chevron-down text-xs transition-transform ${showServices ? 'rotate-180' : ''}`}></i>
            </button>
            
            {showServices && (
              <div className='absolute top-full left-0 mt-2 w-56 bg-white text-black rounded-md shadow-xl py-2 z-50'>
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={`#service-${service.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToService(service.slug);
                    }}
                    className='block px-4 py-2 hover:bg-gray-100 text-sm font-medium'
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <a href='#services' className='nav-link hover:text-red-400'>Services</a>
          <a href='#faq' className='nav-link hover:text-red-400'>FAQ</a>
          <a href='#testimonials' className='nav-link hover:text-red-400'>Testimonials</a>
          <a href='#contact' className='nav-link hover:text-red-400'>Contact</a>
        </nav>

        {/* Phone Info */}
        <div className='flex items-center gap-2'>
          <Image
            src={phone}
            alt='Phone Icon'
            width={24}
            height={24}
            className='h-5 w-5 md:h-6 md:w-6'
          />
          <div className='hidden sm:block'>
            <p className='text-sm md:text-lg font-medium'>+971 55 181 8633</p>
            <p className='text-xs text-gray-300'>24/7 Emergency Assistance</p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-white text-2xl p-2'
          onClick={toggleSidebar}
          aria-label='Menu'
        >
          <i className='fas fa-bars'></i>
        </button>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-70 z-40 md:hidden'>
          <div className='absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-lg transform transition-transform duration-300'>
            <div className='flex justify-between items-center p-4 border-b'>
              <Image
                src={logo}
                alt='CARCAS Logo'
                width={120}
                height={60}
              />
              <button 
                onClick={toggleSidebar}
                className='text-black text-2xl p-2'
              >
                <i className='fas fa-times'></i>
              </button>
            </div>

            <nav className='p-4 space-y-4'>
              <a 
                href='#home' 
                onClick={toggleSidebar}
                className='block py-2 text-black font-medium'
              >
                Home
              </a>
              
              <div>
                <button 
                  onClick={() => setShowServices(!showServices)}
                  className='flex justify-between items-center w-full py-2 text-black font-medium'
                >
                  <span>About Us</span>
                  <i className={`fas fa-chevron-down text-xs transition-transform ${showServices ? 'rotate-180' : ''}`}></i>
                </button>
                
                {showServices && (
                  <div className='pl-4 mt-2 space-y-3'>
                    {services.map((service) => (
                      <a
                        key={service.id}
                        href={`#service-${service.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          navigateToService(service.slug);
                          toggleSidebar();
                        }}
                        className='block py-1 text-gray-700 text-sm'
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a 
                href='#services' 
                onClick={toggleSidebar}
                className='block py-2 text-black font-medium'
              >
                Services
              </a>
              <a 
                href='#faq' 
                onClick={toggleSidebar}
                className='block py-2 text-black font-medium'
              >
                FAQ
              </a>
              <a 
                href='#testimonials' 
                onClick={toggleSidebar}
                className='block py-2 text-black font-medium'
              >
                Testimonials
              </a>
              <a 
                href='#contact' 
                onClick={toggleSidebar}
                className='block py-2 text-black font-medium'
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
