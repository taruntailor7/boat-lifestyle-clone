import React from "react"
import {Box,Input,Checkbox} from "@chakra-ui/react"
import {MdLocationOn} from "react-icons/md"
import { MobileInput } from "./inputMobile"
import {BiHomeAlt} from "react-icons/bi"
import {HiOutlineShoppingBag} from "react-icons/hi"
import { WrapItem,Button} from "@chakra-ui/react"

// import "../Mystyle.css"
const inputstyle={
    marginBottom:"20px",height:"60px"
}
export function Address(){
    return <>
    <Box style={{display:"flex",gap:"10px",marginBottom:"20px"}}>
     <MdLocationOn/> 
    <Box>Delivery Address</Box>
    </Box>
    {/* input boxes */}
    <Box style={{marginBottom:"20px"}}>
    <Input placeholder="Full Name"  style={inputstyle}/>
    <MobileInput placeholder="Enter Mobile" />
    <Input placeholder="Pincode" style={inputstyle}/>
    <Box className="Input_boxes" >
    <Input placeholder="City" className="Input_boxes_baby" style={inputstyle}/>
    <Input placeholder="State" className="Input_boxes_baby" style={inputstyle}/>
    </Box>
    <Input placeholder="Houese Number,Apartment" style={inputstyle}/>
    <Input placeholder="Area,Colony,Street,Sector" style={inputstyle}/>
    {/* checkboxes */}
    <Box>
    <Checkbox defaultChecked>Billing Address same as Delivery Address</Checkbox>
    
    </Box>
    </Box>
    {/* icons flex box */}
    <Box className="flex_boxes">
        <Box className="home_boxes">
            <BiHomeAlt/>
            <Box>Home</Box>
        </Box>

        <Box className="home_boxes">
            <HiOutlineShoppingBag/>
            <Box>Office</Box>
        </Box>

        <Box className="home_boxes">
            <MdLocationOn/>
            <Box>Others</Box>
        </Box>
        
    </Box>
    <WrapItem>
      <Button style={{margin:"auto"}} colorScheme='linkedin'>Click for Payment</Button>
    </WrapItem>
    </>
}