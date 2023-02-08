import { Flex, Link, Image, Box, Text } from '@chakra-ui/react'

export const CountryCard = ({ src, alt, t1, t2 }) => {
  return (
    <Flex h="261px">
      <Link _hover={{ textDecoration: 'none' }}>
        <Image
          src={src}
          alt={alt}
          borderRadius="8px"
          pos="relative"
          w={{ base: '450px', md: '420px' }}
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
