import React from 'react'
import { createBrowserRouter, Route, Router } from 'react-router-dom'
import LandingPage from './components/Dashbard/LandingPage'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import VerifyOTP from './pages/auth/VerifyOTP'
import DashboardPage from './pages/DashboardPage'
import ProfilePage from './pages/ProfilePage'
import DashboardLayout from './components/Dashbard/DashboardLayout'
import CreditPage from './pages/CreditPage'
import ChatPage from './pages/ChatPage'
import FeedbackPage from './pages/FeedbackPage'
import ProfileEdit from './pages/ProfileEdit'

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
    element: <DashboardLayout />, // layout
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
        children: [
          {
            path: 'edit',
            element: <ProfileEdit />
          }
        ]
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