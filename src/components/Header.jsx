'use client';
import { useState } from 'react';
import Image from 'next/image';
import phone from '../assets/phone.png';
import logo from '../assets/logo2.jpg';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleServices = (e) => {
    e.preventDefault();
    setShowServices(!showServices);
  };

  const services = [
    { id: 1, title: '24/7 Emergency Tyre Change' },
    { id: 2, title: 'New Tyre Replacement' },
    { id: 3, title: 'Emergency Spare Tyre Service' },
    { id: 4, title: 'Alloy Rim Repair Service' },
    { id: 5, title: 'Flat Tyre Repair Service' },
    { id: 6, title: 'Tyre Air Pressure Service' },
  ];

  const navigateToService = (id) => {
    // Close menus
    setShowServices(false);
    setSidebarOpen(false);
    
    // Update URL first
    window.location.hash = `service-${id}`;
    
    // Then scroll to element
    setTimeout(() => {
      const element = document.getElementById(`service-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10);
  };

  return (
    <header id='Home' className='bg-[#00000042] relative z-50 text-white'>
      {/* ... (rest of the header JSX remains exactly the same until the service buttons) ... */}
      
      {/* Desktop Navigation Dropdown */}
      {showServices && (
        <div className='absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg py-2 z-50'>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => navigateToService(service.id)}
              className='block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm'
            >
              {service.title}
            </button>
          ))}
        </div>
      )}

      {/* Mobile Sidebar Links */}
      {showServices && (
        <div className='ml-4 mt-2 space-y-2'>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => {
                navigateToService(service.id);
                toggleSidebar();
              }}
              className='block w-full text-left text-sm py-1'
            >
              {service.title}
            </button>
          ))}
        </div>
      )}

      {/* ... (rest of the header JSX remains exactly the same) ... */}
    </header>
  );
};

export default Header;
