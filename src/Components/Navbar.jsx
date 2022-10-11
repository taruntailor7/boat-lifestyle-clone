import React from "react";
import { Flex,Box,HStack,InputGroup} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
import { Input } from '@chakra-ui/react'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { useMediaQuery } from '@chakra-ui/react'

const links = [
    {
      to:"/collections",
      title:"CATEGORIES"
    },
    {
      to:"/collections/sail-with-boat",
      title:"SAIL WITH BOAT"
    },
    {
      to:"/collections/offer-zone",
      title:"OFFER ZONE"
    },
    {
      to:"/collections/offer-zone#",
      title:"MORE"
    }
]

const defaultStyle = {
  color:"black",
}

const activetStyle = {
  color:"red",
}


export const Navbar = () => {
  const [isLargerThan1144] = useMediaQuery('(min-width: 1144px)')

  return (
    <>
      {isLargerThan1144 ? <Box boxShadow='md' width="100%" padding="24px" bg='white' position="fixed" top="0" zIndex="1000">
      <Flex display="flex" color='white' width="98%" margin="auto" justifyContent="space-between">
        <Box width="6%" >
          <NavLink to="/"><Image width="100%" src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Asset_2_288x-8_5_small.png?v=1661838672' alt='Dan Abramov' /></NavLink>
        </Box>
        <HStack width="54%" spacing={8}  color="black"  display='flex' justifyContent="center">
          {links.map((link)=>(
            <Box fontSize="20px" fontWeight="500" key={link.to}>
              <NavLink style={({isActive})=>(isActive ? activetStyle : defaultStyle)} to={link.to} end>{link.title}</NavLink>
            </Box>
          ))}
        </HStack>
        <HStack width="40%" spacing={6}  color="black"  display='flex' justifyContent="flex-end">
          <Box> 
            <InputGroup bg="#eaeaea" borderRadius="25px" variant="unstyled" width="300px" height="45px" padding="10px">
              <AiOutlineSearch  fontSize="25px"/>
              <Input placeholder='Search here...' color="black" size='lg' />
            </InputGroup>
          </Box>
          <Box><NavLink><FaUserAlt fontSize="20px" /></NavLink></Box>
          <Box><NavLink><RiCustomerService2Fill fontSize="22px"/></NavLink></Box>
          <Box><NavLink><FaShoppingCart fontSize="22px"/></NavLink></Box>
        </HStack>
      </Flex>
      </Box> : <Box boxShadow='md' width="100%" padding="24px" bg='white' >
      <Flex color='black' width="98%" margin="auto" justifyContent="space-between">
        <Box width="12%"  display="flex" justifyContent="space-between" alignItems="center">
          <HiOutlineMenuAlt1 fontSize="30px"/>
        </Box>
        <Box width="9%"  display="flex" justifyContent="center">
          <NavLink to="/"><Image width="100%" src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Asset_2_288x-8_5_small.png?v=1661838672' alt='Dan Abramov' /></NavLink>
        </Box>
        <Box width="14%"  display="flex" justifyContent="space-between" alignItems="center">
          <Box><NavLink><FaUserAlt fontSize="20px" /></NavLink></Box>
          <Box><NavLink><RiCustomerService2Fill fontSize="22px"/></NavLink></Box>
          <Box><NavLink><FaUserAlt fontSize="22px" /></NavLink></Box>
          <Box><NavLink><FaShoppingCart fontSize="22px"/></NavLink></Box>
        </Box>
      </Flex>
    </Box>}
    </>
    
  );
};

