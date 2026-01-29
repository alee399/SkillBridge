import React from 'react'

const DashHeader = ({title = '', subTitle = ''}) => {
  return (
    <div>
        <h1 className='text-4xl font-medium leading-[100%]'>{title}</h1>
        <h6 className='text-lg font-medium text-text-gray mt-4 leading-[100%]'>{subTitle}</h6>
    </div>
  )
}

export default DashHeader