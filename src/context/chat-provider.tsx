import { createContext, useContext, useState } from 'react'
import type { Linkman } from '@/pages/FunctionBarAndLinkmanList/LinkmanList'

interface ChatProviderProps {
  children: React.ReactNode
}

interface ChatProviderState {
  currentLinkman: Linkman
  setCurrentLinkman: React.Dispatch<React.SetStateAction<Linkman>>
}

const initialState: ChatProviderState = {
  currentLinkman: {
    id: '',
    nickname: '',
  },
  setCurrentLinkman: () => null,
}

const ChatProviderContext = createContext<ChatProviderState>(initialState)

export function ChatProvider({ children }: ChatProviderProps) {
  const [currentLinkman, setCurrentLinkman] = useState<Linkman>({ id: '', nickname: '' })

  return (
    <ChatProviderContext.Provider value={{ currentLinkman, setCurrentLinkman }}>
      {children}
    </ChatProviderContext.Provider>
  )
}

export const useChat = () => {
  return useContext(ChatProviderContext)
}
