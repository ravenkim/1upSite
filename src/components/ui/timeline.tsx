import * as React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

const Timeline = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={className} {...props} />
))
Timeline.displayName = 'Timeline'

const TimelineItem = React.forwardRef<
    HTMLDivElement,
    React.LiHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('group relative pb-8 pl-8 sm:pl-44', className)}
        {...props}
    />
))
TimelineItem.displayName = 'TimelineItem'

const TimelineHeader = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'after:border-primary-foreground/95 after:bg-foreground mb-1 flex flex-col flex-wrap items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 sm:before:left-0 sm:before:ml-[10rem] sm:after:left-0 sm:after:ml-[10rem]',
            className,
        )}
        {...props}
    />
))
TimelineHeader.displayName = 'TimelineHeader'

const TimelineTitle = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('text-primary w-full text-xl font-bold', className)}
        {...props}
    >
        {children}
    </div>
))
TimelineTitle.displayName = 'TimelineTitle'

const TimelineTime = ({
    className,
    variant = 'default',
    ...props
}: React.ComponentProps<typeof Badge>) => {
    return (
        <Badge
            className={cn(
                'left-0 mb-3 inline-flex h-6 w-36 translate-y-0.5 items-center justify-center text-xs font-semibold uppercase sm:absolute sm:mb-0',
                className,
            )}
            variant={variant}
            {...props}
        >
            {props.children}
        </Badge>
    )
}
TimelineTime.displayName = 'TimelineTime'

const TimelineDescription = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'text-muted-foreground w-full min-w-0 text-wrap break-words',
            className,
        )}
        {...props}
    />
))
TimelineDescription.displayName = 'TimelineDescription'

export {
    Timeline,
    TimelineItem,
    TimelineHeader,
    TimelineTime,
    TimelineTitle,
    TimelineDescription,
}
