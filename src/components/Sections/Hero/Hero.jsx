import React from 'react'
import HeroContent from './HeroContent'
import HeroImg  from './HeroImg'

const Hero = () => {
  return (
    <section >
      <div className='max-w-285 mx-auto grid lg:grid-cols-2 grid-cols-1 py-20 items-center'>
        <HeroContent />
        <HeroImg />
      </div>
    </section>
  )
}

export default Hero