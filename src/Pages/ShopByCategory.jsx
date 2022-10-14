import React, { useEffect, useState } from 'react'
import { Box, Grid, Image, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';

export const ShopByCategory = () => {   
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
    return (
        <Box width="100%" margin="auto" marginTop="70px">
        <Text fontSize="25px" fontWeight="500">SHOP BY CATEGORY</Text>
        <Grid width="100%" margin="auto" templateColumns={{base:"repeat(1, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)", lg:"repeat(7, 1fr)"}} gap={10} marginTop="50px">
            {categoryData.map((cat)=>(
                <NavLink key={cat.id} to={`/collections/${cat.id}/${cat.url}`} >
                    <Box w="100%" textAlign="center" position="relative">
                        <Box w="54%" margin="auto" bg='#e3e3e3' height="38px" borderRadius="10px" position="absolute" top="59px" left="0" right="0" zIndex="-1">
                            
                        </Box>
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
