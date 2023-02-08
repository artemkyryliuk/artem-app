import { Center, Box, Flex, Link, Image, Text, HStack } from '@chakra-ui/react'

import logo from '../assets/icons/logo.svg'
import twitter from '../assets/icons/twitter.svg'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedin from '../assets/icons/linkedin.svg'
import youtube from '../assets/icons/youtube.svg'

export const Footer = () => {
  const navLink = {
    fontWeight: '700',
    fontSize: '19px',
    lineHeight: '60px',
    color: '#000',
    _hover: {
      textDecoration: 'none',
    },
  }

  const link = {
    href: '#top',
    fontWeight: '300',
    fontSize: '18px',
    lineHeight: '38px',
    textDecoration: 'none',
    _hover: {
      textDecoration: 'none',
      color: '#202336',
    },
  }

  return (
    <>
      <Center>
        <Box
          pos="relative"
          mt={{ base: '250px', xl: '271px' }}
          px={{ base: '35px', xl: '0px' }}
          w={{ base: '100vw', xl: '1600px' }}
          h={{ base: '120%', md: '580px', xl: '396px' }}
          fontFamily="Mulish"
          bg="#F9F9FB"
          color="#848484"
        >
          <Center>
            <Flex pt="78px" direction={{ base: 'column', md: 'row' }}>
              <Flex direction={{ base: 'column', xl: 'row' }}>
                <Flex>
                  <Flex
                    direction="column"
                    pt="10px"
                    w={{ base: '100%', md: '75%', xl: '498px' }}
                  >
                    <Link href="#top">
                      <Image
                        src={logo}
                        alt="Site Logo"
                        transition="0.3s"
                        _hover={{ transform: 'scale(1.2)' }}
                      />
                    </Link>
                    <Text
                      pt="26px"
                      w={{ base: '100%', xl: '341px' }}
                      fontWeight="300"
                      fontSize="18px"
                      lineHeight="28px"
                    >
                      Plan and book your perfect trip with expert advice, travel
                      tips destination information from us
                    </Text>
                    <Text
                      pt={{ base: '16px', xl: '56px' }}
                      w={{ base: '100%', lg: '391px' }}
                      fontWeight="300"
                      fontSize="18px"
                      lineHeight="28px"
                    >
                      ©2020 Thousand Sunny. All rights reserved
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  direction={{ base: 'column', md: 'row' }}
                  pt={{ base: '30px', xl: '0px' }}
                  pb={{ base: '30px', md: '0px' }}
                >
                  <Flex direction="column" w={{ md: '36%', xl: '273px' }}>
                    <Link {...navLink}>Destinations</Link>
                    <Link {...link}>Africa</Link>
                    <Link {...link}>Antarctica</Link>
                    <Link {...link}>Asia</Link>
                    <Link {...link}>Europe</Link>
                    <Link {...link}>America</Link>
                  </Flex>
                  <Flex direction="column" w={{ md: '36%', xl: '287px' }}>
                    <Link {...navLink}>Shop</Link>
                    <Link {...link}>Destination Guides</Link>
                    <Link {...link}>Pictorial & Gifts</Link>
                    <Link {...link}>Special Offers</Link>
                    <Link {...link}>Delivery Times</Link>
                    <Link {...link}>FAQs</Link>
                  </Flex>
                  <Flex direction="column">
                    <Link {...navLink}>Interests</Link>
                    <Link {...link}>Adventure Travel</Link>
                    <Link {...link}>Art And Culture</Link>
                    <Link {...link}>Wildlife And Nature</Link>
                    <Link {...link}>Family Holidays</Link>
                    <Link {...link}>Food And Drink</Link>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Center>
        </Box>
      </Center>
      <Center>
        <Box w={{ base: '100%', xl: '1600px' }} h="86px" bg="#F9F9FB">
          <Center>
            <Flex
              direction="column"
              align="center"
              w={{ base: '63vw', md: '760px', xl: '100%' }}
            >
              <Box w={{ base: '100%', xl: '1220px' }} h="0.6px" bg="#C4C4C4" />
              <HStack align="flex-end" spacing="35px" pt="31px">
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
