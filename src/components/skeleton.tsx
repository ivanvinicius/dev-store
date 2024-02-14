import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'div'>

export function Skeleton({ className, ...rest }: Props) {
  return (
    <div
      className={twMerge('animate-pulse rounded-md  bg-zinc-50/10', className)}
      {...rest}
    />
  )
}
