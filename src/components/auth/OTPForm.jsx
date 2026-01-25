import React from 'react'
import AuthHeader from './AuthHeader'
import Button from '../../common/Button'
import OTPInput from './OTPInput'
const OTPForm = () => {
  const onComplete = (e) => {
    console.log(e)
  }
  return (
    <div className='min-h-260 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-130 '>
        <AuthHeader 
            title="Authenticate Your Account" 
            subTitle="Protecting your privacy is our top priority. Please confirm your account by entering the authorization code sent to your email. " 
        />
        <form>
            <OTPInput length={6} onComplete={onComplete}/>
            <div className='mt-8'>
                <Button variant='secondary' size='lg' className='w-full rounded-full'>Login</Button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default OTPForm