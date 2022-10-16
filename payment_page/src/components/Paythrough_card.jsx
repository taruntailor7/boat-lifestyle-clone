import Raect from "react"
import Box from "@mui/material/Box"
import Input from "@mui/material/Input"
import TextField from "@mui/material/TextField"
import DirectionStack from "./Grid"
import BasicButtons from "./Button"
const input_box_style={
    backgroundColor:"#E6E6FA",margin:"  2px 2px 10px"
}
export function Cardpage(){
    return <>
    {/* <Box style={{fontSize:"10px"}}>
        <p>
            Please Select any payment method to complete the order
        </p>
        <h4>Extra ₹15 discount applied</h4>
    </Box> */}
    <Box style={{display:"flex"}}>
    <DirectionStack/>
    </Box>
    {/* input boxes for address payment */}
    <Box>

     <TextField id="" label="Enter full name" variant="filled" fullWidth style={input_box_style} />
     <TextField id="" label="Card Number" variant="filled" fullWidth style={input_box_style}  />
     <Box display={"flex"} gap={5} marginBottom={2}>
     <TextField id="" label="Valid Through (MM/YY)" variant="filled" style={input_box_style}  />
     <TextField id="" label="Enter CVV" variant="filled"  style={input_box_style}  />
     </Box>
    </Box>
    <BasicButtons />
    </>
}