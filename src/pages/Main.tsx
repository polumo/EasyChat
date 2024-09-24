import { FunctionBarAndLinkmanList } from './FunctionBarAndLinkmanList/FunctionBarAndLinkmanList'
import { Toolbar } from './Toolbar/Toolbar'
import { Card, CardContent } from '@/components/ui/card'

function Main() {
  return (
    <Card className="h-[calc(100vh-24px)] m-3">
      <CardContent className="h-full p-0 grid grid-cols-[56px_25%_75%]">
        <Toolbar />
        <FunctionBarAndLinkmanList />
        <div>this is chat panel</div>
      </CardContent>
    </Card>
  )
}

export default Main
