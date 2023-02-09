import { Flex, Link, Image, Box, Text, keyframes } from '@chakra-ui/react'

export const CountryCard = ({ animDelay = '0s', src, alt, t1, t2 }) => {
  const upDown = keyframes`

  from {
    transform: translateX(0px)
  }
  
  50% {
    transform: translateX(20px);
  }

  to {
    transform: translateX(0px)
  }`

  const anim = `${upDown} 4s ease-in-out ${animDelay} infinite`

  return (
    <Flex h="261px" mb={{ base: '200px', md: '0px' }}>
      <Link _hover={{ textDecoration: 'none' }} animation={{ lg: anim }}>
        <Image
          src={src}
          alt={alt}
          borderRadius="8px"
          pos="relative"
          w={{ base: '400px', md: '420px' }}
        />
        <Box
          pos="relative"
          pt="6px"
          bottom="56px"
          w={{ base: '45.97%', lg: '60%', xl: '45.97%' }}
          bg="#fff"
          borderRadius="0px 6px 0px 0px"
        >
          <Text fontWeight="600" fontSize="18px" color="#042521">
            {t1}
          </Text>
          <Text fontSize="18px" color="#80918E">
            {t2}
          </Text>
        </Box>
      </Link>
    </Flex>
  )
}
