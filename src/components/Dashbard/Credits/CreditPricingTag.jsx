import React from 'react'

const CreditPricingTag = ({isPopular = false, amount, price}) => {
  return (
    <div className={`flex h-fit justify-between items-center rounded-[20px] p-5 bg-menu-highlight shadow-card relative ${isPopular ? 'border border-primary' : ''}`}>
        {
            isPopular ? <div className='text-sm font-medium text-white bg-primary px-2 py-1 absolute -top-3 left-10 rounded-full'><span>Popular</span></div> : ''
        }
        <div>
            <h2 className='text-2xl font-medium'>{amount}</h2>
            <h5 className='text-text-gray'>Credits</h5>
        </div>
        <h1 className='text-2xl font-medium'>PKR <span>{price}</span></h1>
    </div>
  )
}

export default CreditPricingTag