import {
  Center,
  Flex,
  Box,
  Text,
  Wrap,
  WrapItem,
  Select,
  Button,
  Image,
} from '@chakra-ui/react'

import { SelectArrow } from './components/SelectArrow'
import hero from '../assets/images/hero.png'
import el1 from '../assets/icons/el1.svg'
import el2 from '../assets/icons/el2.svg'
import el3 from '../assets/icons/el3.svg'

export const Hero = () => {
  const select = {
    mr: { base: '0px', md: '30px', lg: '-10px', xl: '30px' },
    w: { base: '82vw', md: '36.5vw', lg: '41vw', xl: '220px' },
    h: '52px',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '32px',
    color: '#4A4C53',
    border: '1px solid #AFB0B9',

    _hover: {
      border: '1px solid #202336',
    },
  }

  return (
    <>
      <Image
        src={el1}
        pos="absolute"
        top="3.94%"
        left="41.86%"
        pointerEvents="none"
      />
      <Image
        src={el2}
        pos="absolute"
        top="8.84%"
        left="5%"
        pointerEvents="none"
      />
      <Image
        src={el3}
        pos="absolute"
        top="14.01%"
        left="45.75%"
        pointerEvents="none"
      />
      <Center>
        <Flex
          pos="relative"
          mt={{ base: '55px', md: '80px' }}
          px={{ base: '35px', md: '70px', xl: '0px' }}
          mr={{ base: '0px', xl: '-86px' }}
          w={{ base: '100%', xl: '1306px' }}
        >
          <Box w={{ lg: '100%', xl: '617px' }}>
            <Text
              pt="33px"
              w={{ base: '100%', xl: '356px' }}
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize={{ base: '48px', md: '64px' }}
              lineHeight="80px"
              color="#202336"
            >
              Explore and Travel
            </Text>
            <Text mt="74px" fontWeight="600" fontSize="22px" lineHeight="27px">
              Holiday finder
            </Text>
            <Box mt="21px" w="32px" h="2px" bg="#202336" borderRadius="4px" />
            <Wrap
              pt="48px"
              spacingX={{ base: '0px', lg: '30px', xl: '0px' }}
              spacingY="35px"
            >
              <WrapItem>
                <Select
                  icon={<SelectArrow />}
                  placeholder="Location"
                  {...select}
                >
                  {[
                    'Ukraine',
                    'Germany',
                    'Chikipukiland',
                    'Switzerland',
                    'Austria',
                    'Africa',
                    'China',
                  ].map((el, index) => (
                    <option key={'loc_' + el} value={el}>
                      {el}
                    </option>
                  ))}
                </Select>
              </WrapItem>
              <WrapItem>
                <Select
                  icon={<SelectArrow />}
                  placeholder="Activity"
                  {...select}
                >
                  {['Popular', 'Best'].map((el) => (
                    <option key={'act_' + el} value={el}>
                      {el}
                    </option>
                  ))}
                </Select>
              </WrapItem>
              <WrapItem>
                <Select icon={<SelectArrow />} placeholder="Grade" {...select}>
                  {[
                    'Excellent',
                    'Very good',
                    'Good',
                    'No bad',
                    'Bad',
                    'Very bad',
                  ].map((el) => (
                    <option key={'gr_' + el} value={el}>
                      {el}
                    </option>
                  ))}
                </Select>
              </WrapItem>
              <WrapItem>
                <Select icon={<SelectArrow />} placeholder="Date" {...select}>
                  {[
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                  ].map((el) => (
                    <option key={'date_' + el} value={el}>
                      {el}
                    </option>
                  ))}
                </Select>
              </WrapItem>
            </Wrap>
            <Button
              mt="47px"
              w="180px"
              h="52px"
              color="#fff"
              bg="#FB8F1D"
              border="1px solid #FB8F1D"
              borderRadius="8px"
              fontWeight="500"
              fontSize="15px"
              _hover={{
                bg: '#202336',
                border: '#202336',
                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              Explore
            </Button>
          </Box>
          <Box display={{ base: 'none', xl: 'block' }}>
            <Image src={hero} alt="Hero Image" w="687px" />
          </Box>
        </Flex>
      </Center>
    </>
  )
}
