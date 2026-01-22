import React from 'react'
import HeroContent from './HeroContent'
import HeroImg  from './HeroImg'

const Hero = () => {
  return (
    <section >
      <div className='max-lg:px-8 xl:flex gap-24 max-lg:space-y-7 justify-items-center-safe items-center py-8  md:py-12 lg:py-20 justify-end'>
        <HeroContent />
        <HeroImg />
      </div>
    </section>
  )
}

export default Hero