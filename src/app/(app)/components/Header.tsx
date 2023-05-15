import Image from 'next/image'

import logoImg from '@/assets/logo.svg'
import Link from 'next/link'

export default function Header() {
  return (
    <Link prefetch={false} href="/">
      <Image src={logoImg} alt="" />
    </Link>
  )
}
