import React from 'react'
import AuthHeader from './AuthHeader'
import Button from '../../common/Button'
import OTPInput from './OTPInput'
import AuthRedirect from './AuthRedirect'
const OTPForm = () => {
  return (
    <div className='min-h-260 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-130 '>
        <AuthHeader 
            title="Authenticate Your Account" 
            subTitle="Protecting your privacy is our top priority. Please confirm your account by entering the authorization code sent to your email. " 
        />
        <form>
            <OTPInput length={6}/>
              
            <div className='mt-8 flex justify-center items-center gap-6 '>
                <AuthRedirect variant='otp'/>
                <Button variant='secondary' size='lg' className='flex-1 rounded-full'>Submit</Button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default OTPForm