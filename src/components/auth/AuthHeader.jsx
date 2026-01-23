import React from 'react'


const AuthHeader = ({title, para}) => {
  return (
    <div className='mb-11'>
      <h2 className='text-4xl font-semibold'>{title}</h2>
      <p className='text-text-gray mt-0.5'>{para}</p>
    </div>  
  )
}

export default AuthHeader