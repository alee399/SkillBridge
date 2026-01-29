import React from 'react'
import { createBrowserRouter, Route, Router } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import VerifyOTP from './pages/auth/VerifyOTP'
import DashboardPage from './pages/Dashboard/DashboardPage'
import ProfilePage from './pages/Dashboard/ProfilePage'
import DashboardLayout from './components/Dashbard/DashboardLayout'
import CreditPage from './pages/Dashboard/CreditPage'
import ChatPage from './pages/Dashboard/ChatPage'
import FeedbackPage from './pages/Dashboard/FeedbackPage'
import ProfileEditPage from './pages/Dashboard/ProfileEditPage'
import Model from './common/Model'

const router = createBrowserRouter([
    {
        path : '/',
        element : <LandingPage />
    },
    {
        path : '/login',
        element : <Login />
    },
    {
        path : '/signup',
        element : <SignUp />
    },
    {
        path : '/verify',
        element : <VerifyOTP />
    },
    {
    path: "/dashboard",
    element: <DashboardLayout />, 
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
        children: [{
            path: "edit",
            element: <Model><ProfileEditPage /></Model>
          }]
      },
      {
        path: "credits",
        element: <CreditPage />,
      },
      {
        path: "chat&schedule",
        element : <ChatPage />
      },
      {
        path: "feedback&rating",
        element : <FeedbackPage />
      }
    ],
  },
])


export default router