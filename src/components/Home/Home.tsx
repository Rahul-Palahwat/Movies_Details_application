import { Flex, Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Data from '../Data/Data'
import Header from '../Header/Header'
import { useAppDispatch, useAppSelector } from '../../redux'
// action to get all users 
import { getTotalItems } from '../../redux/reducers/details'
const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { getDataStatus, items } = useAppSelector((state) => state.data_all)
  // console.log("hello data", items);
  useEffect(() => {
    dispatch(getTotalItems({}))
  }, [])
  useEffect(() => {
    console.log("Hello", items)
  }, [getDataStatus,items])

  return (
    <Flex height={"auto"} width={"100vw"} alignItems="center" justifyContent={"center"} direction="column">
      <Header />
      <Flex  direction={"column"} width={"100%"} className="grid" pl="121px" pr="121px" pt="60px">
      <Grid templateColumns='repeat(4, 1fr)' gap={5}>
        {getDataStatus == "SUCCESS" ? 
      items.results.map((item: any , idx:number) => (<GridItem key={idx} width="100%"><Data idx={idx} item={item}/></GridItem>))
      :
      ""}
      </Grid>
      </Flex>
      <Flex height={"10vh"}></Flex>
    </Flex>
  )
}

export default Home