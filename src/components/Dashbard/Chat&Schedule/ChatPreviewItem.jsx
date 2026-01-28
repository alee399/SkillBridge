import React from 'react'


const ChatPreviewItem = ({name = '', message='', time='', newMsg, img }) => {
    const isNewMsg = newMsg > 0
  return (
    <div className='flex justify-between items-center px-4 py-3.75'>
        <div className='flex gap-4 items-center'>
            <div className='w-12 h-12 rounded-full'>
                <img src={img} alt="" className='w-full h-full object-cover' />
            </div>
            <div>
                <h5 className='leading-5 font-semibold'>{name}</h5>
                <h6 className='text-text-gray text-sm leading-4.5 mt-1'>{message}</h6>
            </div>
        </div>
        <div className='flex flex-col pr-l items-end'>
            <h6 className='text-sm text-text-gray leading-4.5'>{time}</h6>
            {isNewMsg ? <h6 className='w-4.5 h-4.5 bg-primary text-[12px] text-white rounded-full text-center mt-1'>{newMsg}</h6> : ''}
        </div>
    </div>
  )
}

export default ChatPreviewItem