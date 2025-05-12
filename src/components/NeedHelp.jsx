'use client';
import {motion} from 'framer-motion';
import React from 'react'
import call from '../assets/call.png';
import chat from '../assets/chat.png';
import Image from 'next/image';
const NeedHelp = () => {
  const phoneNumber = '971551818633';
  const message =
    'Hello! I am looking for Tyre Repair / Puncture Tyre Fix Service Onsite.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url);
  };
  return (

    <div className=' md:mx-4 px-6 mt-10 rounded-lg text-center bg-gradient-to-b from-[#C40716] to-[#CC0000] text-white py-8'>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className='text-xl md:text-2xl  '>Need Help RIGHT NOW?</h1>
        <p className='pb-3 pt-2 max-w-3xl m-auto '>
          Our <span> fastest-response team in Dubai </span> is available 24/7
          for all communities - average <span>18- minute</span> arrival time
        </p>

        <div className='flex max-sm:flex-wrap justify-center gap-4 mt-2'>
        <a href='tel:+971 55 181 8633'>
          <div className=' cursor-pointer flex items-center gap-4 bg-white text-[#C40716] px-6 py-4 rounded-md font-normal hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-105 '>
            <Image src={call} alt='phone' className='w-5 h-5 object-cover' />
            <button className='text-base cursor-pointer '>
              EMERGENCY CALL
            </button>
          </div>
        </a>
          <div onClick={handleClick} className='flex items-center gap-3 cursor-pointer bg-[#25D366] text-white px-6 py-4 rounded-md font-normal hover:bg-[#C40716] hover:text-white transition-all duration-300 hover:scale-105 hover:border-white border-2 border-[#25D366] hover:border-2'>
            <Image src={chat} alt='phone' className='object-cover' />

            <button className='cursor-pointer text-base '>WHATSAPP HELP</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default NeedHelp