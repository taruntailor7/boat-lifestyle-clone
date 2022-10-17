import { Box, Grid, GridItem, Image, Text,Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import {AiFillStar, AiFillThunderbolt} from 'react-icons/ai'
import { AddToCart } from './AddToCart'
import { useDispatch, useSelector } from 'react-redux';
import { get_loading, get_suceess } from '../Redux App/action';
import { Navigate } from 'react-router-dom'
// import { extendTheme } from '@chakra-ui/react'

export const HomeSailWithBoat = () => {
  const [sailWithBoat, setSailWithBoat] = useState([]);
  const { loading  }=useSelector((state)=>state)
  const dispatch = useDispatch();


  const getData = ()=>{
    dispatch(get_loading());
    console.log(loading,"loading inside");
    fetch(`http://localhost:3001/sailWithBoatOnHome`)
    .then((res)=>res.json())
    .then((res)=>{
      setSailWithBoat(res)
      // dispatch(get_suceess())
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

  // if(loading){
  //   return <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/preloader_50x.gif?v=1649585765"/>
  // }

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

  // eslint-disable-next-line no-unused-vars
  let price = 0;

  // const breakpoints = {
  //   sm: '30em',
  //   md: '48em',
  //   lg: '62em',
  //   xl: '80em',
  //   '2xl': '96em',
  // }
  // const theme = extendTheme({ breakpoints,mdlg:'50em'})
  // {base:"repeat(1, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)", lg:"repeat(5, 1fr)"}

  // if(loading){
  //   return <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/preloader_50x.gif?v=1649585765"/>
  // }
  // console.log(loading,"loading...");

  return (
    <Box width="100%" margin="auto" marginTop={{base:"20px",sm:"20px",md:"30px",lg:"50px"}}>
      <Text fontSize={{base:"25px",sm:"25px",md:"25px",lg:"25px"}} fontWeight="500">SAIL WITH boAt</Text>
      <Grid width="100%" margin="auto" overflowX='auto'
    gridAutoColumns= "minmax(300px,1fr)" gridAutoFlow={{ base:'column',sm:'column',md:'row',lg:'row' }}  
      templateColumns={{base:"repeat(auto-fill,minmax(300px,1fr))",   sm:"repeat(auto-fill,minmax(300px,1fr))", md:"repeat(3, 1fr)", lg:"repeat(5, 1fr)"}} 
    gap={6}   marginTop={{base:"25px",sm:"30px",md:"40px",lg:"60px"}}>
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
              <Button isLoading={loading} w="100%" onClick={()=>addToCart(data)} colorScheme={data.isSuperSaver?"#F7C20A":"#ff0000"} bg={data.isSuperSaver?"#F7C20A":"#ff0000"} size='md'>
                <AddToCart />
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}
