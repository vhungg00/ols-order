import React, { useEffect, useRef, useState } from 'react'
import { Box, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

type LazyLoadImageProps = {
  src: string
  alt?: string
  placeholderSrc?: string
  loadDelay?: number
  threshold?: number
}

const LazyLoadImage: React.FC<LazyLoadImageProps> = ({
  src,
  alt = '',
  placeholderSrc = 'https://via.placeholder.com/300', // Default placeholder image
  loadDelay = 0,
  threshold = 0,
}) => {
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement | null>(null) // Reference to the Box instead of the image

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (loadDelay > 0) {
              setTimeout(() => setIsInView(true), loadDelay)
            } else {
              setIsInView(true)
            }
            observer.disconnect()
          }
        })
      },
      { threshold },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [threshold, loadDelay])

  return (
    <ImageStyle
      ref={imgRef}
      position="relative"
      width="100%"
      height="200px"
      borderRadius="md"
      bgSize="cover"
      bgPos="center"
      overflow="hidden"
    >
      {isInView && (
        <Image
          src={src}
          alt={alt}
          objectFit="cover"
          width="100%"
          height="100%"
          transition="opacity 0.3s ease-in-out"
          opacity={isInView ? 1 : 0} // Image fades in as it loads
        />
      )}
    </ImageStyle>
  )
}

export default LazyLoadImage

const ImageStyle = styled(Box)`
  @keyframes placeHolderShimmer {
    0% {
      background-position: -800px 0;
    }
    100% {
      background-position: 800px 0;
    }
  }

  & {
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background-color: #f6f7f8;
    // background: linear-gradient(to right, #eeeeee 0%, #bbbbbb 25%, #eeeeee 44%);
    background-size: 800px 104px;
    position: relative;
  }
`
