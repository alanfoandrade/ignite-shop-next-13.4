import { ReactNode } from 'react'
import Image from 'next/image'

import logoImg from '../../assets/logo.svg'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col items-start justify-center">
      <header className="mx-auto w-full max-w-[1180px] py-8">
        <Image src={logoImg} alt="" />
      </header>

      {children}
    </div>
  )
}
