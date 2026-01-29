import React from 'react'
import ProfileCard from '../../components/Dashbard/Profile/ProfileCard'
import SkillsList from '../../components/Dashbard/Profile/SkillsList'
import CertificationList from '../../components/Dashbard/Profile/CertificationList'
import PageWrapper from '../../components/Animation/PageWrapper'
import { Outlet, useLocation } from 'react-router-dom'

const ProfilePage = () => {
  const location = useLocation()
  return (
    <>
    <div className='p-12 '>
      <PageWrapper>
      <div className='space-y-8 relative'>
        <ProfileCard />
        <SkillsList />
        <CertificationList />
      </div>
      </PageWrapper>

        <Outlet key={location.pathname}/>
    
    </div>
    
    </>
  )
}

export default ProfilePage