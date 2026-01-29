import React from 'react'
import { Star } from 'lucide-react'
import Button from '../../../common/ui/Button'

const FeedbackInput = () => {
  return (
    <div className='mt-8'>
        <div>
            <h3 className='text-xl font-medium'>Your Rating</h3>
            <div className='flex gap-2 mt-2'>
                <Star strokeWidth={0} fill='#FFC107'/>
                <Star strokeWidth={0} fill='#FFC107'/>
                <Star strokeWidth={0} fill='#FFC107'/>
                <Star strokeWidth={0} fill='#FFC107'/>
                <Star strokeWidth={0} fill='#FFC107'/>
            </div>
        </div>
        <div className='mt-8'>
            <h3 className='text-xl font-medium mb-2'>Detailed Feedback</h3>
            <form>
                <textarea className='text-text-gray font-medium focus:outline-none text-sm w-full border border-border-color rounded-[20px] p-6 min-h-35' placeholder='Share your detailed feedback on the session experience, what went well, and areas for improvement...'></textarea>
                <div className='flex justify-end mt-4'>
                    <Button variant='secondary' type='submit'>Submit Feedback</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FeedbackInput