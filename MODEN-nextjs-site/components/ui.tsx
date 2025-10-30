import { clsx } from 'clsx'
import React from 'react'

export function Button({ children, className='', variant='default', size='md', ...props } : any){
  const base = 'inline-flex items-center justify-center border rounded-md transition'
  const sizes: any = { md: 'px-4 py-2 text-sm', lg: 'px-5 py-2.5 text-sm', sm: 'px-3 py-1.5 text-xs' }
  const variants: any = {
    default: 'bg-neutral-900 text-white hover:bg-neutral-800 border-neutral-900',
    outline: 'bg-transparent text-neutral-800 border-neutral-300 hover:bg-white'
  }
  return <button className={clsx(base, sizes[size], variants[variant], 'rounded-2xl', className)} {...props}>{children}</button>
}
