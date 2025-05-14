'use client';
import React from 'react';
import { motion } from 'framer-motion';
const RatingCards = () => {
  const features = [
    {
      heading: '3000+',
      title: 'Dubai Clients',
      description: 'Served in 2024',
    },
    {
      heading: '24/7',
      title: 'Service',
      description: 'All communities',
    },
    {
      heading: '★ 4.9',
      title: 'Rating',
      description: 'Google Reviews',
    },
    {
      heading: '20min',
      title: 'Avg. Response',
      description: 'Citywide',
    },
  ];
  
  return (
    <div>
      <div className=' md:mx-4 pb-10 mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {/* Map through the features array to create cards dynamically */}
        {features.map((feature, index) => {
          return (
            <motion.div
              initial={{ scale: 0.5, y: 50, opacity: 0 }}
              whileInView={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className='bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 p-5 md:p-8 flex flex-col items-center text-center'
            >
              <h1 className='text-xl md:text-3xl  text-[#C40716]'>
                {feature.heading}
              </h1>
              <h3 className='text-sm pt-3 text-[#171717] '>{feature.title}</h3>
              <p className='text-sm text-[#666666] leading-relaxed'>
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingCards;
