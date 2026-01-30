import React from 'react'
import CertificationCard from './CertificationCard'
import { CardHeader } from './CardHeader'

const CertificationList = () => {
  return (
    <div className='border border-border-color rounded-[20px] p-10'>
        <CardHeader title='Certifications' btnText='Add Certification'/>
        <div className='grid lg:grid-cols-2 gap-8 mt-10'>
            <div className='space-y-10'>
                <CertificationCard title='AWS Solution Architect' subtitle='Amazon 2023'/>
                <CertificationCard title='AWS Solution Architect' subtitle='Amazon 2023'/>
            </div>
            <div className='space-y-10'>
                <CertificationCard title='Google UI/UX Design' subtitle='Google 2022'/>
                <CertificationCard title='Google UI/UX Design' subtitle='Google 2022'/>
            </div>
        </div>
    </div>
  )
}

export default CertificationList