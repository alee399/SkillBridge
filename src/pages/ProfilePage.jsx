import React from 'react'
import ProfileCard from '../components/Dashbard/Profile/ProfileCard'
import SkillsList from '../components/Dashbard/Profile/SkillsList'
import CertificationList from '../components/Dashbard/Profile/CertificationList'

const ProfilePage = () => {
  return (
    <div className='p-12'>
      <div className='space-y-8 relative'>
        <ProfileCard />
        <SkillsList />
        <CertificationList />
      </div>
    </div>
  )
}

export default ProfilePage