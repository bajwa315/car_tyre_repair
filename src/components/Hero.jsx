'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import phone from '../assets/phone.png';
import hero from '../assets/hero.jpg';
import curcle from '../assets/curcle.png';
import WhatsappButton from './WhatsappButton';

const emergency = [
  {
    image: curcle,
    desc: 'On-Site tyre puncture repair',
  },
  {
    image: curcle,
    desc: 'Spare & New tyre Replacement',
  },
  {
    image: curcle,
    desc: 'We fix flat tyre & puncture repair ',
  },
  {
    image: curcle,
    desc: 'Mobile tyre service at home, office, or roadside',
  },
  {
    image: curcle,
    desc: 'Multiple payements methods (cash/card)',
  },
];

const Hero = () => {
  return (
    <section className='relative -mt-[81px] text-white'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={hero}
          alt='Mechanic working on car tire'
          fill
          className='object-cover mix-blend-overlay'
          priority
        />
      </div>

      <div className='Mycontainer pt-32 md:pt-48 pb-10 md:pb-20 relative z-10'>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className='max-w-4xl '
        >
          <h1 className='text-2xl md:text-5xl mb-6 leading-tight'>
            FASTEST MOBILE TYRE REPAIR SERVICE IN DUBAI - RESPONSE IN 20 MINUTES
          </h1>

          <ul className='mb-8 space-y-3 text-sm'>
            {emergency.map((item, index) => (
              <li className='flex items-center' key={index}>
                <Image src={item.image} alt={item.desc} className='mr-2' />
                <span className='text-base font-extralight'>{item.desc}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ rotateX: -90, opacity: 0 }}
          whileInView={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className='flex max-sm:flex-wrap items-center gap-4 md:gap-9 mt-10'
        >
          <a
            href='tel:+971 55 181 8633'
          >
            <div className='flex px-5 py-3.5 text-base cursor-pointer items-center gap-4 bg-[#C40716] hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-105 rounded-md'>
              <Image src={phone} alt='Phone Icon' className='h-8 w-8' />
              <div>
                <p
                  href='tel:+97155123456'
                  className='text-xl md:text-2xl font-medium uppercase'
                >
                  +971 55 181 8633
                </p>
                <p className='text-xs md:text-sm'>
                  24-hour emergency assistance
                </p>
              </div>
            </div>
          </a>
        </motion.div>
      </div>

      <div className='relative z-50'>
        <WhatsappButton />
      </div>
    </section>
  );
};

export default Hero;
