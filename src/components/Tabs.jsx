'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PhoneCall } from 'lucide-react';
import tab1 from '../assets/tab1.png';
import tab2 from '../assets/tab2.png';
import tab3 from '../assets/tab3.png';
import tab4 from '../assets/tab4.png';
import tab5 from '../assets/tab5.png';
import tab6 from '../assets/tab6.png';
import Image from 'next/image';
import NeedHelp from './NeedHelp';
import RatingCards from './RatingCards';

// Categories
const categories = [
  'All Areas',
  'Palm Jumeirah',
  'Arabian Ranches',
  'DAMAC Hills',
  'Bussiness Bay',
  'Emirates Hills',
  'Mudon',
  'Dubai Marina',
];

// Service cards data with corrected categories
const allServices = [
  {
    id: 1,
    family: ' 🏎️ Luxury Service',
    title: 'Lamborghini Urus Tyre Replacement',
    location: 'Palm Jumeirah',
    time: '6:00 AM Service',
    image: tab1,
    category: 'Palm Jumeirah',
    features: [
      'Special low-profile tyre equipment',
      'OEM-approved Pirelli P-Zero tyres',
      'Villa driveway service',
    ],
    buttons: [
      { text: 'Call Now', icon: 'phone', color: 'red' },
      { text: 'WhatsApp', icon: 'whatsapp', color: 'green' },
    ],
  },
  {
    id: 2,
    title: 'Rolls-Royce Cullinan Wheel Service',
    family: '🌟 VIP Treatment',
    location: 'Emirates Hills',
    time: '11:30 PM',
    image: tab2,
    category: 'Emirates Hills',
    features: [
      'White-glove service',
      'Original equipment tyres',
      'Gated community access',
    ],
    buttons: [
      { text: 'Call Now', icon: 'phone', color: 'red' },
      { text: 'Book Slot', icon: 'phone', color: 'green' },
    ],
  },
  {
    id: 3,
    title: 'Range Rover Full Tyre Change',
    family: '👨‍👩‍👧‍👦 Family Special',
    location: 'DAMAC Hills',
    time: ' Weekend Service',
    image: tab3,
    category: 'DAMAC Hills',
    features: [
      'Complete seasonal changeover',
      'Child-safe work area',
      'Free pressure check all tyres',
    ],
    buttons: [
      { text: 'Call Now', icon: 'phone', color: 'red' },
      { text: 'Family Offer', icon: 'phone', color: 'green' },
    ],
  },
  {
    id: 4,
    title: 'Mercedes GLE Flat Tyre Rescue',
    family: ' 🌙 7AM Emergency',
    location: 'Arabian Ranches',
    time: ' 7:00 AM ',
    image: tab4,
    category: 'Arabian Ranches',
    features: [
      '24/7 community access',
      'Temporary spare fitted',
      'Security coordinated entry',
    ],
    buttons: [
      { text: ' Emergency Call', icon: 'phone', color: 'red' },
      { text: 'WhatsApp', icon: 'whatsapp', color: 'green' },
    ],
  },
  {
    id: 5,
    title: 'Corporate Fleet Maintenance',
    family: ' 🚗 Fleet Service',
    location: 'Bussiness Bay',
    time: '8 Company Cars',
    image: tab5,
    category: 'Bussiness Bay',
    features: [
      'After-hours servicing',
      'Detailed service reports',
      'VAT invoices provided',
    ],
    buttons: [
      { text: 'Call Manager', icon: 'phone', color: 'red' },
      { text: 'Fleet Quote', icon: 'phone', color: 'green' },
    ],
  },
  {
    id: 6,
    title: 'Vintage Porsche 911 Restoration',
    family: ' 🏎 Classic Car Care',
    location: 'Mudon',
    time: '🛠 Full Service',
    image: tab6,
    category: 'Mudon',
    features: [
      'Specialist classic car tools',
      'Period-correct tyres available',
      'Show-quality work',
    ],
    buttons: [
      { text: 'Call Specialist', icon: 'phone', color: 'red' },
      { text: 'Classic Care', icon: '', color: 'green' },
    ],
  },
];

const phoneNumber = '971551818633';
const message =
  'Hello! I am looking for Tyre Repair / Puncture Tyre Fix Service Onsite.';

const handleClick = () => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url);
};

const Tabs = () => {
  const [activeCategory, setActiveCategory] = useState('All Areas');
  const [filteredServices, setFilteredServices] = useState(allServices);

  // Filter services when category changes
  useEffect(() => {
    if (activeCategory === 'All Areas') {
      setFilteredServices(allServices);
    } else {
      const filtered = allServices.filter(
        (service) => service.category === activeCategory
      );
      setFilteredServices(filtered);
    }
  }, [activeCategory]);

  return (
    <div id='service' className=''>
      <div className=' bg-[#F9F9F9] pt-10 md:pt-28 px-3 Mycontainer'>
        {/* Header */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.6 }}
          className='text-center mb-6'
        >
          <h1 className='text-xl md:text-3xl font-normal'>
            <span className='text-[#2D4356]'>
              DUBAI&apos;S #1 MOBILE TYRE SERVICE -{' '}
            </span>
            <span className='text-[#E63946]'>SERVING EVERY COMMUNITY</span>
          </h1>
          <p className='text-[#555555] font-normal mt-2 text-xs md:text-base'>
            Trusted by residents of Palm Jumeirah, Emirates Hills, DAMAC Hills,
            and all Dubai neighborhoods
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.6 }}
          className='mb-8 m-auto max-w-5xl mt-10 md:mt-20 overflow-x-auto'
        >
          <div className='flex space-x-3 pb-4'>
            {categories.map((category) => (
              <button
                key={category}
                className={`cursor-pointer px-5 py-2 border border-[#EEEEEE] shadow-lg rounded-full text-xs font-medium transition-colors duration-200 whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-[#C40716] text-white'
                    : 'bg-white text-[#333333] hover:bg-[#C40716] hover:text-white'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <AnimatePresence>
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.3 }}
                  key={service.id}
                  className='border-[#C40716] border-t-4 overflow-hidden shadow-sm h-full flex flex-col rounded-lg'
                >
                  <div className='p-6 flex-grow'>
                    {/* Service Image */}
                    <div className='relative bg-gray-200'>
                      <Image
                        src={service.image || '/placeholder.svg'}
                        alt={service.title}
                        className='w-full h-full object-cover rounded-lg'
                      />
                      {service.family && (
                        <div className='absolute top-3 left-2 bg-[#000000B2]/80 text-white text-xs px-3 py-1.5 rounded-full'>
                          <p className='font-normal text-xs'>
                            {service.family}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Service Content */}
                    <h3 className='text-lg font-normal mb-3 pt-5'>
                      {service.title}
                    </h3>

                    <div className='flex items-center mb-2 text-sm'>
                      <span className='text-[#C40716] mr-2'>
                        <i className='fas fa-map-marker-alt'></i>
                      </span>
                      <span className='font-medium text-[#666666]'>
                        {service.location}
                      </span>
                      <span className='mx-2 text-gray-500'>
                        <i className='fas fa-clock'></i>
                      </span>
                      <span className='text-[#666666] text-xs'>
                        {service.time}
                      </span>
                    </div>

                    {/* Features */}
                    <ul className='space-y-2 mb-4'>
                      {service.features.map((feature, index) => (
                        <li key={index} className='flex items-start pt-3'>
                          <span className='text-xs bg-green-500 p-0.5 text-white mr-2'>
                            <i className='fas fa-check'></i>
                          </span>
                          <span className='text-sm text-[#171717]'>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className='p-4 pt-0 flex space-x-2'>
                    {service.buttons.map((button, index) => {
                      const isWhatsApp = button.icon === 'whatsapp';
                      const buttonClasses = `flex w-full gap-0 md:gap-2 cursor-pointer items-center justify-center md:px-0 px-1 py-4 rounded-lg text-xs md:text-sm font-normal flex-1 transition-colors duration-300 ${
                        button.color === 'red'
                          ? 'bg-[#C40716] text-white hover:bg-white hover:text-[#C40716] border border-[#C40716]'
                          : 'border border-[#C40716] text-[#C40716] hover:bg-[#C40716] hover:text-white'
                      }`;

                      return (
                        <div key={index} className='w-full'>
                          {isWhatsApp ? (
                            <button
                              onClick={handleClick}
                              className={buttonClasses}
                            >
                              <span className='text-xs bg-green-500 px-0.5 text-white mr-2'>
                                <i className='fas fa-check'></i>
                              </span>
                              {button.text}
                            </button>
                          ) : (
                            <a
                              href='tel:+971551818633'
                              className={buttonClasses}
                            >
                              <PhoneCall size={16} className='mr-1' />
                              {button.text}
                            </a>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className='text-center py-10 col-span-3'>
                <p>No services available for this category yet.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
        <NeedHelp />
        <RatingCards />
      </div>
    </div>
  );
};

export default Tabs;
