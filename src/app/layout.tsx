import { ReactNode } from 'react'
import './styles/globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: {
    default: 'Ignite shop',
    template: '%s | Ignite shop',
  },
  description: 'Ignite shop next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
