import React from 'react'

type	ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}
const Button = ({ children, variant }: ButtonProps) => {
  const primary = ''
  const secondary = ''

  return (
    <button  className={`${variant === 'primary' ? primary : secondary} py-2 px-4 bg-purple-2/82 rounded-xs`}>
      {children}
    </button>
  )
}

export default Button