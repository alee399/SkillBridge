import React from 'react'
import Button from '../../../common/Button'

const HeroContent = () => {
  return (
    <div className='lg:max-w-120.5 text-center max-lg:px-8 max-md:px-4 '>
        <h1 className='font-semibold text-[36px] md:text-[56px] '>Exchange Skills, <span className='text-[#2A9D90]'>Grow Together</span></h1>
        <p className='font-medium text-lg md:text-2xl'>Connect with learners and mentors worldwide. Teach what you know, learn what you love, powered by intelligent AI matching and fair credit system.</p>
        <Button className={"text-white bg-linear-to-r from-[#1B2847] to-[#2B3A5C] mt-8"}>Start Learning Free</Button>
    </div>
  )
}

export default HeroContent