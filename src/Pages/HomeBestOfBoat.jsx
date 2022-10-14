import { Box, Button, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillStar, AiFillThunderbolt } from 'react-icons/ai'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export const HomeBestOfBoat = () => {
  const [bestOfBoat, setBestOfBoat] = useState([]);

  const getData = ()=>{
    fetch(`http://localhost:3001/bestOfBoat`)
    .then((res)=>res.json())
    .then((res)=>setBestOfBoat(res))
    .catch((err)=>console.log(err))
  }
  
  const first = bestOfBoat.filter((prod)=>{
    return prod.id === 105 || prod.id === 106 || prod.id === 107 || prod.id === 108 || prod.id === 109;
  })
  const second = bestOfBoat.filter((prod)=>{
    return prod.id === 110 || prod.id === 111 || prod.id === 112 || prod.id === 113 || prod.id === 114;
  })
  const third = bestOfBoat.filter((prod)=>{
    return prod.id === 115 || prod.id === 116 || prod.id === 117 || prod.id === 118 || prod.id === 119;
  })
  const fourth = bestOfBoat.filter((prod)=>{
    return prod.id === 120 || prod.id === 121 || prod.id === 122 || prod.id === 123 || prod.id === 124;
  })
  const fifth = bestOfBoat.filter((prod)=>{
    return prod.id === 125 || prod.id === 126 || prod.id === 127 || prod.id === 128 || prod.id === 129;
  })

  useEffect(() =>{
    getData();
  },[])

  // eslint-disable-next-line no-unused-vars
  let price = 0;

  return (
    <Box width="100%" margin="auto" marginTop="60px">
      <Text fontSize="25px" fontWeight="500">BEST OF boAt</Text>
      <Tabs colorScheme="red" isFitted="true"  mt={6}>
        <TabList>
          <Tab fontSize="22px" fontWeight="500" color="#979696">Best Sellers</Tab>
          <Tab fontSize="22px" fontWeight="500" color="#979696">Top Earbuds</Tab>
          <Tab fontSize="22px" fontWeight="500" color="#979696">Smart Watches</Tab>
          <Tab fontSize="22px" fontWeight="500" color="#979696">Trending Wireless</Tab>
          <Tab fontSize="22px" fontWeight="500" color="#979696">Trending ANC</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Grid width="100%" margin="auto" templateColumns={{base:"repeat(1, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)", lg:"repeat(5, 1fr)"}} gap={6} marginTop="50px">
              {first.map((data)=>(
                <GridItem key={data.id} w='100%' bg='#e3e3e3' borderRadius="10px" p={2} >
                  {data.isSuperSaver?<Button bg="#F7C20A" colorScheme="#F7C20A" color="black" position="absolute" px={1}> <AiFillThunderbolt /> Super Saver</Button>:""}
                  <Box width="100%" p={5}> 
                    <Image width="100%" src={data.image[0]} alt="image" />
                  </Box>
                  <Box w="100%" bg='white' p={3} borderRadius="10px">
                    <Text fontSize="18px" fontWeight="500">{data.name}</Text>
                    <Text display="flex" alignItems="center" my={2}><AiFillStar color="#ff0000" margin="10px"/> {data.rating} | {data.reviews} reviews</Text>
                    <hr />
                    <Box display="flex" >
                      <Text color="#ff0000" fontWeight='500'> ₹ { data.price }</Text>
                      <Text as="s" ml={2}> ₹ {data.original_price}</Text>
                    </Box>
                    <Text my={2}>You Save: ₹ {Math.ceil(data.original_price*(data.discount/100)) } ({data.discount}%)</Text>
                    <Button w="100%" colorScheme={data.isSuperSaver?"#F7C20A":"#ff0000"} bg={data.isSuperSaver?"#F7C20A":"#ff0000"} size='md'>
                      ADD TO CART
                    </Button>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel>
              <Grid width="100%" margin="auto" templateColumns={{base:"repeat(1, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)", lg:"repeat(5, 1fr)"}} gap={6} marginTop="60px">
                {second.map((data)=>(
                  <GridItem key={data.id} w='100%' bg='#e3e3e3' borderRadius="10px" p={2} >
                    {data.isSuperSaver?<Button bg="#F7C20A" colorScheme="#F7C20A" color="black" position="absolute" px={1}> <AiFillThunderbolt /> Super Saver</Button>:""}
                    <Box width="100%" p={5}> 
                      <Image width="100%" src={data.image[0]} alt="image" />
                    </Box>
                    <Box w="100%" bg='white' p={3} borderRadius="10px">
                      <Text fontSize="18px" fontWeight="500">{data.name}</Text>
                      <Text display="flex" alignItems="center" my={2}><AiFillStar color="#ff0000" margin="10px"/> {data.rating} | {data.reviews} reviews</Text>
                      <hr />
                      <Box display="flex" >
                        <Text color="#ff0000" fontWeight='500'> ₹ { data.price }</Text>
                        <Text as="s" ml={2}> ₹ {data.original_price}</Text>
                      </Box>
                      <Text my={2}>You Save: ₹ {Math.ceil(data.original_price*(data.discount/100)) } ({data.discount}%)</Text>
                      <Button w="100%"colorScheme={data.isSuperSaver?"#F7C20A":"#ff0000"} bg={data.isSuperSaver?"#F7C20A":"#ff0000"} size='md'>
                        ADD TO CART
                      </Button>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>
          <TabPanel>
              <Grid width="100%" margin="auto" templateColumns={{base:"repeat(1, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)", lg:"repeat(5, 1fr)"}} gap={6} marginTop="60px">
                {third.map((data)=>(
                  <GridItem key={data.id} w='100%' bg='#e3e3e3' borderRadius="10px" p={2} >
                    {data.isSuperSaver?<Button bg="#F7C20A" colorScheme="#F7C20A" color="black" position="absolute" px={1}> <AiFillThunderbolt /> Super Saver</Button>:""}
                    <Box width="100%" p={5}> 
                      <Image width="100%" src={data.image[0]} alt="image" />
                    </Box>
                    <Box w="100%" bg='white' p={3} borderRadius="10px">
                      <Text fontSize="18px" fontWeight="500">{data.name}</Text>
                      <Text display="flex" alignItems="center" my={2}><AiFillStar color="#ff0000" margin="10px"/> {data.rating} | {data.reviews} reviews</Text>
                      <hr />
                      <Box display="flex" >
                        <Text color="#ff0000" fontWeight='500'> ₹ { data.price }</Text>
                        <Text as="s" ml={2}> ₹ {data.original_price}</Text>
                      </Box>
                      <Text my={2}>You Save: ₹ {Math.ceil(data.original_price*(data.discount/100)) } ({data.discount}%)</Text>
                      <Button w="100%" colorScheme={data.isSuperSaver?"#F7C20A":"#ff0000"} bg={data.isSuperSaver?"#F7C20A":"#ff0000"} size='md'>
                        ADD TO CART
                      </Button>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
          </TabPanel>
          <TabPanel>
              <Grid width="100%" margin="auto" templateColumns={{base:"repeat(1, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)", lg:"repeat(5, 1fr)"}} gap={6} marginTop="60px">
                {fourth.map((data)=>(
                  <GridItem key={data.id} w='100%' bg='#e3e3e3' borderRadius="10px" p={2} >
                    {data.isSuperSaver?<Button bg="#F7C20A" colorScheme="#F7C20A" color="black" position="absolute" px={1}> <AiFillThunderbolt /> Super Saver</Button>:""}
                    <Box width="100%" p={5}> 
                      <Image width="100%" src={data.image[0]} alt="image" />
                    </Box>
                    <Box w="100%" bg='white' p={3} borderRadius="10px">
                      <Text fontSize="18px" fontWeight="500">{data.name}</Text>
                      <Text display="flex" alignItems="center" my={2}><AiFillStar color="#ff0000" margin="10px"/> {data.rating} | {data.reviews} reviews</Text>
                      <hr />
                      <Box display="flex" >
                        <Text color="#ff0000" fontWeight='500'> ₹ { data.price }</Text>
                        <Text as="s" ml={2}> ₹ {data.original_price}</Text>
                      </Box>
                      <Text my={2}>You Save: ₹ {Math.ceil(data.original_price*(data.discount/100)) } ({data.discount}%)</Text>
                      <Button w="100%" colorScheme={data.isSuperSaver?"#F7C20A":"#ff0000"} bg={data.isSuperSaver?"#F7C20A":"#ff0000"} size='md'>
                        ADD TO CART
                      </Button>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
          </TabPanel>
          <TabPanel>
              <Grid width="100%" margin="auto" templateColumns={{base:"repeat(1, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)", lg:"repeat(5, 1fr)"}} gap={6} marginTop="60px">
                {fifth.map((data)=>(
                  <GridItem key={data.id} w='100%' bg='#e3e3e3' borderRadius="10px" p={2} >
                    {data.isSuperSaver?<Button bg="#F7C20A" colorScheme="#F7C20A" color="black" position="absolute" px={1}> <AiFillThunderbolt /> Super Saver</Button>:""}
                    <Box width="100%" p={5}> 
                      <Image width="100%" src={data.image[0]} alt="image" />
                    </Box>
                    <Box w="100%" bg='white' p={3} borderRadius="10px">
                      <Text fontSize="18px" fontWeight="500">{data.name}</Text>
                      <Text display="flex" alignItems="center" my={2}><AiFillStar color="#ff0000" margin="10px"/> {data.rating} | {data.reviews} reviews</Text>
                      <hr />
                      <Box display="flex" >
                        <Text color="#ff0000" fontWeight='500'> ₹ { data.price }</Text>
                        <Text as="s" ml={2}> ₹ {data.original_price}</Text>
                      </Box>
                      <Text my={2}>You Save: ₹ {Math.ceil(data.original_price*(data.discount/100)) } ({data.discount}%)</Text>
                      <Button w="100%" colorScheme={data.isSuperSaver?"#F7C20A":"#ff0000"} bg={data.isSuperSaver?"#F7C20A":"#ff0000"} size='md'>
                        ADD TO CART
                      </Button>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
