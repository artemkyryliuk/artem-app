import { Link, Image, Box, Text } from '@chakra-ui/react'

export const CountryCard = ({ src, alt, text1, text2 }) => {
  const image = {
    pos: 'relative',
    borderRadius: '8px',
  }

  const rectangle = {
    pos: 'relative',
    pt: '6px',
    bottom: '56px',
    w: '120px',
    h: '56px',
    bg: '#fff',
    borderRadius: '0px 6px 0px 0px',
  }

  const city = {
    fontWeight: '600',
    fontSize: '18px',
    color: '#042521',
  }

  const country = {
    fontSize: '18px',
    color: '#80918E',
  }

  return (
    <Link>
      <Image src={src} alt={alt} {...image} />
      <Box {...rectangle}>
        <Text {...city}>{text1}</Text>
        <Text {...country}>{text2}</Text>
      </Box>
    </Link>
  )
}
