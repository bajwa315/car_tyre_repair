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
import tyer7 from '../assets/tyer7.png';
import tyer8 from '../assets/tyer8.png';
import tyer9 from '../assets/tyer9.png';

const services = [
  {
    id: 1,
    title: 'Flat Tyre Repair Service',
    description: 'Reliable puncture repairs that restore your tyres safety and performance',
    li1: 'Professional plug and patch repairs',
    li2: '20-minute average response time',
    li3: 'on-site flat tyre repar services',
    li4: 'Warranty on all repairs',
    image: tyer5,
    button: 'Repair My Flat Tyre',
  },
  {
    id: 2,
    title: 'Buy New Tyres Online',
    description: 'Shop top tyre brands with mobile installation',
    li1: 'Best prices on Michelin, Pirelli, Bridgestone',
    li2: 'Mobile installation in Dubai',
    li3: 'Expert tyre recommendations',
    li4: 'Complete wheel balancing included',
    image: tyer8,
    button: 'Order Tyres Now',
  },
  {
    id: 3,
    title: 'Premium Tyre Puncture Repair',
    description: 'Advanced puncture sealing technology for reliable, long-lasting fixes',
    li1: 'Premium internal patch repairs',
    li2: '20-minute average response time',
    li3: 'on-site puncture repair services',
    li4: 'Warranty on all repairs',
    image: tyer7,
    button: 'Fix My Puncture Now',
  },
  {
    id: 4,
    title: 'Emergency Spare Tyre Service',
    description: "Immediate spare tyre solutions when you're stranded anywhere in Dubai",
    li1: 'Quality spare tyre replacements',
    li2: 'Precision wheel balancing included',
    li3: 'Michelin, Bridgestone, Pirelli & more',
    li4: 'Competitive pricing with warranty',
    image: tyer3,
    button: 'Emergency Call Now',
  },
  {
    id: 5,
    title: '24/7 Emergency Tyre Change',
    description: 'Get back on Dubai roads quickly with our rapid tyre change service at your location',
    li1: 'Complete seasonal tyre changeovers',
    li2: 'Professional same-rim tyre swaps',
    li3: 'Mobile service covering all Dubai areas',
    li4: 'Specialist handling for luxury vehicles',
    image: tyer1,
    button: 'Call Now +971 55 181 8633',
  },
  {
    id: 6,
    title: 'New Tyre Replacement',
    description: 'Top-quality tyre brands installed by certified technicians at your convenience',
    li1: 'Vehicle-specific tyre recommendations',
    li2: 'Precision wheel balancing included',
    li3: 'Michelin, Bridgestone, Pirelli & more',
    li4: 'Competitive pricing with warranty',
    image: tyer2,
    button: 'Get New Tyres Today',
  },
  {
    id: 7,
    title: 'Alloy Rim Repair Service',
    description: 'Expert rim straightening and cosmetic repair for alloy wheels in Dubai',
    li1: 'Curbside rim straightening service',
    li2: 'Cosmetic scratch and dent repair',
    li3: 'On-the-spot mobile repairs',
    li4: 'Specialist equipment for luxury rims',
    image: tyer4,
    button: 'Fix My Rims Now',
  },
  {
    id: 8,
    title: 'Tyre Air Pressure Service',
    description: 'Maintain optimal tyre pressure with our mobile air check service',
    li1: 'Pressure check and adjustment',
    li2: 'Nitrogen inflation available',
    li3: 'TPMS system inspection',
    li4: 'Available at your home or office',
    image: tyer6,
    button: 'Check My Tyre Pressure',
  },
  {
    id: 9,
    title: 'Tyre Valve Replacement',
    description: 'Professional valve stem services for optimal tyre performance',
    li1: 'High-quality valve replacements',
    li2: 'Prevents air leaks',
    li3: 'On-Site Tyre Sensor Valve Change',
    li4: 'Quick 20-minute service',
    image: tyer9,
    button: 'Replace Valves Now',
  },
];

const ServiceCards = () => {
  return (
    <div id='about' className=''>
      <div className=' bg-gradient-to-b from-[#C40716] to-[#5E030B00]  '>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.6 }}
          className=''
        >
          <div className=' pt-8 flex items-center gap-3 justify-center'>
            <Image src={line} alt='service' className='' />
            <p className='text-white text-base'>service</p>
          </div>
          <h1 className='text-center text-2xl md:text-5xl text-white pt-3 '>
            Professional Tyre Services in Dubai <br /> - 24/7 Mobile Assistance
          </h1>
        </motion.div>
        <div className=' Mycontainer pt-7 md:pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {services.map((serv, ind) => {
            return (
              <motion.div
                key={ind}
                id={`service-${serv.id}`}
                initial={{ rotateY: -90, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className='bg-white text-black rounded-md overflow-hidden shadow-md border-[#C40716] border-t-4 hover:scale-105 ease-in-out transition-all duration-500 '>
                  <div className='p-4 '>
                    <div className='relative h-48'>
                      <Image
                        src={serv.image}
                        alt={serv.title}
                        fill
                        className='object-cover rounded-md '
                      />
                    </div>
                    <h3 className='text-lg font-bold mb-2 pt-3'>
                      {serv.title}
                    </h3>
                    <p className='text-gray-700 text-sm mb-4'>
                      {serv.description}
                    </p>
                    <ul className='list-disc list-inside pb-4'>
                      <li className='pb-1.5 text-sm '>{serv.li1}</li>
                      <li className='pb-1.5 text-sm '>{serv.li2}</li>
                      <li className='pb-1.5 text-sm '>{serv.li3}</li>
                      <li className='pb-1.5 text-sm '>{serv.li4}</li>
                    </ul>
                    <a
                      href='tel:+971 55 181 8633'
                    >
                      <button
                        type='button'
                        className='bg-[#C40716] hover:bg-[#25D366] transition-all duration-300 hover:scale-105 text-white px-4 py-2.5 rounded-md cursor-pointer text-base capitalize font-medium mb-2'
                      >
                        {serv.button}
                      </button>
                    </a>
                  </div>
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
