import React from 'react'
import { Button as BtnMtw, ButtonProps as BtnMtwProps } from '@material-tailwind/react'
type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
} & BtnMtwProps
const Button = ({ children, variant, className, ...props }: ButtonProps) => {
  const primary = ''
  const secondary = ''

  return (
    <BtnMtw
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      {...props}
      className={`cursor-pointer bg-purple-a2 hover:bg-purple-a3 active:bg-purple-a1 disabled:bg-mauve-a3 outline-none px-5 rounded-sm ${className}`}
    >
      {children}
    </BtnMtw>
  )
}

export default Button