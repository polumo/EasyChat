import { FunctionBarAndLinkmanList } from './FunctionBarAndLinkmanList/FunctionBarAndLinkmanList'
import { Toolbar } from './Toolbar/Toolbar'
import { ChatPanel } from './ChatPanel/ChatPanel'
import { ChatProvider } from '@/context/chat-provider'
import { Card, CardContent } from '@/components/ui/card'

function Main() {
  return (
    <Card className="w-4/5 h-4/5">
      <CardContent className="h-full p-0 grid grid-cols-[56px_25%_75%] shadow-[0_0_12px_#0003]">
        <Toolbar />

        <ChatProvider>
          <FunctionBarAndLinkmanList />
          <ChatPanel />
        </ChatProvider>

      </CardContent>
    </Card>
  )
}

export default Main
