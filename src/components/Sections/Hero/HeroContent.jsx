import React from 'react'
import Button from '../../../common/LandingPage/Button'

const HeroContent = () => {
  return (
    <div className='lg:max-w-120.5 text-center max-lg:px-8 max-md:px-4 '>
        <div className='flex gap-2 md:hidden mb-8 justify-center'>
          <Button className={"border-[#D0D0D0] text-[#111111]"}>Sign In</Button>
          <Button className={"bg-[#2A9D90] text-white border-[#2A9D90]"}>Get Started</Button>
        </div>
        <h1 className='font-semibold text-[36px] md:text-[56px] '>Exchange Skills, <span className='text-[#2A9D90]'>Grow Together</span></h1>
        <p className='font-medium text-lg md:text-2xl'>Connect with learners and mentors worldwide. Teach what you know, learn what you love, powered by intelligent AI matching and fair credit system.</p>
        <Button className={"text-white bg-linear-to-r from-[#1B2847] to-[#2B3A5C] mt-8"}>Start Learning Free</Button>

    </div>
  )
}

export default HeroContent