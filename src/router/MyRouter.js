import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../pages/AuthPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'

function MyRouter() {
  return (
    <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<HomePage />} />
    </Routes>
  )
}

export default MyRouter