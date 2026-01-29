import React from 'react'
import Header from './Header'
import Button from '../../common/ui/Button'
import OTPInput from './OTPInput'
import AuthRedirect from './AuthRedirect'
const OTPForm = () => {
  return (
    <div className='min-h-screen lg:px-25 px-10 flex items-center justify-center'>
      <div className='w-full text-center'>
        <Header 
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