import { Navigate, Route, Routes } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { getToken } from './lib/token'
import { ThemeProvider } from './components/theme-provider'
import { Login } from '@/pages/LoginAndRegister/Login'
import { Register } from '@/pages/LoginAndRegister/Register'
import Main from '@/pages/Main'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken())

  useEffect(() => {
    if (!isLoggedIn) {
      toast('暂未登录，重定向至登录页面...')
    }
  }, [isLoggedIn])

  return (
    <ThemeProvider defaultTheme="light" storageKey="project-theme">
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={isLoggedIn ? <Main /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster />
    </ThemeProvider>
  )
}

export default App
