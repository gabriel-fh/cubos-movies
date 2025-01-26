import React from 'react'
import { Button as BtnMtw, ButtonProps as BtnMtwProps } from '@material-tailwind/react'
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ children, variant = 'primary', className, ...props }: ButtonProps) => {
  const primary = 'bg-purple-9 hover:bg-purple-10 active:bg-purple-8 disabled:bg-mauve-9 disabled:opacity-30'
  const secondary = 'bg-purple-a2 hover:bg-purple-a3 active:bg-purple-a1 disabled:bg-mauve-a3'

  return (
    <BtnMtw
      className={`cursor-pointer outline-none px-5 rounded-sm opacity
        ${variant === 'primary' ? primary : secondary} ${className}`
      }
      {...props}
    >
      {children}
    </BtnMtw>
  )
}

export default Button