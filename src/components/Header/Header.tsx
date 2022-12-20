import { Flex } from '@chakra-ui/react'
import React from 'react'
import logo from '../../utils/media/index.png'
const Header:React.FC = () => {
  return (
    <>
        <Flex alignItems={"center"} justifyContent={"space-between"} width="100vw" height={"77px"}>
            <img src={logo} alt="" className='logo'/>
            <input type="text" placeholder='Search for a movie' className='input'/>
        </Flex>
        <Flex className='under'></Flex>
        <Flex className='heading'>Most Recent Movies</Flex>
        
    </>
  )
}

export default Header