import React from 'react'
import ChatSidebar from '../components/Dashbard/Chat&Schedule/ChatSidebar'
import ChatWindow from '../components/Dashbard/Chat&Schedule/ChatWindow'
import SessionScheduleSidebar from '../components/Dashbard/Chat&Schedule/SessionScheduleSidebar'

const ChatPage = () => {
  return (
    <div className='p-12'>
      <div className='flex w-full shadow-md rounded-[20px] border border-border-color overflow-hidden'>
        <ChatSidebar />
        <ChatWindow />
        <SessionScheduleSidebar />  
      </div>
    </div>
  )
}

export default ChatPage