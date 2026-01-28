import React from 'react'
import {LogOutIcon} from 'lucide-react'

const LogoutBtn = () => {
  return (
    <div>
        <button className='absolute left-0 bottom-0 font-secondary text-xl flex gap-4 py-4 px-6 w-full items-center active:bg-menu-highlight text-text-gray active:text-primary cursor-pointer transition-colors duration-200'>
            <LogOutIcon size={30} strokeWidth={1} />
            <span>Log Out</span>
        </button>
    </div>
  )
}

export default LogoutBtn