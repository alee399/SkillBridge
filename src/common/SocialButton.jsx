import React from 'react'


const SocialButton = ({children, icon}) => {
  return (
    <div>
      <button className='flex justify-center items-center gap-4 border w-full rounded-[10px] border-border-color max-sm:px-4 max-sm-2 py-4 px-6 font-medium leading-6.25'>
        {children}
        <img src={icon} alt="google flat icon" className='w-9.5 h-9.5' />
      </button>
    </div>
  )
}

export default SocialButton