import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({
  mt = '0px',
  w,
  h,
  bg = '#FB8F1D',
  color = '#fff',
  text,
}) => {
  return (
    <ChakraButton
      mt={mt}
      w={w}
      h={h}
      bg={bg}
      fontFamily="Inter"
      fontWeight="500"
      fontSize="15px"
      lineHeight="60px"
      color={color}
      border="1px solid #FB8F1D"
      borderRadius="8px"
      _hover={{
        bg: '#202336',
        color: '#fff',
        border: '1px solid #202336',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      {text}
    </ChakraButton>
  )
}
