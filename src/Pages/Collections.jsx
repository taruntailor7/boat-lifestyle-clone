import React, { useEffect, useState } from 'react'
import { Box, Grid, Image, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';


export const Collections = () => {
  const [categoryData, setCategoryData] = useState([]);

    const getData = ()=>{
        fetch(`http://localhost:3001/shopByCategory`)
        .then(res=>res.json())
        .then(res=>setCategoryData(res))
        .catch(err=>console.log(err))
    }

    useEffect(() =>{
        getData();
    },[])

    const filtered = categoryData.filter((cat)=>{
      return cat.id !== 12
    })

    return (
      <Box width="95%" margin="auto" marginTop="100px">
        <Text fontSize="60px" textAlign="center">Collections</Text>
        <Grid width="100%" margin="auto" templateColumns={{base:"repeat(1, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)", lg:"repeat(6, 1fr)"}} gap={10} marginTop="50px">
            {filtered.map((cat)=>(
                <NavLink key={cat.id} to={`/collections/${cat.id}/${cat.url}`} >
                    <Box w="100%" textAlign="center" position="relative">
                        <Box w="50%" margin="auto" zIndex="1000">
                            <Image width="100%" src={cat.categoryImage} alt="image"/>
                        </Box>
                        <Text fontWeight="500" mt={3} fontSize="15px" color="black">{cat.category}</Text>
                    </Box>
                </NavLink>
            ))}
        </Grid>
      </Box>
    )
}
