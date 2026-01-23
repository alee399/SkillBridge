import React from 'react'
import AuthHeader from './AuthHeader'
import Input from '../../common/Input'
import Button from '../../common/Button'
import Divider from '../../common/divider'
import SocialButton from '../../common/SocialButton'
import GoogleIcon from '../../assets/authAssets/google-flat-icon.png'
import FbIcon from '../../assets/authAssets/fb-flat-icon.png'
import AuthRedirect from './AuthRedirect'

const SignUpForm = () => {
  return (
    <div>
      <div className='min-h-260 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-130 '>
          <AuthHeader title={"Create your account"} subTitle={"Sign in to continue your learning journey."}/>
          <form>
            <Input 
              type={"text"}
              label={'Full Name'} 
              placeholder={"Enter your Full Name"} 
            />
            <Input 
              type={"email"} 
              label={'Email Address'} 
              placeholder={"johndoe@gmail.com"} 
            />
            <Input 
              type={'password'} 
              label={"Password"}
              placeholder={"Enter your password."}
              variant='signup'  
              />

              <div className='mt-8'>
                <Button variant='secondary' size='lg' className='w-full rounded-full'>Sign Up</Button>
              </div>
            </form>
            <div>
              <Divider />
              <div className='space-y-5'>
                <SocialButton icon={GoogleIcon}>Login with Google</SocialButton>
                <SocialButton icon={FbIcon}>Login with Facebook</SocialButton>
              </div>
              <AuthRedirect variant='signup' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm