import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import SignUpForm from '../../components/auth/SignUpForm'

const SignUp = () => {
  return (
    <AuthLayout variant='signup'>
      <SignUpForm />
    </AuthLayout>
  )
}

export default SignUp