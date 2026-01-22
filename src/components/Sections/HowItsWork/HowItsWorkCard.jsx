import React from 'react'

const HowItsWorkCard = ({ frame, title, description, idx, className }) => {
  return (
    <div className='flex items-center gap-13.75'>
        <div>
        <img src={frame} alt="" className={`w-44.5 ${className}`}/>
        </div>
        <div className='flex-1'>
        <h3 className='text-3xl font-semibold'><span>{idx}.</span> {title}</h3>
        <p className='text-2xl font-medium mt-4'>{description}</p>
        </div>
    </div>
  )
}

export default HowItsWorkCard