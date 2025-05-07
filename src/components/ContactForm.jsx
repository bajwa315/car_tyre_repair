'use client';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import line from '../assets/line.png';
import Image from 'next/image';
const ContactForm = () => {
 const formRef = useRef();

 const [formData, setFormData] = useState({
   name: '',
   phone: '',
   email: '',
   issue: '',
 });

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData((prev) => ({ ...prev, [name]: value }));
 };

 const handleSubmit = (e) => {
   e.preventDefault();

   emailjs
     .sendForm(
       'service_5il87zr',
       'template_z8pb3zd', 
       formRef.current,
       'H8vp9jRJPNumA2I9x'
     )
     .then(
       (result) => {
         console.log(result.text);
         toast.success('Message sent successfully!');
         setFormData({ name: '', phone: '', email: '', issue: '' });
       },
       (error) => {
         console.error(error.text);
         toast.error('Failed to send message.');
       }
     );
 };

  return (
    <div id='contact' className=' scroll-smooth bg-[#C40716] relative mt-8 '>
      <div className='  Mycontainer grid md:grid-cols-2 lg:gap-28 md:gap-10 items-center pt-12 md:pt-20 '>
        {/* Left Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className=' flex flex-col '
        >
          <div>
            <div className='flex gap-4 items-center text-white mb-3'>
              <Image src={line} alt='service' className='' />
              <span className='text-sm uppercase'>Make appointment</span>
            </div>
            <h1 className=' text-xl md:text-3xl  text-white mb-4'>
              TRUST OUR SERVICE TO GET YOU BACK ON THE ROAD!
            </h1>
            <p className='text-white mb-8'>
              Our fastest-response team in Dubai is available 24/7 for all
              communities - average 15-minute arrival time
            </p>

            <div className='space-y-6'>
              <div className='flex items-center'>
                <div className='bg-[#2B4448] rounded-full p-3 mr-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                </div>
                <div className='text-white'>
                  <h3 className=' uppercase'>Location</h3>
                  <p className='text-sm'>
                    We cover ALL areas of Dubai - Call for immediate assistance!
                  </p>
                </div>
              </div>

              <div className='flex items-center'>
                <div className='bg-[#2B4448] rounded-full p-3 mr-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <div className='text-white'>
                  <h3 className=' uppercase '>Email</h3>
                  <p className='text-sm'>info@car-tyre-repair.com</p>
                </div>
              </div>

              <div className='flex  items-center'>
                <div className='bg-[#2B4448] rounded-full p-3 mr-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                </div>
                <div className='text-white'>
                  <h3 className=' uppercase'>Phone</h3>
                  <p className='text-sm'>+971 55 181 8633</p>
                </div>
              </div>
            </div>
          </div>

          <div className=' mt-12 flex gap-10'>
            <p className='text-white uppercase  mb-2'>Follow us</p>
            <div className='flex space-x-2'>
              <a href='#' className='bg-white p-2 rounded-md'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-800'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
              </a>
              <a href='#' className='bg-white p-2 rounded-md'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-800'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' />
                </svg>
              </a>
              <a href='#' className='bg-white p-2 rounded-md'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-800'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className='w-full mt-10 '
        >
          <div className='bg-white md:max-w-lg md:ml-auto p-4 md:p-8 '>
            <h2 className='text-xl  text-gray-800 mb-6 text-center'>
              HOW CAN WE HELP
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <input
                  type='text'
                  name='name'
                  placeholder='YOUR NAME'
                  className='w-full border border-gray-300 p-3 rounded'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <input
                  type='tel'
                  name='phone'
                  placeholder='PHONE NUMBER'
                  className='w-full border border-gray-300 p-3 rounded'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <input
                  type='email'
                  name='email'
                  placeholder='EMAIL ADDRESS'
                  className='w-full border border-gray-300 p-3 rounded'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <textarea
                  name='issue'
                  placeholder='YOUR ISSUE'
                  className='w-full border border-gray-300 p-3 rounded h-24'
                  value={formData.issue}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-gray-800 text-white py-3 rounded uppercase  hover:bg-gray-700 transition duration-300 cursor-pointer '
              >
                Send a message
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <div className=' pb-10 md:pb-20 pt-16 Mycontainer '>
        <div className='flex justify-between'>
          <div>
            <p className='text-white uppercase text-sm '>Service hours:</p>
          </div>
          <div>
            <p className='text-white capitalize text-sm '>
              <span className='uppercase'>Payment methods:</span> Cash,
              Credit/Debit Cards, Apple Pay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;