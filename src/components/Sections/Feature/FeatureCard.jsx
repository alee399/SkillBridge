import React from 'react'

const FeatureCard = ({ icon, title }) => {
  return (
    <div className='shrink-0 border border-[#D0D0D0] max-sm:text-center  lg:max-w-89 px-7.5 py-12 sm:py-21.5 flex flex-col items-center rounded-[20px]'>
        <img src={icon} alt="" className='w-12.5 h-[50]'/>
        <h3 className='text-lg sm:text-2xl font-medium mt-4'>{title}</h3>
    </div>
  )
}

export default FeatureCard