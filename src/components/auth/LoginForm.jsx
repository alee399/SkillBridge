import React, { useState } from 'react'
import AuthHeader from './AuthHeader'
import Input from '../../common/Input'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [passowrd, setPassword] = useState('');


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
      </form>
    </div>
  )
}

export default LoginForm