import React from 'react'
import StatCard from './StatCard'
import { Wallet, MessagesSquare, Star } from 'lucide-react'

const QuickStats = () => {
  return (
    <div className='flex flex-col gap-6 w-full'>
        <h1 className='text-[32px] font-medium mb-'>Quick Stats</h1>
        <div className='grid lg:grid-cols-3 grid-col-1 gap-4 md:gap-6 lg:gap-12.5 justify-items-center-safe'>
            <StatCard  title='Credit Balance' total='1250' icon={<Wallet size={36} strokeWidth={0} fill='#C47E4D'/>} />
            <StatCard  title='Scheduled Sessions' total='3' icon={<MessagesSquare size={36} strokeWidth={0} fill='#8BCAFF' />} />
            <StatCard  title='Average Rating' total='4.9' icon={<Star size={36} strokeWidth={0} fill='#FFC107' />} />
        </div>
    </div>
  )
}

export default QuickStats