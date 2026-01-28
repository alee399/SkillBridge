import React from 'react'
import profile from '../../../assets/profile.png'

const UserCard = () => {
  return (
    <div className='border border-border-color rounded-[20px] p-6 flex gap-6 mt-8'>
        <div className='w-15 h-15 rounded-full overflow-hidden'>
            <img src={profile} alt="" className=' object-cover '/>
        </div>
        <div>
            <h4 className='text-2xl font-semibold'>Aliyan</h4>
            <h6 className='text-text-gray font-medium'>Aliyan - Teaching - Machine Learning with Aliyan (2026-01-20)</h6>
        </div>
    </div>
  )
}

export default UserCard