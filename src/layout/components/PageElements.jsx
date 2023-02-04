import { Center, Flex, Image } from '@chakra-ui/react'

import el1 from '../../assets/icons/el1.svg'
import el2 from '../../assets/icons/el2.svg'
import el3 from '../../assets/icons/el3.svg'
import el4 from '../../assets/icons/el4.svg'
import el5 from '../../assets/icons/el5.svg'
import el6 from '../../assets/icons/el6.svg'
import el7 from '../../assets/icons/el7.svg'
import el8 from '../../assets/icons/el8.svg'
import el9 from '../../assets/icons/el9.svg'
import el10 from '../../assets/icons/el10.svg'
import el11 from '../../assets/icons/el11.svg'
import el12 from '../../assets/icons/el12.svg'
import el13 from '../../assets/icons/el13.svg'
import el14 from '../../assets/icons/el14.svg'
import el15 from '../../assets/icons/el15.svg'
import el16 from '../../assets/icons/el16.svg'
import el17 from '../../assets/icons/el17.svg'

export const PageElements = () => {
  return (
    <Center>
      <Flex w="1600px" pos="relative" display={{ base: 'none', xl: 'block' }}>
        <Image src={el1} pos="absolute" left="657px" bottom="5468px" />
        <Image src={el2} pos="absolute" left="80px" bottom="5188px" />
        <Image src={el3} pos="absolute" left="732px" bottom="4905px" />
        <Image
          src={el4}
          pos="absolute"
          left="826px"
          bottom="4594px"
          transform="rotatre(7.49deg)"
        />
        <Image src={el5} pos="absolute" left="1229px" bottom="4209px" />
        <Image src={el6} pos="absolute" left="1169px" bottom="3785px" />
        <Image src={el7} pos="absolute" left="121px" bottom="3453px" />
        <Image src={el8} pos="absolute" left="743px" bottom="3273px" />
        <Image
          src={el9}
          pos="absolute"
          left="1427px"
          bottom="2974px"
          transform="rotatre(9.99deg)"
        />
        <Image src={el10} pos="absolute" left="285px" bottom="2915px" />
        <Image
          src={el11}
          pos="absolute"
          left="656px"
          bottom="2594px"
          transform="rotatre(20.42deg)"
        />
        <Image src={el12} pos="absolute" left="1234px" bottom="2120px" />
        <Image src={el13} pos="absolute" left="96px" bottom="1929px" />
        <Image src={el14} pos="absolute" left="859px" bottom="1637px" />
        <Image src={el15} pos="absolute" left="644px" bottom="1341px" />
        <Image src={el16} pos="absolute" left="143px" bottom="919px" />
        <Image src={el17} pos="absolute" left="990px" bottom="670px" />
      </Flex>
    </Center>
  )
}
