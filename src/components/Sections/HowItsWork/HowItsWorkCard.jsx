import React from 'react'


const HowItsWorkCard = ({icon, line, title, description, idx, frameHeight, itemsCenter}) => {
  return (
    <div className={`max-md:text-center xl:gap-13.75 md:flex ${itemsCenter}`}>
        <div className='md:w-44.5 flex flex-col items-center max-md:space-y-4'>
          <div className='w-25 h-25 flex justify-center items-center bg-linear-to-r from-[#1B2847] to-[#2B3A5C] rounded-full'>
            <img src={icon} alt="" className={`w-12.5 h-12.5`}/>
          </div>
          <img src={line} alt="" className={`${frameHeight} max-md:hidden`}/>
        </div>
        <div className='flex-1'>
          <h3 className='text-2xl md:text-3xl font-semibold'><span>{idx}.</span> {title}</h3>
          <p className='text-lg md:text-2xl font-medium mt-4'>{description}</p>
        </div>
    </div>
  )
}

export default HowItsWorkCard