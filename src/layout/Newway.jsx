import {
  Center,
  Flex,
  Box,
  Image,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react'

import newwayImage from '../assets/images/newwayImage.png'

export const Newway = () => {
  const container = {
    px: { base: '50', xl: '0px' },
    align: 'center',
    mt: { base: '50px', xl: '286px' },
    w: { lg: '100%', xl: '1306px' },
    ml: { base: '0px', xl: '-114px' },
  }

  const imageContainer = {
    display: { base: 'none', xl: 'block' },
    pr: '102px',
  }

  const heading = {
    w: { base: '100%', xl: '356px' },
    fontFamily: 'Playfair Display',
    fontWeight: '700',
    fontSize: '36px',
    lineHeight: '50px',
  }

  const text = {
    mt: '20px',
    w: { base: '100%', xl: '450px' },
    fontFamily: 'Mulish',
    fontWeight: '300',
    fontSize: '17px',
    lineHeight: '30px',
    color: '#7D7987',
  }

  const button = {
    mt: '39px',
    w: '164px',
    h: '48px',
    color: '#fff',
    bg: '#FB8F1D',
    border: '1px solid #FB8F1D',
    borderRadius: '8px',
    fontWeight: '500',
    fontSize: '15px',

    _hover: {
      bg: '#202336',
      border: '#202336',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
    },
  }

  return (
    <Center>
      <Flex {...container}>
        <Box {...imageContainer}>
          <Image src={newwayImage} />
        </Box>
        <Box>
          <Heading {...heading}>A new way to explore the world</Heading>
          <Text {...text}>
            For decades travellers have reached for Lonely Planet books when
            looking to plan and execute their perfect trip, but now, they can
            also let Lonely Planet Experiences lead the way
          </Text>
          <Button {...button}>Learn more</Button>
        </Box>
      </Flex>
    </Center>
  )
}
