import React from 'react'
import { Outlet, useLocation} from 'react-router-dom'
import DashSidebar from './DashSidebar';
import { AnimatePresence } from "framer-motion";

const DashboardLayout = () => {
  const location = useLocation()
  return (
    <div className='flex'>
        <div>
            <DashSidebar />
        </div>
        <main className='w-full'>
            <Outlet />
        </main>
    </div>
  )
}

export default DashboardLayout