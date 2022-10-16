import React from "react"
import '../tab.css'
import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
//import IoTicketOutline from 'react-icons/Io'
import DiscountIcon from '@mui/icons-material/Discount';
//import { Button  } from "@mui/material";
export default function SimpleAccordion() {
  return (
    <>
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><ShoppingCartOutlinedIcon/> Order Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
           <Box style={{overflowY:"scroll",height:"100px"}}>
            <Box style={{display:"flex",gap:"40px",height:"90px"}}>
            <img style={{width:"50px",height:"70px"}} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_e0d541c5-72de-4f54-a19b-1c324082742a.png?v=1654195093"/>
            <Box className="order_summary_detail">
            <h6>boAt Rockerz 260-Electronics</h6>
            <h6>Quantity:1</h6>
            <h6>Price:₹1600</h6>
            
            </Box>

            
            </Box>
            <Box style={{display:"flex",gap:"40px",height:"90px",}}>
            <img style={{width:"50px",height:"70px"}} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_e0d541c5-72de-4f54-a19b-1c324082742a.png?v=1654195093"/>
            <Box className="order_summary_detail">
            <h6>boAt Rockerz 260-Electronics</h6>
            <h6>Quantity:1</h6>
            <h6>Price:₹1600</h6>
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
            <Box style={{display:"flex",justifyContent:"space-between"}}>
                <h3>To Pay</h3>
                <h3>₹1900</h3>
            </Box> </Typography>
        
     </AccordionDetails>
     </Accordion>
    
    </div>
    <Box className="discount_parent" style={{display:"flex",justifyContent:"space-between",boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"90%",margin:"20px",height:"70px  ",alignItems:"center",}}>
        <DiscountIcon style={{marginTop:"10px",marginLeft:"30px"}}/>
        <Box className="discount_box" style={{marginTop:"10px",marginLeft:"10px",width:"18  0px",textAlign:"center",margin:"auto"}}> Discount Code</Box>
    </Box>
    </>
  );
}
