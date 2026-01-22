import React from 'react'
import image from '../../../assets/landingPage/hero-img.png';

const HeroImg = () => {
  return (
    <div>
        <img src={image} alt="Hero" className="max-w-full md:max-w-187" />
    </div>
  )
}

export default HeroImg