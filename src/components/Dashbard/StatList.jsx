import React from 'react'
import StatCard from './StatCard'
import StatListCard from './StatListCard'

const StatList = () => {
  return (
    <div className='mt-8 space-y-8'>
        <StatListCard title='Alex Thompson' subTitle='Python Programming' />
        <StatListCard title='David Chen' subTitle='Data Science' />
        <StatListCard title='Maria Rodriguez' subTitle='Machine Learning' />
    </div>
  )
}

export default StatList