import ContactForm from '@/components/ContactForm'
import FAQS from '@/components/FAQS'
import FeatureCards from '@/components/FeatureCards'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ServiceCards from '@/components/ServiceCards'
import Tabs from '@/components/Tabs'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <ServiceCards/>
      <FeatureCards/>
      <Testimonials/>
      <FAQS/>
      <Tabs/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default page