import React from 'react';
import Navbar from '../Sections/layout/Navbar';
import Hero from '../Sections/Hero/Hero';
import Feature from '../Sections/Feature/Feature';
import HowitsWork from '../Sections/HowItsWork/HowitsWork';
import Footer from '../Sections/layout/Footer'
import CTASection from '../Sections/CTASection/CTASection';

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