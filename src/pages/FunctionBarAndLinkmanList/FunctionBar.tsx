import { PlusCircle, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function FunctionBar() {
  return (
    <div className="flex items-center px-2 py-4 gap-4">
      <Input Icon={Search} placeholder="搜索" className="h-8 flex-1" />
      <PlusCircle fill="#1976d2" className="cursor-pointer text-white flex-none" />
    </div>
  )
}
