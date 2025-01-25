import React from 'react'

type	ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}
const Button = ({ children, variant }: ButtonProps) => {
  const primary = ''
  const secondary = ''

  return (
    <button  className={`${variant === 'primary' ? primary : secondary} py-3 px-4 bg-purple-a2 bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-10 rounded-sm `}>
      {children}
    </button>
  )
}

export default Button