import * as React from 'react'; import { cn } from '@/lib/utils';
export function Button({className,...props}:React.ButtonHTMLAttributes<HTMLButtonElement>){return <button className={cn('inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-50',className)} {...props}/>}
