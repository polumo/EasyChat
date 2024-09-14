import * as React from 'react'
import type { LucideProps } from 'lucide-react'
import { ArrowBigUpDash, EyeIcon, EyeOffIcon } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ Icon, className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [capsLockActive, setCapsLockActive] = React.useState(false)
    const [strokeWidth, setStrokeWidth] = React.useState(1)

    const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (
      event,
    ) => {
      const capsLockOn = event.getModifierState('CapsLock')
      setCapsLockActive(capsLockOn)
    }

    const togglePasswordVisibility = () => setShowPassword(!showPassword)

    const inputClasses = cn(
      'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
      Icon && 'pl-10',
      type === 'password' && (!capsLockActive ? 'pr-8' : 'pr-16'),
      className,
    )

    const onFocus = (event: React.FocusEvent<HTMLInputElement, Element>) => {
      setStrokeWidth(2)
      if (props.onFocus) {
        props.onFocus(event)
      }
    }

    const onBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
      setStrokeWidth(1)
      if (props.onBlur) {
        props.onBlur(event)
      }
    }

    return (
      <div className={cn('relative', className)}>
        {Icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon size={18} strokeWidth={strokeWidth} />
          </div>
        )}
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          className={inputClasses}
          onKeyDown={handleKeyPress}
          ref={ref}
          {...props}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {type === 'password' && (
          <div className="absolute right-0 flex items-center pr-3 -translate-y-1/2 top-1/2 gap-x-1">
            {showPassword
              ? (
                  <EyeOffIcon
                    className="cursor-pointer"
                    onClick={togglePasswordVisibility}
                    size={18}
                  />
                )
              : (
                  <EyeIcon
                    className="cursor-pointer"
                    onClick={togglePasswordVisibility}
                    size={18}
                  />
                )}
            {capsLockActive && type === 'password' && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ArrowBigUpDash size={18} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Caps Lock is on!</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
