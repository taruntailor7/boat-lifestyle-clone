import {Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { MainModal } from '../payment_page1/Main_Modal'
import { CartProduct } from './CartProduct'
import { useDispatch, useSelector } from 'react-redux';
import { get_loading, get_suceess } from '../Redux App/action';

export const Cart = ({setCartVal}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [cartProduct, setCartProduct] = useState([])
    const [cartItems, setCartItems] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    const { loading  }=useSelector((state)=>state)
    const dispatch = useDispatch();
    
    let userId = localStorage.getItem("userId");
    const getProducts = ()=>{
        // dispatch(get_loading());
        fetch(`http://localhost:3001/users/${userId}/cart`)
        .then(res=>res.json())
        .then(res=>{
            setCartProduct(res)
            setCartItems(res.length)
            setCartVal(res.length)
            // dispatch(get_suceess())
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

    const handleDelete = (id)=>{
<<<<<<< HEAD
=======
        console.log(id,"delete id")
        console.log("delete called")
>>>>>>> parent of ceab7be (added cart functionalities in all pages)
        fetch(`http://localhost:3001/cart/${id}`,{
            method: 'DELETE'
        })
        // getProducts();
    }

    const handleIncrease = (id,cartId,ProductPrice,count) => {
        let OrgPrice = 0;
        let obj = {
            price:0,
            count:1,
        }
        fetch(`http://localhost:3001/mainProducts/${cartId}`)
        .then(res=>res.json())
        .then(res=>{
            OrgPrice = res.price;
            console.log(res.price,"rrr")
            obj = {
                price:ProductPrice+OrgPrice,
                count:count+1
            }
        })
       .then (()=>fetch(`http://localhost:3001/cart/${id}`,{
            method: 'PATCH',
            body: JSON.stringify(obj),
            headers : {
                'Content-Type': 'application/json'
            }
        }))
    }
    const handleDecrease = (id,cartId,ProductPrice,count) => {
        if(count===1){
            handleDelete(id);
            return
        }
        let OrgPrice = 0;
        let obj = {
            price:0,
            count:1,
        }
        fetch(`http://localhost:3001/mainProducts/${cartId}`)
        .then(res=>res.json())
        .then(res=>{
            OrgPrice = res.price;
            console.log(res.price,"rrr")
            obj = {
                price:ProductPrice-OrgPrice,
                count:count-1
            }
        })
       .then (()=>fetch(`http://localhost:3001/cart/${id}`,{
            method: 'PATCH',
            body: JSON.stringify(obj),
            headers : {
                'Content-Type': 'application/json'
            }
        }))
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
                    <CartProduct  handleDecrease={handleDecrease} handleIncrease={handleIncrease}  cartProduct={cartProduct} handleDelete={handleDelete}/>
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
<<<<<<< HEAD
                    {/* onClick={()=>handleOrders()} */}
                    <MainModal />
                    <Button onClick={()=>handleOrders()} mt={10} width="100%" height="50px" fontSize="20px" bg="red" color="white" colorScheme="red">Place Order</Button>
=======
                    <Button mt={10} width="100%" height="50px" fontSize="20px" bg="red" color="white" colorScheme="red">Place Order</Button>
>>>>>>> parent of ceab7be (added cart functionalities in all pages)
                </Box>
            </> : <Box width="100%" textAlign="center" marginTop="300px">
                    <Text fontSize="20px">Your cart is empty</Text>
                    <NavLink  to="/collections/products" >
                        <Button onClick={()=>onClose()} bg="red" colorScheme="red" color="white" fontSize="20px" _hover={{color: "black"}} px={10} py={8} mt={10}>Start Shopping</Button>
                    </NavLink>
                </Box>
             : 
            <Box width="100%" textAlign="center" marginTop="300px">
                <Text fontSize="20px">Your cart is empty</Text>
                <NavLink  to="/collections/products" >
                    <Button  onClick={()=>onClose()} bg="red" colorScheme="red" color="white" fontSize="20px" _hover={{color: "black"}} px={10} py={8} mt={10}>Start Shopping</Button>
                </NavLink>
            </Box>
            }
            </DrawerContent>
        </Drawer>
        </>
    )
}
