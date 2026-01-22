import React from 'react'
import AuthSidebar from '../components/auth/AuthSidebar'

const AuthLayout = ({ children }) => {
  return (
    <div className='h-screen w-full grid lg:grid-cols-2 grid-cols-1'>
        <AuthSidebar />
        <div>
            {children}
        </div>
    </div>
  )
}

export default AuthLayout