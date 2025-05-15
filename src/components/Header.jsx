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
    // Close menus
    setShowServices(false);
    setSidebarOpen(false);
    
    // Update URL first
    window.location.hash = `service-${slug}`;
    
    // Then scroll to element
    setTimeout(() => {
      const element = document.getElementById(`service-${slug}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 10);
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
            className='h-12 w-auto'
          />
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-6'>
          <a href='#home' className='hover:text-red-400'>Home</a>
          
          {/* About Us Dropdown */}
          <div className='relative'>
            <button 
              onClick={toggleServices}
              className='hover:text-red-400 flex items-center gap-1'
            >
              About Us <i className={`fas fa-chevron-down text-xs ${showServices ? 'rotate-180' : ''}`}></i>
            </button>
            
            {showServices && (
              <div className='absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg py-2 z-50'>
                {services.map(service => (
                  <a
                    key={service.id}
                    href={`#service-${service.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToService(service.slug);
                    }}
                    className='block px-4 py-2 hover:bg-gray-100 text-sm'
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href='#services' className='hover:text-red-400'>Services</a>
          <a href='#faq' className='hover:text-red-400'>FAQ</a>
          <a href='#contact' className='hover:text-red-400'>Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden text-2xl' 
          onClick={toggleSidebar}
        >
          <i className='fas fa-bars'></i>
        </button>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-70 z-40 md:hidden'>
          <div className='absolute top-0 right-0 h-full w-80 bg-white shadow-xl'>
            <div className='p-4 flex justify-between items-center border-b'>
              <Image src={logo} alt='Logo' width={120} height={60}/>
              <button onClick={toggleSidebar} className='text-2xl'>
                <i className='fas fa-times'></i>
              </button>
            </div>

            <nav className='p-4 space-y-4'>
              <a href='#home' onClick={toggleSidebar} className='block py-2 font-medium'>Home</a>
              
              <div>
                <button 
                  onClick={() => setShowServices(!showServices)}
                  className='flex justify-between items-center w-full py-2 font-medium'
                >
                  About Us <i className={`fas fa-chevron-down text-xs ${showServices ? 'rotate-180' : ''}`}></i>
                </button>
                
                {showServices && (
                  <div className='pl-4 mt-2 space-y-2'>
                    {services.map(service => (
                      <a
                        key={service.id}
                        href={`#service-${service.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          navigateToService(service.slug);
                          setSidebarOpen(false);
                        }}
                        className='block py-1 text-sm'
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href='#services' onClick={toggleSidebar} className='block py-2 font-medium'>Services</a>
              <a href='#faq' onClick={toggleSidebar} className='block py-2 font-medium'>FAQ</a>
              <a href='#contact' onClick={toggleSidebar} className='block py-2 font-medium'>Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
