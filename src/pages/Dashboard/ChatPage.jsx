import React from 'react'
import ChatSidebar from '../../components/Dashbard/Chat&Schedule/ChatSidebar'
import ChatWindow from '../../components/Dashbard/Chat&Schedule/ChatWindow'
import SessionScheduleSidebar from '../../components/Dashbard/Chat&Schedule/SessionScheduleSidebar'
import PageWrapper from '../../components/Animation/PageWrapper'

const ChatPage = () => {
  return (
    <PageWrapper>
    <div className='p-12'>
      <div className='flex w-full shadow-md rounded-[20px] border border-border-color overflow-hidden'>
        <ChatSidebar />
        <ChatWindow />
        <SessionScheduleSidebar />  
      </div>
    </div>
    </PageWrapper>
  )
}

export default ChatPage