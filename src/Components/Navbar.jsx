import React from "react";
import { Flex,Box,HStack,InputGroup, Text, Button} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
import { Input } from '@chakra-ui/react'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { useMediaQuery } from '@chakra-ui/react'
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { NavbarCategory } from "../Pages/NavbarCategory";

const links = [
    // {
    //   to:"/collections",
    //   title:"CATEGORIES"
    // },
    {
      to:"/collections/sail-with-boat",
      title:"SAIL WITH BOAT"
    },
    {
      to:"/collections/offer-zone",
      title:"OFFER ZONE"
    },
    // {
    //   to:"/collections/offer-zone#",
    //   title:"MORE"
    // }
]

const defaultStyle = {
  color:"black",
}

const activetStyle = {
  color:"black",
  borderBottom:"1px solid black",
}

export const Navbar = () => {
  const [isLargerThan1144] = useMediaQuery('(min-width: 1144px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      {isLargerThan1144 ? <Box boxShadow='md' width="100%" padding="24px" bg='white' position="fixed" top="0" zIndex="1000">
      <Flex display="flex" color='white' width="98%" margin="auto" justifyContent="space-between" >
        <Box width="10%">
          <NavLink to="/"><Image width="100%" src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/logo_gif_160x40.gif?v=1665553354' alt='Dan Abramov' /></NavLink>
        </Box>
        <HStack width="55%" spacing={8}  color="black"  display='flex' justifyContent="center">
            <Menu isOpen={isOpen} >
                  <MenuButton 
                      fontSize="20px" 
                      variant="ghost"
                      mx={1}
                      py={[1, 2, 2]}
                      px={4}
                      borderRadius={5}
                      // aria-label="Courses"
                      fontWeight="500"
                      onMouseEnter={onOpen}
                      onMouseLeave={onClose}
                      color="black"
                      marginRight="-20px"
                      className='hover-underline-animation'
                  >
                      CATEGORIES {isOpen ? <ChevronDownIcon fontSize="23px" mt={-1.5}/> : <ChevronDownIcon fontSize="23px" mt={-1.5}/>}
                  </MenuButton>
                <MenuList mt={4} onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <NavbarCategory />
                </MenuList>
            </Menu>
          {links.map((link)=>(
            <Box fontSize="20px" fontWeight="500" color="black" key={link.to}>
              <NavLink className='hover-underline-animation' style={({isActive})=>(isActive ? activetStyle : defaultStyle)} to={link.to} end>
                {link.title} 
                {/* <Text color="black">{link.title}</Text> */}
              </NavLink>
            </Box>
          ))}
          <Menu>
            <MenuButton as={Text}fontSize="20px" fontWeight="500"  bg="white" className='hover-underline-animation'>
              MORE <ChevronDownIcon fontSize="23px" mt={-1.5}/>
            </MenuButton>
            <MenuList mt={6}>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <HStack width="35%" spacing={6}  color="black"  display='flex' justifyContent="flex-end">
          <Box> 
            <InputGroup bg="#eaeaea" borderRadius="25px" variant="unstyled" width="300px" height="45px" padding="10px">
              <AiOutlineSearch  fontSize="25px"/>
              <Input placeholder='Search here...' color="black" size='lg' />
            </InputGroup>
          </Box>
          <Box>
            <NavLink>
                <Menu>
                  <MenuButton as={Text} fontSize="20px" fontWeight="500" colorScheme="white" bg="white">
                  <FaUserAlt color="black" fontSize="20px" />
                  </MenuButton>
                  <MenuList mt={6} colorScheme="white" bg="white">
                    <MenuItem  _focus={{bg:"white"}} >
                      <Button><NavLink to="/login">Login</NavLink></Button>
                    </MenuItem>
                  </MenuList>
                </Menu>
                  {/* <FaUserAlt color="black" fontSize="20px" /> */}
            </NavLink></Box>
          <Box><NavLink><RiCustomerService2Fill color="black" fontSize="22px"/></NavLink></Box>
          <Box><NavLink><FaShoppingCart color="black" fontSize="22px"/></NavLink></Box>
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
          <Box><NavLink><FaUserAlt  color="black" fontSize="20px" /></NavLink></Box>
          <Box><NavLink><RiCustomerService2Fill color="black" fontSize="22px"/></NavLink></Box>
          <Box><NavLink><FaUserAlt color="black" fontSize="22px" /></NavLink></Box>
          <Box><NavLink><FaShoppingCart  color="black" fontSize="22px"/></NavLink></Box>
        </Box>
      </Flex>
    </Box>}
    </>
  );
};

