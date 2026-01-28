import React from 'react'
import { X } from 'lucide-react'

const LearnCard = ({prct = '', title = ''}) => {
  return (
    <div className='flex items-start w-full justify-between p-6 bg-menu-highlight rounded-[20px] shadow-card'>
        <div className='flex-1'>
            <div>
                <h1 className='text-xl mb-2 leading-7.5'>{title}</h1>
            </div>
            <div className='flex gap-6'>
                <div className='flex-1 h-3.25 bg-line-gray rounded-full relative'>
                    <div
                        style={{width : `${prct}%`}} 
                        className={`h-3.25 bg-primary absolute rounded-full`}
                    ></div>
                </div>
                <span className='text-sm text-text-gray'>{prct}%</span>
            </div>
        </div>
        <div>
            <X size={30} strokeWidth={1} />
        </div>
    </div>
  )
}

export default LearnCard