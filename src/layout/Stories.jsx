import {
  Center,
  Box,
  Flex,
  Heading,
  Link,
  Image,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

import { StoryCard } from './components/StoryCard'
import arrow from '../assets/icons/arrow.svg'
import story1 from '../assets/images/story1.png'
import story2 from '../assets/images/story2.png'
import story3 from '../assets/images/story3.png'
import story4 from '../assets/images/story4.png'

export const Stories = () => {
  const container = {
    mt: { base: '50px', xl: '285px' },
    px: { base: '50', xl: '0px' },
    w: { lg: '100%', xl: '1120px' },
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

  const stories = {
    justify: 'space-between',
    pt: '46px',
  }

  return (
    <Center>
      <Box {...container}>
        <Flex justify="space-between">
          <Heading {...heading}>Trending stories</Heading>
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
        <Wrap {...stories}>
          <WrapItem>
            <StoryCard
              src={story1}
              alt="Story 1"
              title="The many benefits of taking a healing holiday"
              text="‘Helaing holidays’ are on the rise tohelp maximise your health and happines..."
            />
          </WrapItem>
          <WrapItem>
            <StoryCard
              src={story2}
              alt="Story 2"
              title="The best Kyoto restaurant to try Japanese food"
              text="From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
            to visit... "
            />
          </WrapItem>
          <WrapItem>
            <StoryCard
              src={story3}
              alt="Story 3"
              title="Skip Chichen Itza and head to this remote Yucatan"
              text="It’s remote and challenging to get, but braving the jungle and exploring these ruins without the... "
            />
          </WrapItem>
          <WrapItem>
            <StoryCard
              src={story4}
              alt="Story 4"
              title="Surf’s up at these beginner spots around the world"
              text="If learning to surf has in on your to- do list for a while, the good news is: it’s never too late..."
            />
          </WrapItem>
        </Wrap>
      </Box>
    </Center>
  )
}
