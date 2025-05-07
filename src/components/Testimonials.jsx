'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import line from '../assets/line.png';
import coma from '../assets/comma.png';

const testimonials = [
  {
    quote:
      '30-minute mobile tyre change in Dubai Marina! These guys beat Google Maps ETAs. Perfect for our fast-paced city—no waiting, just quality Bridgestone tyres installed on the spot.',
    name: 'Ahmed.',
  },
  {
    quote:
      'Flat tyre at 2AM near JBR—your team arrived faster than police response! 24/7 Dubai service with certified Michelin tyres. Lifesavers!',
    name: 'Sarah Palin.',
  },
  {
    quote:
      "5-star service for my Range Rover in Downtown Dubai. They remember my preferences and always have OEM-approved Pirellis. That's why I've used them 8 times!",
    name: 'Rajesh Goenka.',
  },
];

const Testimonials = () => {
  return (
    <div
      id='testimonials'
      className='bg-gradient-to-b from-[#C40716] to-[#5E030B00] text-white py-16 '
    >
      <div className='Mycontainer'>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className=' pt-6 flex items-center gap-3 justify-start'>
            <Image src={line} alt='service' className='' />

            <h4 className='text-sm tracking-wider uppercase text-white mb-2'>
              Testimonials
            </h4>
          </div>
          <h2 className='text-2xl md:text-3xl font-bold mb-10 font-days'>
            WHAT DUBAI DRIVERS SAY ABOUT US
          </h2>
        </motion.div>

        <div className='relative  grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((item, index) => (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              key={index}
            >
              <div className='bg-white pb-8 text-black p-5 sm:p-8 shadow-lg flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 cursor-pointer '>
                <div className='flex-1 flex flex-col'>
                  <p className=' mb-4'>
                    <Image src={coma} alt='comma' className='inline-block' />
                  </p>
                  <p className='mb-6 text-lg text-[#2B4448] flex-grow'>
                    {item.quote}
                  </p>
                </div>
                <div className='flex items-center gap-2 mt-auto'>
                  {/* Use a div with styling instead of an image */}
                  <div className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600'>
                    {item.name.charAt(0)}
                  </div>
                  <span className='text-[#C40716] text-lg'>{item.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
