import React from 'react'
import DashHeader from '../../components/Dashbard/DashHeader'
import StatCard from '../../components/Dashbard/StatCard'
import { Wallet, ArrowDownLeft, ArrowUpRight } from 'lucide-react'
import TransactionList from '../../components/Dashbard/Credits/TransactionList'
import CreditPricingCard from '../../components/Dashbard/Credits/CreditPricingCard'
import PageWrapper from '../../components/Animation/PageWrapper'

const CreditPage = () => {
  return (
    <PageWrapper>
    <div className='p-12'>
      <div className='space-y-8'>
        <DashHeader title='Credit Wallet' subTitle='Manage your credits and view transaction history' />
          <div className='grid xl:grid-cols-3 grid-col-1 gap-4 md:gap-6 lg:gap-12.5 justify-items-center-safe'>
              <StatCard  
                title='Credit Balance' 
                total='250' 
                icon={<Wallet size={36} strokeWidth={0} fill='#C47E4D'/>}
              />
              <StatCard  
                title='Scheduled Sessions' 
                total='+125' 
                icon={<ArrowDownLeft size={36} strokeWidth={2} color='#2A9D90' />}
                variant='positive' 
                />
              <StatCard  
                title='Average Rating' 
                total='-75' 
                icon={<ArrowUpRight size={36} strokeWidth={2} color='#FF0000' />}
                variant='negative'
              />
          </div>
          <div className='xl:flex justify-between gap-6'>
            <TransactionList />
            <CreditPricingCard />
          </div>
      </div>
    </div>
    </PageWrapper>
  )
}

export default CreditPage