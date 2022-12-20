import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
interface Props{
  comment: any
}
const User:React.FC<Props> = ({comment}) => {
  return (
    <>
        <Flex height={"8vh"} width={"100%"}  justifyContent={"space-between"}>Hello
        {/* <Flex width={"15%"} justifyContent="center"  alignItems={"center"}>{comment.name.slice(1,12)}</Flex>
        <Flex width={"20%"} justifyContent="center"  alignItems={"center"}></Flex>
        <Flex width={"20%"} justifyContent="center"  alignItems={"center"}>{comment.email}</Flex>
        <Flex width={"40%"} justifyContent="center" alignItems={"center"} color="blue"> <a href="/">Profile</a> </Flex> */}
      </Flex>
    </>
  )
}
export default User