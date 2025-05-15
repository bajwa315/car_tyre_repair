'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import line from '../assets/line.png';
import tyer1 from '../assets/tyer1.png';
import tyer2 from '../assets/tyer2.png';
import tyer3 from '../assets/tyer3.png';
import tyer4 from '../assets/tyer4.png';
import tyer5 from '../assets/tyer5.png';
import tyer6 from '../assets/tyre-6.png';

const services = [
  {
    id: 1,
    title: '24/7 Emergency Tyre Change',
    description: 'Get back on Dubai roads quickly with our rapid tyre change service at your location',
    li1: 'Complete seasonal tyre changeovers',
    li2: 'Professional same-rim tyre swaps',
    li3: 'Mobile service covering all Dubai areas',
    li4: 'Specialist handling for luxury vehicles',
    image: tyer1,
    button: 'Call Now +971 55 181 8633',
  },
  // ... (keep all other service objects exactly the same)
];

const ServiceCards = () => {
  return (
    <div id='about' className=''>
      <div className='bg-gradient-to-b from-[#C40716] to-[#5E030B00]'>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.6 }}
          className=''
        >
          <div className='pt-8 flex items-center gap-3 justify-center'>
            <Image src={line} alt='service' className='' />
            <p className='text-white text-base'>service</p>
          </div>
          <h1 className='text-center text-2xl md:text-5xl text-white pt-3'>
            Professional Tyre Services in Dubai <br /> - 24/7 Mobile Assistance
          </h1>
        </motion.div>
        <div className='Mycontainer pt-7 md:pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {services.map((serv, ind) => {
            return (
              <motion.div
                key={ind}
                id={`service-${serv.id}`}  // ONLY ADDED THIS LINE
                initial={{ rotateY: -90, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className='bg-white text-black rounded-md overflow-hidden shadow-md border-[#C40716] border-t-4 hover:scale-105 ease-in-out transition-all duration-500'>
                  {/* ... (rest of the card content remains exactly the same) ... */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
