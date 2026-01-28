import React from 'react'
import Header from '../components/auth/Header'
import DashHeader from '../components/Dashbard/DashHeader'
import QuickStats from '../components/Dashbard/QuickStats'
import RecommedMatches from '../components/Dashbard/RecommedMatches'

const DashboardPage = () => {
  return (
    <div className='p-12'>
      <DashHeader />
      <QuickStats />
      <RecommedMatches />
    </div>
  )
}

export default DashboardPage