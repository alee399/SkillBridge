import React from 'react'
import Logo from './Logo'
import { LayoutDashboard } from 'lucide-react';



const UserDashSidebar = () => {
  return (
    <div className='w-72.5 h-479 shrink-0 border-r border-border-color'>
        <div className='p-6 border-b border-border-color w-full'>
            <Logo />
        </div>
        <div className='mt-6'>
            <ul>
                <li className=''>
                    <LayoutDashboard size={30} strokeWidth={1} />
                    <a href="#">Dashboard</a>
                </li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Credits</a></li>
                <li><a href="#">Chat & Schedule</a></li>
                <li><a href="#">Feedback</a></li>
            </ul>
        </div>
    </div>
  )
}

export default UserDashSidebar