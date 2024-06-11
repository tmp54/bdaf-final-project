// ref: https://github.com/shadcn-ui/ui/pull/1563#issuecomment-1925824519
import * as React from 'react'
import { cn } from '@/modules/ui/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startAdornment?: JSX.Element
  endAdornment?: JSX.Element
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startAdornment, endAdornment, ...props }, ref) => {
    const hasAdornment = Boolean(startAdornment) || Boolean(endAdornment)
    return (
      <>
        {hasAdornment ? (
          <div
            className='flex h-10 items-center justify-center gap-2 rounded-md border border-input bg-transparent px-3 ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50'
            data-disabled={props.disabled}
          >
            {startAdornment && (
              <div className={cn('text-muted-foreground')}>
                {startAdornment}
              </div>
            )}
            <input
              type={type}
              className={cn(
                'flex h-full w-full rounded-md border-none bg-transparent py-2 text-sm shadow-none outline-none file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-none focus-visible:shadow-none focus-visible:outline-none',
                className,
              )}
              ref={ref}
              {...props}
            />
            {endAdornment && (
              <div className={cn('text-muted-foreground')}>{endAdornment}</div>
            )}
          </div>
        ) : (
          <input
            type={type}
            className={cn(
              'flex h-10 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              className,
            )}
            ref={ref}
            {...props}
          />
        )}
      </>
    )
  },
)
Input.displayName = 'Input'

export { Input }
