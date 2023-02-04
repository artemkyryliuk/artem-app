import {
  Center,
  Flex,
  Link,
  Image,
  Spacer,
  HStack,
  Button,
} from '@chakra-ui/react'

import logo from '../assets/icons/logo.svg'
import { MobileDrawer } from './components/MobileDrawer'

export const Header = () => {
  const container = {
    display: { base: 'none', md: 'flex' },
    mt: '45px',
    px: { base: '30px', xl: '0px' },
    align: 'center',
    w: { base: '100%', xl: '1220px' },
  }

  const activeLink = {
    href: '#top',
    fontWeight: '400',
    fontSize: '16px',
    color: '#202336',
  }

  const link = {
    href: '#top',
    fontWeight: '400',
    fontSize: '16px',
    color: '#B8BECD',
  }

  const loginButton = {
    w: '132px',
    h: '44px',
    bg: '#fff',
    color: '#FB8F1D',
    border: '1px solid #FB8F1D',
    borderRadius: '8px',

    _hover: {
      bg: '#202336',
      color: '#fff',
      border: '1px solid #202336',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
    },
  }

  const registerButton = {
    w: '132px',
    h: '44px',
    bg: '#FB8F1D',
    color: '#fff',
    border: '1px solid #FB8F1D',
    borderRadius: '8px',

    _hover: {
      bg: '#202336',
      border: '1px solid #202336',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
    },
  }

  const mobileLogo = {
    display: { sm: 'block', md: 'none' },
    pt: '32px',
    pl: '32px',
    w: '114px',
  }

  return (
    <>
      <Center>
        <Flex {...container}>
          <Link href="#top">
            <Image src={logo} alt="Site logo" />
          </Link>
          <Spacer />
          <HStack spacing="34px" pr="34px">
            <Link {...activeLink}>Home</Link>
            <Link {...link}>Destinations</Link>
            <Link {...link}>About</Link>
            <Link {...link}>Partner</Link>
          </HStack>
          <HStack spacing="18px">
            <Button {...loginButton}>Login</Button>
            <Button {...registerButton}>Register</Button>
          </HStack>
        </Flex>
      </Center>
      <Link href="#top">
        <Image src={logo} alt="Site logo" {...mobileLogo} />
      </Link>
      <MobileDrawer />
    </>
  )
}
