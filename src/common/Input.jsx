import React from 'react'
import { EyeOff } from 'lucide-react';
import Button from './Button';

const Input = ({label, placeholder, type}) => {
  return (
    <div className='mb-6'>
      <label className='text-text-gray font-medium leading-6.25'>{label}</label>
      <div className='border border-line-gray py-[19.5px] px-5 rounded-md mt-2 flex justify-between '>
        <input 
          type={type} 
          placeholder={placeholder}  
          className='text-text-gray font-medium leading-6.25 focus:outline-none'
        />
        {
          type == "password" 
          ? <div className='cursor-pointer'>
              <EyeOff strokeWidth={1} />
            </div> 
          : ''
        }
      </div>
      {
        type == 'password' 
        ? <div className='text-right mt-2'>
            <h6 className='text-primary font-medium leading-6.25'>Forget Password</h6>
          </div> 
        : ''
      }
      <Button />
    </div>
  )
}

export default Input