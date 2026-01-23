import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import OTPForm from '../../components/auth/OTPForm'

const VerifyOTP = () => {
  return (
    <AuthLayout variant='otp'>
      <OTPForm />
    </AuthLayout>
  )
}

export default VerifyOTP