import {
  Center,
  Flex,
  Box,
  Image,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react'

import newway from '../assets/images/newway.png'
import el4 from '../assets/icons/el4.svg'
import el5 from '../assets/icons/el5.svg'

export const Newway = () => {
  return (
    <>
      <Image
        src={el4}
        pos="absolute"
        top="19.52%"
        left="51.79%"
        pointerEvents="none"
      />
      <Image
        src={el5}
        pos="absolute"
        top="26.29%"
        left="76.81%"
        pointerEvents="none"
      />
      <Center>
        <Flex
          align="center"
          mt={{ base: '250px', xl: '286px' }}
          ml={{ base: '0px', xl: '-114px' }}
          px={{ base: '35px', md: '70px', xl: '0px' }}
          w={{ base: '100%', xl: '1306px' }}
        >
          <Box display={{ base: 'none', lg: 'block' }} pr="102px">
            <Image src={newway} minW="300px" w="659px" />
          </Box>
          <Box>
            <Heading
              w={{ base: '100%', xl: '356px' }}
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="36px"
              lineHeight="50px"
            >
              A new way to explore the world
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
              For decades travellers have reached for Lonely Planet books when
              looking to plan and execute their perfect trip, but now, they can
              also let Lonely Planet Experiences lead the way
            </Text>
            <Button
              mt="39px"
              w={{ base: '180px', xl: '164px' }}
              h={{ base: '52px', xl: '48px' }}
              color="#fff"
              bg="#FB8F1D"
              border="1px solid #FB8F1D"
              borderRadius="8px"
              fontWeight="600"
              fontSize="15px"
              _hover={{
                bg: '#202336',
                border: '#202336',
                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              Learn more
            </Button>
          </Box>
        </Flex>
      </Center>
    </>
  )
}
