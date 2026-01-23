import React from 'react'
import AuthSidebar from '../components/auth/AuthSidebar'

const AuthLayout = ({ children, variant = 'login', showSidebar = true }) => {
  return (
    <div className='min-h-260 w-full grid lg:grid-cols-2 grid-cols-1'>
        {
          showSidebar && variant == 'signup' 
          ? <AuthSidebar variant='signup'/>  
          : ""
        }
        <div>
          {children}
        </div>
        {
          showSidebar && (variant == 'login' || variant == 'otp') 
          ? <AuthSidebar variant='login'/>  
          : ""
        }
    </div>
  )
}

export default AuthLayout