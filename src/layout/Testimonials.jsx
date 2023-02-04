import { Center, Box, Flex, Heading, Text, Image } from '@chakra-ui/react'

import stars from '../assets/icons/stars.svg'
import photo from '../assets/images/photo.png'
import prevArrow from '../assets/icons/previous.svg'
import nextArrow from '../assets/icons/next.svg'

export const Testimonials = () => {
  const container = {
    direction: 'column',
    mt: { base: '50px', xl: '248px' },
    px: { base: '50', xl: '0px' },
    w: { lg: '100%', xl: '1120px' },
  }

  const starsContainer = {
    mt: { base: '0px', xl: '85px' },
  }

  const heading = {
    w: '450px',
    fontFamily: 'Playfair Display',
    fontWeight: '700',
    fontSize: '36px',
    lineHeight: '50px',
  }

  const content = {
    direction: { base: 'column-reverse', lg: 'row' },
    align: 'flex-start',
    pt: '60px',
  }

  const text = {
    mt: '30px',
    w: { lg: '450px' },
    fontFamily: 'Mulish',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '36px',
  }

  const lastName = {
    mt: '40px',
    fontWeight: '700',
    fontSize: '22px',
    lineHeight: '48px',
  }

  const profession = {
    mt: '-11px',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '48px',
  }

  const imageAndArrows = {
    pos: 'relative',
    pl: { lg: '100px', xl: '184px' },
    w: '100%',
    zIndex: '1',
  }

  const rectangle = {
    pos: 'relative',
    left: '252px',
    bottom: '60px',
    justify: 'flex-end',
    align: 'flex-end',
    w: '132px',
    h: '60px',
    gap: '22px',
    bg: '#fff',
    borderRadius: '16px 0px 0px 0px',
  }

  return (
    <Center>
      <Flex {...container}>
        <Heading {...heading}>Testimonials</Heading>
        <Flex {...content}>
          <Box>
            <Image src={stars} alt="Stars" {...starsContainer} />
            <Text {...text}>
              “Quisque in lacus a urna fermentum euismod. Integer mi nibh,
              dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit
              amet turpis nec”
            </Text>
            <Text {...lastName}>Edward Newgate</Text>
            <Text {...profession}>Founder Circle</Text>
          </Box>
          <Box {...imageAndArrows}>
            <Image src={photo} alt="Photo" />
            <Flex {...rectangle}>
              <Image src={prevArrow} alt="Previous" />
              <Image src={nextArrow} alt="Next" />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Center>
  )
}
