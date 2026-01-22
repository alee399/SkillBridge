import React from 'react';
import Navbar from '../layout/Navbar';
import Hero from '../components/Sections/Hero/Hero';
import Feature from '../components/Sections/Feature/Feature';
import HowitsWork from '../components/Sections/HowItsWork/HowitsWork';
import Footer from '../layout/Footer'
import CTASection from '../components/Sections/CTASection/CTASection';

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Feature />
        <HowitsWork />
        <CTASection /> 
        <Footer /> 
    </div>
  )
}

export default LandingPage