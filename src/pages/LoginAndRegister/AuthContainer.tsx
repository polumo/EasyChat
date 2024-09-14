import type { ReactNode } from 'react'
import './AuthContainer.css'

interface AuthContainerProps {
  title: string
  children: ReactNode
}

function AuthContainer({ title, children }: AuthContainerProps) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/5 min-w-96 rounded-lg shadow-custom p-8 space-y-8">
        <h2 className="text-2xl font-bold text-center tracking-widest">{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default AuthContainer
