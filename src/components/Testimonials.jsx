'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import line from '../assets/line.png';
import coma from '../assets/comma.png';

const testimonials = [
  {
    quote: '30-minute mobile tyre change in Dubai Marina! These guys beat Google Maps ETAs. Perfect for our fast-paced city—no waiting, just quality Bridgestone tyres installed on the spot.',
    name: 'Ahmed K.',
    role: 'Business Executive',
    location: 'Dubai Marina'
  },
  {
    quote: 'Flat tyre at 2AM near JBR—your team arrived faster than police response! 24/7 Dubai service with certified Michelin tyres. Lifesavers!',
    name: 'Sarah Palin',
    role: 'Tourist',
    location: 'JBR'
  },
  {
    quote: "5-star service for my Range Rover in Downtown Dubai. They remember my preferences and always have OEM-approved Pirellis. That's why I've used them 8 times!",
    name: 'Rajesh Goenka',
    role: 'Entrepreneur',
    location: 'Downtown Dubai'
  },
  {
    quote: "As a fleet manager, I rely on their consistent service across all our vehicles. Never had a late appointment, and their pricing is transparent with no hidden costs.",
    name: 'Omar Al-Farsi',
    role: 'Fleet Manager',
    location: 'Al Quoz'
  },
  {
    quote: "The only mobile service that comes to our gated community in Emirates Hills. Professional technicians who treat my car like their own. Worth every dirham!",
    name: 'Elena Petrova',
    role: 'Resident',
    location: 'Emirates Hills'
  },
  {
    quote: "I was amazed by their wheel alignment service - my Mercedes drives like new again! Precision work with German standards right here in Dubai.",
    name: 'Thomas Müller',
    role: 'Automotive Engineer',
    location: 'Jumeirah Lakes Towers'
  }
];

const Testimonials = () => {
  return (
    <div id='testimonials' className="bg-gradient-to-b from-[#C40716] to-[#5E030B00] text-white py-16 md:py-24">
      <div className="Mycontainer">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.6 }}
          className="mb-16"
        >
          <div className="pt-6 flex items-center gap-3 justify-start">
            <Image src={line} alt="service" className="w-12 md:w-16" />
            <h4 className="text-sm md:text-base tracking-wider uppercase text-white mb-2">
              Testimonials
            </h4>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-days">
            WHAT DUBAI DRIVERS SAY ABOUT US
          </h2>
          <p className="text-lg text-white/80 max-w-2xl">
            Hear from our satisfied customers across Dubai who've experienced our premium mobile tyre services.
          </p>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              key={index}
              className="group"
            >
              <div className="bg-white rounded-xl pb-8 text-black p-6 sm:p-8 shadow-lg flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer border border-white/10">
                <div className="flex-1 flex flex-col">
                  <p className="mb-4">
                    <Image 
                      src={coma} 
                      alt="comma" 
                      className="inline-block w-8 h-8 opacity-80" 
                    />
                  </p>
                  <p className="mb-6 text-lg text-[#2B4448] flex-grow italic">
                    "{item.quote}"
                  </p>
                </div>
                <div className="flex items-start gap-3 mt-auto">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C40716] to-[#5E030B] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <span className="text-[#C40716] text-lg font-semibold block">{item.name}</span>
                    <span className="text-gray-600 text-sm block">{item.role}</span>
                    <span className="text-gray-500 text-xs flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {item.location}
                    </span>
                  </div>
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
