import { Badge, Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux'
interface Props {
  idx: number
  item: any
}
const Data: React.FC<Props> = ({ idx,item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Flex className='card' mt={5} direction="column" cursor={"pointer"} onClick={onOpen}>
      <Image className='img' src={`https://image.tmdb.org/t/p/w185/${item.backdrop_path}`} />
      <Flex mt={3} className='title' width={"100%"} alignItems="center" justifyContent={"center"}>{item.title}</Flex>
      <Badge className='imdb' borderRadius={20}><Flex width={"100%"} height={"100%"} alignItems="center" justifyContent={"center"}>{item.vote_average}</Flex></Badge>
    </Flex>
    {/* Modal code  */}
    <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{item.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
            <Image className='imgModal' src={`https://image.tmdb.org/t/p/w185/${item.backdrop_path}`} mb={3}/>
              <Flex width={"50%"} direction="column" ml={6}>
                <Flex className='date'>Release date : &nbsp;<Flex> {item.release_date}</Flex></Flex>
                <Flex className='info' mt={2}>{item.overview}</Flex>
                <Flex className='rating' mt={2}>{item.vote_average}/10 ({item.vote_count} total votes)</Flex>
              </Flex>
            </Flex>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Data