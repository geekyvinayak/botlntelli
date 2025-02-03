import Image from 'next/image'
import { useState } from 'react'

interface ImageWithBlurProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function ImageWithBlur({ src, alt, width, height, className }: ImageWithBlurProps) {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoadingComplete={() => setLoading(false)}
        loading="lazy"
        quality={75}
      />
    </div>
  )
}

