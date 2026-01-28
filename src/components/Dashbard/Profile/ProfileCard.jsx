import React from 'react'
import { MapPin, Globe, Clock4, Mail, Pencil } from 'lucide-react'
import profile from '../../../assets/profile.png'
import MetricCard from './MetricCard'

const ProfileCard = () => {
  return (
    <div>
        <div className='border rounded-[20px] border-border-color'>
            <div className='md:flex gap-8 items-start p-10 border-b border-border-color relative'>
                <div className='w-25 h-25 shrink-0 relative'>
                    <img src={profile} alt="" className='w-full h-full'/>
                    <button className='w-8 h-8 rounded-full bg-primary flex justify-center items-center absolute right-0 bottom-1'>
                        <Pencil size={20} strokeWidth={2} />
                    </button>
                </div>
                <div>
                    <div>
                        <div className='flex justify-between'>
                            <h2 className='text-4xl font-semibold leading-13.5 '>Alex Thompson</h2>
                            <button
                                className='flex text-sm gap-2 bg-primary border border-border-color rounded-full border-none p-2 shrink-0 absolute right-5 top-5'>
                                <Pencil size={16} strokeWidth={2} />
                                <span className='font-secondary font-bold'>Edit Profile</span>
                            </button>
                        </div>
                        <h5 className='text-xl font-medium text-text-gray mt-4'>Full-stack developer passionate about sharing knowledge and learning new technologies. Love teaching React and learning data science.</h5>
                    </div>
                    <div className='flex flex-wrap gap-4 mt-4'>
                        <div className='flex gap-4 items-center'>
                            <Mail size={20} strokeWidth={1} />
                            <h6 className='font-medium text-text-gray'>jane@example.com</h6>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <MapPin strokeWidth={1} size={20} />
                            <h6 className='font-medium text-text-gray'>San Francisco, CA </h6>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Globe size={20} strokeWidth={1} />
                            <h6 className='font-medium text-text-gray'>English, Urdu </h6>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Clock4 strokeWidth={1} size={20} />
                            <h6 className='font-medium text-text-gray'>PST (GMT-8)</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-10 flex gap-10 justify-center'>
                <MetricCard num='95' title='Sessions Taught' />
                <MetricCard num='42' title='Sessions Learned' />
                <MetricCard num='4.9' title='Average Rating' variant='rating'/>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard