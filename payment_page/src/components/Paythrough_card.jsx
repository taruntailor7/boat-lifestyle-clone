import Raect from "react"
import Box from "@mui/material/Box"
import DirectionStack from "./Grid"
export function Cardpage(){
    return <>
    <Box style={{fontSize:"10px"}}>
        <p>
            Please Select any payment method to complete the order
        </p>
        <h4>Extra ₹15 discount applied</h4>
    </Box>
    <Box style={{display:"flex"}}>
    <DirectionStack/>
    </Box>
    </>
}