import React from 'react'
import HeroContent from './HeroContent'
import HeroImg  from './HeroImg'

const Hero = () => {
  return (
    <section >
      <div className='lg:flex gap-24 max-lg:space-y-7 items-center py-8  md:py-12 lg:py-20 justify-end'>
        <HeroContent />
        <HeroImg />
      </div>
    </section>
  )
}

export default Hero