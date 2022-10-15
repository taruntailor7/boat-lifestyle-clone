import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const CartProduct = ({cartProduct}) => {
  return (
    <>
    {cartProduct.map((elem)=>(
        <Box width="100%" display="flex" justifyContent="space-between" border="1px solid black">
            <Box width="30%" border="1px solid black">
                <Image width="80%" margin="auto"  src={elem.image[0]} />
            </Box>
            <Box width="70%" p={2} border="1px solid red">
                <Text>{elem.name}</Text>
                <Box display="flex" mt={2} border="1px solid black">
                    <Text color="red">Rs. {elem.price}</Text>
                    <Text as="s" ml={4}>Rs. {elem.original_price}</Text>
                </Box>
            </Box>
        </Box>
    ))
    }
    </>
  )
}
