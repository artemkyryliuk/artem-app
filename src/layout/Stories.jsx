import { Center, Box, Flex, Heading, Link } from '@chakra-ui/react'
import { useState } from 'react'

import { IconElement } from './components/IconElement'
import { ReactComponent as ArrowIcon } from '../assets/icons/arrow.svg'
import { StoryCard } from './components/StoryCard'
import story1 from '../assets/images/story1.png'
import story2 from '../assets/images/story2.png'
import story3 from '../assets/images/story3.png'
import story4 from '../assets/images/story4.png'
import el15 from '../assets/icons/el15.svg'
import el16 from '../assets/icons/el16.svg'
import el17 from '../assets/icons/el17.svg'

export const Stories = () => {
  const [isHovered, setHovered] = useState(false)

  const toggleState = () => {
    setHovered(() => !isHovered)
  }
  return (
    <>
      <IconElement src={el15} top="75.62%" left="40.41%" />
      <IconElement src={el16} top="83.2%" left="8.94%" />
      <IconElement src={el17} top="87.48%" left="61.25%" />
      <Center>
        <Box
          mt={{ base: '250px', xl: '285px' }}
          px={{ base: '35px', xl: '0px' }}
          w={{ base: '100%', xl: '1120px' }}
        >
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
          >
            <Heading
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="36px"
              lineHeight="50px"
            >
              Trending stories
            </Heading>
            <Link
              href="#top"
              fontWeight="600"
              fontSize="17px"
              lineHeight="60px"
              color="#FB8F1D"
              transition="0s"
              _hover={{ textDecoration: 'none', color: '#202336' }}
              onMouseEnter={toggleState}
              onMouseLeave={toggleState}
            >
              <Flex alignItems="center" gap="11px">
                View all
                <ArrowIcon stroke={isHovered ? '#202336' : '#FB8F1D'} />
              </Flex>
            </Link>
          </Flex>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            justify="space-between"
            pt="46px"
            gap={{ base: 16, md: 10 }}
          >
            <StoryCard
              src={story1}
              title="The many benefits of taking a healing holiday"
              text="‘Helaing holidays’ are on the rise tohelp maximise your health and happines..."
            />

            <StoryCard
              src={story2}
              title="The best Kyoto restaurant to try Japanese food"
              text="From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
            to visit... "
            />

            <StoryCard
              src={story3}
              title="Skip Chichen Itza and head to this remote Yucatan"
              text="It’s remote and challenging to get, but braving the jungle and exploring these ruins without the... "
            />

            <StoryCard
              src={story4}
              title="Surf’s up at these beginner spots around the world"
              text="If learning to surf has in on your to- do list for a while, the good news is: it’s never too late..."
            />
          </Flex>
        </Box>
      </Center>
    </>
  )
}
