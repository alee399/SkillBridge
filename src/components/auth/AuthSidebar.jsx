import React from 'react'
import SingleLogo from '../../assets/authAssets/SingleLogo.png';
import group1 from '../../assets/authAssets/Group1.png'
import group2 from '../../assets/authAssets/group2.png'
import group3 from '../../assets/authAssets/group3.png'

const AuthSidebar = () => {
  return (
    <div className="bg-[#1B2847] text-white">
      <div className='min-h-260 flex justify-center items-center  relative'>
        <img src={group2} alt="" className='absolute w-25 h-25 left-0 top-0'/>
        <img src={group3} alt="" className='absolute w-25 h-25 right-10 bottom-1'/>
        <img src={group1} alt="" className='w-18 h-[92.19px] absolute top-50 right-45.5'/>
        <div className='max-w-132.25 mx-auto flex flex-col items-center text-center'>
          <img src={SingleLogo} alt="SkillBridge Logo"   className='w-11.75 h-13.75 '/>
          <h2 className='text-[40px] font-medium mt-14'>Start Learning Today</h2>
          <p className='text-xl font-medium mt-8'>Join SkillBridge. Your next breakthrough is just a connection away</p>
        </div>
      </div>
    </div>
  )
}

export default AuthSidebar