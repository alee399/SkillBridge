import React from 'react'
import UserDashSidebar from '../common/UserDashSidebar'

const UserDashLayout = ({children}) => {
  return (
    <div className='flex gap-12'>
        <div>
            <UserDashSidebar />
        </div>
        {children}
    </div>
  )
}

export default UserDashLayout