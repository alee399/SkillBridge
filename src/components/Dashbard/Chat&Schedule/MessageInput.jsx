import React from 'react'
import { Smile, Send } from 'lucide-react'

const MessageInput = () => {
  return (
    <div className='flex gap-6 items-center px-3 py-6 border-t border-border-color max-xl:border-b'>
        <Smile size={24} strokeWidth={1} />
        <input type="text" placeholder='Message' className='px-3 py-2 flex-1 focus:outline-none text-sm font-medium text-text-gray rounded-full border border-border-color'/>
        <div className='w-9.5 h-9.5 bg-black text-white rounded-full flex justify-center items-center '>
            <Send size={20} strokeWidth={1} />
        </div>
    </div>
  )
}

export default MessageInput