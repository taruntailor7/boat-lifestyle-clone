import {Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { CartProduct } from './CartProduct'

export const Cart = ({setCartVal}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [cartProduct, setCartProduct] = useState([])
    const [cartItems, setCartItems] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    let userId = localStorage.getItem("userId");
    const getProducts = ()=>{
        fetch(`http://localhost:3001/users/${userId}/cart`)
        .then(res=>res.json())
        .then(res=>{
            setCartProduct(res)
            setCartItems(res.length)
            setCartVal(res.length)
        })
        .catch(err=>console.log(err))
    }

    const getCartTotal = ()=>{
        let val=0;
        for(let i=0;i<cartProduct.length;i++){
            val+=cartProduct[i].price;
        }
        setCartTotal(val)
        // console.log(val,"inside val")
    }


    useEffect(() =>{
        getProducts();
        getCartTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cartProduct,cartTotal])

    let isAuth = localStorage.getItem('isAuth') || false;

    const handleClick = () => {
        onOpen();
    }

    return (
        <>
        <Text onClick={() => handleClick()}>
            <FaShoppingCart color="black" fontSize="22px"/>
        </Text>

        <Drawer onClose={onClose}  isOpen={isOpen} size="sm" border="1px solid black">
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton color="white" _hover={{ bg: "red" }} _active={{ bg: "red" }}fontSize="14px" />
            <DrawerHeader bg="red" color="white" p={2}>Your Cart ({cartItems} items)</DrawerHeader>
            <Text bg="black" p={2} color="white" fontSize="15px">Free Shipping sitewide | Cash On Delivery available for order value upto ₹3000</Text>
            { isAuth==="true" ? 
            cartItems!==0 ?
            <>
                <DrawerBody  bg="#ececec" p={0} scrollbar-width="thin">
                    <CartProduct getProducts={getProducts} cartProduct={cartProduct}/>
                </DrawerBody>
                <Box height="235px"p={5}>
                    <Box display="flex" justifyContent="space-between">
                        <Text fontSize="22px" fontWeight="500" mt={5}>Shipping:</Text>
                        <Text fontSize="22px" fontWeight="500" mt={5}>FREE</Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text fontSize="22px" fontWeight="500" mt={5}>Total:</Text>
                        <Text fontSize="22px" fontWeight="500" mt={5}>Rs. {cartTotal}</Text>
                    </Box>
                    <Button mt={10} width="100%" height="50px" fontSize="20px" bg="red" color="white" colorScheme="red">Place Order</Button>
                </Box>
            </> : <Box width="100%" textAlign="center" marginTop="300px">
                    <Text fontSize="20px">Your cart is empty</Text>
                    <Button bg="red" colorScheme="red" color="white" fontSize="20px" _hover={{color: "black"}} px={10} py={8} mt={10}>Start Shopping</Button>
                </Box>
             : 
            <Box width="100%" textAlign="center" marginTop="300px">
                <Text fontSize="20px">Your cart is empty</Text>
                <Button bg="red" colorScheme="red" color="white" fontSize="20px" _hover={{color: "black"}} px={10} py={8} mt={10}>Start Shopping</Button>
            </Box>
            }
            </DrawerContent>
        </Drawer>
        </>
    )
}
