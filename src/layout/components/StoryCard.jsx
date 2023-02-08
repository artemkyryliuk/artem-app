import { Flex, Link, Image, Box, Text } from '@chakra-ui/react'

export const StoryCard = ({ src, alt, title, text }) => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row', lg: 'column' }}
      w={{ base: '100%', lg: '261px' }}
      borderRadius={{ base: '0px', lg: '8px' }}
      overflow="hidden"
    >
      <Box>
        <Link href="#top">
          <Image
            src={src}
            alt={alt}
            minW={{ base: '100%', md: '270px', lg: '100%' }}
            borderRadius={{ base: '8px', lg: '0px' }}
          />
        </Link>
      </Box>
      <Box h={{ base: '100%', md: '233px' }}>
        <Text
          pt={{ base: '20px', md: '14px' }}
          pl={{ md: '50px', lg: '0px' }}
          fontWeight="700"
          fontSize={{ base: '6vw', md: '24px', lg: '19px' }}
          lineHeight={{ base: '134%', md: '30px' }}
          noOfLines={{ base: 3, md: 2 }}
        >
          {title}
        </Text>
        <Text
          pt="13px"
          pr="30px"
          pl={{ md: '50px', lg: '0px' }}
          fontWeight="400"
          fontSize={{ base: '4.8vw', md: '18px', lg: '15px' }}
          lineHeight={{ base: '134%', md: '26px' }}
          color="#7D7987"
          noOfLines={3}
        >
          {text}
        </Text>
        <Text
          pt="23px"
          pl={{ md: '50px', lg: '0px' }}
          fontWeight="600"
          fontSize={{ base: '6vw', md: '24px', lg: '15px' }}
          lineHeight={{ base: '120%', md: '28px' }}
          color="#FB8F1D"
        >
          <Link
            href="#top"
            _hover={{ textDecoration: 'none', color: '#202336' }}
          >
            Read more
          </Link>
        </Text>
      </Box>
    </Flex>
  )
}
