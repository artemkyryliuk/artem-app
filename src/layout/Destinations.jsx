import { Center, Box, Flex, Heading, Link, Image } from '@chakra-ui/react'

import arrow from '../assets/icons/arrow.svg'
import { CountryCard } from './components/CountryCard'
import Indonesia from '../assets/images/country1.png'
import China from '../assets/images/country2.png'
import Switzerland from '../assets/images/country3.png'
import Montenegro from '../assets/images/country4.png'
import el6 from '../assets/icons/el6.svg'
import el7 from '../assets/icons/el7.svg'
import el8 from '../assets/icons/el8.svg'

export const Destinations = () => {
  return (
    <>
      <Image
        src={el6}
        pos="absolute"
        top="34.06%"
        left="73.86%"
        pointerEvents="none"
      />
      <Image
        src={el7}
        pos="absolute"
        top="39.94%"
        left="7.73%"
        pointerEvents="none"
      />
      <Image
        src={el8}
        pos="absolute"
        top="43.22%"
        left="46.44%"
        pointerEvents="none"
      />
      <Center>
        <Box
          mt={{ base: '250px', xl: '292px' }}
          px={{ base: '35px', md: '70px', xl: '0px' }}
          w={{ base: '100%', xl: '1120px' }}
        >
          <Flex
            justify="space-between"
            direction={{ base: 'column', md: 'row' }}
          >
            <Heading
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize={{ base: '10vw', sm: '36px', md: '36px' }}
              lineHeight={{ base: '12vw', md: '50px' }}
            >
              Featured destinations
            </Heading>
            <Link
              href="#top"
              fontWeight="600"
              fontSize="17px"
              lineHeight="60px"
              color="#FB8F1D"
              _hover={{ textDecoration: 'none', color: '#202336' }}
            >
              <Flex alignItems="center" gap="11px">
                View all
                <Image src={arrow} />
              </Flex>
            </Link>
          </Flex>
          <Flex display={{ base: 'none', lg: 'flex' }} mt="56px" gap={10}>
            <CountryCard
              src={Indonesia}
              alt="Indonesia"
              t1="Raja Ampat"
              t2="Indonesia"
            />
            <CountryCard src={China} alt="China" t1="Fanjingshan" t2="China" />
            <CountryCard
              src={Switzerland}
              alt="Switzerland"
              t1="Vevey"
              t2="Switzerland"
            />
            <CountryCard
              src={Montenegro}
              alt="Montenegro"
              t1="Skadar"
              t2="Montenegro"
            />
          </Flex>
          <Flex
            display={{ base: 'none', md: 'flex', lg: 'none' }}
            mt="56px"
            mb="32%"
            gap="10%"
          >
            <CountryCard
              src={Indonesia}
              alt="Indonesia"
              t1="Raja Ampat"
              t2="Indonesia"
            />
            <CountryCard src={China} alt="China" t1="Fanjingshan" t2="China" />
          </Flex>
          <Flex
            display={{ base: 'none', md: 'flex', lg: 'none' }}
            mt="32%"
            gap="10%"
          >
            <CountryCard
              src={Switzerland}
              alt="Switzerland"
              t1="Vevey"
              t2="Switzerland"
            />
            <CountryCard
              src={Montenegro}
              alt="Montenegro"
              t1="Skadar"
              t2="Montenegro"
            />
          </Flex>
          <Flex
            display={{ base: 'flex', md: 'none' }}
            align="center"
            direction="column"
            wrap="wrap"
            mt="20px"
            gap="200px"
          >
            <CountryCard
              src={Indonesia}
              alt="Indonesia"
              t1="Raja Ampat"
              t2="Indonesia"
            />
            <CountryCard src={China} alt="China" t1="Fanjingshan" t2="China" />
            <CountryCard
              src={Switzerland}
              alt="Switzerland"
              t1="Vevey"
              t2="Switzerland"
            />
            <CountryCard
              src={Montenegro}
              alt="Montenegro"
              t1="Skadar"
              t2="Montenegro"
            />
          </Flex>
        </Box>
      </Center>
    </>
  )
}
