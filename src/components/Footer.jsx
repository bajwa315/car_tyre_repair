'use client';
import { motion } from 'framer-motion';
import React from 'react'
const areas = {
  'Residential Areas': [
    'Downtown',
    'Palm Jumeirah',
    'Emirates Hills',
    'Dubai Marina',
    'JBR',
    'DIFC',
    'Al Barari',
    'Bluewaters',
    'City Walk',
    'La Mer',
    'Dubai Hills',
    'MBR City',
  ],
  Residential: [
    'Jumeirah',
    'Al Barsha',
    'Mirdif',
    'Arabian Ranches',
    'Springs',
    'Al Safa',
    'Al Wasl',
    'Nad Al Sheba',
    'Umm Suqeim',
    'Al Nahda',
    'Discovery Gardens',
    'Al Furjan',
  ],
  Commercial: [
    'Deira',
    'Bur Dubai',
    'Al Quoz',
    'DIP',
    'Jebel Ali',
    'Al Qusais',
    'Business Bay',
    'Silicon Oasis',
    'Sports City',
    'Motor City',
    'IMPZ',
    'Ras Al Khor',
  ],
  'Other Areas': [
    'Oud Metha',
    'Karama',
    'Town Square',
    'Dubai South',
    'International City',
    'Jebel Ali Village',
    'Meydan',
    'Pearl Jumeirah',
    'Mirdif Jumeirah',
    'Al Rigga',
    'Naif',
    'Meena Bazaar',
  ],
};
const Footer =() => {
  
  return (
    <div className='bg-[#C40716]'>
      <footer className='Mycontainer  '>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }}
          className='bg-white p-8'
        >
          <div className='  py-2  mb-4'>
            <h2 className='text-[#C40716]  text-xl md:text-2xl'>
              SERVICE AREAS IN DUBAI
            </h2>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {Object.entries(areas).map(([category, locations]) => (
              <div key={category} className='space-y-1'>
                <h3 className=' text-[#171717] mb-5'>{category}</h3>
                <ul className='space-y-1'>
                  {locations.map((location) => (
                    <li key={location} className='flex items-start'>
                      <span className=' mr-2'>
                        <i className='fas fa-check'></i>
                      </span>
                      <span className='text-sm text-[#171717] '>
                        {location}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
        <h1 className='text-white md:text-3xl text-lg text-center py-10'>
          We cover ALL areas of Dubai - Call for immediate assistance!
        </h1>
      </footer>
      <div className='bg-white py-2  mt-2'>
        <p className='py-3 text-center text-sm font-normal '>
          Copyright © 2025 Car-Tyre-Repair.Com All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
