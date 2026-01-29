import React from 'react'
import Button from '../../../common/ui/Button'

const HeroContent = () => {
  return (
    <div className='lg:max-w-120.5 text-center max-lg:px-8 max-md:px-4 '>
        <div className='flex gap-2 md:hidden mb-8 justify-center'>
          <Button variant='outline'>Sign In</Button>
          <Button variant='outline'>Get Started</Button>
        </div>
        <h1 className='font-semibold text-[36px] md:text-[56px] '>Exchange Skills, <span className='text-primary'>Grow Together</span></h1>
        <p className='font-medium text-lg md:text-2xl mt-8'>Connect with learners and mentors worldwide. Teach what you know, learn what you love, powered by intelligent AI matching and fair credit system.</p>
        <Button variant='secondary' className="mt-8">Start Learning Free</Button>

    </div>
  )
}

export default HeroContent