import { Center, Box, Flex, Heading, Link, Image } from '@chakra-ui/react'

import arrow from '../assets/icons/arrow.svg'
import { CountryCard } from './components/CountryCard'
import Indonesia from '../assets/images/country1.png'
import China from '../assets/images/country2.png'
import Switzerland from '../assets/images/country3.png'
import Montenegro from '../assets/images/country4.png'

export const Destinations = () => {
  const container = {
    mt: { base: '50px', xl: '292px' },
    px: { base: '50', xl: '0px' },
    w: { base: '100%', lg: '100%', xl: '1120px' },
  }

  const heading = {
    fontFamily: 'Playfair Display',
    fontWeight: '700',
    fontSize: '36px',
    lineHeight: '50px',
  }

  const viewAll = {
    pr: '11px',
    fontWeight: '600',
    fontSize: '17px',
    lineHeight: '60px',
    color: '#FB8F1D',
  }

  const gallery = {
    justify: 'space-between',
    wrap: 'wrap',
    w: '100%',
    mt: '56px',
  }

  return (
    <Center>
      <Box {...container}>
        <Flex justify="space-between">
          <Heading {...heading}>Featured destinations</Heading>
          <Flex>
            <Link href="#top" {...viewAll}>
              View all
            </Link>
            <Flex alignItems="center">
              <Link href="#top">
                <Image src={arrow} alt="View all" />
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex {...gallery}>
          <CountryCard
            src={Indonesia}
            alt="Indonesia"
            text1="Raja Ampat"
            text2="Indonesia"
          />
          <CountryCard
            src={China}
            alt="China"
            text1="Fanjingshan"
            text2="China"
          />
          <CountryCard
            src={Switzerland}
            alt="Switzerland"
            text1="Vevey"
            text2="Switzerland"
          />
          <CountryCard
            src={Montenegro}
            alt="Montenegro"
            text1="Skadar"
            text2="Montenegro"
          />
        </Flex>
      </Box>
    </Center>
  )
}
