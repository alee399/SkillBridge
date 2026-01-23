import React from 'react'
import AuthSidebar from '../components/auth/AuthSidebar'

const AuthLayout = ({ children }) => {
  return (
    <div className='min-h-260 w-full grid lg:grid-cols-2 grid-cols-1'>
        <div>
            {children}
        </div>
        <AuthSidebar  />
    </div>
  )
}

export default AuthLayout