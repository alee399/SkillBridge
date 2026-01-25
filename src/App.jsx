import React from 'react'
import LandingPage from './pages/LandingPage'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import VerifyOTP from './pages/auth/VerifyOTP'
import UserDashPage from './pages/userDashPage/UserDashPage'

const App = () => {
  return (
    <div>
      {/* <LandingPage /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <VerifyOTP /> */}
      <UserDashPage />
    </div>
  )
}

export default App