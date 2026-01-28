import React from 'react'

const Header = ({title = "", subTitle = "", className=''}) => {
  return (
    <div className='mb-11'>
      <h2 className='text-4xl font-semibold h-13.5'>{title}</h2>
      <p className={`text-text-gray mt-0.5 h-6 ${className}`}>{subTitle}</p>
    </div>  
  )
}

export default Header