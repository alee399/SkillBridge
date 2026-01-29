import React, { useEffect, useState } from 'react'
import {
  LayoutDashboard,
  CircleUserRound,
  Wallet,
  CalendarCheck,
  MessageSquareMore,
} from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const SidebarMenu = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [active, setActive] = useState('')

  useEffect(() => {
    if (location.pathname.startsWith('/dashboard/profile')) {
      setActive('profile')
    } else if (location.pathname.startsWith('/dashboard/credits')) {
      setActive('credits')
    } else if (location.pathname.startsWith('/dashboard/chat')) {
      setActive('chat')
    } else if (location.pathname.startsWith('/dashboard/feedback')) {
      setActive('feedback')
    } else {
      setActive('dashboard')
    }
  }, [location.pathname])

  const menuClass = (key) =>
    `flex gap-4 py-4 px-6 w-full items-center cursor-pointer transition-all duration-200
     ${active === key
       ? 'bg-menu-highLight text-primary bg-menu-highlight '
       : 'text-text-gray hover:bg-gray-100'
     }`

  return (
    <ul className="text-xl font-secondary">
      <li
        className={menuClass('dashboard')}
        onClick={() => navigate('/dashboard')}
      >
        <LayoutDashboard size={30} strokeWidth={1} />
        <span>Dashboard</span>
      </li>

      <li
        className={menuClass('profile')}
        onClick={() => navigate('/dashboard/profile')}
      >
        <CircleUserRound size={30} strokeWidth={1} />
        <span>Profile</span>
      </li>

      <li
        className={menuClass('credits')}
        onClick={() => navigate('/dashboard/credits')}
      >
        <Wallet size={30} strokeWidth={1} />
        <span>Credits</span>
      </li>

      <li
        className={menuClass('chat')}
        onClick={() => navigate('/dashboard/chat&schedule')}
      >
        <CalendarCheck size={30} strokeWidth={1} />
        <span>Chat & Schedule</span>
      </li>

      <li
        className={menuClass('feedback')}
        onClick={() => navigate('/dashboard/feedback&rating')}
      >
        <MessageSquareMore size={30} strokeWidth={1} />
        <span>Feedback</span>
      </li>
    </ul>
  )
}

export default SidebarMenu
