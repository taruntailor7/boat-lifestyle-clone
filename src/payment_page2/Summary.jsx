import {Box} from "@chakra-ui/react"
import {AiOutlineUser} from "react-icons/ai"
import {RiCalendarTodoLine} from "react-icons/ri"
import {Heading,Image} from "@chakra-ui/react"
import { MobileInput } from "./inputMobile"
// import "../Mystyle.css"
import { Input ,Button} from '@chakra-ui/react'
export function Summary(){
    return <Box >
        <Box className="parent">
    <Box sx={{display:'flex',gap:"10px",marginBottom:"20px",}}>
        <AiOutlineUser/>
        <Heading sx={{fontSize:"19px"}}>Contact details</Heading>
    </Box>
    {/* input boxes */}
    <MobileInput/>
    <Box >
        <Input placeholder="Email" sx={{height:"60px"}}/>
    </Box>
{/* order summary */}
<Box sx={{display:'flex',gap:"10px",marginBottom:"20px" ,marginTop:"30px"}}   ><RiCalendarTodoLine/>
<Heading sx={{fontSize:"19px"}}>Order Summary</Heading>
</Box>

<Box style={{display:"flex",gap:"40px",overflowY:"scroll",height:"90px"}}>
            <img style={{width:"50px",height:"70px"}} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_e0d541c5-72de-4f54-a19b-1c324082742a.png?v=1654195093" alt="img"/>
            <Box className="order_summary_detail">
            <h6>boAt Rockerz 260-Electronics</h6>
            <h6>Quantity:1</h6>
           
            </Box>
           
            </Box >
            <Box sx={{display:"flex",justifyContent:"space-between"}}> 
            <Box><Heading size={1}>Price</Heading></Box>
            <Box> <Heading size={1}>₹1600</Heading></Box></Box>
            {/* secured by rojgar */}
           <Box sx={{display:"flex",justifyContent:"space-between",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",height:"60px",alignItems:"center",marginTop:"20px"}}>
            <Box>Account</Box>
            <Box sx={{display:"flex",}}>
                <Box>Secured by</Box>
                 <Image width="60px" height="40px" src="data:image/png;base64,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"/>
            </Box>
           </Box>
           </Box>
           {/* button box */}
           <Box sx={{display:"flex",gap:"250px",justifyContent:'space-around',width:"",boxShadow: "rgba(95, 99, 99, 0.2) 0px 2px 8px 0px",height:"70px",alignItems:"center",position:"absolute",zIndex:"9",marginTop:"30px"}}>
            <Box fontSize={25}>₹1600</Box>
            <Box><Button bg={"blue.400"}>Continue</Button></Box>
           </Box>
    </Box>
}