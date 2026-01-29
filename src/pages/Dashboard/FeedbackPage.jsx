import React from 'react'
import DashHeader from '../../components/Dashbard/DashHeader'
import SessionInput from '../../components/Dashbard/Feedback/SessionInput'
import UserCard from '../../components/Dashbard/Feedback/UserCard'
import FeedbackInput from '../../components/Dashbard/Feedback/FeedbackInput'
import FeedbackHistory from '../../components/Dashbard/Feedback/FeedbackHistory'
import PageWrapper from '../../components/Animation/PageWrapper'

const FeedbackPage = () => {
  return (
    <PageWrapper>
    <div className='p-12 bg-menu-highlight'>
        <h1 className='text-4xl font-medium mb-8'>Feedback & Rating</h1>
        <div className='border border-border-color rounded-[20px] bg-white p-6'>
            <div>
                <h1 className='text-[32px] font-medium leading-[100%]'>Provide Feedback</h1>
                <h6 className='text-lg font-medium text-text-gray mt-4 leading-[100%]'>Rate your recent session with Michael Chen on Advanced React Development.</h6>
            </div>
            <SessionInput />
            <UserCard />
            <FeedbackInput />
        </div>
        <FeedbackHistory />
    </div>
    </PageWrapper>
  )
}

export default FeedbackPage