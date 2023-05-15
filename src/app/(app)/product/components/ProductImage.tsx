import Image from 'next/image'

import productImg from '@/assets/shirt-01.png'

interface ProductImageProps {
  imageUrl?: string
}

export function ProductImage({ imageUrl }: ProductImageProps) {
  return (
    <div className="flex h-[656px] w-full max-w-[576px] items-center justify-center rounded-lg bg-gradient-to-b from-[#1ea483] from-0% to-[#7465d4] to-100% p-1">
      <Image
        className="object-cover"
        src={imageUrl || productImg}
        alt=""
        width={520}
        height={520}
      />
    </div>
  )
}
