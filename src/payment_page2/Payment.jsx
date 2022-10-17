import { Button, Heading, } from "@chakra-ui/react"
import React from "react"
import { Box ,Input,WrapItem} from "@chakra-ui/react"
import { Avatar1 } from "./Avatrar"
import {BiHappyAlt} from "react-icons/bi"
import {  ButtonGroup } from '@chakra-ui/react'
export function Payment_page(){
    return<>
    <Box style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"10px",width:"80%",margin:"auto",display:"flex",fontSize:"10px", width:"100%", padding:"15px",marginBottom:"30px",alignItems:"center",margin:"auto"}}>
    <Avatar1/>
    <Box style={{fontSize:"18px",textAlign:"center",gap:"10px",marginLeft:"20px"}}>Pay thorough any Card</Box>
</Box>
<Box>
    <h2 style={{fontSize:"25px",marginBottom:"20px"}}>Add Card Details</h2>
</Box>
<Box style={{display:"flex",gap:"5px",marginBottom:"20px",}}>
    <Input placeholder="Card Number" height={50}/>
    <Input placeholder="Expiry" height={50}/>
    </Box>
    <Box style={{display:"flex",gap:"5px",marginBottom:"20px",}}>
    <Input placeholder="Card Holders name" height={50}/>
    <Input placeholder="CVV"height={50}/>
    </Box> 
    <Box style={{fontSize:"25px",marginBottom:"25px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"5px",justifyContent:"space-around",display:"flex"}}><Box><BiHappyAlt/></Box>Proceed to buy the product</Box>
   
   <WrapItem>
      <Button style={{margin:"auto"}} colorScheme='linkedin'>Click to confirm Your Payment</Button>
    </WrapItem>
    </>
}