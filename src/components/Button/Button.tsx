import React from 'react'
import { Button as BtnMtw, ButtonProps as BtnMtwProps } from '@material-tailwind/react'
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ children, variant = 'primary', className, ...props }: ButtonProps) => {
  const primary = 'bg-purple9 hover:bg-purple10 active:bg-purple8 disabled:bg-mauve9 disabled:opacity-30'
  const secondary = 'bg-purplea2 hover:bg-purplea3 active:bg-purplea1 disabled:bg-mauvea3'

  return (
    <BtnMtw
      className={`cursor-pointer outline-none px-5 rounded-[4px] opacity
        ${variant === 'primary' ? primary : secondary} ${className}`
      }
      {...props}
    >
      {children}
    </BtnMtw>
  )
}

export default Button