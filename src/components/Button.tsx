import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link, type LinkProps } from 'react-router-dom'

type ButtonProps = {
  children: ReactNode
  icon?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, icon = true, ...props }: ButtonProps) {
  return <button className="button" {...props}>{children}{icon && <ArrowUpRight size={16} aria-hidden="true" />}</button>
}

export function ButtonLink({ children, ...props }: LinkProps) {
  return <Link className="button" {...props}>{children}<ArrowUpRight size={16} aria-hidden="true" /></Link>
}
