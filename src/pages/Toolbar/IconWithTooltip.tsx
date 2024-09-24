import type { LucideProps } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

interface Props {
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>
  content: string
  onClick?: () => void
}

export function IconWithTooltip({ Icon, content, onClick }: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" onClick={onClick}>
            <Icon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" className="text-white bg-[#373737]">{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
