import React from 'react'

const StatCard = ({title='', icon, total='', variant = 'neutral'}) => {
  const varientStyles = {
    negative : 'text-red-500',
    positive : 'text-primary',
    neutral : 'text-black'
  }
  return (
    <div className='p-7.5 flex flex-col justify-between min-h-55.5 rounded-[20px] border border-primary/20 w-full '>
        <div>
            <h2 className='text-xl font-medium text-text-gray'>{title}</h2>
            <div className='mt-4'>{icon}</div>
        </div>
        <h1 className={`text-4xl font-medium ${varientStyles[variant] || varientStyles.neutral}`}>{total}</h1>        
    </div>
  )
}

export default StatCard