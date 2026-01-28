import React from 'react'
import { Outlet} from 'react-router-dom'
import DashSidebar from './DashSidebar'

const DashboardLayout = () => {
  return (
    <div className='flex'>
        <div>
            <DashSidebar />
        </div>
        <main className='w-full'>
          <Outlet   />
        </main>
    </div>
  )
}

export default DashboardLayout