import React from 'react'

const Divider = () => {
  return (
    <div className='mt-8 h-6.5 w-full flex items-center relative'>
        <div className='h-[1.5px] bg-line-gray opacity-80 w-full'></div>
        <div className='font-medium text-lg text-text-gray leading-6.5 bg-white px-5.75 absolute left-1/2 -translate-x-1/2'>Continue with</div>
    </div>
  )
}

export default Divider