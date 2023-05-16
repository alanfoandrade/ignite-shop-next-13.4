import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${className} mt-auto rounded-lg border-0 bg-myGreen-500 p-5 text-lg font-bold text-white transition-opacity duration-200 ease-in-out hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {children}
    </button>
  )
}
