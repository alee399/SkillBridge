import React from 'react'
import { LayoutDashboard, CircleUserRound, Wallet, CalendarCheck, MessageSquareMore  } from 'lucide-react';
import { Link } from 'react-router-dom';

const SidebarMenu = () => {
  return ( 
        <ul className='text-xl font-secondary '>
            <Link
                to={'/dashboard'} 
                className="flex gap-4 py-4 px-6 w-full items-center active:bg-menu-highLinkght text-text-gray active:text-primary cursor-pointer transition-colors duration-200">
                <LayoutDashboard size={30}  strokeWidth={1} className='active:text-black' />
                <span>Dashboard</span>
            </Link>
            <Link
                to={'/dashboard/profile'} 
                className="flex gap-4 py-4 px-6 w-full items-center active:bg-menu-highLinkght text-text-gray active:text-primary cursor-pointer transition-colors duration-200">
                <CircleUserRound size={30}  strokeWidth={1} className='active:text-black' />
                <span>Profile</span>
            </Link>
            <Link
                to={'/dashboard/credits'} 
                className="flex gap-4 py-4 px-6 w-full items-center active:bg-menu-highLinkght text-text-gray active:text-primary cursor-pointer transition-colors duration-200">
                <Wallet size={30}  strokeWidth={1} className='active:text-black ' />
                <span>Credits</span>
            </Link>
            <Link
                to={'/dashboard/chat&schedule'} 
                className="flex gap-4 py-4 px-6 w-full items-center active:bg-menu-highLinkght text-text-gray active:text-primary cursor-pointer transition-colors duration-200">
                <CalendarCheck size={30}  strokeWidth={1} className='active:text-bla' />
                <span>Chat & Schedule</span>
            </Link>
            <Link
                to={'/dashboard/feedback&rating'} 
                className="flex gap-4 py-4 px-6 w-full items-center active:bg-menu-highLinkght text-text-gray active:text-primary cursor-pointer transition-colors duration-200">
                <MessageSquareMore size={30}  strokeWidth={1} className='active:text-bla' />
                <span>Feedback</span>
            </Link>
        </ul>
  )
}

export default SidebarMenu