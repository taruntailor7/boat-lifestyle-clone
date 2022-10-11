import { Box, Grid, GridItem, Image, Text,Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import {AiFillStar} from 'react-icons/ai'
// import { extendTheme } from '@chakra-ui/react'

export const HomeSailWithBoat = () => {
  const [sailWithBoat, setSailWithBoat] = useState([]);

  const getData = ()=>{
    fetch(`http://localhost:3001/sailWithBoatOnHome`)
    .then((res)=>res.json())
    .then((res)=>setSailWithBoat(res))
    .catch((err)=>console.log(err))
  }
  
  useEffect(() =>{
    getData();
  },[])

  // eslint-disable-next-line no-unused-vars
  let price = 0;

  // const breakpoints = {
  //   sm: '30em',
  //   md: '48em',
  //   lg: '62em',
  //   xl: '80em',
  //   '2xl': '96em',
  // }
  // const theme = extendTheme({ breakpoints,mdlg:'50em'})
  // {base:"repeat(1, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)", lg:"repeat(5, 1fr)"}
  
  return (
    <Box width="100%" margin="auto" marginTop="100px">
      <Text fontSize="25px" fontWeight="500">SAIL WITH boAt</Text>
      <Grid width="100%" margin="auto" templateColumns={{base:"repeat(1, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)", lg:"repeat(5, 1fr)"}} gap={6} marginTop="60px">
        {sailWithBoat.map((data)=>(
          <GridItem key={data.id} w='100%' bg='#e3e3e3' borderRadius="10px" p={2} >
            <Box width="100%" p={5}> 
              <Image width="100%" src={data.image[0]} alt="image" />
            </Box>
            <Box w="100%" bg='white' p={3} borderRadius="10px">
              <Text fontSize="18px" fontWeight="500">{data.name}</Text>
              <Text display="flex" alignItems="center" my={2}><AiFillStar color="#ff0000" margin="10px"/> {data.rating} | {data.reviews} reviews</Text>
              <hr />
              <Box display="flex" >
                <Text color="#ff0000" fontWeight='500'> ₹ { price = Math.ceil(data.original_price - data.original_price*(data.discount/100)) }</Text>
                <Text ml={2}> ₹ {data.original_price}</Text>
              </Box>
              <Text my={2}>You Save: ₹ {Math.ceil(data.original_price*(data.discount/100)) } ({data.discount}%)</Text>
              <Button w="100%" colorScheme='#F7C20A' bg="#F7C20A" size='md'>
                ADD TO CART
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}
