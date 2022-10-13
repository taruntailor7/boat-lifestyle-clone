/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

export const IndivisualCategory = () => {
    const [bannerImg, setBannerImg] = useState("")
    const [heading, setHeading] = useState("")
    const [products, setProducts] = useState([])

    const {url} = useParams();
    const {id} = useParams();
    let fetchUrl = "http://localhost:3001/shopByCategory"
    if(url==="true-wireless-earbuds"){
        fetchUrl = "http://localhost:3001/airdopesTrueWireless"
    }
    else if(url==="bluetooth-wireless-headphones"){
        fetchUrl = "http://localhost:3001/rockerzWireless"
    }
    else if(url==="smart-watches"){
        fetchUrl = "http://localhost:3001/smartWatches"
    }
    else if(url==="wired-headphones"){
        fetchUrl = "http://localhost:3001/rockerzWireless"
    }
    else if(url==="bluetooth-speakers"){
        fetchUrl = "http://localhost:3001/stoneSpeakers"
    }
    else if(url==="home-audio"){
        fetchUrl = "http://localhost:3001/aavante"
    }
    else if(url==="mobile-accessories"){
        fetchUrl = "http://localhost:3001/mobileAccessories"
    }
    else if(url==="trebel-for-women"){
        fetchUrl = "http://localhost:3001/tRebel"
    }
    else if(url==="limited-edition"){
        fetchUrl = "http://localhost:3001/limitedEdition"
    }
    else if(url==="misfit-by-boat"){
        fetchUrl = "http://localhost:3001/misfitTrimmers"
    }
    else if(url==="immortal-gaming"){
        fetchUrl = "http://localhost:3001/immortalGaming"
    }
    // else if(url===""){
    //     fetchUrl = "http://localhost:3001/shopByCategory"
    // }

    const getData = ()=>{
        fetch(fetchUrl)
        .then(res=>res.json())
        .then((res)=>{
            setProducts(res)
            setBannerImg(res[0].bannerImge)
            setHeading(res[1].heading)
        })
        .catch(err=>console.log(err))
    }

    const updatedProducts = products.filter((elem)=>{
        return elem.id !==1001 && elem.id !==1002;
    })
    // console.log(updatedProducts)

    useEffect(()=>{
        getData();
    },[products])

    let price = 0;
    
    return (
        <Box>
            <Box>
                <Image marginTop="90px" src={bannerImg}  />
            </Box>
            <Box width="95%" margin="auto" marginTop="30px">
                <Text fontWeight="500" fontSize="55px">{heading}</Text>
                <Grid width="100%" margin="auto" templateColumns={{base:"repeat(1, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)", lg:"repeat(4, 1fr)"}} gap={6} marginTop="60px">
                    {updatedProducts.map((data)=>(
                    <GridItem key={data.id} w='100%' bg='#e3e3e3' borderRadius="10px" p={2} >
                        <Box width="100%" p={5}> 
                        <Image width="100%" src={data.image[0]} alt="img" />
                        </Box>
                        <Box w="100%" bg='white' p={3} borderRadius="10px">
                        <Text fontSize="18px" fontWeight="500">{data.name}</Text>
                        <Text display="flex" alignItems="center" my={2}><AiFillStar color="#ff0000" margin="10px"/> {data.rating} | {data.reviews} reviews</Text>
                        <hr />
                        <Box display="flex" >
                            <Text color="#ff0000" fontWeight='500'> ₹ { price = Math.ceil(data.original_price - data.original_price*(data.discount/100)) }</Text>
                            <Text ml={2}> ₹ {data.original_price}</Text>
                        </Box>
                        <Text my={2}>You Save: ₹ {Math.ceil(data.original_price*(data.discount/100)) } ({data.discount}%)</Text>
                        <Button w="100%" colorScheme='#F7C20A' bg="#F7C20A" size='md'>
                            ADD TO CART
                        </Button>
                        </Box>
                    </GridItem>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}
