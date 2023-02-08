import React from 'react'
import {
  useDisclosure,
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
  HStack,
  Text,
} from '@chakra-ui/react'

import logo from '../../assets/icons/logo.svg'

export const MobileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const btnRef = React.useRef()

  const link = {
    href: '#top',
    fontWeight: '400',
    fontSize: 25,
    lineHeight: '40px',
    color: '#B8BECD',
    _hover: {
      textDecoration: 'none',
    },
  }

  return (
    <Box
      pos="fixed"
      display={{ sm: 'block', md: 'none' }}
      top="30px"
      left="80vw"
      zIndex="2"
    >
      <Button
        ref={btnRef}
        w="60px"
        h="60px"
        fontSize="30px"
        colorScheme="orange"
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
        <DrawerOverlay bg="rgba(13,95,66,0.8)">
          <DrawerContent>
            <DrawerCloseButton mt={6} />
            <DrawerBody>
              <Flex direction="column" mt={5}>
                <Image src={logo} mb={5} w={10} />
                <Link
                  href="#top"
                  fontWeight="400"
                  fontSize={25}
                  lineHeight={10}
                  color="#202336"
                  _hover={{ textDecoration: 'none' }}
                >
                  Home
                </Link>
                <Link {...link}>Destinations</Link>
                <Link {...link}>About</Link>
                <Link {...link}>Partner</Link>
                <HStack mt={5} spacing={5}>
                  <Button
                    w="132px"
                    h="44px"
                    bg="#fff"
                    color="#FB8F1D"
                    border="1px solid #FB8F1D"
                    borderRadius="8px"
                    _hover={{
                      bg: '#202336',
                      color: '#fff',
                      border: '1px solid #202336',
                      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    Login
                  </Button>
                  <Text fontSize={15} color="#B8BECD">
                    or
                  </Text>
                  <Button
                    w="132px"
                    h="44px"
                    bg="#FB8F1D"
                    color="#fff"
                    border="1px solid #FB8F1D"
                    borderRadius="8px"
                    _hover={{
                      bg: '#202336',
                      border: '1px solid #202336',
                      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    Register
                  </Button>
                </HStack>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}
