import { Center, Flex, Box, Heading, Text, Image } from '@chakra-ui/react'

import { IconElement } from './components/IconElement'
import { Button } from './components/Button'
import guides from '../assets/images/guides.png'
import el9 from '../assets/icons/el9.svg'
import el10 from '../assets/icons/el10.svg'
import el11 from '../assets/icons/el11.svg'

export const Guides = () => {
  return (
    <>
      <IconElement src={el9} top="47.33%" left="89.36%" />
      <IconElement src={el10} top="48.19%" left="17.81%" />
      <IconElement src={el11} top="54.19%" left="41.44%" />
      <Center>
        <Flex
          align="center"
          mt={{ base: '308px', xl: '295px' }}
          px={{ base: '35px', md: '70px', xl: '0px' }}
          w={{ base: '100%', xl: '1120px' }}
        >
          <Box>
            <Heading
              pt="60px"
              w={{ base: '100%', xl: '450px' }}
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="36px"
              lineHeight="50px"
            >
              Guides by Thousand Sunny
            </Heading>
            <Text
              mt="20px"
              w={{ md: '650px', lg: '500px', xl: '450px' }}
              fontFamily="Mulish"
              fontWeight="300"
              fontSize="17px"
              lineHeight="30px"
              color="#7D7987"
            >
              Packed with tips and advice from our on-the-ground experts, our
              city guides app (iOS and Android) is the ultimate resource before
              and during a trip.
            </Text>
            <Button
              mt="39px"
              w={{ base: '180px', xl: '164px' }}
              h={{ base: '52px', xl: '48px' }}
              text="Download"
            />
          </Box>
          <Box display={{ base: 'none', lg: 'block' }} pl="80px">
            <Image src={guides} minW="300px" w="599px" />
          </Box>
        </Flex>
      </Center>
    </>
  )
}
