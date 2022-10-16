import { Box, Image, Text,Button } from '@chakra-ui/react'
import React from 'react'
import { BiPlus } from 'react-icons/bi'; 
import { BiMinus } from 'react-icons/bi'; 
import { MdOutlineDelete } from 'react-icons/md'; 

export const CartProduct = ({cartProduct}) => {
  return (
    <>
    {cartProduct.map((elem)=>(
        <Box width="100%" display="flex" bg="white" justifyContent="space-between" borderBottom="1px solid gray" p={3}>
            <Box width="30%">
                <Image width="80%" margin="auto"  src={elem.image[0]} />
            </Box>
            <Box width="70%" overflow="hidden" p={2} >
                <Text fontWeight="bold">{elem.name}</Text>
                <Box display="flex" mt={2} >
                    <Text fontWeight="500" color="red">Rs. {elem.price}</Text>
                    <Text  as="s" ml={4}>Rs. {elem.original_price}</Text>
                </Box>
                <Box width="100%" height=""display="flex"  alignItems="center" justifyContent="space-between" mt={2} >
                    <Box display="flex" alignItems="center">
                        <Text borderRadius="50%" p={1} bg="white" colorScheme="white" border="1px solid black" color="red"><BiMinus /></Text>
                        <Text fontWeight="bold" mx={4}>1</Text>
                        <Text borderRadius="50%" p={1} bg="white" colorScheme="white" border="1px solid black" color="red"><BiPlus /></Text>
                    </Box>
                    <Button height="30px" fontSize="12px" fontWeight="400" px={1}  bg="white" colorSheme="white" border="1px solid black">{elem.color[0]}</Button>
                    <Box>
                      <MdOutlineDelete color="black" fontSize="25px"/>
                    </Box>
                </Box>

            </Box>
        </Box>
    ))
    }
    </>
  )
}
