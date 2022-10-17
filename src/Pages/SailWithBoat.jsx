import { Box, Grid, GridItem, Image, Text,Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import {AiFillStar, AiFillThunderbolt} from 'react-icons/ai'
import { AddToCart } from './AddToCart'
import { useDispatch, useSelector } from 'react-redux';
import { get_loading, get_suceess } from '../Redux App/action';
import { Navigate } from 'react-router-dom'

export const SailWithBoat = () => {
  const [sailWithBoat, setSailWithBoat] = useState([]);
  const { loading  }=useSelector((state)=>state)
  const dispatch = useDispatch();

  const getData = ()=>{
    dispatch(get_loading());
    console.log(loading,"loading inside");
    fetch(`http://localhost:3001/allProducts`)
    .then((res)=>res.json())
    .then((res)=>{
      setSailWithBoat(res)
      dispatch(get_suceess())
    })
    .catch((err)=>console.log(err))
    // dispatch(get_suceess())
  }
  
  useEffect(() =>{
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  let isAuth = localStorage.getItem('isAuth') || false;
  let userId = localStorage.getItem("userId") || false;
  

  const addToCart = (product)=>{
   let prod = {
        cartId: product.id,
        count:1,
        name: product.name,
        category: product.category,
        rating: product.rating,
        reviews: product.reviews,
        price: product.price,
        original_price: product.original_price,
        discount: product.discount,
        isAvailable: product.isAvailable,
        image: [
          product.image[0],
          product.image[1],
          product.image[2]
        ],
        color: [
          product.color[0],
          product.color[1],
          product.color[2]
        ]
      }
    if(isAuth==="false"){
      // alert("please login")
      return <Navigate to='/login'/>
    }
    else{
      dispatch(get_loading());
      fetch(`http://localhost:3001/users/${userId}/cart`,{
        method: 'POST',
        body: JSON.stringify(prod),
        headers : {
            'content-type': 'application/json'
        }
      })
      dispatch(get_suceess())

    }
  }


  return (
    <Box width="95%" margin="auto" marginTop="50px">
      <Text fontSize={{base:"30px",sm:"35px",md:"45px",lg:"55px"}} fontWeight="500" marginTop="100px">SAIL WITH boAt</Text>
      <Grid width="100%"  overflowX='auto' gridAutoColumns= "minmax(300px,1fr) " gridAutoFlow={{ base:'column',sm:'column',md:'row',lg:'row' }} margin="auto" templateColumns={{base:"repeat(auto-fill,minmax(300px,1fr))", sm:"repeat(auto-fill,minmax(300px,1fr))", md:"repeat(3, 1fr)", lg:"repeat(4, 1fr)"}} gap={6} marginTop="60px">
        {sailWithBoat.map((data)=>(
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
<<<<<<< HEAD
              <Button w="100%" onClick={()=>addToCart(data,data.id)} colorScheme={data.isSuperSaver?"#F7C20A":"#ff0000"} bg={data.isSuperSaver?"#F7C20A":"#ff0000"} size='md'>
=======
              <Button isLoading={loading} w="100%" onClick={()=>addToCart(data)} colorScheme={data.isSuperSaver?"#F7C20A":"#ff0000"} bg={data.isSuperSaver?"#F7C20A":"#ff0000"} size='md'>
>>>>>>> parent of ceab7be (added cart functionalities in all pages)
                <AddToCart />
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}
