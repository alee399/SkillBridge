import React from 'react'
import icon2 from '../../../assets/coloredIcon/icon2.png'
import { X } from 'lucide-react'

const TeachCard = ({chang=''}) => {
  return (
    <div className='flex items-start w-full justify-between p-6 bg-menu-highlight rounded-[20px] shadow-card'>
        <div>
            <h1 className='text-xl mb-2 leading-7.5'>React Development</h1>
            <div className='flex gap-4'>
                <div>
                    <h6 className='text-sm text-text-gray'>45 Sessions</h6>
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={icon2} alt="" className='w-4 h-4' />
                    <span className='text-sm font-medium'>4.9</span>
                </div>
                <div>
                    <h6 className='text-primary text-sm'>{chang}</h6>
                </div>
            </div>
        </div>
        <div>
            <X size={30} strokeWidth={1} />
        </div>
    </div>
  )
}

export default TeachCard