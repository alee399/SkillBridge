import React, { useState } from 'react'
import AuthHeader from './AuthHeader'
import Input from '../../common/Input'
import Button from '../../common/Button'
import Divider from '../../common/divider'

const LoginForm = () => {
  return (
    <div className='max-w-130 min-h-260 mx-auto'>
      <AuthHeader title={"Welcome Back!"} para={"Sign in to continue your learning journey."}/>
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
      </div>
    </div>
  )
}

export default LoginForm