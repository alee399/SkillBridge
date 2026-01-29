import React from 'react'
import Logo from '../../common/ui/Logo';

import LogoutBtn from '../../common/ui/LogoutBtn';
import SidebarMenu from '../../common/ui/SidebarMenu';
import SidebarWrapper from '../Animation/SidebarWrapper';



const DashSidebar = () => {
  return (
    <SidebarWrapper>
    <div className='w-72.5 sticky h-screen top-0 left-0 border-r border-border-color'>
        <div className='px-6 py-3 border-b border-border-color w-full'>
            <Logo />
        </div>
        <div className='mt-6'>
            <SidebarMenu />
            <LogoutBtn />
        </div>
    </div>
    </SidebarWrapper>
  )
}

export default DashSidebar