import { AvatarFallback } from '@radix-ui/react-avatar'
import { Power, Settings } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { IconWithTooltip } from './IconWithTooltip'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { ModeToggle } from '@/components/mode-toggle'
import { removeToken } from '@/lib/token'

export function Toolbar() {
  const navigate = useNavigate()

  const logout = () => {
    removeToken()
    navigate('/login')
  }

  return (
    <div className="h-full border-r flex items-center w-14 py-4 flex-col justify-between">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>Avatar</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-3">
        <ModeToggle />
        <IconWithTooltip Icon={Settings} content="设置" />
        <IconWithTooltip Icon={Power} content="注销" onClick={logout} />
      </div>
    </div>
  )
}
