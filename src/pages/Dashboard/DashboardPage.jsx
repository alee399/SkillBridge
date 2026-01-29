import React from 'react'
import Header from '../../components/auth/Header'
import DashHeader from '../../components/Dashbard/DashHeader'
import QuickStats from '../../components/Dashbard/QuickStats'
import RecommedMatches from '../../components/Dashbard/RecommedMatches'
import PageWrapper from '../../components/Animation/PageWrapper'

const DashboardPage = () => {
  return (
    <PageWrapper>
    <div className='p-12'>
      <DashHeader />
      <QuickStats />
      <RecommedMatches />
    </div>
    </PageWrapper>
  )
}

export default DashboardPage