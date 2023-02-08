import {
  Center,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  HStack,
  Link,
} from '@chakra-ui/react'

import star from '../assets/icons/star.svg'
import photo from '../assets/images/photo.png'
import prevArrow from '../assets/icons/previous.svg'
import nextArrow from '../assets/icons/next.svg'
import el12 from '../assets/icons/el12.svg'
import el13 from '../assets/icons/el13.svg'
import el14 from '../assets/icons/el14.svg'

export const Testimonials = () => {
  const image = {
    src: star,
    transition: '0.3s',
    _hover: {
      transform: 'scale(1.25)',
    },
  }

  return (
    <>
      <Image
        src={el12}
        pos="absolute"
        top="61.62%"
        left="77.12%"
        pointerEvents="none"
      />
      <Image
        src={el13}
        pos="absolute"
        top="65.31%"
        left="6%"
        pointerEvents="none"
      />
      <Image
        src={el14}
        pos="absolute"
        top="70.29%"
        left="53.98%"
        zIndex="2"
        pointerEvents="none"
      />
      <Center>
        <Flex
          direction="column"
          mt={{ base: '250px', xl: '248px' }}
          px={{ base: '35px', md: '70px', xl: '0px' }}
          w={{ base: '100%', xl: '1120px' }}
        >
          <Heading
            w={{ base: '100%', md: '450px' }}
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="36px"
            lineHeight="50px"
          >
            Testimonials
          </Heading>
          <Flex
            direction={{ base: 'column-reverse', lg: 'row' }}
            align="flex-start"
            pt="60px"
          >
            <Box>
              <HStack mt={{ base: '0px', xl: '85px' }} spacing="15.88px">
                <Image {...image} />
                <Image {...image} />
                <Image {...image} />
                <Image {...image} />
                <Image {...image} />
              </HStack>
              <Text
                mt="30px"
                w={{ base: '100%', md: '650px', lg: '450px' }}
                fontFamily="Mulish"
                fontWeight="400"
                fontSize="24px"
                lineHeight="36px"
              >
                “Quisque in lacus a urna fermentum euismod. Integer mi nibh,
                dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit
                sit amet turpis nec”
              </Text>
              <Text
                mt="40px"
                fontWeight="700"
                fontSize="22px"
                lineHeight="48px"
              >
                Edward Newgate
              </Text>
              <Text
                mt="-11px"
                fontWeight="400"
                fontSize="18px"
                lineHeight="48px"
              >
                Founder Circle
              </Text>
            </Box>
            <Box
              pos="relative"
              pl={{ lg: '100px', xl: '184px' }}
              w="100%"
              zIndex="1"
            >
              <Image
                src={photo}
                alt="Photo"
                minW={{ base: '300px', md: '384px' }}
                maxW={{ base: '0px', md: '384px' }}
              />
              <Flex
                pos="relative"
                left={{ base: '168px', md: '252px', lg: '252px' }}
                bottom="59px"
                justify="flex-end"
                align="flex-end"
                w="132px"
                h="60px"
                gap="22px"
                bg="#fff"
                borderRadius="16px 0px 0px 0px"
              >
                <Link href="#top">
                  <Image src={prevArrow} alt="Previous" />
                </Link>
                <Link href="#top">
                  <Image src={nextArrow} alt="Next" />
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Center>
    </>
  )
}
