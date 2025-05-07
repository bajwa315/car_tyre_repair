'use client';
import { motion } from 'framer-motion';

import line from '../assets/line2.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import icon7 from '../assets/icon7.png';
import icon8 from '../assets/icon8.png';

import Image from 'next/image';

const features = [
  {
    icon: icon1,
    title: '24/7 Availability',
    description:
      'Emergency services available round the clock, including holidays',
  },
  {
    icon: icon2,
    title: 'All Dubai Coverage',
    description:
      'Service every area of Dubai with 20-30 minute average response time',
  },
  {
    icon: icon3,
    title: 'Flexible Payments',
    description: 'Accepting both cash and card payments for your convenience',
  },
  {
    icon: icon4,
    title: 'Service Warranty',
    description: 'All repairs come with a warranty on your peace of mind',
  },
  {
    icon: icon5,
    title: 'Certified Technicians',
    description:
      'Our ASE-certified technicians use the latest equipment and techniques',
  },
  {
    icon: icon6,
    title: 'Premium Quality Parts',
    description: 'We use only manufacturer-approved parts and components',
  },
  {
    icon: icon7,
    title: 'Price Match Guarantee',
    description: "We'll match any competitor's price for identical services",
  },
  {
    icon: icon8,
    title: 'Eco-Friendly Services',
    description:
      'We recycle all old tyres and use environmentally safe products',
  },
];
const FeatureCards = () => {
  
  return (
    <div className='  py-12 bg-[#F0F4F8] mt-8'>
      <div className='Mycontainer '>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className=' md:pt-6 flex items-center gap-3 justify-center'>
            <Image src={line} alt='service' className='' />
            <p className='text-[#C40716] text-base pb-2'>Why Choose us</p>
          </div>
          <div className='text-center mb-12'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
              WHY <span className='text-[#C40716]'> CHOOSE </span> OUR TYRE
              SERVICES
            </h2>
          </div>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* Map through the features array to create cards dynamically */}
          {features.map((feature, index) => {
            return (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.6 }}
                key={index}
                className='bg-white rounded-lg shadow-sm hover:shadow-lg cursor-pointer p-6 flex flex-col items-center text-center  '
              >
                <div className='hover:scale-105 ease-in-out transition-all duration-300'>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    className='w-10 h-10 mb-4 text-gray-800'
                  />
                  <h3 className='text-lg font-semibold mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-sm text-gray-600 leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default FeatureCards;
