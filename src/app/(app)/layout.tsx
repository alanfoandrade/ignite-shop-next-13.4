import { ReactNode } from 'react'

import Header from '@/components/Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col items-start justify-center">
      <header className="mx-auto w-full max-w-[1180px] py-8">
        <Header />
      </header>

      {children}
    </div>
  )
}
