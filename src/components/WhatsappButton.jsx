'use client';

import React from 'react';

const WhatsappButton = () => {
  const phoneNumber = '971551818633'; 
  const message = 'Hello! I am looking for Tyre Repair / Puncture Tyre Fix Service Onsite.';

  const handleClick = () => {
    // GTM Conversion Tracking
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'whatsapp_conversion'
      });
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url);
  };

  return (
    <button
      onClick={handleClick}
      className='fixed bottom-5 right-2 sm:right-5 bg-green-500 hover:bg-green-600 text-white p-4 cursor-pointer rounded-full shadow-lg transition-all duration-300 flex items-center justify-center'
      aria-label='Chat on WhatsApp'
    >
      <i className=' text-3xl fa-brands fa-whatsapp'></i>
    </button>
  );
};

export default WhatsappButton;
