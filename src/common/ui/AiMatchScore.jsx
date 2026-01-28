import { Brain } from 'lucide-react'
import React from 'react'

const AiMatchScore = () => {
  return (
    <div className='flex items-center gap-6 py-3.5 px-4 rounded-[20px] border border-primary bg-menu-highlight mt-6'>
      <div className='flex gap-4 items-center'>
        <Brain strokeWidth={1} size={30} className='text-primary'/>
        <h3 className='font-medium leading-6.25'>AI Match Score</h3>
      </div>
      <h3 className='text-sm text-text-gray font-medium'>Based on Skills | Ratings | Learning Style</h3>
    </div>
  )
}

export default AiMatchScore