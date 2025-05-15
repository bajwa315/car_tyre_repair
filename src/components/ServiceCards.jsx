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
    slug: 'emergency-tyre-change',
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
    id: 2,
    slug: 'new-tyre-replacement',
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
    id: 3,
    slug: 'emergency-spare-tyre',
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
    id: 4,
    slug: 'alloy-rim-repair',
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
    id: 5,
    slug: 'flat-tyre-repair',
    title: 'Flat Tyre Repair Service',
    description: 'Reliable puncture repairs that restore your tyres safety and performance',
    li1: 'Professional plug and patch repairs',
    li2: '25-minute average response time',
    li3: 'TPMS-compatible repairs',
    li4: '30-day warranty on all repairs',
    image: tyer5,
    button: 'Repair My Flat Tyre',
  },
  {
    id: 6,
    slug: 'tyre-pressure-service',
    title: 'Tyre Air Pressure Service',
    description: 'Maintain optimal tyre pressure with our mobile air check service',
    li1: 'Pressure check and adjustment',
    li2: 'Nitrogen inflation available',
    li3: 'TPMS system inspection',
    li4: 'Available at your home or office',
    image: tyer6,
    button: 'Check My Tyre Pressure',
  },
];

const ServiceCards = () => {
  return (
    <section id="services" className="services-section">
      <div className='bg-gradient-to-b from-[#C40716] to-[#5E030B00]'>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className='pt-8 flex items-center gap-3 justify-center'>
            <Image src={line} alt='service' width={30} height={30} />
            <p className='text-white text-base'>Our Services</p>
          </div>
          <h1 className='text-center text-2xl md:text-5xl text-white pt-3 pb-8'>
            Professional Tyre Services in Dubai<br />
            24/7 Mobile Assistance
          </h1>
        </motion.div>

        <div className='Mycontainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12'>
          {services.map((service) => (
            <motion.div
              key={`service-${service.id}`}
              id={`service-${service.slug}`}
              className="service-card scroll-mt-24"
              initial={{ rotateY: -90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className='bg-white rounded-md overflow-hidden shadow-lg border-t-4 border-[#C40716] hover:scale-105 transition-all duration-300 h-full flex flex-col'>
                <div className='relative h-48 w-full'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className='object-cover'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className='p-4 flex-grow'>
                  <h2 className='text-xl font-bold mb-2'>{service.title}</h2>
                  <p className='text-gray-700 text-sm mb-4'>{service.description}</p>
                  <ul className='list-disc list-inside space-y-1 text-sm mb-4'>
                    <li>{service.li1}</li>
                    <li>{service.li2}</li>
                    <li>{service.li3}</li>
                    <li>{service.li4}</li>
                  </ul>
                </div>
                <div className='p-4'>
                  <a href={`tel:+971551818633`} className='block w-full'>
                    <button className='w-full bg-[#C40716] hover:bg-[#D6323C] text-white py-2 px-4 rounded-md transition-colors duration-300 font-medium'>
                      {service.button}
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
