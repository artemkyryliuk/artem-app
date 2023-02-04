import { Flex, Link, Image, Box, Text } from '@chakra-ui/react'

export const StoryCard = ({ src, alt, title, text }) => {
  const container = {
    direction: 'column',
    w: '261px',
    h: { base: '496px', xl: '446px' },
    borderRadius: '8px',
    overflow: 'hidden',
    transition: '0.5s',
  }

  const rectangle = {
    w: '261px',
    h: '233px',
    bg: '#fff',
  }

  const titleText = {
    pt: '14px',
    fontWeight: '700',
    fontSize: '19px',
    lineHeight: '30px',
  }

  const bodyText = {
    pt: '13px',
    pr: '30px',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '26px',
    color: '#7D7987',
  }

  const readMore = {
    pt: '23px',
    fontWeight: '600',
    fontSize: '15px',
    lineHeight: '28px',
    color: '#FB8F1D',
  }

  return (
    <Flex {...container}>
      <Link href="#top">
        <Image src={src} alt={alt} />
        <Box {...rectangle}>
          <Text {...titleText}>{title}</Text>
          <Text {...bodyText}>{text}</Text>
          <Text {...readMore}>Read more</Text>
        </Box>
      </Link>
    </Flex>
  )
}
