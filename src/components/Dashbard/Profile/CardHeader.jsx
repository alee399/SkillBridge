import React from 'react'
import { Plus } from 'lucide-react'

export const CardHeader = ({title='', btnText=''}) => {
  return (
    <div className='flex justify-between'>
        <h1 className='text-2xl font-semibold leading-9'>{title}</h1>
        <button className='flex items-center text-primary'>
            <Plus size={20}/>
            {btnText}
        </button>
    </div>
  )
}
