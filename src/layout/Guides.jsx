import {
  Center,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
} from '@chakra-ui/react'

import guidesImage from '../assets/images/guidesImage.png'

export const Guides = () => {
  const container = {
    mt: { base: '50px', xl: '237px' },
    px: { base: '50', xl: '0px' },
    align: 'center',
    w: { lg: '100%', xl: '1120px' },
  }

  const heading = {
    pt: '60px',
    w: { base: '100%', xl: '450px' },
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

  const imageContainer = {
    display: { base: 'none', lg: 'none', xl: 'block' },
    pl: '80px',
  }

  return (
    <Center>
      <Flex {...container}>
        <Box>
          <Heading {...heading}>Guides by Thousand Sunny</Heading>
          <Text {...text}>
            Packed with tips and advice from our on-the-ground experts, our city
            guides app (iOS and Android) is the ultimate resource before and
            during a trip.
          </Text>
          <Button {...button}>Download</Button>
        </Box>
        <Box {...imageContainer}>
          <Image src={guidesImage} />
        </Box>
      </Flex>
    </Center>
  )
}
