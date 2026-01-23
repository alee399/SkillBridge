import React from 'react'
import Logo from '../../../common/Logo'

const Footer = () => {
  return (
    <div className='max-w-285 max-md:space-y-6 max-xl:px-8 md:flex justify-between mx-auto pb-20'>
      <div className='max-w-119.25'>
        <Logo />
        <p className='text-xl font-light mt-6'>AI-powered skill exchange platform connecting learners and mentors worldwide.</p>
      </div>
      <div>
        <h3 className='text-xl font-semibold'>Company</h3>
          <ul className='mt-4 text-xl space-y-3'>
            <li><a href="#">About us</a></li>
            <li><a href="#">How SkillBridge Works</a></li>
          </ul>
      </div>
    </div>
  )
}

export default Footer