'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import call from '../assets/call.png';
import chat from '../assets/chat.png';
import Image from 'next/image';
const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'WHICH AREAS OF DUBAI DO YOU COVER FOR MOBILE TYRE SERVICES?',
      answer:
        'We service all Dubai neighborhoods including Dubai Marina, JBR, Downtown, Business Bay, and Palm Jumeirah 24/7. Our team reaches most locations within 30-45 minutes.  ',
    },
    {
      question: "WHAT'S THE COST OF TYRE REPAIR IN DUBAI COMPARED TO SHOPS?",
      answer:
        'Our mobile tyre repair in Dubai starts from AED 100 - often cheaper than garage visits when you factor in towing costs. Call +971 55 181 8633 for an exact quote.',
    },
    {
      question: 'HOW QUICKLY CAN YOU RESPOND TO EMERGENCY TYRE SERVICES?',
      answer:
        'Our rapid response team reaches most locations in Dubai within 30-45 minutes for emergency services. We prioritize safety incidents and offer 24/7 availability. Dubai Pro Tip: Book our VIP service for luxury vehicles, ',
    },
    {
      question:
        "WHAT TYPES OF TYRE DAMAGE REQUIRE IMMEDIATE REPLACEMENT IN DUBAI'S HEAT?",
      answer:
        "In Dubai's extreme temperatures, sidewall damage, tread separations, and cuts over 6mm require immediate replacement. We carry premium brands for same-day service",
    },
    {
      question:
        'DO YOU SERVICE LUXURY CARS LIKE RANGE ROVERS AND FERRARIS IN DUBAI?',
      answer:
        'Yes! Our Dubai technicians are certified for all luxury vehicles and use OEM equipment. We handle run-flat tyres and performance vehicles with care',
    },
    {
      question: "WHAT'S INCLUDED IN YOUR MOBILE TYRE FITTING SERVICE IN DUBAI?",
      answer:
        'As authorized Dubai dealers, our mobile vans carry Michelin, Bridgestone, and Pirelli tyres. We offer manufacturer warranties with every purchase.Dubai Pro Tip: Ask about our current Dubai promotions,',
    },
    {
      question: 'WHERE CAN I GET GENUINE MICHELIN/BRIDGESTONE TYRES IN DUBAI?',
      answer:
        'As authorized Dubai dealers, our mobile vans carry Michelin, Bridgestone, and Pirelli tyres. We offer manufacturer warranties with every purchase. Dubai Pro Tip: Ask about our current Dubai promotions',
    },
    {
      question:
        "HOW DO I KNOW WHEN MY TYRES NEED REPLACING IN DUBAI'S CLIMATE?",
      answer:
        "Dubai's heat accelerates wear. Check for: tread below 1.6mm (use a coin), cracks, or vibration. We provide free tread checks at your location",
    },
    {
      question: 'CAN YOU REPAIR PUNCTURED RUN-FLAT TYRES IN DUBAI?',
      answer:
        'Run-flats driven while flat usually need replacement. If caught early, some punctures can be repaired following Dubai dealer guidelines.',
    },
    {
      question: '  Is nitrogen inflation worth it in Dubai?',
      answer:
        "Absolutely! Nitrogen maintains pressure better in Dubai's temperature swings, improves fuel efficiency 1-3%, and reduces oxidation - ideal for our climate.",
    },
    {
      question: "Do you follow Dubai's tyre disposal regulations?",
      answer:
        'Yes, we comply with Dubai Municipality recycling policies. All old tyres are processed through authorized channels at no extra cost',
    },
    {
      question:
        "How often should I rotate tyres in Dubai's driving conditions?",
      answer:
        "Every 8,000-10,000 km. This free service comes with tyre purchases, or AED 80 standalone. Crucial for Dubai's rough roads and high speeds.",
    },
  ];

  return (
    <div id='faq' className='Mycontainer pt-8 pb-12 md:pt-32 md:pb-20'>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className='flex items-center mb-2'>
          <span className='text-red-600 font-bold mr-2'>FAQS</span>
        </div>
        <h1 className='text-lg md:text-3xl font-normal text-[#2B4448] pb-4'>
          DUBAI TYRE EXPERTS - YOUR{' '}
          <span className='text-red-600'>QUESTIONS</span> ANSWERED
        </h1>
        <p className='text-base font-normal text-[#555555] pb-12'>
          24/7 professional tyre solutions across all Dubai areas
        </p>
      </motion.div>

      <div className='space-y-3'>
        {faqs.map((faq, index) => (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.6 }}
            key={index}
            className=' bg-white overflow-hidden relative'
          >
            <div
              className='absolute left-0 top-0 bottom-0 w-1 bg-red-600'
              aria-hidden='true'
            ></div>
            <button
              className='flex justify-between items-center w-full p-3 md:p-6 text-left pl-6 focus:outline-none'
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span className='font-normal text-[#2B4448] text-xs md:text-lg '>
                {faq.question}
              </span>
              <ChevronDown
                className={` text-[#C40716] w-6 h-6 transition-transform duration-300 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className='p-4 pl-6 text-base text-gray-700 border-t'>
                <p className='text-xs md:text-lg'>{faq.answer}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.6 }}
        className='mt-16 text-center'
      >
        <h3 className='font-normal text-2xl mb-4'>
          Need immediate tyre help in Dubai?
        </h3>
        <div className='flex max-sm:flex-wrap justify-center gap-4 mt-8'>
          <div className='flex cursor-pointer items-center gap-8 bg-[#C40716] text-white px-10 py-4 rounded-md font-normal hover:bg-[#25D366] hover:text-white transition-all duration-300  '>
            <Image src={call} alt='phone' className='w-5 h-5 object-cover' />
            <button className='text-base cursor-pointer'>
              CALL DUBAI <br /> EXPERT NOW
            </button>
          </div>
          <div className='flex cursor-pointer items-center gap-3 bg-[#25D366] text-white px-10 py-6 rounded-md font-normal hover:bg-[#C40716] hover:text-white transition-all duration-300'>
            <Image src={chat} alt='phone' className='object-cover' />

            <button className='cursor-pointer'>WHATSAPP HELP</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQS;
