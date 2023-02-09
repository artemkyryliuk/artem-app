import { Center, Flex, Link, Image, Spacer, HStack } from '@chakra-ui/react'

import logo from '../assets/icons/logo.svg'
import { MobileDrawer } from './components/MobileDrawer'
import { Button } from './components/Button'

export const Header = () => {
  const link = {
    href: '#top',
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: '16px',
    color: '#B8BECD',
    lineHeight: '19px',
    _hover: { textDecoration: 'none' },
  }

  return (
    <>
      <Center>
        <Flex
          display={{ base: 'none', md: 'flex' }}
          mt="43px"
          px={{ base: '70px', xl: '0px' }}
          align="center"
          w={{ base: '100%', xl: '1220px' }}
        >
          <Link href="#top">
            <Image
              src={logo}
              alt="Site logo"
              transition="0.3s"
              _hover={{ transform: 'scale(1.2)' }}
            />
          </Link>
          <Spacer />
          <HStack
            spacing={{ base: '14px', lg: '34px' }}
            pr={{ base: '14px', lg: '34px' }}
          >
            <Link
              href="#top"
              fontFamily="Inter"
              fontWeight="500"
              fontSize="16px"
              color="#202336"
              lineHeight="19px"
              _hover={{ textDecoration: 'none' }}
            >
              Home
            </Link>
            <Link {...link}>Destinations</Link>
            <Link {...link}>About</Link>
            <Link {...link}>Partner</Link>
          </HStack>
          <HStack spacing="18px">
            <Button w="132px" h="44px" bg="#fff" color="#FB8F1D" text="Login" />
            <Button w="132px" h="44px" text="Register" />
          </HStack>
        </Flex>
      </Center>
      <Link href="#top">
        <Image
          src={logo}
          alt="Site logo"
          display={{ sm: 'block', md: 'none' }}
          pt="30px"
          pl="35px"
          w="96px"
        />
      </Link>
      <MobileDrawer />
    </>
  )
}
