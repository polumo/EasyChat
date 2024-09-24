import type { ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface AuthContainerProps {
  title: string
  children: ReactNode
}

export function AuthContainer({ title, children }: AuthContainerProps) {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Card className="rounded-lg w-1/5 min-w-96">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center tracking-widest">{title}</h2>
          {children}
        </CardContent>
      </Card>
    </div>
  )
}
