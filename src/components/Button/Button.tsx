import React from 'react'
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ children, variant = 'primary', className, ...props }: ButtonProps) => {
  const primary = 'bg-purple9 hover:bg-purple10 active:bg-purple8 disabled:bg-mauve9 disabled:opacity-30'
  const secondary = 'bg-purplea2 hover:bg-purplea3 active:bg-purplea1 disabled:bg-mauvea3'

  return (
    <button
      className={`cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple9 px-5 py-3 !font-semibold text-white rounded-[4px] opacity
        ${variant === 'primary' ? primary : secondary}  ${className}`
      }
      {...props}
    >
      {children}
    </button>
  )
}

export default Button