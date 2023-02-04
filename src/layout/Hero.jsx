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
import heroImage from '../assets/images/heroImage.png'

export const Hero = () => {
  const container = {
    mt: { base: '55px', md: '80px' },
    px: { base: '50', xl: '0px' },
    mr: { base: '0px', xl: '-86px' },
    w: { lg: '100%', xl: '1306px' },
  }

  const leftSide = {
    w: { lg: '100%', xl: '617px' },
  }

  const heading = {
    pt: '33px',
    w: '356px',
    fontFamily: 'Playfair Display',
    fontWeight: '700',
    fontSize: '64px',
    lineHeight: '80px',
    color: '#202336',
  }

  const finder = {
    mt: '74px',
    fontWeight: '600',
    fontSize: '22px',
    lineHeight: '27px',
  }

  const line = {
    mt: '21px',
    w: '32px',
    h: '2px',
    bg: '#202336',
    borderRadius: '4px',
  }

  const selectGroup = {
    pt: '48px',
    spacingX: { base: '0px', md: '20px', lg: '50px', xl: '0px' },
    spacingY: '35px',
  }

  const select = {
    mr: { base: '0px', md: '-120px', lg: '-10px', xl: '30px' },
    w: { base: '83vw', md: '85vw', lg: '42vw', xl: '220px' },
    h: '52px',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '32px',
    color: '#4A4C53',
    border: '1px solid #AFB0B9',

    _hover: {
      border: '1px solid #202336',
    },

    _placeholder: {
      ml: '50px',
    },
  }

  const location = [
    'Ukraine',
    'Germany',
    'Chikipukiland',
    'Switzerland',
    'Austria',
    'Africa',
    'China',
  ]

  const activity = ['Popular', 'Best']

  const grade = ['Excellent', 'Very good', 'Good', 'No bad', 'Bad', 'Very bad']

  const date = [
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
  ]

  const button = {
    mt: '47px',
    w: '180px',
    h: '52px',
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
    display: { base: 'none', xl: 'block' },
  }

  return (
    <Center>
      <Flex {...container}>
        <Box {...leftSide}>
          <Text {...heading}>Explore and Travel</Text>
          <Text {...finder}>Holiday finder</Text>
          <Box {...line} />
          <Wrap {...selectGroup}>
            <WrapItem>
              <Select icon={<SelectArrow />} placeholder="Location" {...select}>
                {location.map((el, index) => (
                  <option key={'loc_' + el} value={el}>
                    {el}
                  </option>
                ))}
              </Select>
            </WrapItem>
            <WrapItem>
              <Select icon={<SelectArrow />} placeholder="Activity" {...select}>
                {activity.map((el) => (
                  <option key={'act_' + el} value={el}>
                    {el}
                  </option>
                ))}
              </Select>
            </WrapItem>
            <WrapItem>
              <Select icon={<SelectArrow />} placeholder="Grade" {...select}>
                {grade.map((el) => (
                  <option key={'gr_' + el} value={el}>
                    {el}
                  </option>
                ))}
              </Select>
            </WrapItem>
            <WrapItem>
              <Select icon={<SelectArrow />} placeholder="Date" {...select}>
                {date.map((el) => (
                  <option key={'date_' + el} value={el}>
                    {el}
                  </option>
                ))}
              </Select>
            </WrapItem>
          </Wrap>
          <Button {...button}>Explore</Button>
        </Box>
        <Box {...imageContainer}>
          <Image src={heroImage} alt="Hero Image" />
        </Box>
      </Flex>
    </Center>
  )
}
