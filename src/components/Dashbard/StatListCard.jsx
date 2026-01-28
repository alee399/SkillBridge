import React from 'react'
import profile from '../../assets/profile.png'
import icon2 from '../../assets/coloredIcon/icon2.png'
import { Brain, MapPin, MessageSquare, Clock4 } from 'lucide-react'
import Button from '../../common/ui/Button'


const StatListCard = ({title = '', subTitle = ''}) => {
  return (
    <div className='border rounded-[20px] border-border-color'>
        <div className='max-lg:flex-col max-lg:space-y-8 lg:flex gap-8 items-start p-5 lg:p-10 border-b border-border-color'>
            <img src={profile} alt="" className='w-17.5 h-17.5'/>
            <div>
                <div>
                    <h2 className='text-[32px] font-medium'>{title}</h2>
                    <h5 className='text-xl font-medium text-text-gray mt-2'>{subTitle}</h5>
                </div>
                 <div className='flex gap-4 mt-4 flex-wrap'>
                    <div className='flex gap-2 items-center'>
                        <img src={icon2} alt="" className='w-5 h-5'/>
                        <h6 className='font-medium text-text-gray'>4.9</h6>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Brain strokeWidth={1} size={20} />
                        <h6 className='font-medium text-text-gray'>% 9.5 Match</h6>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <MessageSquare strokeWidth={1} size={20} />
                        <h6 className='font-medium text-text-gray'>50 Sessions Taught</h6>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <MapPin strokeWidth={1} size={20} />
                        <h6 className='font-medium text-text-gray'>San Francisco, CA </h6>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Clock4 strokeWidth={1} size={20} />
                        <h6 className='font-medium text-text-gray'>PST (GMT-8)</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex gap-5 lg:gap-10 p-5 lg:px-10 pt-6 px:pb-10'>
            <Button variant='outline' size='lg' className='lg:text-2xl text-base rounded-[20px] w-full max-lg:px-6 max-lg:py-3'>View Profile</Button>
            <Button variant='primary' size='lg' className='lg:text-2xl text-base rounded-[20px] w-full max-lg:px-6 max-lg:py-3'>Message</Button>
        </div>
    </div>
  )
}

export default StatListCard