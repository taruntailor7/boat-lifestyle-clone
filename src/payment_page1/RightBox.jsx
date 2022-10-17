import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex
  } from '@chakra-ui/react'
  import {GiTicket} from "react-icons/gi"
  import "../payment_page1/Mystyle.css"
  import {AiOutlineShoppingCart} from "react-icons/ai"
  export const MyAccordion =()=>{
    return <>
    <Accordion defaultIndex={[1]}   allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' display="flex" gap='5' h={{sm:"40px",md:"40px"}}>
          <AiOutlineShoppingCart/>
          <h3>Order Summary</h3>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Box style={{overflowY:"scroll",height:"100px"}}>
            <Box style={{display:"flex",gap:"40px",height:"90px",fontSize:"15px",fontWeight:"400 ",color:"#050038"}}>
            <img alt="" style={{width:"50px",height:"70px"}} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_e0d541c5-72de-4f54-a19b-1c324082742a.png?v=1654195093"/>
            <Box className="order_summary_detail">
            <Box>boAt Rockerz 260-Electronics</Box>
            <Box>Quantity:1</Box>
            <Box>Price:₹1600</Box>
            
            </Box>

            
            </Box>
            </Box>
            <Box>
                <Box className="order_data">
                    <Box>Subtotal</Box>
                    <Box>₹1900</Box>
                </Box>
                <Box className="order_data">
                <Box>Count Discount</Box>
                    <Box>₹0</Box>
                </Box>
                <Box className="order_data">
                <Box>  Shipping</Box>
                    <Box>To be calculated</Box>
                </Box>
            </Box>
            <hr/>
            <Box style={{display:"flex",justifyContent:"space-between",fontWeight:"500" ,fontSize:"20px",color:"#050038"}}>
                <Box >To Pay</Box>
                <h3>₹1900</h3>
            </Box>
            
            
    </AccordionPanel>
   
    
  </AccordionItem>


</Accordion>
<Flex className="discount_parent" style={{justifyContent:"space-between",boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"90%",margin:"20px",height:"70px  ",alignItems:"center",}} display={{sm:"none",md:"flex",base:"none",lg:"flex"}}>
        <GiTicket style={{marginTop:"10px",marginLeft:"30px",width:"100px",height:"30px"}}/>
        <input className="discount_box" style={{marginTop:"10px",marginLeft:"10px",width:"190px",height:"40px",textAlign:"center",margin:"auto" }} placeholder="Discount"/>
    </Flex></>
  }