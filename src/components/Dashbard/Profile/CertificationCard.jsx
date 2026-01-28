import React from 'react'
import { Award } from 'lucide-react'

const CertificationCard = ({title='', subtitle=''}) => {
  return (
    <div className='flex gap-6 p-6 rounded-[20px] bg-menu-highlight shadow-card w-full'>
        <div className='w-12.5 h-12.5 rounded-full bg-primary/20 flex justify-center items-center'>
            <Award size={28} strokeWidth={2} className='text-primary'/>
        </div>
        <div>
            <h3 className='text-xl'>{title}</h3>
            <h6 className='text-sm text-text-gray'>{subtitle}</h6>
        </div>
    </div>
  )
}

export default CertificationCard