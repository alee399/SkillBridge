import React from 'react'
import icon1 from '../../../assets/landingPage/icons/icon1.png';
import icon2 from '../../../assets/landingPage/icons/icon2.png';
import icon3 from '../../../assets/landingPage/icons/icon3.png';
import icon4 from '../../../assets/landingPage/icons/icon4.png';
import icon5 from '../../../assets/landingPage/icons/icon5.png';
import icon6 from '../../../assets/landingPage/icons/icon6.png';
import FeatureCard from './FeatureCard';
import FeatureTitle from '../SectionTitle';

const Feature = () => {
  return (
    <section id='feature' className='pb-20 lg:max-w-285 mx-auto max-xl:px-10'>
      <FeatureTitle title="Everything You Need to Learn & Teach" description="A complete platform designed to make skill exchange seamless, secure, and rewarding." />
      <div className='grid lg:grid-cols-3 gap-6.5 mt-10 sm:mt-20 md:grid-cols-2 max-md:grid-cols-1 max-lg:justify-items-safe-center'>
        <FeatureCard icon={icon1} title={"AI -Powered Matching  "} />
        <FeatureCard icon={icon2} title={"Credit-Based System"} />
        <FeatureCard icon={icon3} title={"Secure & Verified"} />
        <FeatureCard icon={icon4} title={"Global Community"} />
        <FeatureCard icon={icon5} title={"Smart Scheduling"} />
        <FeatureCard icon={icon6} title={"Integrated Chat"} />
      </div>
    </section>
  )
}

export default Feature