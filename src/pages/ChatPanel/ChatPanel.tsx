import { useChat } from '@/context/chat-provider'

export function ChatPanel() {
  const { currentLinkman } = useChat()

  return (
    <p>{currentLinkman.id ? currentLinkman.nickname : '赶紧选择联系人来聊天吧'}</p>
  )
}
