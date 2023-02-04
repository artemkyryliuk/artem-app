import { Box, Image } from '@chakra-ui/react'

import selectArrow from '../../assets/icons/selectArrow.svg'

export const SelectArrow = () => {
  return (
    <Box w="60px">
      <Image src={selectArrow} alt="Select Arrow" />
    </Box>
  )
}
