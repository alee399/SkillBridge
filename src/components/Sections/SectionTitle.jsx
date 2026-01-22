import React from 'react'

const SectionTitle = ({title, description}) => {
  return (
    <div className='max-w-235.5 mx-auto text-center'>
      <h1 className='text-3xl md:text-5xl font-medium'>{title}</h1>
      <p className='text-lg md:text-2xl font-medium mt-8'>{description}</p>
    </div>
  )
}

export default SectionTitle