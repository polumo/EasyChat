import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { useChat } from '@/context/chat-provider'

export interface Linkman {
  id: string
  nickname: string
  avatar?: string
}

export function LinkmanList() {
  const [linkmanList, setLinkmanList] = useState<Linkman[]>([])

  const { currentLinkman, setCurrentLinkman } = useChat()

  useEffect(() => {
    setLinkmanList([
      { id: '1', nickname: 'user1' },
      { id: '2', nickname: 'user2' },
      { id: '3', nickname: 'user3' },
      { id: '4', nickname: 'user4' },
    ])
  }, [])

  return (
    <ul className="px-2 space-y-1 overflow-y-auto">
      {
        linkmanList.map(linkman => (
          <li
            key={linkman.id}
            className={cn(
              'h-20 px-3 rounded-lg flex items-center gap-4',
              currentLinkman.id === linkman.id ? 'bg-[#e5effa]' : 'cursor-pointer hover:bg-[#f6f6f6]',
            )}
            onClick={() => setCurrentLinkman(linkman)}
          >
            <Avatar className="h-12 w-12 object-cover">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{linkman.nickname}</AvatarFallback>
            </Avatar>
            {linkman.nickname}
          </li>
        ))
      }
    </ul>
  )
}
