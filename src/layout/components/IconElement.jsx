import { Image } from '@chakra-ui/react'

export const IconElement = ({ src, top, left, zIndex = '0' }) => {
  return (
    <Image
      display={{ base: 'none', lg: 'block' }}
      src={src}
      pos="absolute"
      top={top}
      left={left}
      pointerEvents="none"
      zIndex={zIndex}
    />
  )
}
