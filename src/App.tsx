import { Navigate, Route, Routes } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { getToken } from './lib/token'
import Login from '@/pages/LoginAndRegister/Login'
import Main from '@/pages/Main'
import Register from '@/pages/LoginAndRegister/Register'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken())

  useEffect(() => {
    if (!isLoggedIn) {
      toast('暂未登录，重定向至登录页面...')
    }
  }, [isLoggedIn])

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/chat" />} />
        <Route path="/chat" element={isLoggedIn ? <Main /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
