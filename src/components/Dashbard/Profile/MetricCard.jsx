import React from 'react'
import icon2 from '../../../assets/coloredIcon/icon2.png'
const MetricCard = ({num = '', title = '', variant = ''}) => {
  return (
    <div className='text-center'>
        <h1 className='text-4xl font-medium leading-16'>{variant == 'rating' ? <img src={icon2} className='w-7.5 h-7.5 inline'/> : ''} {num} </h1>
        <h6 className='font-medium text-text-gray '>{title}</h6>
    </div>
  )
}

export default MetricCard