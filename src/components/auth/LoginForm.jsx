import React, { useState } from 'react'
import Header from './Header'
import Input from '../../common/ui/Input'
import Button from '../../common/ui/Button'
import Divider from '../../common/ui/Divider'
import SocialButton from '../../common/ui/SocialButton'
import GoogleIcon from '../../assets/authAssets/google-flat-icon.png'
import FbIcon from '../../assets/authAssets/fb-flat-icon.png'
import AuthRedirect from './AuthRedirect'

const LoginForm = () => {
  return (
    <div className='min-h-260 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-130 '>
        <Header title={"Welcome Back!"} subTitle={"Sign in to continue your learning journey."}/>
        <form>
          <Input 
            type={"email"} 
            placeholder={"Enter your email address."} 
            label={'Email Address'} 
          />
          <Input 
            type={'password'} 
            placeholder={"Enter your password."} 
            label={"Password"}  
            />

            <div className='mt-8'>
              <Button variant='secondary' size='lg' className='w-full rounded-full'>Login</Button>
            </div>
          </form>
          <div>
            <Divider />
            <div className='space-y-5 mb-8'>
              <SocialButton icon={GoogleIcon}>Login with Google</SocialButton>
              <SocialButton icon={FbIcon}>Login with Facebook</SocialButton>
            </div>
            <AuthRedirect />
          </div>
      </div>
    </div>
  )
}

export default LoginForm