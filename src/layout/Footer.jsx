import { Center, Box, Flex, Link, Image, Text, HStack } from '@chakra-ui/react'

import logo from '../assets/icons/logo.svg'
import twitter from '../assets/icons/twitter.svg'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedin from '../assets/icons/linkedin.svg'
import youtube from '../assets/icons/youtube.svg'

export const Footer = () => {
  const upContainer = {
    pos: 'relative',
    mt: { base: '100px', xl: '271px' },
    px: { base: '50px', xl: '0px' },
    w: { base: '100%', xl: '1600px' },
    h: '396px',
    fontFamily: 'Mulish',
    bg: '#F9F9FB',
    color: '#848484',
  }

  const innerContainer = {
    pt: '78px',
    direction: { sm: 'column', md: 'row' },
  }

  const info = {
    direction: 'column',
    display: { base: 'none', xl: 'block' },
    pt: '10px',
    w: '498px',
  }

  const text = {
    pt: '26px',
    w: '341px',
    fontWeight: '300',
    fontSize: '18px',
    lineHeight: '28px',
  }

  const rights = {
    pt: '56px',
    w: '391px',
    fontWeight: '300',
    fontSize: '18px',
    lineHeight: '28px',
  }

  const linksColumn = {
    direction: 'column',
    fontWeight: '300',
    fontSize: '18px',
    lineHeight: '38px',
  }

  const col1 = {
    w: '273px',
  }

  const col2 = {
    w: '287px',
  }

  const navLink = {
    fontWeight: '700',
    fontSize: '19px',
    lineHeight: '60px',
    color: '#000',
  }

  const downContainer = {
    w: { base: '100%', xl: '1600px' },
    h: '86px',
    bg: '#F9F9FB',
  }

  const innerContainer2 = {
    direction: 'column',
    align: 'center',
  }

  const line = {
    w: { base: '290%', xl: '1220px' },
    h: '0.6px',
    bg: '#C4C4C4',
  }

  const iconsStack = {
    align: 'flex-end',
    spacing: '35px',
    pt: '31px',
  }

  return (
    <>
      <Center>
        <Box {...upContainer}>
          <Center>
            <Flex {...innerContainer}>
              <Flex {...info}>
                <Link href="#top">
                  <Image src={logo} alt="Site Logo" />
                </Link>
                <Text {...text}>
                  Plan and book your perfect trip with expert advice, travel
                  tips destination information from us
                </Text>
                <Text {...rights}>
                  ©2020 Thousand Sunny. All rights reserved
                </Text>
              </Flex>
              <Flex {...linksColumn} {...col1}>
                <Link href="#top" {...navLink}>
                  Destinations
                </Link>
                <Link href="#top">Africa</Link>
                <Link href="#top">Antarctica</Link>
                <Link href="#top">Asia</Link>
                <Link href="#top">Europe</Link>
                <Link href="#top">America</Link>
              </Flex>
              <Flex {...linksColumn} {...col2}>
                <Link href="#top" {...navLink}>
                  Shop
                </Link>
                <Link href="#top">Destination Guides</Link>
                <Link href="#top">Pictorial & Gifts</Link>
                <Link href="#top">Special Offers</Link>
                <Link href="#top">Delivery Times</Link>
                <Link href="#top">FAQs</Link>
              </Flex>
              <Flex {...linksColumn}>
                <Link href="#top" {...navLink}>
                  Interests
                </Link>
                <Link href="#top">Adventure Travel</Link>
                <Link href="#top">Art And Culture</Link>
                <Link href="#top">Wildlife And Nature</Link>
                <Link href="#top">Family Holidays</Link>
                <Link href="#top">Food And Drink</Link>
              </Flex>
            </Flex>
          </Center>
        </Box>
      </Center>
      <Center>
        <Box {...downContainer}>
          <Center>
            <Flex {...innerContainer2}>
              <Box {...line} />
              <HStack {...iconsStack}>
                <Link href="#top">
                  <Image src={twitter} alt="Twitter Icon" />
                </Link>
                <Link href="#top">
                  <Image src={facebook} alt="Facebook Icon" />
                </Link>
                <Link href="#top">
                  <Image src={instagram} alt="Instagram Icon" />
                </Link>
                <Link href="#top">
                  <Image src={linkedin} alt="Linkedin Icon" />
                </Link>
                <Link href="#top">
                  <Image src={youtube} alt="Youtube Icon" />
                </Link>
              </HStack>
            </Flex>
          </Center>
        </Box>
      </Center>
    </>
  )
}
