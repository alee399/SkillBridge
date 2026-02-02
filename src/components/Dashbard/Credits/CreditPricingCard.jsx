import React from 'react'
import CreditPricingTag from './CreditPricingTag'
import CardHeader from './CardHeader'

const CreditPricingCard = () => {
  return (
    <div className='xl:max-w-100.75  h-fit w-full p-7.5 rounded-[20px] border border-border-color'>
        <CardHeader title='Buy Credits' />
        <div className='space-y-6'>
            <CreditPricingTag amount={50} price={100}/>
            <CreditPricingTag isPopular={true} amount={100} price={200}/>
            <CreditPricingTag amount={200} price={400}/>
            <h6 className='text-sm font-medium text-text-gray text-center'>Credits never expire. Use them anytime.</h6>
        </div>
    </div>
  )
}

export default CreditPricingCard