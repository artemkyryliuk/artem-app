import React from 'react'
import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Flex,
  Image,
  Link,
  useDisclosure,
} from '@chakra-ui/react'

import logo from '../../assets/icons/logo.svg'

export const MobileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const btnRef = React.useRef()

  const container = {
    display: { sm: 'block', md: 'none' },
    pos: 'fixed',
    top: '30px',
    right: '30px',
    zIndex: '1',
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

  return (
    <Box {...container}>
      <Button
        ref={btnRef}
        colorScheme="teal"
        w={20}
        h={20}
        fontSize="36px"
        onClick={onOpen}
      >
        ☰
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton mt={6} />
            <DrawerBody>
              <Flex direction="column" mt={5}>
                <Image src={logo} alt="Site logo" mb={5} w={10} />
                <Link {...activeLink} fontSize={35}>
                  Home
                </Link>
                <Link {...link} fontSize={35}>
                  Destinations
                </Link>
                <Link {...link} fontSize={35}>
                  About
                </Link>
                <Link {...link} fontSize={35}>
                  Partner
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}
