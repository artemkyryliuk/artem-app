import {
  Center,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
} from '@chakra-ui/react'

import guides from '../assets/images/guides.png'
import el9 from '../assets/icons/el9.svg'
import el10 from '../assets/icons/el10.svg'
import el11 from '../assets/icons/el11.svg'

export const Guides = () => {
  return (
    <>
      <Image
        src={el9}
        pos="absolute"
        top="47.33%"
        left="89.36%"
        pointerEvents="none"
      />
      <Image
        src={el10}
        pos="absolute"
        top="48.19%"
        left="17.81%"
        pointerEvents="none"
      />
      <Image
        src={el11}
        pos="absolute"
        top="54.19%"
        left="41.44%"
        pointerEvents="none"
      />
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
              color="#fff"
              bg="#FB8F1D"
              borde="1px solid #FB8F1D"
              borderRadius="8px"
              fontWeight="500"
              fontSize="15px"
              _hover={{
                bg: '#202336',
                border: '#202336',
                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              Download
            </Button>
          </Box>
          <Box display={{ base: 'none', lg: 'block' }} pl="80px">
            <Image src={guides} minW="300px" w="599px" />
          </Box>
        </Flex>
      </Center>
    </>
  )
}
