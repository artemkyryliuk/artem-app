import { Center, Flex, Box, Image, Heading, Text } from '@chakra-ui/react'

import { IconElement } from './components/IconElement'
import { Button } from './components/Button'
import newway from '../assets/images/newway.png'
import el4 from '../assets/icons/el4.svg'
import el5 from '../assets/icons/el5.svg'

export const Newway = () => {
  return (
    <>
      <IconElement src={el4} top="19.52%" left="51.79%" />
      <IconElement src={el5} top="26.29%" left="76.81%" />
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
              fontSize="36px"
              fontFamily="Playfair Display"
              fontWeight="700"
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
              text="Learn more"
            />
          </Box>
        </Flex>
      </Center>
    </>
  )
}
